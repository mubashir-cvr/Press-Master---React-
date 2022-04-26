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
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'

const Tables = () => {
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [phone, setPhone] = useState('')
  const [department, setDepartment] = useState('')
  const [branch, setBranch] = useState('')
  const [workers, setWorkers] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && designation && phone && department) {
      const dep = { id: new Date().getTime().toString(), name, designation, phone, department }
      setWorkers((workers) => {
        setName('')
        setDesignation('')
        setPhone('')
        setDepartment('')
        return [...workers, dep]
      })
    }
  }
  const displayForm = (e) => {
    e.preventDefault()
    var element = document.getElementById('employeeForm')
    element.classList.toggle('d-none')
  }
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4 card-rounded">
            <CCardHeader>
              <CRow>
                <CCol sm={12} lg={6}>
                  <strong>Add/List Workers</strong>
                </CCol>
                <CCol sm={12} lg={6}>
                  <CRow>
                    <CCol sm={6} lg={2}>
                      <div className="pl-2 mb-3 mt-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Branch :</CFormLabel>
                      </div>
                    </CCol>
                    <CCol sm={6} lg={6}>
                      <div className="mb-3 mt-2">
                        <CFormSelect
                          aria-label="Default select example"
                          value={department}
                          onChange={(e) => setBranch(e.target.value)}
                        >
                          <option>All</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </CFormSelect>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
              <CRow>
                <CCol className="icon-div-mobile">
                  <div className="icon-div-mobile d-lg-none d-sm-block">
                    <CButton color="success" onClick={displayForm}>
                      <div className="d-flex text-white">
                        Create <CIcon icon={cilPlus} />
                      </div>
                    </CButton>
                  </div>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody id="employeeForm" className="card-rounded d-none">
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Employee :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={name}
                        placeholder="Name"
                        aria-label="worker"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Designation :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={designation}
                        placeholder="Designation"
                        aria-label="worker"
                        onChange={(e) => setDesignation(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Phone Number :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={phone}
                        placeholder="Phone Number"
                        aria-label="worker"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Department :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormSelect
                        aria-label="Default select example"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      >
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </CFormSelect>
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={12} sm={12}>
                    <div className="mb-3 text-center">
                      <CButton color="success" type="submit">
                        Add Worker
                      </CButton>
                    </div>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="d-none d-lg-block">
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Workers</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">SL/No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Designation</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Department</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {workers.map((dep, index) => {
                    const { id, name, designation, phone, department } = dep
                    return (
                      <CTableRow key={id}>
                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                        <CTableDataCell>{name}</CTableDataCell>
                        <CTableDataCell>{designation}</CTableDataCell>
                        <CTableDataCell>{phone}</CTableDataCell>
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
