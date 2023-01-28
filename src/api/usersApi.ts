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

export const deleteUser = async ({ id } : User): Promise<User[]> => {
  const response = await axios.delete(`http://localhost:3500/users/${id}`);
  return response.data;
}