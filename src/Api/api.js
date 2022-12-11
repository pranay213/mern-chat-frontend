import axios from "axios";
const { REACT_APP_URL } = process.env;
const apiUrl = REACT_APP_URL;
export const getChat = (params) => {
  return axios.get(`${apiUrl}/chats`).then((res) => {
    return res.data;
  });
};
