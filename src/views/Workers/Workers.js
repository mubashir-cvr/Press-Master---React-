import React, { useState, useEffect } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import { CModalBody, CModal, CModalHeader, CModalTitle, CModalFooter, CAvatar } from '@coreui/react'
import axios, * as others from 'axios'
import { useScrollStopListener } from './Utility'
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
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
} from '@coreui/react'
import MainTableContent from 'src/components/MainTableContent'
import CIcon from '@coreui/icons-react'
import { cibTreehouse, cilPlus } from '@coreui/icons'
const Workers = () => {
  const [name, setName] = useState('')
  const [designation, setDesignation] = useState('')
  const [phone, setPhone] = useState('')
  const [department, setDepartment] = useState('')
  const [address, setAddress] = useState('')
  const [rowRefresh, setRowRefresh] = useState(false)
  const [image, setImage] = useState({ preview: '', raw: '' })
  const [workers, setWorkers] = useState([])
  const [departments, setDepartments] = useState([])
  const [viewEdit, viewEditmodal] = useState(false)
  const [id, setID] = useState('')
  const [loaderVisible, SetLoader] = useState(false)
  const [nextUrl, setNextURL] = useState('')
  const [deletevisible, setDmodalVisible] = useState(false)

  useEffect(() => {
    getWorkers()
    getDepartment()
    setRowRefresh(false)
  }, [rowRefresh])
  const getWorkers = () => {
    axios
      .get('http://127.0.0.1:8000/apiv1/router/worker/')
      .then((response) => {
        if (response.data.next) {
          setNextURL(response.data.next)

          SetLoader(true)
        }
        setWorkers(response.data.results)
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      })

    // console.log(users);
  }
  useScrollStopListener(window, () => {
    if (nextUrl) {
      axios
        .get(nextUrl)
        .then(
          (response) => {
            setTimeout(() => {
              for (let i = 0; i < response.data.results.length; i++) {
                setWorkers((workers) => {
                  return [...workers, response.data.results[i]]
                })
              }
            }, 1500)
            if (response.data.next) {
              console.log(response.data.next)
              setNextURL(response.data.next)
            } else {
              setNextURL(null)
            }
          },
          // handle success
        )
        .catch(function (error) {
          // handle error
        })
        .then(function () {
          // always executed
        })
    } else {
      SetLoader(false)
    }
  })

  const getDepartment = () => {
    axios
      .get('http://127.0.0.1:8000/apiv1/router/createDepartment/')
      .then((response) => {
        setDepartments(response.data)
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      })

    // console.log(users);
  }

  const handleChange = (e) => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      })
    }
  }
  const handleDelete = () => {
    axios.delete('http://127.0.0.1:8000/apiv1/router/worker/' + id)
    setDmodalVisible(false)
    let newworkers = workers.filter((worker) => worker.id !== id)
    setWorkers(newworkers)
  }

  const showDeleteModal = (id) => {
    setID(id)
    setDmodalVisible(true)
  }
  const handleEdit = (e) => {
    e.preventDefault()
    const keys = ['name', 'phone', 'department', 'designation', 'address']
    const values = [name, phone, department, designation, address]
    const formData = new FormData()
    var flag = 0
    var key = ''
    for (let i = 0; i < keys.length; i++) {
      if (values[i] === '' && values[i] === null) {
        key = keys[i]
        flag = 1
        break
      }
    }
    if (flag == 1) {
      console.log(key + 'is Empty')
      return 0
    }
    if (image.raw) {
      formData.append('photo', image.raw)
    }
    formData.append('name', name)
    formData.append('phone', phone)
    formData.append('department', department)
    formData.append('designation', designation)
    formData.append('address', address)
    axios
      .patch('http://127.0.0.1:8000/apiv1/router/worker/' + id + '/', formData)
      .then((response) => {
        var notUpdatedWorker = workers.filter((worker) => worker.id != response.data.id)
        setWorkers(notUpdatedWorker)
        setWorkers((workers) => {
          return [...workers, response.data]
        })
      })
    clearEditor_addFrom()
    viewEditmodal(false)
  }

  const showEditModal = (id) => {
    clearEditor_addFrom()
    viewEditmodal(true)
    setID(id)
    var slectedWorker = workers.filter((worker) => worker.id == id)
    setName(slectedWorker[0].name)
    setDesignation(slectedWorker[0].designation)
    setPhone(slectedWorker[0].phone)
    setDepartment(slectedWorker[0].department)
    setAddress(slectedWorker[0].address)
    setImage(slectedWorker[0].photo.medium_square_crop)
  }

  const clearEditor_addFrom = () => {
    setName('')
    setDesignation('')
    setPhone('')
    setDepartment('')
    setAddress('')
    setImage({ preview: '', raw: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name && designation && phone && department && image.raw && address) {
      const formData = new FormData()
      formData.append('photo', image.raw)
      formData.append('name', name)
      formData.append('phone', phone)
      formData.append('department', department)
      formData.append('designation', designation)
      formData.append('address', address)

      axios
        .post('http://127.0.0.1:8000/apiv1/router/worker/', formData)
        .then((response) => {
          setWorkers((workers) => {
            setName('')
            setDesignation('')
            setPhone('')
            setDepartment('')
            setImage({ preview: '', raw: '' })
            document.getElementById('formFile').value = ''
            setAddress('')
            return [response.data, ...workers]
          })
        })
        .catch(function (error) {
          // handle error
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
                  <strong>Add/List Workers</strong>
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
              <CForm id="workerForm" onSubmit={handleSubmit}>
                <CRow>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={3} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Employee :</CFormLabel>
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
                          <CFormLabel htmlFor="exampleFormControlInput1">Designation :</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={9} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={designation}
                            placeholder="Designation"
                            aria-label="worker"
                            onChange={(e) => setDesignation(e.target.value)}
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={4} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Phone Number :</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={8} sm={12}>
                        <div className="mb-3">
                          <CFormInput
                            type="text"
                            value={phone}
                            placeholder="Phone Number"
                            aria-label="worker"
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>

                  <CCol lg={6} sm={12}>
                    <CRow>
                      <CCol lg={3} sm={12}>
                        <div className="pl-2 mb-3 mt-2">
                          <CFormLabel htmlFor="exampleFormControlInput1">Department :</CFormLabel>
                        </div>
                      </CCol>
                      <CCol lg={9} sm={12}>
                        <div className="pb-3 pt-1">
                          <CFormSelect
                            aria-label="Default select example"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                          >
                            <option>Open this select menu</option>
                            {departments.map((item) => (
                              <option key={item.id} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </CFormSelect>
                        </div>
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <div className="pb-3 pt-3">
                      <CInputGroup>
                        <CInputGroupText>Address</CInputGroupText>
                        <CFormTextarea
                          value={address}
                          aria-label="Address"
                          onChange={(e) => setAddress(e.target.value)}
                        ></CFormTextarea>
                      </CInputGroup>
                    </div>
                  </CCol>
                  <CCol lg={6} sm={12}>
                    <CFormInput
                      type="file"
                      id="formFile"
                      label="Upload Photo :"
                      onChange={handleChange}
                    />
                  </CCol>
                </CRow>

                <CRow>
                  <CCol lg={12} sm={12}>
                    <div className="mb-3 p-2 text-center">
                      <CButton color="success" type="submit">
                        Add
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
              <strong>Workers</strong>
            </CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableBody>
                  {workers.map((item, index) => (
                    <MainTableContent
                      key={index}
                      item={item}
                      type={'worker'}
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
      <div className={loaderVisible ? 'd-block' : 'd-none'}>
        <BeatLoader className="workerLoader" color="#36d7b7" />
      </div>
      <CModal visible={viewEdit}>
        <CModalBody>
          <CModalTitle>Edit Employee</CModalTitle>
        </CModalBody>
        <hr />
        <CForm id="workerEditForm" onSubmit={handleEdit}>
          <CModalBody>
            <CRow>
              <CCol lg={12} sm={12}>
                <CRow>
                  <CCol lg={3} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Employee :</CFormLabel>
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
              <CCol lg={12} sm={12}>
                <CRow>
                  <CCol lg={3} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Designation :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={9} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={designation}
                        placeholder="Designation"
                        aria-label="worker"
                        onChange={(e) => setDesignation(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
              </CCol>
              <CCol lg={12} sm={12}>
                <CRow>
                  <CCol lg={4} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Phone Number :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={8} sm={12}>
                    <div className="mb-3">
                      <CFormInput
                        type="text"
                        value={phone}
                        placeholder="Phone Number"
                        aria-label="worker"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </CCol>
                </CRow>
              </CCol>

              <CCol lg={12} sm={12}>
                <CRow>
                  <CCol lg={3} sm={12}>
                    <div className="pl-2 mb-3 mt-2">
                      <CFormLabel htmlFor="exampleFormControlInput1">Department :</CFormLabel>
                    </div>
                  </CCol>
                  <CCol lg={9} sm={12}>
                    <div className="pb-3 pt-1">
                      <CFormSelect
                        aria-label="Default select example"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      >
                        <option>Open this select menu</option>
                        {departments.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </CFormSelect>
                    </div>
                  </CCol>
                </CRow>
              </CCol>
              <CCol lg={12} sm={12}>
                <div className="pb-3 pt-3">
                  <CInputGroup>
                    <CInputGroupText>Address</CInputGroupText>
                    <CFormTextarea
                      value={address}
                      aria-label="Address"
                      onChange={(e) => setAddress(e.target.value)}
                    ></CFormTextarea>
                  </CInputGroup>
                </div>
              </CCol>
              <CCol lg={12} sm={12}>
                <CFormInput
                  type="file"
                  id="formFile"
                  label="Change Photo :"
                  onChange={handleChange}
                />
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
      <CModal visible={deletevisible} onClose={() => setDmodalVisible(false)}>
        <CModalHeader onClose={() => setDmodalVisible(false)}>
          <CModalTitle>Delete Employee ?</CModalTitle>
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
    </>
  )
}

export default Workers
