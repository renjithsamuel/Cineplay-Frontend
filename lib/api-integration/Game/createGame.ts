import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";
import { PublicAxios } from "../index";
import { CreateGameRequest } from "../../types/GameType";

export type CreateGameAPIRequest = { game: CreateGameRequest };

export type CreateGameResponse = {
  message: string;
};

export const createGameAPI = async ({
  game,
}: CreateGameAPIRequest): Promise<AxiosResponse<CreateGameResponse>> => {
  return PublicAxios.post(`/game`, game);
};

export const useCreateGameAPI = (): UseMutationResult<
  AxiosResponse<CreateGameResponse>,
  AxiosError<CreateGameResponse>,
  CreateGameAPIRequest
> => {
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse<CreateGameResponse>,
    AxiosError<CreateGameResponse>,
    CreateGameAPIRequest
  >(createGameAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.CREATE_GAME);
    },
  });
};
