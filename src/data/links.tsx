import { linksProps, linksType, persoProps } from "#types/typages";
import { FiGithub, FiInstagram, FiCodepen } from "react-icons/fi";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";



export const Typelinks: Record<string, linksType> = {
  INTERN: "intern",
  EXTERN: "extern",
};

export const Links: linksProps[] = [
  {
    label: "home",
    url: "/Contact/:id",
    type: "intern",
  },
];

// eslint-disable-next-line react-refresh/only-export-components
export const S_thibaut: persoProps  = {
    nav: [
      {
        label: "home",
        url: "st",
        type: "intern",
      },
    ],
  
    links: [
      {
        label: "phone",
        title: "07.70.39.00.83",
        url: "0770390083",
        type: "extern",
        icon: { icon: FaPhoneAlt },
        special: "tel",
        infos: "Appeler",
      },
      {
        label: "mail",
        title: "senechal.thibaut@hotmail.fr",
        url: "senechal.thibaut@hotmail.fr",
        type: "extern",
        icon: { icon: HiMail },
        special: "mail",
        infos: "Contacter",
      },
      {
        label: "site",
        title: "senechal-thibaut.netlify.app",
        url: "https://senechal-thibaut.netlify.app/",
        type: "extern",
        icon: { icon: TfiWorld },
        infos: "Découvrir",
      },
      {
        label: "github",
        title: "Nerion-1337",
        url: "https://github.com/Nerion-1337",
        type: "extern",
        icon: { icon: FiGithub },
        infos: "Découvrir",
      },
      {
        label: "codepen",
        title: "Nerion1337",
        url: "https://codepen.io/Nerion1337",
        type: "extern",
        icon: { icon: FiCodepen },
        infos: "Découvrir",
      },
      {
        label: "insta",
        title: "personnel_perf",
        url: "https://www.instagram.com/personnel_perf/",
        type: "extern",
        icon: { icon: FiInstagram },
        infos: "Découvrir",
      },
      {
        label: "linkedin",
        title: "Senechal Thibaut",
        url: "https://www.linkedin.com/in/thibaut-senechal-aabbbb199/",
        type: "extern",
        icon: { icon: FaLinkedinIn },
        infos: "Ajouter",
      },
    ],
  };