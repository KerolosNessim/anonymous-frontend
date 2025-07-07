const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const postData = async (endpoint, body = {}, headers = {}, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
      ...options,
    });
    const data = await response.json();
    return { ...data, status: response.status }; 
  } catch (error) {
    console.error('POST request error:', error);
    throw error;
  }
};
