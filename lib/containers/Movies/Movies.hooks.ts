type MoviesHook = {
  AllImages: string[]
};

type MoviesParams = {

};

export const useMovies = ({}: MoviesParams): MoviesHook => {
  const AllImages = [
    "./logo.svg",
    "./logo.svg",
    "./logo.svg",
    "./logo.svg",
    "./logo.svg",
  ];

  return {
    AllImages,
  };
};
