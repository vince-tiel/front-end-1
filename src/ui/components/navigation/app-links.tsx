import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";


 const footerApplicationLinks : AppLinks [] = [
    {
        label: "Acceuil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Code monkey",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Formations",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "external",
    },
];

 const footerUsersLinks : AppLinks [] = [
    {
        label: "Mon espace",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Inscription",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/#",
        type: "internal",
    },
];
const footerInformationLinks : AppLinks [] = [
    {
        label: "CGU",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Confidentialité",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "À propos",
        baseUrl: "/#",
        type: "internal",
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "internal",
    },
];
export const footerSocialNetworksLinks : AppLinks [] = [
    {
        label: "Youtube",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "external",
        icon:RiYoutubeFill,
    },
    {
        label: "Linkedin",
        baseUrl: "https://www.linkedin.com",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "Slack",
        baseUrl: "https://coder-monkeys.slack.com",
        type: "external",
        icon: RiSlackFill,
    },
    
];

 export const footerLinks = [
    {
        label: "App",
        links:footerApplicationLinks,
    },
     {
        label: "Utilisateurs",
        links:footerUsersLinks,
    },
      {
        label: "Informations",
        links:footerInformationLinks,
    },
       {
        label: "Réseaux",
        links:footerSocialNetworksLinks,
    },
]