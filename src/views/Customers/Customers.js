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
  CForm,
  CFormLabel,
  CButton,
  CFormSelect,
} from '@coreui/react'
import MainTableContent from 'src/components/MainTableContent'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
const Tables = () => {
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [phone, setPhone] = useState('')
  const [department, setDepartment] = useState('')
  const [branch, setBranch] = useState('')
  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2021',
        department: 'Department',
        designation: 'Test Designation',
      },
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2021',
        department: 'Department',
        designation: 'Test Designation',
      },
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: {
        name: 'Quintin Ed',
        new: true,
        registered: 'Jan 1, 2021',
        department: 'Department',
        designation: 'Test Designation',
      },
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: {
        name: 'Enéas Kwadwo',
        new: true,
        registered: 'Jan 1, 2021',
        department: 'Department',
        designation: 'Test Designation',
      },
    },
  ]
  const [workers, setWorkers] = useState(tableExample)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && designation && phone && department) {
      const worker = {
        avatar: { src: avatar5, status: 'success' },
        user: {
          name: name,
          new: true,
          department: department,
          designation: designation,
        },
      }
      const dep = { id: new Date().getTime().toString(), name, designation, phone, department }
      setWorkers((workers) => {
        setName('')
        setDesignation('')
        setPhone('')
        setDepartment('')
        return [worker, ...workers]
      })
    }
  }
  const displayForm = (e) => {
    e.preventDefault()
    var element = document.getElementById('employeeForm')
    var createbutton = document.getElementById('create')
    element.classList.toggle('isopen')
    createbutton.classList.toggle('d-none')
  }
  return (
    <>
      <CRow>
        <CCol xs={12} lg={12}>
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
                          value={branch}
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
                  <div id="create" className="icon-div-mobile d-sm-block">
                    <CButton color="success" onClick={displayForm}>
                      <div className="d-flex text-white">
                        Create <CIcon icon={cilPlus} />
                      </div>
                    </CButton>
                  </div>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody id="employeeForm" className="card-rounded d-lg-block workers-form">
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={3} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Employee :</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={9} sm={12}>
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
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={3} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Designation :</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={9} sm={12}>
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
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={4} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Phone Number :</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={8} sm={12}>
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
                  </CCol>

                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={3} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Department :</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={9} sm={12}>
                        <div>
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
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={12} sm={12}>
                    <div className="mb-3 text-center">
                      <CButton color="success" type="submit">
                        Add
                      </CButton>
                      <CButton
                        onClick={displayForm}
                        color="danger"
                        className="m-2 d-lg-none d-sm-block"
                        type="submit"
                      >
                        Cancel
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
              <strong>Workers</strong>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableBody>
                  {workers.map((item, index) => (
                    <MainTableContent key={index} item={item} type={'test'} />
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
