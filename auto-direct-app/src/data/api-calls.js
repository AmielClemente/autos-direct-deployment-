// Environment-based API configuration
const api = import.meta.env.VITE_API_URL || 
  (import.meta.env.MODE === 'production' 
    ? 'https://autos-direct.com.au' 
    : 'http://localhost:3000');

export default api;