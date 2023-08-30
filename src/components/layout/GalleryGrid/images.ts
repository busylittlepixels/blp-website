import { Image } from "react-grid-gallery";


export interface CustomImage extends Image {
  original: string;
  title?: string;
  description?:string;
}

export const images: CustomImage[] = [
  {
    src: "/assets/images/heart-sm.jpg",
    original: "/assets/images/heart.jpeg",
    width: 320,
    height: 174,
    // tags: [
    //   { value: "Nature", title: "Nature" },
    //   { value: "Flora", title: "Flora" },
    // ],
    title: "We're no strangers to love...."
  },
  {
    src: "/assets/images/devs.jpeg",
    original: "/assets/images/devs.jpeg",
    width: 320,
    height: 212,
    title: "...you know the rules and so do I..."
  },
  {
    src: "/assets/images/blurredscreen.jpeg",
    original: "/assets/images/blurredscreen.jpeg",
    width: 320,
    height: 212,
    title: "...a full commitment's what I'm thinking of...",
  },
  {
    src: "/assets/images/office2.jpeg",
    original: "/assets/images/office2.jpeg",
    width: 320,
    height: 213,
    title: "...you wouldn't get this from any other guy...",
  },
  {
    src: "assets/images/not-a-meeting.jpeg",
    original: "assets/images/not-a-meeting.jpeg",
    width: 320,
    height: 183,
    title: "...I just wanna tell you how I'm feeling...",
    description: "",
  },
  {
    src: "assets/images/monster.jpeg",
    original: "assets/images/monster.jpeg",
    width: 580,
    height: 350,
    title: "...gotta make you, understand..."
  },
  {
    src: "/assets/images/code2.jpeg",
    original: "/assets/images/code2.jpeg",
    width: 360,
    height: 190,
    title: "...never gonna give you up..."
  },
  {
    src: "/assets/images/code1.jpeg",
    original: "/assets/images/code1.jpeg",
    width: 320,
    height: 148,
    title: "...nnever gonna let you down..."
  },
  {
    src: "/assets/images/wireframe.jpg",
    original: "/assets/images/wireframe.jpg",
    width: 320,
    height: 213,
    title: "...never gonna run around and desert you..."
  },
  {
    src: "/assets/images/runner.jpg",
    original: "/assets/images/runner.jpg",
    alt: "Runner - NOT London",
    width: 350,
    height: 320,
    title: "...never gonna make you cry..."
  },
  {
    src: "/assets/images/beegee.jpeg",
    original: "/assets/images/beegee.jpeg",
    alt: "Red Zone - Paris",
    width: 350,
    height: 200,
    title: "...never gonna say goodbye..."
  },
  {
    src: "/assets/images/wireframes.png",
    original: "/assets/images/wireframes.png",
    alt: "Wood Glass",
    width: 200,
    height: 120,
    title: "...never gonna tell a lie..."
  },
  {
    src: "/assets/images/app.jpeg",
    original: "/assets/images/app.jpeg",
    alt: "We Like You Too",
    width: 750,
    height: 450,
    title: "...and hurt you..."
  },
  {
    src: "/assets/images/desk.jpeg",
    original: "/assets/images/desk.jpeg",
    alt: "Desk",
    width: 650,
    height: 400,
    title: "All set?"
  },
  {
    src: "/assets/images/busypixels.png",
    original: "/assets/images/busypixels.png",
    alt: "Desk",
    width: 1200,
    height: 900,
    title: "Let's get pix-ical."
  }
];


