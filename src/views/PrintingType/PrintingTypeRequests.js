import axios, * as others from 'axios'


export const getPrintingTypes = () => {
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

      return response.data
  }

  export const getPrintingTypeById = (id) => {
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

      return response.data
  }