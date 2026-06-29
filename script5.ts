import fs from "fs";

// Fix Wishlist borders
let wishlist = fs.readFileSync("./src/components/Wishlist.tsx", "utf8");
wishlist = wishlist.replace(/border-brand-highlight/g, "border-brand-primary/50");
fs.writeFileSync("./src/components/Wishlist.tsx", wishlist, "utf8");

// Fix Navigation borders
let nav = fs.readFileSync("./src/components/Navigation.tsx", "utf8");
nav = nav.replace(/border-brand-highlight\/30/g, "border-brand-primary/50");
nav = nav.replace(/border-brand-highlight\/20/g, "border-brand-primary/20");
fs.writeFileSync("./src/components/Navigation.tsx", nav, "utf8");

// Fix Hero button hover text color
let hero = fs.readFileSync("./src/components/Hero.tsx", "utf8");
hero = hero.replace(/hover:text-brand-primary/g, "hover:text-brand-text-dark");
hero = hero.replace(/border-brand-highlight/g, "border-brand-primary");
fs.writeFileSync("./src/components/Hero.tsx", hero, "utf8");

console.log("Fixed borders");
