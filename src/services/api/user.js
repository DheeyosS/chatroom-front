import { getCookie } from "../utils/get-cookie";
import { DOMAIN } from "../../config/index";
const axios = require("axios").default;

export const cookieAutoLoginAPI = async () => {
  try {
    const response = await axios.get(`${DOMAIN}/auth/`, {
      headers: {
        Authorization: `Token ${getCookie("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return { error };
  }
};
