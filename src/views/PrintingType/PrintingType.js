import React, { useState } from 'react'
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
import { cilTrash, cilPencil } from '@coreui/icons'

const Tables = () => {
  const [type, setType] = useState('')
  const [material, setMaterial] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (type && material) {
      const print = { id: new Date().getTime().toString(), type, material }
      setPrinting((printing) => {
        setType('')
        setMaterial('')
        return [...printing, print]
      })
    }
  }
  const availableSizes = [
    {
      type: 'Paper Printing',
      material: 'Paper',
      pendingwork: 29,
    },
    {
      type: 'Laser Printing',
      material: 'Plate',
      pendingwork: 29,
    },
  ]
  const [printing, setPrinting] = useState(availableSizes)
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Add Printing Types</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Type :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={type}
                        placeholder="Example :Paper Printing"
                        aria-label="worker"
                        onChange={(e) => setType(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">
                        Printing Material :
                      </CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={2} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={material}
                        placeholder="Example : Paper"
                        aria-label="worker"
                        onChange={(e) => setMaterial(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={12} sm={12}>
                    <div className="mb-3text-center">
                      <CButton color="success" type="submit">
                        Add
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
                  {printing.map((item, index) => (
                    <MainTableContent key={index} item={item} type={'printing'} />
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
