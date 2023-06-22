import axios from "axios";


export const getUser = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};