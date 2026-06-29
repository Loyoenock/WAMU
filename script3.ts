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
files.push("./src/main.tsx");

let classCounts: Record<string, number> = {};

files.forEach(file => {
  let content = fs.readFileSync(file, "utf8");
  let matches = content.match(/\b(text|bg|border|ring|ring-offset)-[a-zA-Z0-9_-]+/g);
  if (matches) {
    matches.forEach(m => {
      classCounts[m] = (classCounts[m] || 0) + 1;
    });
  }
});

Object.keys(classCounts).sort().forEach(k => {
  if (k.includes("brand")) console.log(`${k}: ${classCounts[k]}`);
});
