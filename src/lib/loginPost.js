import axios from "axios";
import toast from "react-hot-toast";

export const loginPost = async (endpoint, data, token = "") => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}${endpoint}`,
      data,
      {
        headers: {
          Authorization: `Bearer${token}`,
        },
      }
    );

    if (res.data) {
      return res.data;
    }
  } catch (error) {
    toast.error(error.response?.data?.message);
  }
};
