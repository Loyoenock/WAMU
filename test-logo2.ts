import fs from 'fs';
import { PNG } from 'pngjs';

fs.createReadStream('public/wamu-logo-v1.png')
  .pipe(new PNG())
  .on('parsed', function() {
    const counts = {};
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const idx = (this.width * y + x) << 2;
        if (this.data[idx+3] > 0) { // non-transparent
          const hex = '#' + [this.data[idx], this.data[idx+1], this.data[idx+2]].map(v => v.toString(16).padStart(2, '0')).join('');
          counts[hex] = (counts[hex] || 0) + 1;
        }
      }
    }
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
    console.log('Top colors:', sorted.slice(0, 5));
  });
