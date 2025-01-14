import { UseMutationResult, UseQueryResult, useMutation, useQuery, useQueryClient } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { PrivateAxios } from "..";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";
import { Game, IGame } from "../../entity/Game/game";
import { CommonResponse } from "../../types/Common";

export type UpdateGameResponse = AxiosResponse<Game>;
export type UpdateGameAPIResponse = CommonResponse & { data: IGame}

export type UpdateGameRequest = {     
    gameId: string;
    value: string; 
}; 

export const updateGameAPI = async (request : UpdateGameRequest): Promise<UpdateGameResponse> => {
  const response = await PrivateAxios.put<UpdateGameAPIResponse>(`/game/${request.gameId}`, {value: request.value});

  const game = new Game(response?.data.data);
  return {
    ...response,
    data: game,
  };
};

export const UseUpdateGameAPI = (): UseMutationResult<
  UpdateGameResponse,
  UpdateGameResponse,
  UpdateGameRequest
> => {
  const queryClient = useQueryClient();

  return useMutation<
    UpdateGameResponse,
    UpdateGameResponse,
    UpdateGameRequest
  >(updateGameAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.GET_GAME);
    },
  });
};
