import axios from "axios";

export const baseUrl = "https://www.cubyt.io/data/categories";

export const getData = async () => {
  const response = await axios.get(`${baseUrl}`);
  return response.data;
};
