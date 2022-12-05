import { PrintingMaterialAddForm } from './AddForm'
import DisplayTable from './DisplayTable'
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

const PrintingMaterial = () => {
  const [PrintingMaterial, setPrintingMaterial] = useState([])
  const [nextUrl, setNextUrl] = useState([])
  const [rowRefresh, setRowRefresh] = useState(false)
  const [deletevisible, setDmodalVisible] = useState(false)
  const [id, setID] = useState('')
  const [viewEdit, viewEditmodal] = useState(false)
  const [material, setMaterial] = useState('')

  useEffect(() => {
    getPrintingMaterials()
  }, [rowRefresh])

  const getPrintingMaterials = () => {
    axios
      .get('http://127.0.0.1:8000/apiv1/router/printingmaterial/')
      .then((response) => {
        if (response.data.next) {
          setNextUrl(response.data.next)
        }
        setPrintingMaterial(response.data.results)
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
    let selectedMaterial = PrintingMaterial.filter((material) => material.id == id)
    setMaterial(selectedMaterial[0].printMaterial)
    viewEditmodal(true)
  }

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <PrintingMaterialAddForm
            setPrintingMaterial={setPrintingMaterial}
            setMaterial={setMaterial}
            material={material}
          />
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>Printing Materials</strong>
            </CCardHeader>
            <CCardBody>
              <CTable>
                <CTableBody>
                  {PrintingMaterial.map((item, index) => (
                    <DisplayTable
                      key={index}
                      item={item}
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
        PrintingMaterial={PrintingMaterial}
        setPrintingMaterial={setPrintingMaterial}
      />
      <EditModal
        id={parseInt(id)}
        viewEditmodal={viewEditmodal}
        viewEdit={viewEdit}
        PrintingMaterial={PrintingMaterial}
        setPrintingMaterial={setPrintingMaterial}
        setMaterial={setMaterial}
        material={material}
      />
    </>
  )
}

export default PrintingMaterial
