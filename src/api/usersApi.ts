import axios from "axios";

export interface User {
  id: number,
  name?: string,
  description?: string
}

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get("http://localhost:3500/users");
  return response.data;
};