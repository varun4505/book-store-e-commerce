import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://book-app-backend-tawny.vercel.app/api/books',
  // ...existing code...
});

apiClient.interceptors.response.use(
  (response) => {
    // Check if the response is JSON
    if (response.headers['content-type']?.includes('application/json')) {
      return response;
    } else {
      throw new Error('Response is not JSON');
    }
  },
  (error) => {
    // ...existing code...
    return Promise.reject(error);
  }
);

// Example function making a POST request
export const createResource = async (data) => {
  try {
    const response = await apiClient.post('/resource', data);
    return response.data;
  } catch (error) {
    console.error('Error creating resource:', error);
    throw error;
  }
};

// Example function making a GET request
export const getResource = async (id) => {
  try {
    const response = await apiClient.get(`/resource/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching resource:', error);
    throw error;
  }
};
