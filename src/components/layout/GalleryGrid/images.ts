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
    // tags: [
    //   { value: "Nature", title: "Nature" },
    //   { value: "Flora", title: "Flora" },
    // ],
    title: "We're no strangers to love...."
  },
  {
    src: "/assets/images/devs.webp",
    original: "/assets/images/devs.webp",
    width: 320,
    height: 212,
    title: "...you know the rules and so do I..."
  },
  {
    src: "/assets/images/blurredscreen.webp",
    original: "/assets/images/blurredscreen.webp",
    width: 320,
    height: 212,
    title: "...a full commitment's what I'm thinking of...",
  },
  {
    src: "/assets/images/office2.webp",
    original: "/assets/images/office2.webp",
    width: 320,
    height: 213,
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
    src: "/assets/images/code1.webp",
    original: "/assets/images/code1.webp",
    width: 320,
    height: 148,
    title: "...nnever gonna let you down..."
  },
  {
    src: "/assets/images/design.webp",
    original: "/assets/images/design.webp",
    width: 320,
    height: 213,
    title: "...never gonna run around and desert you..."
  },
  {
    src: "/assets/images/runner.webp",
    original: "/assets/images/runner.webp",
    alt: "Runner - NOT London",
    width: 350,
    height: 320,
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
    src: "/assets/images/coffee.webp",
    original: "/assets/images/coffee.webp",
    alt: "Coffee Makes Code",
    width: 200,
    height: 120,
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
  {
    src: "/assets/images/desk.webp",
    original: "/assets/images/desk.webp",
    alt: "Desk",
    width: 650,
    height: 400,
    title: "All set?"
  },
  {
    src: "/assets/images/busypixels.webp",
    original: "/assets/images/busypixels.webp",
    alt: "Desk",
    width: 1200,
    height: 900,
    title: "Let's get pix-ical."
  }
];


