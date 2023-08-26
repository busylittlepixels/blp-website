import { Image } from "react-grid-gallery";


export interface CustomImage extends Image {
  original: string;
  title?: string;
  description?:string;
}

export const images: CustomImage[] = [
  {
    src: "/assets/images/heart.jpeg",
    original: "/assets/images/heart.jpeg",
    width: 320,
    height: 174,
    // tags: [
    //   { value: "Nature", title: "Nature" },
    //   { value: "Flora", title: "Flora" },
    // ],
    title: "Never Gonna Give You Up",
    description: "We're no strangers to love \n You know the rules and so do I (do I) \n A full commitment's what I'm thinking of \n You wouldn't get this from any other guy"
  },
  {
    src: "/assets/images/devs.jpeg",
    original: "/assets/images/devs.jpeg",
    width: 320,
    height: 212,
    title: "Hombre",
    description: "...You wouldn't get this from any other guy",
  },
  {
    src: "/assets/images/blurredscreen.jpeg",
    original: "/assets/images/blurredscreen.jpeg",
    width: 320,
    height: 212,
    title: "Typescript",
    // tags: [{ value: "Typescript", title: "Payload CMS" }],
    description: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    src: "/assets/images/office2.jpeg",
    original: "/assets/images/office2.jpeg",
    width: 320,
    height: 213,
    title: "Office",
    description: "",
  },
  {
    src: "assets/images/not-a-meeting.jpeg",
    original: "assets/images/not-a-meeting.jpeg",
    width: 320,
    height: 183,
    title: "Not a Meeting",
    description: "",
  },
  {
    src: "assets/images/monster.jpeg",
    original: "assets/images/monster.jpeg",
    width: 580,
    height: 350,
    // tags: [{ value: "Nature", title: "Nature" }],
    description: "8H (gratisography.com)",
  },
  {
    src: "/assets/images/code2.jpeg",
    original: "/assets/images/code2.jpeg",
    width: 360,
    height: 190,
    description: "286H (gratisography.com)",
  },
  {
    src: "/assets/images/code1.jpeg",
    original: "/assets/images/code1.jpeg",
    width: 320,
    height: 148,
    // tags: [{ value: "People", title: "People" }],
    description: "315H (gratisography.com)",
  },
  {
    src: "/assets/images/wireframe.jpg",
    original: "/assets/images/wireframe.jpg",
    width: 320,
    height: 213,
    description: "201H (gratisography.com)",
  },
  {
    src: "/assets/images/runner.jpg",
    original: "/assets/images/runner.jpg",
    alt: "Runner - NOT London",
    width: 248,
    height: 320,
    description: "Runner",
  },
  {
    src: "/assets/images/beegee.jpeg",
    original: "/assets/images/beegee.jpeg",
    alt: "Red Zone - Paris",
    width: 350,
    height: 200,
    // tags: [{ value: "People", title: "People" }],
    description: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
  },
  {
    src: "/assets/images/wireframes.png",
    original: "/assets/images/wireframes.png",
    alt: "Wood Glass",
    width: 200,
    height: 120,
    description: "Wireframes",
  },
  {

    src: "/assets/images/desk.jpeg",
    original: "/assets/images/desk.jpeg",
    alt: "Desk",
    width: 650,
    height: 400,
    description: "Desk"
  },
  {
    src: "/assets/images/app.jpeg",
    original: "/assets/images/app.jpeg",
    alt: "We Like You Too",
    width: 750,
    height: 450,
    description: "Nerd Friends",
  }
];

