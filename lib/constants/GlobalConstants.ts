export const globalConstants = {
  debounceDelay: 250,
  snackBarDelay: 5000,
};

export const sideMenuItems = {
  // players
  Movie: { name: "Movie", link: "/movies" },
  Dialogue: { name: "Dialogue", link: "/dialogues" },
  Music: { name: "Music", link: "/music" },
  // admin
  Dashboard: { name: "Dashboard", link: "/dashboard" },
  // both
  Profile: { name: "Profile", link: "/profile" },
};

export const PageSeparation = {
  PlayerPages: [
    "/",
    "/movies",
    "/dialogues",
    "/music",
    "/profile",
  ],
  AdminPages: [
    "/",
    "/movies",
    "/dialogues",
    "/music",
    "/dashboard",
    "/profile",
  ],
};
