import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
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
  CFormTextarea,
} from '@coreui/react'
import { cilTrash, cilPencil } from '@coreui/icons'

const Tables = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [branches, setBranchs] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && address && phone) {
      const dep = { id: new Date().getTime().toString(), name, address, phone }
      setBranchs((branches) => {
        setName('')
        setAddress('')
        setPhone('')
        return [...branches, dep]
      })
    }
  }
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Add Branches</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Branch Name :</CFormLabel>
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
                      <CFormLabel htmlFor="exampleFormControlInput1">Address :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="mb-3">
                      <CFormTextarea
                        type="text"
                        value={address}
                        placeholder="Address"
                        aria-label="worker"
                        onChange={(e) => setAddress(e.target.value)}
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
                  <CCol lg={12} sm={12}>
                    <div className="mb-3 text-center">
                      <CButton color="success" type="submit">
                        Add Branch
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
              <strong>Branches</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">SL/No</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Address</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
                    <CTableHeaderCell scope="col" colSpan={2}>
                      Action
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {branches.map((dep, index) => {
                    const { id, name, address, phone } = dep
                    return (
                      <CTableRow key={id}>
                        <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                        <CTableDataCell>{name}</CTableDataCell>
                        <CTableDataCell>{address}</CTableDataCell>
                        <CTableDataCell>{phone}</CTableDataCell>
                        <CTableDataCell>
                          <div className="icon-div">
                            <CIcon
                              icon={cilTrash}
                              customClassName="nav-icon"
                              color="red"
                              size={'sm'}
                              onClick={() => console.log('Delete :' + name)}
                            />
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>
                          <div className="icon-div">
                            <CIcon
                              icon={cilPencil}
                              customClassName="nav-icon"
                              color="green"
                              size={'sm'}
                              onClick={() => console.log('Edit :' + name)}
                            />
                          </div>
                        </CTableDataCell>
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
