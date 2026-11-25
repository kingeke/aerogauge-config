# AeroGauge update config

Remote "force update" rules for the AeroGauge app, published with GitHub Pages
at <https://kingeke.github.io/aerogauge-config/>. The app reads
`config.json` from there.

**To change the rules, edit [`src/config.ts`](src/config.ts) and push to `main`.**
GitHub Actions builds the site and republishes `config.json` (about a minute).

```bash
npm install
npm run dev     # http://localhost:5173/aerogauge-config/  (and /config.json)
npm run build   # dist/ including config.json
```
