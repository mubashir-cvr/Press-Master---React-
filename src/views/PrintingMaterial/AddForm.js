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
export function PrintingMaterialAddForm({ setPrintingMaterial, setMaterial, material }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (material) {
      const formData = new FormData()
      formData.append('printMaterial', material)

      axios
        .post('http://127.0.0.1:8000/apiv1/router/printingmaterial/', formData)
        .then((response) => {
          setPrintingMaterial((PrintingMaterials) => {
            setMaterial('')
            return [...PrintingMaterials, response.data]
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
        <strong>Add Printing Material</strong>
      </CCardHeader>
      <CCardBody>
        <CForm onSubmit={handleSubmit}>
          <CRow>
            <CCol lg={2} sm={12}>
              <div className="pl-2 mb-3 mt-2">
                <CFormLabel htmlFor="exampleFormControlInput1">Material :</CFormLabel>
              </div>
            </CCol>
            <CCol lg={6} sm={12}>
              <div className="mb-3">
                <CFormInput
                  type="text"
                  value={material}
                  placeholder="Example :Paper"
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
  )
}

PrintingMaterialAddForm.propTypes = {
  setPrintingMaterial: PropTypes.func,
  setMaterial: PropTypes.func,
  material: PropTypes.string,
}
