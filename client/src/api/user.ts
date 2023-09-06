/* eslint-disable @typescript-eslint/no-unused-vars */
import { IUser } from "../types";
import { handleErrors } from "../utils/handleApiErrors";
import { instance } from "./instance";

const registerUser = async (user: IUser) => {
  const { error, data } = await handleErrors(
    instance.post<IUser>("/users/register", user),
  );
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IUser;
};

const loginUser = async (user: IUser) => {
  const { error, data } = await handleErrors(
    instance.post<IUser>("/users/login", user),
  );
  if (error) {
    throw new Error(error.message);
  }
  return data?.data as IUser;
};
