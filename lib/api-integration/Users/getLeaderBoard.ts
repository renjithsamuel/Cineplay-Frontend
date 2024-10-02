import { UseQueryResult, useQuery } from "react-query";
import { AxiosError, AxiosResponse } from "axios";
import { PrivateAxios } from "..";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";

export type GetLeaderBoardResponse = AxiosResponse<GetLeaderBoardAPIResponse>;

export type GetLeaderBoardAPIResponse = { count: number };

export const getLeaderBoardAPI = async (
  date: string
): Promise<GetLeaderBoardResponse> => {
  const response = await PrivateAxios.get<GetLeaderBoardAPIResponse>(
    `/leaderboard/${date}/dialogues` // in YYYY-MM-DD
  );

  return {
    ...response,
    data: {
      count: response.data.count,
    },
  };
};

export const useGetLeaderBoardAPI = (
  date: string,
  enabled = true
): UseQueryResult<GetLeaderBoardResponse, AxiosError> => {
  return useQuery<GetLeaderBoardResponse, AxiosError>(
    [QueryKeys.GET_GAMES_PLAYED_COUNT],
    () => getLeaderBoardAPI(date),
    {
      enabled,
    }
  );
};
