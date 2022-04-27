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
      const dep = { id: new Date().getTime().toString(), department }
      setDepartments((departments) => {
        setDepartment('')
        return [dep, ...departments]
      })
    }
  }
  const tableExample = [
    {
      department: {
        name: 'Design',
      },
      numberofworkers: 34,
      pendingwork: 2,
    },
    {
      department: {
        name: 'Printing',
      },
      numberofworkers: 34,
      pendingwork: 2,
    },
    {
      department: {
        name: 'Accounts',
      },
      numberofworkers: 34,
      pendingwork: 2,
    },
    {
      department: {
        name: 'Marketing',
      },
      numberofworkers: 34,
      pendingwork: 2,
    },
  ]
  const [departments, setDepartments] = useState(tableExample)

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
                    <MainTableContent key={index} item={item} type={'department'} />
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
