import axios from 'axios';

//  URL del API
// const HOST = 'http://localhost:8000/';
const HOST = 'http://c971c8d1.ngrok.io/';

export async function doRequest(endpoint, headersRequest = null, requestMethod = 'GET', data = null) {
  try {
    const dataRequest = {
      method: requestMethod,
      url: endpoint,
    };
    if (headersRequest) {
      dataRequest.headers = headersRequest;
    }
    if (data) {
      dataRequest.data = data;
    }
    return await axios(dataRequest)
      .then((response) => {
          return response.data;
      })
      .catch((error) => {
        return error;
      });
  } catch (error) {
    console.error(error);
    return error;
  }
}

function addHeaders(token){
  const headerAutentication = 'Bearer ' + token;
  return {
    'Authorization': headerAutentication
  }
}

export async function getImagesHome() {
  return await doRequest(HOST + 'api/v1/imagenes-home/')
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}


export async function getDestinyInfo() {
  return await doRequest(HOST + 'api/v1/destino')
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}

export async function postContactanos(data) {
  return await doRequest(HOST + 'api/v1/contactanos/', null, 'POST', data)
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}

export async function getProfileInfo() {
  return await doRequest(HOST + 'api/v1/perfil/1/')
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}

export async function login(data) {
  return await doRequest(HOST + 'api/v1/token/', null, 'POST', data)
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}
