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

export async function getImagesHome() {
  return await doRequest('http://192.168.100.234:8000/api/v1/imagenes-home/')
  .then(response => {
    return response;
  }).catch(error => {
    return error;
  });
}
