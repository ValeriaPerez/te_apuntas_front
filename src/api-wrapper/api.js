import axios from 'axios';

async function doRequest(endpoint, headersRequest = null, requestMethod = 'GET', data = null) {
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
  return await doRequest('http://192.168.100.234:8000/api/v1/imagenes-home/')
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}


export async function getDestinyInfo() {
  return await doRequest('http://192.168.100.234:8000/api/v1/destino/')
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}

export async function postContactanos(data, token) {
  const headers = addHeaders(token);
  return await doRequest('http://localhost:8000/api/v1/contactanos/', headers, 'POST', data)
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}


export async function getProfileInfo() {
  return await doRequest('http://192.168.100.234:8000/api/v1/perfil/')
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}

export async function login(data) {
  return await doRequest('http://localhost:8000/api/v1/token/', null, 'POST', data)
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}
