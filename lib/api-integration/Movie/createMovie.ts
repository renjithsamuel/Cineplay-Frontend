import { AxiosError, AxiosResponse } from "axios";
import { useMutation, UseMutationResult, useQueryClient } from "react-query";
import { QueryKeys } from "@/cineplay/lib/constants/Querykeys";
import { PublicAxios } from "../index";
import { CreateMovieRequest } from "../../types/MovieType";

export type CreateMovieAPIRequest = { movie: CreateMovieRequest };

export type CreateMovieResponse = {
  message: string;
};

export const createMovieAPI = async ({
  movie,
}: CreateMovieAPIRequest): Promise<AxiosResponse<CreateMovieResponse>> => {
  return PublicAxios.post(`/admin/movie`, movie);
};

export const useCreateMovieAPI = (): UseMutationResult<
  AxiosResponse<CreateMovieResponse>,
  AxiosError<CreateMovieResponse>,
  CreateMovieAPIRequest
> => {
  const queryClient = useQueryClient();

  return useMutation<
    AxiosResponse<CreateMovieResponse>,
    AxiosError<CreateMovieResponse>,
    CreateMovieAPIRequest
  >(createMovieAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.CREATE_MOVIE);
    },
  });
};
