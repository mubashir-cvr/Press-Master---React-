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

const Tables = () => {
  const [name, setName] = useState('')
  const [length, setLength] = useState('')
  const [breadth, setBreadth] = useState('')
  const [selected, setSelected] = useState([])

  useEffect(() => {
    options.map((option, index) => {
      if (option.selected) {
        setSelected((selected) => {
          return [option, ...selected]
        })
      }
    })
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && length && breadth) {
      const size = { id: new Date().getTime().toString(), name, length, breadth }
      setSize((sizes) => {
        setName('')
        setLength('')
        setBreadth('')
        return [...sizes, size]
      })
    }
  }
  const options = [
    { label: 'Paper', value: 1, selected: true },
    { label: 'Plate', value: 2, selected: false },
    { label: 'All', value: 3, disabled: true },
  ]

  const availableSizes = [
    {
      name: 'A4',
      length: 29,
      breadth: 29,
    },
    {
      name: 'A3',
      length: 40,
      breadth: 29,
    },
    {
      name: 'A5',
      length: 29,
      breadth: 29,
    },
    {
      name: 'B2',
      length: 29,
      breadth: 29,
    },
  ]
  const [sizes, setSize] = useState(availableSizes)
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
                      <CFormLabel htmlFor="exampleFormControlInput1">Materials:</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={2} sm={12}>
                    <div className="mb-3">
                      <MultiSelect
                        options={options}
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
