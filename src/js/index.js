import settings from "./settings";
import { userOne, userTwo } from "./user";

// Need to import SCSS files (like other modules) in this JS entry point
import "../styles/styles.scss";

// Use of image - path from src folder
import photoOne from "../assets/imgs/photo_01.jpg";
console.log(photoOne);

console.log("Index.js");
console.log(settings());
console.log(userOne());
console.log(userTwo());
