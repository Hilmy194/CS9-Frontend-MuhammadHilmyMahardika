import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const getItems = async () => {
  const res = await axios.get(`${BASE_URL}/item/`);
  // Pastikan mengambil array di field payload
  if (res.data && Array.isArray(res.data.payload)) {
    return res.data.payload;
  } else {
    throw new Error("Unexpected response format");
  }
};
