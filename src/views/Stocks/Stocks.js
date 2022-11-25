import React, { useState } from 'react'
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
import MainTableContent from 'src/components/MainTableContent'
import CIcon from '@coreui/icons-react'
import { cilPlus } from '@coreui/icons'
const Tables = () => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [length, setLength] = useState('')
  const [breadth, setBreadth] = useState('')
  const [material, setMaterial] = useState('')
  const [importprice, setImportPrice] = useState('')
  const [sellingprice, setSellingPrice] = useState('')
  const [gsm, setGsm] = useState('')
  const availablestocks = [
    {
      name: 'Double Dummy',
      length: 29,
      breadth: 29,
      quantity: 100,
      gsm: 100,
    },
    {
      name: 'Crown',
      length: 40,
      breadth: 29,
      quantity: 100,
      gsm: 100,
    },
    {
      name: 'Dummy',
      length: 29,
      breadth: 29,
      quantity: 100,
      gsm: 100,
    },
    {
      name: 'Test',
      length: 29,
      breadth: 29,
      quantity: 100,
      gsm: 100,
    },
  ]
  const [stocks, setStocks] = useState(availablestocks)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && quantity && length && breadth && importprice && sellingprice) {
      const stock = {
        name: name,
        length: length,
        breadth: breadth,
        quantity: quantity,
      }
      setStocks((stocks) => {
        setName('')
        setQuantity('')
        setBreadth('')
        setLength('')
        setImportPrice('')
        setSellingPrice('')
        return [stock, ...stocks]
      })
    }
  }
  const displayForm = (e) => {
    e.preventDefault()
    var element = document.getElementById('employeeForm')
    var createbutton = document.getElementById('create')
    element.classList.toggle('isopen')
    createbutton.classList.toggle('d-none')
  }
  return (
    <>
      <CRow>
        <CCol xs={12} lg={12}>
          <CCard className="mb-4 card-rounded">
            <CCardHeader>
              <CRow>
                <CCol sm={12} lg={6}>
                  <strong>Create Stock</strong>
                </CCol>
                <CCol sm={12} lg={6}>
                  <CRow>
                    <CCol sm={6} lg={2}>
                      <div className="pl-2 mb-3 mt-3">
                        <CFormLabel htmlFor="exampleFormControlInput1">Material:</CFormLabel>
                      </div>
                    </CCol>
                    <CCol sm={6} lg={6}>
                      <div className="mb-3 mt-2">
                        <CFormSelect
                          aria-label="Default select example"
                          value={material}
                          onChange={(e) => setMaterial(e.target.value)}
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
                        Create <CIcon icon={cilPlus} />
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
                          <CFormLabel htmlFor="exampleFormControlInput1">Name:</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={9} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={name}
                            placeholder="Name"
                            aria-label="worker"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={3} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Quantity :</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={9} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={quantity}
                            placeholder="Quantity"
                            aria-label="worker"
                            onChange={(e) => setQuantity(e.target.value)}
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
                            Import Price/ Unit:
                          </CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={8} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={importprice}
                            placeholder="Import Price"
                            aria-label="worker"
                            onChange={(e) => setImportPrice(e.target.value)}
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
                            Selling Price/ Unit:
                          </CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={8} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={sellingprice}
                            placeholder="Selling Price"
                            aria-label="worker"
                            onChange={(e) => setSellingPrice(e.target.value)}
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
                          <CFormLabel htmlFor="exampleFormControlInput1">Length :</CFormLabel>
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
                          <CFormLabel htmlFor="exampleFormControlInput1">Breadth:</CFormLabel>
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
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={4} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">GSM:</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={8} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={gsm}
                            placeholder="GSM"
                            aria-label="worker"
                            onChange={(e) => setGsm(e.target.value)}
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
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Material- Quantity & Sizes</strong>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableBody>
                  {stocks.map((item, index) => (
                    <MainTableContent key={index} item={item} type={'stock'} />
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
