import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilX,
  cilMenu,
  cilUser,
  cilDescription,
  cilSpreadsheet,
  cilVerticalAlignBottom,
  cilQrCode,
  cilDoor,
  cilWalk,
  cilPrint,
  cilList,
} from '@coreui/icons'
import { CFooter, CCol, CRow, CButton } from '@coreui/react'
const toggleDrawer = (e) => {
  e.preventDefault()
  var element = document.getElementById('mb-footer')
  var b_button = document.getElementById('bottom-button')
  b_button.classList.toggle('d-none')
  element.classList.toggle('is-open')
}
const AppFooter = () => {
  return (
    <CFooter>
      <div className="mobile-footer d-lg-none" id="mb-footer">
        <a className="close-drawer-button" onClick={toggleDrawer}>
          <CIcon size="lg" icon={cilX} />
        </a>
        <div className="text-center">
          <CRow className="p-4">
            <div className="col-sm-12 text-center">
              <CRow>
                <div className="col-4">
                  <div className="drawerItem">
                    <a>
                      <CIcon size="xl" icon={cilUser} />
                      <p className="mt-1">Customer</p>
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="drawerItem">
                    <a>
                      <CIcon size="xl" icon={cilSpreadsheet} />
                      <p className="mt-1">Estimate</p>
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="drawerItem">
                    <a>
                      <CIcon size="xl" icon={cilDescription} />
                      <p className="mt-1">Invoice</p>
                    </a>
                  </div>
                </div>
              </CRow>
              <CRow>
                <div className="col-4">
                  <div className="drawerItem">
                    <a>
                      <CIcon size="xl" icon={cilList} />
                      <p className="mt-1">Items</p>
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="drawerItem">
                    <a>
                      <CIcon size="xl" icon={cilVerticalAlignBottom} />
                      <p className="mt-1">Payment</p>
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="drawerItem">
                    <a>
                      <CIcon size="xl" icon={cilPrint} />
                      <p className="mt-1">Printer</p>
                    </a>
                  </div>
                </div>
              </CRow>
              <CRow>
                <div className="col-4">
                  <div className="drawerItem">
                    <a>
                      <CIcon size="xl" icon={cilQrCode} />
                      <p className="mt-1">Jobs</p>
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="drawerItem">
                    <a>
                      <CIcon size="xl" icon={cilDoor} />
                      <p className="mt-1">Branches</p>
                    </a>
                  </div>
                </div>
                <div className="col-4">
                  <div className="drawerItem">
                    <a>
                      <CIcon size="xl" icon={cilWalk} />
                      <p className="mt-1">Workers</p>
                    </a>
                  </div>
                </div>
              </CRow>
            </div>
          </CRow>
        </div>
      </div>
      <a
        className="d-lg-none bottom-drawer-button text-center"
        id="bottom-button"
        onClick={toggleDrawer}
      >
        <CIcon size="sm" icon={cilMenu} />
      </a>
    </CFooter>
  )
}

export default React.memo(AppFooter)
