import fs from "fs";
import path from "path";

function walkSync(dir: string, filelist: string[] = []): string[] {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
}

const files = walkSync("./src/components").filter(f => f.endsWith(".tsx"));
files.push("./src/App.tsx");

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");

  // Fix the bad replacements from script2
  content = content.replace(/text-brand-light-1/g, "text-brand-text-dark");
  content = content.replace(/ring-offset-brand-light-1/g, "ring-offset-brand-light-1");

  // Fix text-brand-highlight which has poor contrast on light backgrounds
  // Change it to text-brand-primary
  content = content.replace(/text-brand-highlight/g, "text-brand-primary");
  
  // Fix text-brand-mist in group-hover and other bad spots (except BackToTop where it might be ok, but let's just make sure text is dark when on light)
  content = content.replace(/group-hover:text-brand-mist/g, "group-hover:text-brand-text-dark");
  content = content.replace(/hover:text-brand-mist/g, "hover:text-brand-text-dark");

  // Fix BackToTop contrast text-brand-mist on bg-brand-grove (actually that's ok, but let's make it text-brand-light-1 for max contrast)
  if (file.includes("BackToTop")) {
    content = content.replace(/text-brand-mist/g, "text-brand-light-1");
  }

  // text-brand-accent is #1D9E75. It might be ok but text-brand-primary is better for contrast
  content = content.replace(/text-brand-accent/g, "text-brand-primary");

  // Any bg-brand-highlight needs dark text
  // Let's check Wishlist and Hero where buttons are
  // Wishlist has: className="... bg-brand-highlight text-brand-text-dark ..." which is good now that we replaced text-brand-light-1
  // HowItWorks has: className="... bg-brand-highlight text-brand-text-dark ..." which is good

  // Fix placeholder colors to be darker
  content = content.replace(/placeholder:text-brand-midnight\/60/g, "placeholder:text-brand-text-dark/60");

  fs.writeFileSync(file, content, "utf8");
});

console.log("Fixed contrast issues.");
