import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";
import { PublicAxios } from "../index";
import { UserRegister } from "@/cineplay/lib/types/UserLogin";

export type RegisterUserRequest = { user: UserRegister };

export type RegisterUserResponse = {
  message: string;
};

export const registerUserAPI = async ({
  user,
}: RegisterUserRequest): Promise<AxiosResponse<RegisterUserResponse>> => {
  return PublicAxios.post(`/auth/register`, user);
};

export const useRegisterUserAPI = (): UseMutationResult<
  AxiosResponse<RegisterUserResponse>,
  AxiosError<RegisterUserResponse>,
  RegisterUserRequest
> => {
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse<RegisterUserResponse>,
    AxiosError<RegisterUserResponse>,
    RegisterUserRequest
  >(registerUserAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.REGISTER_USER);
    },
  });
};
