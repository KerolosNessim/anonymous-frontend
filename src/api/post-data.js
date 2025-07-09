// const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// export const postData = async (endpoint, body = {}, headers = {}, options = {}) => {
//   try {
//     const response = await fetch(`${BASE_URL}${endpoint}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         ...headers,
//       },
//       body: JSON.stringify(body),
//       ...options,
//     });
//     const data = await response.json();
//     return { ...data, status: response.status }; 
//   } catch (error) {
//     console.error('POST request error:', error);
//     throw error;
//   }
// };
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const postData = async (endpoint, body = {}, headers = {}, options = {}) => {
  try {
    const isFormData = body instanceof FormData;

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: isFormData ? { ...headers } : { 'Content-Type': 'application/json', ...headers },
      body: isFormData ? body : JSON.stringify(body),
      ...options,
    });

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return { ...data, status: response.status };
    } else {
      const text = await response.text();
      return { message: text, status: response.status };
    }

  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};
