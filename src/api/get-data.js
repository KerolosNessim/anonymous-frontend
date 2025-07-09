export const getData = async (endpoint, headers = {}, options = {}) => {
  try {
    const response = await fetch(`https://anonymous-api.up.railway.app${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      ...options,
    });
    const data = await response.json();
    return { ...data, status: response.status };
  } catch (error) {
    console.error('GET request error:', error);
    throw error;
  }
};