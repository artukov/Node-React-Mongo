import API from "../config/apiClient";


export const login = async(data: any) => {
    return API.post("/auth/login", data);
}

export const register = async(data: any) => {
    return API.post("auth/register", data);
}

export const fetchUserData = async (token: string | null) => {
    try {
      const response = await API.get('/auth/fetchUserData', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };