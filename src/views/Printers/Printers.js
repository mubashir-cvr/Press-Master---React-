import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import MainTableContent from 'src/components/MainTableContent'
import { MultiSelect } from 'react-multi-select-component'
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
  CFormSelect,
} from '@coreui/react'
import { cilPlus } from '@coreui/icons'
import { cilTrash, cilPencil } from '@coreui/icons'

const Tables = () => {
  const [type, setType] = useState('')
  const [material, setMaterial] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (type && material) {
      const print = { id: new Date().getTime().toString(), type, material }
      setPrinting((printing) => {
        setType('')
        setMaterial('')
        return [...printing, print]
      })
    }
  }
  const [printer, setPrinter] = useState('')
  const [branch, setBranch] = useState('')
  const [length, setLength] = useState('')
  const [breadth, setBreadth] = useState('')
  const [minimumcharge, setMinimuCharge] = useState('')
  const [minimumprint, setMinimumPrint] = useState('')
  const [stepcharge, setStepCharge] = useState('')
  const [selected, setSelected] = useState([])

  const options = [
    { label: 'Paper', value: 1, selected: true },
    { label: 'Plate', value: 2, selected: false },
    { label: 'Plate', value: 2, selected: false },
    { label: 'Plate', value: 2, selected: false },
    { label: 'All', value: 3, disabled: true },
  ]
  const availableSizes = [
    {
      name: 'CROWN',
      material: 'Paper',
      pendingwork: 29,
    },
    {
      type: 'Laser Printing',
      material: 'Plate',
      pendingwork: 29,
    },
  ]
  const displayForm = (e) => {
    e.preventDefault()
    var element = document.getElementById('employeeForm')
    var createbutton = document.getElementById('create')
    var printerlist = document.getElementById('printers-list')
    element.classList.toggle('isopen')
    createbutton.classList.toggle('d-none')
    printerlist.classList.toggle('d-none')
  }
  const [printing, setPrinting] = useState(availableSizes)
  return (
    <>
      <CRow>
        <CCol xs={12} lg={12}>
          <CCard className="mb-4 card-rounded">
            <CCardHeader>
              <CRow>
                <CCol sm={12} lg={6}>
                  <strong>Add Printer</strong>
                </CCol>
                <CCol sm={12} lg={6}>
                  <CRow>
                    <CCol sm={6} lg={2}>
                      <div className="pl-2 mb-3 mt-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Branch:</CFormLabel>
                      </div>
                    </CCol>
                    <CCol sm={6} lg={6}>
                      <div className="mb-3 mt-2">
                        <CFormSelect
                          aria-label="Default select example"
                          value={branch}
                          onChange={(e) => setBranch(e.target.value)}
                        >
                          <option>All</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </CFormSelect>
                      </div>
                    </CCol>
                  </CRow>
                </CCol>
              </CRow>
              <CRow>
                <CCol className="icon-div-mobile">
                  <div id="create" className="icon-div-mobile d-sm-block">
                    <CButton color="success" onClick={displayForm}>
                      <div className="d-flex text-white">
                        Add <CIcon icon={cilPlus} />
                      </div>
                    </CButton>
                  </div>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody id="employeeForm" className="card-rounded d-lg-block workers-form">
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={3} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Printer :</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={9} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={printer}
                            placeholder="Name"
                            aria-label="worker"
                            onChange={(e) => setPrinter(e.target.value)}
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={3} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">
                            Minimum Charge :
                          </CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={9} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={minimumcharge}
                            placeholder="Quantity"
                            aria-label="worker"
                            onChange={(e) => setMinimuCharge(e.target.value)}
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={4} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Mimimum Print:</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={8} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={minimumprint}
                            placeholder="Number of prints"
                            aria-label="worker"
                            onChange={(e) => setMinimumPrint(e.target.value)}
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={4} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Extra amount :</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={8} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={stepcharge}
                            placeholder="Penalty Amount"
                            aria-label="worker"
                            onChange={(e) => setStepCharge(e.target.value)}
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={5} sm={12}>
                    <CRow>
                      <CCol lg={4} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">
                            Maximum Length:
                          </CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={8} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={length}
                            placeholder="Length"
                            aria-label="worker"
                            onChange={(e) => setLength(e.target.value)}
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={4} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">
                            Maximu Breadth:
                          </CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={8} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={breadth}
                            placeholder="Breadth"
                            aria-label="worker"
                            onChange={(e) => setBreadth(e.target.value)}
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={5} sm={12}>
                    <CRow>
                      <CCol lg={4} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">
                            Printing Materials:
                          </CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={8} sm={12}>
                        <div className="mb-3">
                          <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={12} sm={12}>
                    <div className="mb-3 text-center">
                      <CButton color="success" type="submit">
                        Create
                      </CButton>
                      <CButton
                        onClick={displayForm}
                        color="danger"
                        className="m-2 d-lg-none d-sm-block"
                        type="submit"
                      >
                        Cancel
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
        <div id="printers-list">
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>
                <strong>Printers</strong>
              </CCardHeader>
              <CCardBody>
                <CTable>
                  <CTableBody>
                    {printing.map((item, index) => (
                      <MainTableContent key={index} item={item} type={'printers'} />
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </div>
      </CRow>
    </>
  )
}

export default Tables
