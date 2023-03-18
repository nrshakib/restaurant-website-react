import { BiMap } from "react-icons/bi";
import { CiBurger } from "react-icons/ci";
import { GiBowlOfRice, GiCakeSlice } from "react-icons/gi";
import { FaIceCream } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { MdExplore, MdContactPage } from "react-icons/md";

import recipe1 from "./images/recipe1.png";
import recipe2 from "./images/recipe2.png";
import recipe3 from "./images/recipe3.png";
import recipe4 from "./images/recipe4.png";
import recipe5 from "./images/recipe5.png";
import recipe6 from "./images/recipe6.png";

import payment1 from "./images/payment1.png";
import payment2 from "./images/payment2.png";
import payment3 from "./images/payment3.png";
import payment4 from "./images/payment4.png";

export const heroIcons = [
  <CiBurger />,
  <FaIceCream />,
  <GiCakeSlice />,
  <GiBowlOfRice />,
];

export const recipes = [
  {
    id: 1,
    image: recipe1,
    name: "Recipe Name",
    price: "$20",
  },
  {
    id: 2,
    image: recipe2,
    name: "Recipe Name",
    price: "$15",
  },
  {
    id: 3,
    image: recipe3,
    name: "Recipe Name",
    price: "$12",
  },
  {
    id: 4,
    image: recipe4,
    name: "Recipe Name",
    price: "$25",
  },
  {
    id: 5,
    image: recipe5,
    name: "Recipe Name",
    price: "$14",
  },
  {
    id: 6,
    image: recipe6,
    name: "Recipe Name",
    price: "$23",
  },
];

export const footerSocials = [<BsFacebook />, <BsInstagram />, <BsTwitter />];
export const footerContacts = [
  {
    id: 1,
    icon: <HiOutlinePhone />,
    text: "+88-010-000-111",
  },
  {
    id: 2,
    icon: <HiOutlineMail />,
    text: "abc11@gmail.com",
  },
  {
    id: 3,
    icon: <BiMap />,
    text: "Ring Road,Dhaka",
  },
];

export const mainMenu = [
  {
    id: 1,
    href: "home",
    text: "Home",
    icon: <AiFillHome />,
  },
  {
    id: 2,
    href: "about",
    text: "About",
    icon: <MdExplore />,
  },
  {
    id: 3,
    href: "recipe",
    text: "Recipe",
    icon: <GiBowlOfRice />,
  },
  {
    id: 4,
    href: "contact",
    text: "Contact",
    icon: <MdContactPage />,
  },
];

export const explores = ["Drinks", "Burger", "Salad", "Breakfast", "Dinner"];

export const payements = [payment1, payment2, payment3, payment4];