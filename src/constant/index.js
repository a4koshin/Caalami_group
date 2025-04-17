import bricks from "../assets/UnStructured/bricks.jpg";
import grout from "../assets/UnStructured/grout.jpg";
import interlocks from "../assets/UnStructured/interlocks.jpg";
import jiingad from "../assets/UnStructured/jiingad.jpg";
import Riinji from "../assets/UnStructured/Riinji.jpg";
import sanitaryware from "../assets/UnStructured/Sanitaryware.jpg";

// import sanitaryware from "../assets/UnStructured/sanitaryware.jpg";

import spacer from "../assets/UnStructured/spacer.jpg";
import stepTiles from "../assets/UnStructured/stepTiles.jpg";
import tileAdhe from "../assets/UnStructured/TileAdhesive.jpg";
import tiles from "../assets/UnStructured/tiles.jpg";
import woodenDoor from "../assets/UnStructured/woodenDoor.png";

// Structured Products
import plywood from "../assets/structured/plywoods.jpg";
import steelbar from "../assets/structured/steelbars.jpg";
import woods from "../assets/structured/woods.jpg";
import Cement from "../assets/structured/Cement.jpg";

// Footer icons

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// About Images

//Navigation Bar
export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About us",
    url: "/about",
  },
  {
    id: "2",
    title: "Our Products",
    url: "/product",
  },
  {
    id: "3",
    title: "Contact us",
    url: "/contact",
  },
];

export const Specialproducts = [
  {
    title: "Ceramic Tiles",
    description:
      "Available in A, B, and C grades with sizes like 20x20 cm, 25x33 cm, 33x33 cm, and 60x60 cm. Ideal for both floor and wall applications.",
    icon: "🧱",
  },
  {
    title: "Cement",
    description:
      "Oman Cement — trusted for residential, commercial, and infrastructure use. Known for its strength and consistency.",
    icon: "🏗️",
  },
  {
    title: "Paints",
    description:
      "Offered in sizes from 0.90L to 5 USG in Black, Yellow, White, and Red. Perfect for vibrant, long-lasting finishes indoors and outdoors.",
    icon: "🎨",
  },
];

// About us
export const ourMission = [
  {
    id: "0",

    title: "Our Mission",
    text: "To deliver affordable, high-quality construction products.We serve with integrity, speed, and care.Our focus is on long-term relationships and consistent value.We support builders, homeowners, and developers alike.Through service and innovation, we drive Somalia forward",
  },
];

export const ourVision = [
  {
    id: "1",
    title: "Our Vision",
    text: "To be Somalia’s leading provider of sustainable building materials.We envision a future shaped by quality, trust, and accessibility.Our goal is to empower communities through reliable construction.We aim to expand our reach across all regions.We build not just structures, but a stronger nation.",
  },
];

// Products
export const products = {
  Structural: [
    { img: steelbar, alt: "Steelbars" },
    { img: Cement, alt: "Cement" },
    { img: woods, alt: "Woods" },
    { img: plywood, alt: "Plywood" },
  ],
  "Non-Structural": [
    { img: tiles, alt: " Tiles" },
    { img: bricks, alt: "Bricks " },
    { img: woodenDoor, alt: "Wooden Door" },
    { img: sanitaryware, alt: "Sanitary Ware" },
    { img: tileAdhe, alt: "Tile Adhesive" },
    { img: grout, alt: "Grout" },
    { img: spacer, alt: "Tile spacer" },
    { img: stepTiles, alt: "Step Tiles" },
    { img: interlocks, alt: "Interlocks" },
    { img: Riinji, alt: "Paints" },
    { img: jiingad, alt: "corrugated" },
  ],
};

export const FooterIcons = [
  {
    id: "0",
    icon: FaMapMarkerAlt,
    alt: "Bakaro Market, 2nd Street, near nationLink, Mogadishu, Somalia",
  },
  {
    id: "1",
    icon: FaPhoneAlt,
    alt: "+252-614-113300",
  },
  {
    id: "2",
    icon: FaEnvelope,
    alt: "caalami@gmail.com",
  },
];
