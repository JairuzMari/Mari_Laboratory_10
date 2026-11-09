export const MOVIES = [
  {
    id: "1",
    title: "Interstellar",
    year: "2014",
    rating: "8.6",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    image: require("../assets/images/Interstellar.jpg"),
    categories: ["popular", "top_rated"],
  },
  {
    id: "2",
    title: "Inception",
    year: "2010",
    rating: "8.8",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task.",
    image: require("../assets/images/Inception.jpg"),
    categories: ["popular", "top_rated", "latest"],
  },
  {
    id: "3",
    title: "The Dark Knight",
    year: "2008",
    rating: "9.0",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    image: require("../assets/images/The Dark knight.jpg"),
    categories: ["top_rated", "recommended"],
  },
  {
    id: "4",
    title: "Dune: Part Two",
    year: "2024",
    rating: "8.5",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    image: require("../assets/images/Dune Part 2.jpg"),
    categories: ["latest", "popular", "recommended"],
  },
  {
    id: "5",
    title: "Avatar: The Way of Water",
    year: "2022",
    rating: "7.6",
    description:
      "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora.",
    image: require("../assets/images/Avatar The Way of Water.jpg"),
    categories: ["popular", "recommended"],
  },
  {
    id: "6",
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    rating: "8.7",
    description:
      "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    image: require("../assets/images/SpiderMan.jpg"),
    categories: ["latest", "top_rated", "recommended"],
  },
  {
    id: "7",
    title: "Tenet",
    year: "2020",
    rating: "7.3",
    description:
      "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage.",
    image: require("../assets/images/tenet.jpg"),
    categories: ["recommended"],
  },
  {
    id: "8",
    title: "Oppenheimer",
    year: "2023",
    rating: "8.9",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    image: require("../assets/images/Oppenheimer.jpg"),
    categories: ["latest", "top_rated", "popular"],
  },
];

export const CATEGORIES = [
  { key: "latest", title: "Latest Movies" },
  { key: "top_rated", title: "Top Rated Movies" },
  { key: "popular", title: "Popular Movies" },
  { key: "recommended", title: "Recommended Movies" },
];
