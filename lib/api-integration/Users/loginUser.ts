import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";
import { PublicAxios } from "../index";
import { UserLogin } from "@/cineplay/lib/types/UserLogin";
import { CommonResponse } from "../../types/Common";
import { User } from "../../entity/User/User";

export type LoginUserRequest = { user: UserLogin };

export type LoginUserResponse = CommonResponse & {
  data: User &{
    token: string;
  }
}

export const loginUserAPI = async ({
  user,
}: LoginUserRequest): Promise<AxiosResponse<LoginUserResponse>> => {
  return PublicAxios.post(`/auth/login`, user);
};

export const useLoginUserAPI = (): UseMutationResult<
  AxiosResponse<LoginUserResponse>,
  AxiosError<LoginUserResponse>,
  LoginUserRequest
> => {
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse<LoginUserResponse>,
    AxiosError<LoginUserResponse>,
    LoginUserRequest
  >(loginUserAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.LOGIN_USER);
      queryClient.invalidateQueries(QueryKeys.GET_USER);
      // window.location.reload();
    },
  });
};
