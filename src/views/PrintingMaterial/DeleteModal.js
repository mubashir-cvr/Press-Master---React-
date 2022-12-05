import {
  CButton,
  CModalBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CAvatar,
} from '@coreui/react'
import axios, * as others from 'axios'
import PropTypes from 'prop-types'
import React from 'react'
export function DeleteModal({
  setDmodalVisible,
  id,
  deletevisible,
  PrintingMaterial,
  setPrintingMaterial,
}) {
  const handleDelete = () => {
    axios.delete('http://127.0.0.1:8000/apiv1/router/printingmaterial/' + id)
    setDmodalVisible(false)
    let newPrintingMaterial = PrintingMaterial.filter((type) => type.id !== id)
    setPrintingMaterial(newPrintingMaterial)
  }
  return (
    <CModal visible={deletevisible} onClose={() => setDmodalVisible(false)}>
      <CModalHeader onClose={() => setDmodalVisible(false)}>
        <CModalTitle>Delete Printing Type ?</CModalTitle>
      </CModalHeader>
      <CModalBody></CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setDmodalVisible(false)}>
          Cancel
        </CButton>
        <CButton color="danger" onClick={() => handleDelete()}>
          Ok
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

DeleteModal.propTypes = {
  setDmodalVisible: PropTypes.func,
  setPrintingMaterial: PropTypes.func,
  id: PropTypes.number,
  deletevisible: PropTypes.bool,
  PrintingMaterial: PropTypes.array,
}
