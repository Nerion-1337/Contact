import { IconType } from "react-icons";

export interface iconProps {
  icon: IconType;
}
//
//sécurisé données
export type linksType = "intern" | "extern";
//
//
export interface linksProps {
  label: string;
  title?: string;
  url: string;
  type: linksType;
  icon?: iconProps;
  special?: string;
  infos?: string;
}
//
export interface persoProps {
  nav: linksProps[];
  links: linksProps[];
}