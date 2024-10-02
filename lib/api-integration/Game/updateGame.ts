import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";
import { PublicAxios } from "../index";

export type UpdateGameAPIRequest = { value: string; gameID: string };

export type UpdateGameResponse = {
  message: string;
};

export const updateGameAPI = async ({
  value,
  gameID,
}: UpdateGameAPIRequest): Promise<AxiosResponse<UpdateGameResponse>> => {
  return PublicAxios.put(`/game/${gameID}`, { value: value });
};

export const useUpdateGameAPI = (): UseMutationResult<
  AxiosResponse<UpdateGameResponse>,
  AxiosError<UpdateGameResponse>,
  UpdateGameAPIRequest
> => {
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse<UpdateGameResponse>,
    AxiosError<UpdateGameResponse>,
    UpdateGameAPIRequest
  >(updateGameAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.UPDATE_GAME);
    },
  });
};
