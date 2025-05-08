import bricks from "../assets/UnStructured/bricks.jpg";
import grout from "../assets/UnStructured/grout.jpg";
import interlocks from "../assets/UnStructured/interlocks.jpg";
import jiingad from "../assets/UnStructured/jiingad.jpg";
import Riinji from "../assets/UnStructured/Riinji.jpg";
// import sanitaryware from "../assets/UnStructured/Sanitaryware.jpg";

import sanitaryware from "../assets/UnStructured/sanitaryware.jpg";
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
    img: tiles,
    alt: "Tiles",
    description: "Decorative tiles for floors and walls",
  },
  {
    img: woodenDoor,
    alt: "Wooden Door",
    description: "Strong wooden doors with elegant finish",
  },
  {
    img: interlocks,
    alt: "Interlocks",
    description: "Durable interlocks for outdoor paving solutions",
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
    {
      img: steelbar,
      alt: "Steelbars",
      description: "Durable steel bars for structural support",
    },
    {
      img: Cement,
      alt: "Cement",
      description: "High-strength cement for solid foundations",
    },
    {
      img: woods,
      alt: "Woods",
      description: "Quality timber for structural woodwork",
    },
    {
      img: plywood,
      alt: "Plywood",
      description: "Multi-purpose plywood for interior construction",
    },
  ],
  "Non-Structural": [
    {
      img: tiles,
      alt: "Tiles",
      description: "Decorative tiles for floors and walls",
    },
    {
      img: bricks,
      alt: "Bricks",
      description: "Clay bricks for reliable wall construction",
    },
    {
      img: woodenDoor,
      alt: "Wooden Door",
      description: "Strong wooden doors with elegant finish",
    },
    {
      img: sanitaryware,
      alt: "Sanitary Ware",
      description: "Modern sanitaryware for clean bathroom spaces",
    },
    {
      img: tileAdhe,
      alt: "Tile Adhesive",
      description: "Reliable adhesive for lasting tile installation",
    },
    {
      img: grout,
      alt: "Grout",
      description: "Smooth grout for perfect tile joints",
    },
    {
      img: spacer,
      alt: "Tile spacer",
      description: "Accurate spacers for uniform tile gaps",
    },
    {
      img: stepTiles,
      alt: "Step Tiles",
      description: "Slip-resistant tiles for stairs application",
    },
    {
      img: interlocks,
      alt: "Interlocks",
      description: "Durable interlocks for outdoor paving solutions",
    },
    {
      img: Riinji,
      alt: "Paints",
      description: "Premium paints for vibrant wall finishes",
    },
    {
      img: jiingad,
      alt: "corrugated",
      description: "Corrugated sheets for durable roofing needs",
    },
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
import { FaUsersCog, FaThumbsUp } from "react-icons/fa";

export const features = [
  {
    icon: FaUsersCog,
    title: "Who we are",
    description:
      "Innovative, reliable, community-focused, ethical, collaborative, visionary, dedicated.",
  },
  {
    icon: FaThumbsUp,
    title: "Why Choose Us?",
    description: "Trusted solutions, proven results, people-first approach.",
  },
];
