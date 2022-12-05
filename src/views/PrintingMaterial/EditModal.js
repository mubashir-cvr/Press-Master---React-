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
  PrintingMaterial,
  setPrintingMaterial,
  setMaterial,
  material,
}) {
  const handleEdit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('printMaterial', material)
    axios
      .patch('http://127.0.0.1:8000/apiv1/router/printingmaterial/' + id + '/', formData)
      .then((response) => {
        var CurrentPrintingMaterial = PrintingMaterial.filter((type) => type.id != response.data.id)
        setPrintingMaterial(CurrentPrintingMaterial)
        setPrintingMaterial((types) => {
          return [...types, response.data]
        })
      })
    viewEditmodal(false)
    setMaterial('')
  }

  return (
    <CModal visible={viewEdit}>
      <CModalBody>
        <CModalTitle>Edit Printing Material</CModalTitle>
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
                  value={material}
                  placeholder="Example :Paper Printing"
                  aria-label="worker"
                  onChange={(e) => setMaterial(e.target.value)}
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
  setPrintingMaterial: PropTypes.func,
  id: PropTypes.number,
  deletevisible: PropTypes.bool,
  PrintingMaterial: PropTypes.array,
  viewEditmodal: PropTypes.func,
  viewEdit: PropTypes.bool,
  setMaterial: PropTypes.func,
  material: PropTypes.string,
}
