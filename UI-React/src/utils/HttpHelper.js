export const httpPost = (endPoint, data) => {
  return fetch(endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "same-origin",
    body: JSON.stringify(data),
  })
    .then(true)
    .catch(handleError);
};

export const httpGet = (endPoint) => {
  return fetch(endPoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    mode: "same-origin",
  })
    .then(handleResponse)
    .catch(handleError);
};

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    console.log(data);
    if (!response.ok) {
      if (response.status === 401) {
        console.log("Giriş başarısız");
      }
      const error = (data && data.message) || data.error;
      console.log(error);
      return Promise.reject(error);
    }
    return data;
  });
}

function handleError(error) {
  console.error("Method is faild");
  throw error;
}
