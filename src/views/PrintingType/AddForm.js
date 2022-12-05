import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormInput,
  CForm,
  CFormLabel,
  CButton,
} from '@coreui/react'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios, * as others from 'axios'
export function PrintingTypeAddForm({ setPrintingType, setType, type }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (type) {
      const formData = new FormData()
      formData.append('printType', type)

      axios
        .post('http://127.0.0.1:8000/apiv1/router/printingtype/', formData)
        .then((response) => {
          setPrintingType((printingTypes) => {
            setType('')
            return [...printingTypes, response.data]
          })
        })
        .catch(function (error) {
          // handle error
        })
    }
  }

  return (
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
  )
}

PrintingTypeAddForm.propTypes = {
  setPrintingType: PropTypes.func,
  setType: PropTypes.func,
  type: PropTypes.string,
}
