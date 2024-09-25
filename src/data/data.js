// payment assets
import pay1 from "../assets/images/pay-01.webp";
import pay2 from "../assets/images/pay-02.webp";
import pay3 from "../assets/images/pay-03.webp";
import pay4 from "../assets/images/pay-04.webp";
import pay5 from "../assets/images/pay-05.webp";
import pay6 from "../assets/images/pay-06.webp";
import pay7 from "../assets/images/pay-07.webp";
import pay8 from "../assets/images/pay-08.webp";
import pay9 from "../assets/images/pay-09.webp";
// social media
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";
export const aboutBrandsClub = {
  title: "about the company",
  details: [
    {
      path: "/about",
      title: "about us",
    },
    {
      path: "/contact",
      title: "contact us",
    },
    {
      path: "/blogs",
      title: "blogs",
    },
  ],
};
export const helpCenter = {
  title: "help center",
  details: [
    {
      path: "/faq",
      title: "faqs",
    },
    {
      path: "/terms-conditions",
      title: "terms and conditions",
    },
    {
      path: "/prvicay-policy",
      title: "privacy and policy",
    },
  ],
};
export const socials = {
  title: "follow us",
  details: [
    {
      path: "https://instagram.com",
      icon: <FaFacebookF size={25} />,
    },
    {
      path: "https://facebook.com",
      icon: <FaInstagram size={25} />,
    },
    {
      path: "https://x.com",
      icon: <FaTwitter size={25} />,
    },
    {
      path: "https://tiktok.com",
      icon: <FaTiktok size={25} />,
    },
    {
      path: "https://snapchat.com",
      icon: <FaSnapchatGhost size={25} />,
    },
  ],
};
export const payments = {
  title: "accepted",
  details: [pay1, pay2, pay3, pay4, pay5, pay6, pay7, pay8, pay9],
};
export const locations = [
  {
    title: "egypt",
    value: 1,
  },
  {
    title: "united arab emarats",
    value: 2,
  },
  {
    title: "saudi arabia",
    value: 3,
  },
];
