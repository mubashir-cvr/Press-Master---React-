import {
  CButton,
  CModalBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CAvatar,
  CCol,
  CRow,
  CFormInput,
  CForm,
  CFormLabel,
} from '@coreui/react'
import axios, * as others from 'axios'
import PropTypes from 'prop-types'
import React from 'react'
export function EditModal({
  id,
  viewEditmodal,
  viewEdit,
  printingType,
  setPrintingType,
  setType,
  type,
}) {
  const handleEdit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('printType', type)
    axios
      .patch('http://127.0.0.1:8000/apiv1/router/printingtype/' + id + '/', formData)
      .then((response) => {
        var CurrentPrintingType = printingType.filter((type) => type.id != response.data.id)
        setPrintingType(CurrentPrintingType)
        setPrintingType((types) => {
          return [...types, response.data]
        })
      })
    viewEditmodal(false)
    setType('')
  }

  return (
    <CModal visible={viewEdit}>
      <CModalBody>
        <CModalTitle>Edit Employee</CModalTitle>
      </CModalBody>
      <hr />
      <CForm onSubmit={handleEdit}>
        <CModalBody>
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
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => viewEditmodal(false)}>
            Close
          </CButton>
          <CButton color="primary" type="submit">
            Save changes
          </CButton>
        </CModalFooter>
      </CForm>
    </CModal>
  )
}

EditModal.propTypes = {
  setDmodalVisible: PropTypes.func,
  setPrintingType: PropTypes.func,
  id: PropTypes.number,
  deletevisible: PropTypes.bool,
  printingType: PropTypes.array,
  viewEditmodal: PropTypes.func,
  viewEdit: PropTypes.bool,
  setType: PropTypes.func,
  type: PropTypes.string,
}
