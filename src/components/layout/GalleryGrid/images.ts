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
    tags: [{ value: "Nature", title: "Nature" }],
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
    src: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    original: "https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg",
    width: 320,
    height: 148,
    tags: [{ value: "People", title: "People" }],
    description: "315H (gratisography.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
    original: "https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg",
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
    src: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    original: "https://c7.staticflickr.com/9/8785/28687743710_3580fcb5f0_b.jpg",
    alt: "Red Zone - Paris",
    width: 320,
    height: 113,
    tags: [{ value: "People", title: "People" }],
    description: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    original: "https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg",
    alt: "Wood Glass",
    width: 313,
    height: 320,
    description: "Wood Glass (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    original: "https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_b.jpg",
    width: 320,
    height: 213,
    description: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    original: "https://c4.staticflickr.com/9/8562/28897228731_ff4447ef5f_b.jpg",
    width: 320,
    height: 194,
    description: "Old Barn (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    original: "https://c2.staticflickr.com/8/7577/28973580825_d8f541ba3f_b.jpg",
    alt: "Cosmos Flower",
    width: 320,
    height: 213,
    description: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    original: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
    width: 320,
    height: 215,
    tags: [{ value: "People", title: "People" }],
    caption: "Untitled (moveast.me)",
  },
  {
    src: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    original: "https://c1.staticflickr.com/9/8056/28354485944_148d6a5fc1_b.jpg",
    width: 257,
    height: 320,
    caption: "A photo by 贝莉儿 NG. (unsplash.com)",
  }
];