import React from 'react'
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilDoor, cilPencil, cilTrash } from '@coreui/icons'
import { CTableDataCell, CTableRow, CAvatar } from '@coreui/react'
function MainTableContent({ item, type }) {
  if (type === 'department') {
    return (
      <CTableRow v-for="item in tableItems" key={item.id}>
        <CTableDataCell className="text-center">
          <CIcon size="lg" icon={cilDoor} />
        </CTableDataCell>
        <CTableDataCell className="text-left">
          <div>
            <strong>{item.department.name}</strong>
          </div>
          <div className="small text-medium-emphasis">
            <span className="text-success">
              {'No of Workers :'}
              {item.numberofworkers}
            </span>{' '}
            |{' '}
            <span className="text-danger">
              {' '}
              {'Pending Works :'} {item.pendingwork}
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
              {item.address}
            </span>{' '}
            |{' '}
            <span className="text-danger">
              {' '}
              {'Pending Works :'} {item.phone}
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
  }
  return (
    <CTableRow v-for="item in tableItems" key={item.id}>
      <CTableDataCell className="text-center">
        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
      </CTableDataCell>
      <CTableDataCell>
        <div>
          <strong>{item.user.name}</strong>
        </div>
        <div className="small text-medium-emphasis">
          <span>{item.user.department}</span> | {item.user.designation} {item.user.registered}
        </div>
      </CTableDataCell>
      <CTableDataCell className="text-center d-lg-none">
        <CIcon
          size="md"
          onClick={() => alert('edit')}
          className="text-success mb-2"
          icon={cilPencil}
        />
        <CIcon size="md" onClick={() => alert('Delete')} className="text-danger" icon={cilTrash} />
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
        <CIcon size="xl" onClick={() => alert('Delete')} className="text-danger" icon={cilTrash} />
      </CTableDataCell>
    </CTableRow>
  )
}

MainTableContent.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
}

export default MainTableContent
