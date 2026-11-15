const z = require('zlib'), f = require('fs'), p = require('path');
const parts = ["p1.bin","p2.bin","p3.bin","p4.bin","p5.bin","p6.bin","p7.bin","p8.bin","p9.bin","p10.bin","p11.bin"];
const j = JSON.parse(z.brotliDecompressSync(Buffer.concat(parts.map(x => f.readFileSync(x)))).toString('utf8'));
for (const [k, v] of Object.entries(j)) { const d = p.join('public', k); f.mkdirSync(p.dirname(d), { recursive: true }); f.writeFileSync(d, typeof v === 'string' ? v : Buffer.from(v.b64, 'base64')); }
console.log('Atlas files:', Object.keys(j).length);
