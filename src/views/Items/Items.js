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
} from '@coreui/react'
import MainTableContent from 'src/components/MainTableContent'


const Tables = () => {
  const [item, setitem] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (item) {
      const dep = {
        id: new Date().getTime().toString(),
        name: item,
        numberofworkers: 0,
        pendingwork: 0,
      }
      setitems((items) => {
        setitem('')
        return [dep, ...items]
      })
    }
  }
  const tableExample = [
    {
      name: 'Design',
      numberofworkers: 34,
      pendingwork: 2,
    },
    {
        name: 'Printing',
      numberofworkers: 34,
      pendingwork: 2,
    },
    {
      name: 'Accounts',
      numberofworkers: 34,
      pendingwork: 2,
    },
    {
      name: 'Marketing',
      numberofworkers: 34,
      pendingwork: 2,
    },
  ]
  const [items, setitems] = useState(tableExample)

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Add items</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">item </CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={item}
                        placeholder="item"
                        aria-label="item"
                        onChange={(e) => setitem(e.target.value)}
                      />
                    </div>
                  </CCol>
                  <CCol lg={3} sm={12}>
                    <div className="mb-3 text-right">
                      <CButton color="success" type="submit">
                        Add item
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
              <strong>items</strong>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableBody>
                  {items.map((item, index) => (
                    <MainTableContent key={index} item={item} type={'item'} />
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
