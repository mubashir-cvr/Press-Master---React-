import React, { useState, useEffect } from 'react'
import { CModalBody, CModal, CModalHeader, CModalTitle, CModalFooter } from '@coreui/react'
import axios, * as others from 'axios'
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
import MainTableContent from 'src/components/MainTableContent'
import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'

const Tables = () => {
  const [department, setDepartment] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (department) {
      let name = department
      const dep = { name }
      axios.post('http://127.0.0.1:8000/apiv1/router/createDepartment/', dep).then((response) => {
        setDepartments((departments) => {
          setDepartment('')
          return [...departments, response.data]
        })
      })
    }
  }
  const [departments, setDepartments] = useState([])
  const [rowRefresh, setRowRefresh] = useState(false)
  const [dvisible, setDmodalVisible] = useState(false)
  const [id, setID] = useState('')

  useEffect(() => {
    getDepartment()
    setRowRefresh(false)
  }, [rowRefresh])
  const getDepartment = () => {
    axios
      .get('http://127.0.0.1:8000/apiv1/router/createDepartment/')
      .then((response) => {
        setDepartments(response.data)
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      })

    // console.log(users);
  }

  const showDeleteModal = (id) => {
    setID(id)
    setDmodalVisible(!dvisible)
  }

  const handleDelete = () => {
    axios.delete('http://127.0.0.1:8000/apiv1/router/createDepartment/' + id)
    setDmodalVisible(!dvisible)
    let newDepratments = departments.filter((department) => department.id !== id)
    setDepartments(newDepratments)
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
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableBody>
                  {departments.map((item, index) => (
                    <MainTableContent
                      key={index}
                      item={item}
                      type={'department'}
                      showDeleteModal={showDeleteModal}
                    />
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CModal visible={dvisible} onClose={() => setDmodalVisible(false)}>
        <CModalHeader onClose={() => setDmodalVisible(false)}>
          <CModalTitle>Delete Department ?</CModalTitle>
        </CModalHeader>
        <CModalBody></CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setDmodalVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={() => handleDelete()}>
            Ok
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Tables
