import React, { useState, useEffect } from 'react'
import { CModalBody, CModal, CModalHeader, CModalTitle, CModalFooter } from '@coreui/react'
import axios, * as others from 'axios'
import MainTableContent from 'src/components/MainTableContent'
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
  CFormTextarea,
} from '@coreui/react'

const Tables = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone_number, setPhone] = useState('')
  const [editname, setEName] = useState('')
  const [editaddress, setEAddress] = useState('')
  const [editphone_number, setEPhone] = useState('')
  const [id, setID] = useState('')
  const [visible, setVisible] = useState(false)
  const [dvisible, setDmodalVisible] = useState(false)
  const [branches, setBranchs] = useState([])
  const [rowRefresh, setRowRefresh] = useState(false)
  const getBranches = () => {
    axios
      .get('http://127.0.0.1:8000/apiv1/router/createbranch/')
      .then((response) => {
        setBranchs(response.data)
        // handle success
      })
      .catch(function (error) {
        // handle error
       
      })
      .then(function () {
        // always executed
      })

    // console.log(users);
  }
  const showEditModal = (id) => {
    var branch = branches.filter((branchedit) => branchedit.id == id)
    setEName(branch[0].name)
    setEAddress(branch[0].address)
    setEPhone(branch[0].phone_number)
    setID(id)
    setVisible(!visible)
  }

  const showDeleteModal = (id) => {
    setID(id)
    setDmodalVisible(!dvisible)
  }
  const handleDelete = () => {
    axios.delete('http://127.0.0.1:8000/apiv1/router/createbranch/' + id)
    setDmodalVisible(!dvisible)
    let newBranches = branches.filter((branch) => branch.id !== id)
    setBranchs(newBranches)
  }
  const deleteObject = (id) => {}
  useEffect(() => {
    getBranches()
    setRowRefresh(false)
  }, [rowRefresh])
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name && address && phone_number) {
      const branch = { name, address, phone_number }
      axios.post('http://127.0.0.1:8000/apiv1/router/createbranch/', branch).then((response) => {
        setBranchs((branches) => {
          setName('')
          setAddress('')
          setPhone('')
          return [...branches, response.data]
        })
      })
    }
  }

  const handleEdit = (e) => {
    e.preventDefault()
    if (editname && editaddress && editphone_number && id) {
      let config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
      const branch = { name: editname, address: editaddress, phone_number: editphone_number }
      axios.put('http://127.0.0.1:8000/apiv1/router/createbranch/' + id + '/', branch)
      setVisible(!visible)
      setRowRefresh(true)
    }
  }
  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Add Branches</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={handleSubmit}>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Branch Name :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
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
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Address :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="mb-3">
                      <CFormTextarea
                        type="text"
                        value={address}
                        placeholder="Address"
                        aria-label="worker"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={2} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Phone Number :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={phone_number}
                        placeholder="Phone Number"
                        aria-label="worker"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol lg={12} sm={12}>
                    <div className="mb-3 text-center">
                      <CButton color="success" type="submit">
                        Add Branch
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
              <strong>Branches</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableBody>
                  {branches.map((item, index) => (
                    <MainTableContent
                      key={index}
                      item={item}
                      type={'branch'}
                      showEditModal={showEditModal}
                      showDeleteModal={showDeleteModal}
                    />
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CForm onSubmit={handleEdit}>
          <CModalBody>
            <CRow>
              <CCol lg={12} sm={12}>
                <div className="pl-2 mb-3 mt-2">
                  <CFormLabel htmlFor="exampleFormControlInput1">Branch Name :</CFormLabel>
                </div>
              </CCol>
              <CCol lg={12} sm={12}>
                <div className="mb-3">
                  <CFormInput
                    type="text"
                    value={editname}
                    placeholder="Name"
                    aria-label="worker"
                    onChange={(e) => setEName(e.target.value)}
                  />
                </div>
              </CCol>
            </CRow>
            <CRow>
              <CCol lg={12} sm={12}>
                <div className="pl-2 mb-3 mt-2">
                  <CFormLabel htmlFor="exampleFormControlInput1">Address :</CFormLabel>
                </div>
              </CCol>
              <CCol lg={12} sm={12}>
                <div className="mb-3">
                  <CFormTextarea
                    type="text"
                    value={editaddress}
                    placeholder="Address"
                    aria-label="worker"
                    onChange={(e) => setEAddress(e.target.value)}
                  />
                </div>
              </CCol>
            </CRow>
            <CRow>
              <CCol lg={12} sm={12}>
                <div className="pl-2 mb-3 mt-2">
                  <CFormLabel htmlFor="exampleFormControlInput1">Phone Number :</CFormLabel>
                </div>
              </CCol>
              <CCol lg={12} sm={12}>
                <div className="mb-3">
                  <CFormInput
                    type="text"
                    value={editphone_number}
                    placeholder="Phone Number"
                    aria-label="worker"
                    onChange={(e) => setEPhone(e.target.value)}
                  />
                </div>
              </CCol>
            </CRow>
            <CRow></CRow>
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary" type="submit">
              Save changes
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
      <CModal visible={dvisible} onClose={() => setDmodalVisible(false)}>
        <CModalHeader onClose={() => setDmodalVisible(false)}>
          <CModalTitle>Delete Brnach</CModalTitle>
        </CModalHeader>
        <CModalBody></CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setDmodalVisible(false)}>
            Cancel
          </CButton>
          <CButton color="primary" onClick={() => handleDelete()}>
            Ok
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default Tables
