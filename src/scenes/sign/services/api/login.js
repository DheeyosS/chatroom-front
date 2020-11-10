import { DOMAIN } from "../../../../config";

const axios = require("axios").default;

export const loginAPI = async (formData) => {
  try {
    const response = await axios.post(`${DOMAIN}/auth/`, formData);
    return response.data.token;
  } catch (error) {
    return { error };
  }
};
