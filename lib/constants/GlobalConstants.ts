export const globalConstants = {
  debounceDelay: 250,
  snackBarDelay: 5000,
};

export const sideMenuItems = {
  // players
  Movie: { name: "Movie", link: "/" },
  Dialogue: { name: "Dialogue", link: "/dialogues" },
  Music: { name: "Music", link: "/music" },
  // admin
  Dashboard: { name: "Dashboard", link: "/dashboard" },
  // both
  Profile: { name: "Profile", link: "/profile" },
};

export const PageSeparation = {
  PlayerPages: ["/", "/dialogues", "/music", "/profile"],
  AdminPages: ["/", "/dialogues", "/music", "/dashboard", "/profile"],
};

export enum LeaderboardType {
  Daily = "Daily",
  Monthly = "Monthly",
  Yearly = "Yearly",
}
