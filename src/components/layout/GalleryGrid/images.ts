import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  original: string;
  title?: string;
  description?:string;
}

export const images: CustomImage[] = [
  {
    src: "/assets/images/heart.webp",
    original: "/assets/images/heart.webp",
    width: 320,
    height: 174,
    title: "We're no strangers to love...."
  },
  {
    src: "https://media.giphy.com/media/ibqNLl44qRLJyKv7rU/giphy-downsized-large.gif",
    original: "https://media.giphy.com/media/ibqNLl44qRLJyKv7rU/giphy-downsized-large.gif",
    width: 350,
    height: 250,
    title: "...you know the rules and so do I..."
  },
  {
    src: "/assets/images/coffee.webp",
    original: "/assets/images/coffee.webp",
    width: 350,
    height: 212,
    title: "...a full commitment's what I'm thinking of...",
  },
  {
    src: "https://media.giphy.com/media/QyVZ1BCz9Fh6J0qblM/giphy.gif",
    original: "https://media.giphy.com/media/QyVZ1BCz9Fh6J0qblM/giphy.gif",
    width: 480,
    height: 240,
    title: "...you wouldn't get this from any other guy...",
  },
  {
    src: "assets/images/not-a-meeting.webp",
    original: "assets/images/not-a-meeting.webp",
    width: 320,
    height: 183,
    title: "...I just wanna tell you how I'm feeling...",
    description: "",
  },
  {
    src: "assets/images/monster.webp",
    original: "assets/images/monster.webp",
    width: 580,
    height: 350,
    title: "...gotta make you, understand..."
  },
  {
    src: "/assets/images/code2.webp",
    original: "/assets/images/code2.webp",
    width: 360,
    height: 190,
    title: "...never gonna give you up..."
  },
  {
    src: "https://media.giphy.com/media/xUPGcB7dYAIBjMG2CQ/giphy.gif",
    original: "https://media.giphy.com/media/xUPGcB7dYAIBjMG2CQ/giphy.gif",
    width: 200,
    height: 140,
    title: "...never gonna let you down..."
  },
  {
    src: "/assets/images/design.webp",
    original: "/assets/images/design.webp",
    width: 320,
    height: 213,
    title: "...never gonna run around and desert you..."
  },
  {
    src: "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif",
    original: "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif",
    alt: "Desk",
    width: 1200,
    height: 900,
    title: "...never gonna make you cry..."
    
  },
  {
    src: "/assets/images/headless.webp",
    original: "/assets/images/headless.webp",
    alt: "Specialists in Headless",
    width: 350,
    height: 200,
    title: "...never gonna say goodbye..."
  },
  {
    src: "https://media.giphy.com/media/WTjXuYA2y4o3UZly3W/giphy.gif",
    original: "https://media.giphy.com/media/WTjXuYA2y4o3UZly3W/giphy.gif",
    alt: "Desk",
    width: 500,
    height: 350,
    title: "...never gonna tell a lie..."
  },
  {
    src: "/assets/images/app.webp",
    original: "/assets/images/app.webp",
    alt: "We Like You Too",
    width: 750,
    height: 450,
    title: "...and hurt you..."
  },
  
  // {
  //   src: "https://media.tenor.com/jhsMAREYalUAAAAC/pacman-gaming.gif",
  //   original: "https://media.tenor.com/jhsMAREYalUAAAAC/pacman-gaming.gif",
  //   alt: "Nyom Nyom Nyom",
  //   width: 600,
  //   height: 350,
  //   title: "...nyom nyom nyom..."
  // },
  {
    src: "/assets/images/busypixels.webp",
    original: "/assets/images/busypixels.webp",
    alt: "BusyLittlePixels",
    width: 600,
    height: 450,
    title: "...PIXELS..."
  },

  {
    src: "/assets/images/desk.webp",
    original: "/assets/images/desk.webp",
    alt: "Desk",
    width: 650,
    height: 400,
    title: "All set?"
  },

  {
    src: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    original: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
    alt: "Desk",
    width: 500,
    height: 300,
    title: "Let's get pix-ical."
  }
];