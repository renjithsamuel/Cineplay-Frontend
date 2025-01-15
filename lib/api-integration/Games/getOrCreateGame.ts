import { UseQueryResult, useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { PrivateAxios } from "..";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";
import { Game, IGame } from "../../entity/Game/game";
import { CommonResponse } from "../../types/Common";

export type getGameResponse = AxiosResponse<Game | null>;
export type getGameAPIResponse = CommonResponse & { data: IGame };

export type getGameRequest = {
  movieId: string; // "2025-01-14" format
  type: string;
}; // "FRAMES"

export const getGameAPI = async (
  request: getGameRequest,
): Promise<getGameResponse> => {
  const response = await PrivateAxios.post<getGameAPIResponse>(
    `/game`,
    request,
  );

  const game = response?.data?.data ? new Game(response?.data.data) : null;
  return {
    ...response,
    data: game,
  };
};

export const UseGetGameAPI = (
  request: getGameRequest,
  enabled = true,
): UseQueryResult<getGameResponse, AxiosError> => {
  return useQuery<getGameResponse, AxiosError>(
    [QueryKeys.GET_GAME, request.movieId, request.type],
    () => getGameAPI(request),
    {
      enabled,
    },
  );
};
