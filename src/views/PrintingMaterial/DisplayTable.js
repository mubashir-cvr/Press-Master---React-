import React from 'react'
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import {
  cilDoor,
  cilPencil,
  cilTrash,
  cilNotes,
  cilPlus,
  cilPrint,
  cilMinus,
  cilArrowBottom,
  cilArrowTop,
  cilUser,
} from '@coreui/icons'
import { CTableDataCell, CTableRow, CAvatar } from '@coreui/react'

function DisplayTable({ item, showEditModal, showDeleteModal }) {
  return (
    <CTableRow v-for="item in tableItems" key={item.id}>
      <CTableDataCell className="text-center">
        <CIcon size="lg" icon={cilNotes} />
      </CTableDataCell>
      <CTableDataCell className="text-left">
        <div>
          <strong>{item.printMaterial}</strong>
        </div>
      </CTableDataCell>
      <CTableDataCell className="text-center text-success">
        <CIcon size="lg" icon={cilPencil} onClick={() => showEditModal(item.id)} />
      </CTableDataCell>
      <CTableDataCell className="text-center text-danger">
        <CIcon size="lg" icon={cilTrash} onClick={() => showDeleteModal(item.id)} />
      </CTableDataCell>
    </CTableRow>
  )
}

DisplayTable.propTypes = {
  item: PropTypes.object.isRequired,
  showEditModal: PropTypes.func,
  showDeleteModal: PropTypes.func,
}

export default DisplayTable
