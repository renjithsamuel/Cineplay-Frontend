import { UseQueryResult, useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { IUser, User } from "@/cineplay/lib/entity/User/User";
import { PrivateAxios } from "..";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";
import { CommonResponse } from "../../types/Common";

export type GetUserResponse = AxiosResponse<User>;
export type GetUserAPIResponse = CommonResponse & { data: IUser };

export const getUserAPI = async (): Promise<GetUserResponse> => {
  const response = await PrivateAxios.get<GetUserAPIResponse>(`/auth/user`);

  const user = new User(response?.data.data);
  return {
    ...response,
    data: user,
  };
};

export const useGetUserAPI = (
  enabled = true,
): UseQueryResult<GetUserResponse, AxiosError> => {
  return useQuery<GetUserResponse, AxiosError>(
    [QueryKeys.GET_USER],
    () => getUserAPI(),
    {
      enabled,
    },
  );
};
