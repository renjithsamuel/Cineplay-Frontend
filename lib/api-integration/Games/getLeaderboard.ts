// import { UseQueryResult, useQuery } from "react-query";
// import { AxiosError, AxiosResponse } from "axios";
// import { PrivateAxios } from "..";
// import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";
// import { CommonResponse } from "../../types/Common";

// export type getLeaderboardResponse = AxiosResponse<Leaderboard | null>;
// export type getLeaderboardAPIResponse = CommonResponse & { data: ILeaderboard };

// export type getLeaderboardRequest = {     
//     movieId: string; // "2025-01-14" format
//     type: string 
// }; // "FRAMES"

// export const getLeaderboardAPI = async (request : getLeaderboardRequest): Promise<getLeaderboardResponse> => {
//   const response = await PrivateAxios.post<getLeaderboardAPIResponse>(`/game`, request);

//   const game = response?.data?.data ? new Leaderboard(response?.data.data) : null;
//   return {
//     ...response,
//     data: game,
//   };
// };

// export const UseGetLeaderboardAPI = (
//     request: getLeaderboardRequest,
//   enabled = true,
// ): UseQueryResult<getLeaderboardResponse, AxiosError> => {
//   return useQuery<getLeaderboardResponse, AxiosError>(
//     [QueryKeys.GET_GAME, request.movieId, request.type],
//     () => getLeaderboardAPI(request),
//     {
//       enabled,
//       staleTime: 0, // Ensures data is not considered fresh
//       cacheTime: 0, // Disables caching altogether
//       refetchOnWindowFocus: false, // Optional: Prevents refetch on window focus
//     },
//   );
// };
