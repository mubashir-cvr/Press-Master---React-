import { PrintingTypeAddForm } from './AddForm'
import MainTableContent from 'src/components/MainTableContent'
import { DeleteModal } from './DeleteModal'
import { EditModal } from './EditModal'
import axios, * as others from 'axios'
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
} from '@coreui/react'
import React, { useState, useEffect } from 'react'

const PrintingType = () => {
  const [printingType, setPrintingType] = useState([])
  const [nextUrl, setNextUrl] = useState([])
  const [rowRefresh, setRowRefresh] = useState(false)
  const [deletevisible, setDmodalVisible] = useState(false)
  const [id, setID] = useState('')
  const [viewEdit, viewEditmodal] = useState(false)
  const [type, setType] = useState('')

  useEffect(() => {
    getPrintingTypes()
  }, [rowRefresh])

  const getPrintingTypes = () => {
    axios
      .get('http://127.0.0.1:8000/apiv1/router/printingtype/')
      .then((response) => {
        if (response.data.next) {
          setNextUrl(response.data.next)
        }
        setPrintingType(response.data.results)
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      })

    // console.log(users);
  }

  const showDeleteModal = (id) => {
    setID(id)
    setDmodalVisible(true)
  }

  const showEditModal = (id) => {
    setID(id)
    let selecttedType = printingType.filter((type) => type.id == id)
    setType(selecttedType[0].printType)
    viewEditmodal(true)
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <PrintingTypeAddForm setPrintingType={setPrintingType} setType={setType} type={type} />
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Printing Types</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableBody>
                  {printingType.map((item, index) => (
                    <MainTableContent
                      key={index}
                      item={item}
                      type={'printing'}
                      showDeleteModal={showDeleteModal}
                      showEditModal={showEditModal}
                    />
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <DeleteModal
        setDmodalVisible={setDmodalVisible}
        id={parseInt(id)}
        deletevisible={deletevisible}
        printingType={printingType}
        setPrintingType={setPrintingType}
      />
      <EditModal
        id={parseInt(id)}
        viewEditmodal={viewEditmodal}
        viewEdit={viewEdit}
        printingType={printingType}
        setPrintingType={setPrintingType}
        setType={setType}
        type={type}
      />
    </>
  )
}

export default PrintingType
