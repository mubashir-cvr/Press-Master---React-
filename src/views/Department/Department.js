import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CForm,
  CFormLabel,
  CButton,
} from '@coreui/react'

const Tables = () => {
  const [department, setDepartment] = useState('')
  const [departments, setDepartments] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (department) {
      const dep = { id: new Date().getTime().toString(), department }
      setDepartments((departments) => {
        setDepartment('')
        return [...departments, dep]
      })
    }
  }
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Add Departments</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Department </CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={department}
                        placeholder="Department"
                        aria-label="Department"
                        onChange={(e) => setDepartment(e.target.value)}
                      />
                    </div>
                  </CCol>
                  <CCol lg={3} sm={12}>
                    <div className="mb-3 text-right">
                      <CButton color="success" type="submit">
                        Add Department
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
              <strong>Departments</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">SL/No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Department</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {departments.map((dep, index) => {
                    const { id, department } = dep
                    return (
                      <CTableRow key={id}>
                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                        <CTableDataCell>{department}</CTableDataCell>
                      </CTableRow>
                    )
                  })}
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
