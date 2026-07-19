import "./style.css";
import { Navbar } from "./components/navbar/navbar.js";
import { Hero } from "./components/Hero/hero.js";
import { About } from "./components/About/about.js";
import{Skills} from "./components/Skills/skills.js";
import {Certificates} from "./components/certificate/ce.js";
import {Projects } from "./components/Project/project.js";
import { Contact } from "./components/contact/contact.js";


document.querySelector("#app").innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${About()}
  ${Skills()}
  ${Certificates()}
  ${Projects()}
  ${Contact()}

`;
initPortrait();