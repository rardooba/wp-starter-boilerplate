import settings from "./settings";
import { userOne, userTwo } from "./user";

// Need to import SCSS files (like other modules) in this JS entry point
import "../styles/styles.scss";

console.log("Index.js");
console.log(settings());
console.log(userOne());
console.log(userTwo());
