import React, { useState, useEffect } from 'react'
import CIcon from '@coreui/icons-react'
import MainTableContent from 'src/components/MainTableContent'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CTable,
  CTableBody,
  CForm,
  CFormLabel,
  CButton,
} from '@coreui/react'
import { MultiSelect } from 'react-multi-select-component'
import { cilTrash, cilPencil } from '@coreui/icons'
import axios, * as others from 'axios'
const Tables = () => {
  const [name, setName] = useState('')
  const [length, setLength] = useState('')
  const [breadth, setBreadth] = useState('')
  const [selected, setSelected] = useState([])
  const [materialOptions, SetMaterialOptions] = useState([])
  const [sizes, setSize] = useState([])
  useEffect(() => {
    getPrintingMaterials()
    getSizeChart()
    materialOptions.map((option, index) => {
      if (materialOptions.selected) {
        setSelected((selected) => {
          return [option, ...selected]
        })
      }
    })
  }, [])
  const handleSubmit = (e) => {
    console.log(selected)
    e.preventDefault()
    if (name && length && breadth) {
      const size = { id: new Date().getTime().toString(), name, length, breadth, selected }
      setSize((sizes) => {
        setName('')
        setLength('')
        setBreadth('')
        return [...sizes, size]
      })
    }
  }

  const getPrintingMaterials = () => {
    axios
      .get('http://127.0.0.1:8000/apiv1/router/printingmaterialall/')
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          let material = {
            label: response.data[i].printMaterial,
            value: response.data[i].id,
            selected: false,
          }
          SetMaterialOptions((materialOptions) => {
            return [material, ...materialOptions]
          })
        }
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      })

    // console.log(users);
  }
  const getSizeChart = () => {
    axios
      .get('http://127.0.0.1:8000/apiv1/router/sizechart/')
      .then((response) => {
        setSize(response.data)
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      })

    // console.log(users);
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Add sizes</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Name :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={name}
                        placeholder="Example : A4"
                        aria-label="worker"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Length :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={2} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={length}
                        placeholder="Example : 29"
                        aria-label="worker"
                        onChange={(e) => setLength(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Breadth:</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={2} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={breadth}
                        placeholder="Example : 29"
                        aria-label="worker"
                        onChange={(e) => setBreadth(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Available Materials:
                      </CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={2} sm={12}>
                    <div className="mb-3">
                      <MultiSelect
                        options={materialOptions}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={12} sm={12}>
                    <div className="mb-3text-center">
                      <CButton color="success" type="submit">
                        Add Size
                      </CButton>
                    </div>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Size Chart</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableBody>
                  {sizes.map((item, index) => (
                    <MainTableContent key={index} item={item} type={'size'} />
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
