import { UseQueryResult, useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { PrivateAxios } from "..";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";

export type GetGamesPlayedCountResponse =
  AxiosResponse<GetGamesPlayedCountAPIResponse>;
export type GetGamesPlayedCountAPIResponse = { count: number };

export const getGamesPlayedCountAPI = async (
  date: string
): Promise<GetGamesPlayedCountResponse> => {
  const response = await PrivateAxios.get<GetGamesPlayedCountAPIResponse>(
    `/game/${date}` // in YYYY-MM-DD
  );

  return {
    ...response,
    data: {
      count: response.data.count,
    },
  };
};

export const useGetGamesPlayedCountAPI = (
  date: string,
  enabled = true
): UseQueryResult<GetGamesPlayedCountResponse, AxiosError> => {
  return useQuery<GetGamesPlayedCountResponse, AxiosError>(
    [QueryKeys.GET_GAMES_PLAYED_COUNT],
    () => getGamesPlayedCountAPI(date),
    {
      enabled,
    }
  );
};
