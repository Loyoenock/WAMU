import fs from 'fs';
import { PNG } from 'pngjs';

fs.createReadStream('public/wamu-logo-v1.png')
  .pipe(new PNG())
  .on('parsed', function() {
    const idx = 0; // Top left pixel
    console.log(`Top Left: rgba(${this.data[idx]}, ${this.data[idx+1]}, ${this.data[idx+2]}, ${this.data[idx+3]})`);
    
    // Convert to hex
    const hex = '#' + [this.data[idx], this.data[idx+1], this.data[idx+2]].map(x => x.toString(16).padStart(2, '0')).join('');
    console.log(`Hex: ${hex}`);
  });
