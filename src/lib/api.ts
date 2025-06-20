const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

// Generic API call function
async function apiCall(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
}

// Services API
export const servicesApi = {
  getAll: () => apiCall('/services'),
  getById: (id: string) => apiCall(`/services/${id}`),
  create: (data: any) => apiCall('/services', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall(`/services/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall(`/services/${id}`, {
    method: 'DELETE',
  }),
};

// Portfolio API
export const portfolioApi = {
  getAll: () => apiCall('/portfolio'),
  getById: (id: string) => apiCall(`/portfolio/${id}`),
  create: (data: any) => apiCall('/portfolio', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  update: (id: string, data: any) => apiCall(`/portfolio/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  delete: (id: string) => apiCall(`/portfolio/${id}`, {
    method: 'DELETE',
  }),
};

// Contact API
export const contactApi = {
  create: (data: any) => apiCall('/contacts', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  getAll: () => apiCall('/contacts'),
  getById: (id: string) => apiCall(`/contacts/${id}`),
  delete: (id: string) => apiCall(`/contacts/${id}`, {
    method: 'DELETE',
  }),
};

// Auth API
export const authApi = {
  login: (credentials: { email: string; password: string }) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  register: (userData: any) => apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  logout: () => apiCall('/auth/logout', {
    method: 'POST',
  }),
};

// User API
export const userApi = {
  getProfile: () => apiCall('/users/profile'),
  updateProfile: (data: any) => apiCall('/users/profile', {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  getAll: () => apiCall('/users'),
  getById: (id: string) => apiCall(`/users/${id}`),
  delete: (id: string) => apiCall(`/users/${id}`, {
    method: 'DELETE',
  }),
};

// Dashboard API
export const dashboardApi = {
  getStats: () => apiCall('/dashboard/stats'),
}; 