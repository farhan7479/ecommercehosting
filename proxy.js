const axios = require('axios');

exports.handler = async (event, context) => {
  const backendUrl = ''; // Replace with your backend server URL
  const { path, httpMethod, headers, body } = event;

  try {
    const response = await axios({
      method: httpMethod,
      url: `${backendUrl}${path}`,
      headers,
      data: body,
    });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
      headers: response.headers,
    };
  } catch (error) {
    return {
      statusCode: error.response.status,
      body: error.response.data,
      headers: error.response.headers,
    };
  }
};
