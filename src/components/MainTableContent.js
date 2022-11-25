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
function MainTableContent({ item, type, showEditModal, showDeleteModal }) {
  if (type === 'department') {
    return (
      <CTableRow v-for="item in tableItems" key={item.id}>
        <CTableDataCell className="text-center">
          <CIcon size="lg" icon={cilDoor} />
        </CTableDataCell>
        <CTableDataCell className="text-left">
          <div>
            <strong>{item.name}</strong>
          </div>
          <div className="small text-medium-emphasis">
            <span className="text-success">
              {'No of Workers :'}
              {item.numberOfWorkers}
            </span>{' '}
            |{' '}
            <span className="text-danger">
              {' '}
              {'Pending Works :'} {item.pendingWork}
            </span>
          </div>
        </CTableDataCell>
        <CTableDataCell className="text-center text-danger">
          <CIcon size="xl" icon={cilTrash} onClick={() => showDeleteModal(item.id)} />
        </CTableDataCell>
      </CTableRow>
    )
  } else if (type === 'branch') {
    return (
      <CTableRow v-for="item in tableItems" key={item.id}>
        <CTableDataCell className="text-center">
          <CIcon size="lg" icon={cilDoor} />
        </CTableDataCell>
        <CTableDataCell className="text-left">
          <div>
            <strong>{item.name}</strong>
          </div>
          <div className="small text-medium-emphasis">
            <span className="text-success">
              {'No of Workers :'}
              {item.numberOfWorkers}
            </span>{' '}
            |{' '}
            <span className="text-danger">
              {' '}
              {'Pending Works :'} {item.pendingWork}
            </span>
          </div>
        </CTableDataCell>
        <CTableDataCell className="text-center text-success">
          <CIcon size="xl" icon={cilPencil} onClick={() => showEditModal(item.id)} />
        </CTableDataCell>
        <CTableDataCell className="text-center text-danger">
          <CIcon size="xl" icon={cilTrash} onClick={() => showDeleteModal(item.id)} />
        </CTableDataCell>
      </CTableRow>
    )
  } else if (type === 'size') {
    return (
      <CTableRow v-for="item in tableItems" key={item.id}>
        <CTableDataCell className="text-center">
          <CIcon size="lg" icon={cilNotes} />
        </CTableDataCell>
        <CTableDataCell className="text-left">
          <div>
            <strong>{item.name}</strong>
          </div>
          <div className="small text-medium-emphasis">
            <span className="text-success">
              {'L:'}
              {item.length} {'cm'}
            </span>{' '}
            |{' '}
            <span className="text-success">
              {' '}
              {'B:'} {item.breadth} {'cm'}
            </span>
          </div>
        </CTableDataCell>
        <CTableDataCell className="text-center text-success">
          <CIcon size="xl" icon={cilPencil} />
        </CTableDataCell>
        <CTableDataCell className="text-center text-danger">
          <CIcon size="xl" icon={cilTrash} />
        </CTableDataCell>
      </CTableRow>
    )
  } else if (type === 'printing') {
    return (
      <CTableRow v-for="item in tableItems" key={item.id}>
        <CTableDataCell className="text-center">
          <CIcon size="lg" icon={cilPrint} />
        </CTableDataCell>
        <CTableDataCell className="text-left">
          <div>
            <strong>{item.type}</strong>
          </div>
          <div className="small text-medium-emphasis">
            <span className="text-success">
              {'Material:'}
              {item.material}
            </span>{' '}
            |{' '}
            <span className="text-danger">
              {' '}
              {'Pending Works:'} {item.pendingwork || 0}
            </span>
          </div>
        </CTableDataCell>
        <CTableDataCell className="text-center text-success">
          <CIcon size="xl" icon={cilPencil} />
        </CTableDataCell>
        <CTableDataCell className="text-center text-danger">
          <CIcon size="xl" icon={cilTrash} />
        </CTableDataCell>
      </CTableRow>
    )
  } else if (type === 'printers') {
    return (
      <CTableRow v-for="item in tableItems" key={item.id}>
        <CTableDataCell className="text-center">
          <CIcon size="lg" icon={cilPrint} />
        </CTableDataCell>
        <CTableDataCell className="text-left">
          <div>
            <strong>{item.type}</strong>
          </div>
          <div className="small text-medium-emphasis">
            <span className="text-success">
              {'Material:'}
              {item.material}
            </span>{' '}
            |{' '}
            <span className="text-danger">
              {' '}
              {'Pending Works:'} {item.pendingwork || 0}
            </span>
          </div>
        </CTableDataCell>
        <CTableDataCell className="text-center text-success">
          <CIcon size="xl" icon={cilPencil} />
        </CTableDataCell>
        <CTableDataCell className="text-center text-danger">
          <CIcon size="xl" icon={cilTrash} />
        </CTableDataCell>
      </CTableRow>
    )
  } else if (type === 'stock') {
    return (
      <CTableRow v-for="item in tableItems" key={item.id}>
        <CTableDataCell className="text-center">
          <CIcon size="lg" icon={cilNotes} />
        </CTableDataCell>
        <CTableDataCell className="text-left">
          <div>
            <strong>{item.name}</strong>
          </div>
          <div className="small text-medium-emphasis">
            <span>
              {item.length} {'X'} {item.breadth} | {item.gsm}
              {'gsm'}
            </span>{' '}
            |{' '}
            <span className="text-success">
              {' '}
              {'Qty:'} {item.quantity} {'Kg'}
            </span>
          </div>
        </CTableDataCell>
        <CTableDataCell className="text-center text-success">
          <CIcon size="xl" icon={cilPlus} />
          <CIcon className="text-danger d-lg-none" size="xl" icon={cilMinus} />
        </CTableDataCell>
        <CTableDataCell className="text-center">
          <CIcon className="text-danger d-none d-lg-block" size="xl" icon={cilMinus} />
        </CTableDataCell>
        <CTableDataCell className="text-center text-danger">
          <CIcon size="xl" icon={cilTrash} />
        </CTableDataCell>
      </CTableRow>
    )
  } else if (type === 'customer') {
    return (
      <CTableRow v-for="item in tableItems" key={item.id}>
        <CTableDataCell claFssName="text-center">
          <CIcon size="xl" icon={cilUser} />
        </CTableDataCell>
        <CTableDataCell>
          <div>
            <strong>{item.user.name}</strong>
          </div>
          <div className="small text-medium-emphasis">
            <span FclassName="text-success">
              <CIcon size="sm" className="text-success" icon={cilArrowBottom} /> {item.user.pending}
            </span>{' '}
            |{' '}
            <a className="text-decoration-none" href={'tel:' + item.user.phone}>
              {item.user.phone}
            </a>{' '}
            | <span className="text-danger">{item.user.date}</span>
          </div>
        </CTableDataCell>
        <CTableDataCell className="text-center d-lg-none">
          <CIcon
            size="sm"
            onClick={() => alert('edit')}
            className="text-success mb-2"
            icon={cilPencil}
          />
          {' | '}
          <CIcon
            size="sm"
            onClick={() => alert('Delete')}
            className="text-danger"
            icon={cilTrash}
          />
        </CTableDataCell>
        <CTableDataCell className="d-none d-lg-block">
          <CIcon
            size="xl"
            onClick={() => alert('edit')}
            className="text-success mb-2"
            icon={cilPencil}
          />
        </CTableDataCell>
        <CTableDataCell className="d-none d-lg-block">
          <CIcon
            size="xl"
            onClick={() => alert('Delete')}
            className="text-danger"
            icon={cilTrash}
          />
        </CTableDataCell>
      </CTableRow>
    )
  } else if (type === 'worker') {
    return (
      <CTableRow v-for="item in tableItems" key={item.id}>
        <CTableDataCell className="text-center">
          <CAvatar size="md" src={item.photo.medium_square_crop} status={item.onlineStatus} />
        </CTableDataCell>
        <CTableDataCell>
          <div>
            <strong>{item.name}</strong>
          </div>
          <div className="small text-medium-emphasis">
            <span>{item.department}</span> | {item.designation} | {item.created_at}
          </div>
        </CTableDataCell>
        <CTableDataCell className="text-center d-lg-none">
          <CIcon
            size="sm"
            onClick={() => showEditModal(item.id)}
            className="text-success mb-2"
            icon={cilPencil}
          />
          <CIcon
            size="sm"
            onClick={() => showDeleteModal(item.id)}
            className="text-danger"
            icon={cilTrash}
          />
        </CTableDataCell>
        <CTableDataCell className="d-none d-lg-block">
          <CIcon
            size="xl"
            onClick={() => showEditModal(item.id)}
            className="text-success mb-2"
            icon={cilPencil}
          />
        </CTableDataCell>
        <CTableDataCell className="d-none d-lg-block">
          <CIcon
            size="xl"
            onClick={() => showDeleteModal(item.id)}
            className="text-danger"
            icon={cilTrash}
          />
        </CTableDataCell>
      </CTableRow>
    )
  }
}

MainTableContent.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  showEditModal: PropTypes.func,
  showDeleteModal: PropTypes.func,
}

export default MainTableContent
