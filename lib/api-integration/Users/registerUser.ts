import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";
import { PublicAxios } from "../index";
import { UserRegister } from "@/cineplay/lib/types/UserLogin";
import { CommonResponse } from "../../types/Common";

export type RegisterUserRequest = { user: UserRegister };

export type RegisterUserResponse = CommonResponse;

export const registerUserAPI = async ({
  user,
}: RegisterUserRequest): Promise<AxiosResponse<RegisterUserResponse>> => {
  user.type = "CP_ACCOUNT"
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
