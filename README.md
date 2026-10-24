# Sunday Roast Studio site

Static HTML. No build step, no dependencies. Each page carries its own styles, and fonts and images live in `assets/`.

## Pages
`index.html`, `services/`, `services/<name>/` (four service pages), `case-studies/`, `about/`, `contact/`, `privacy-policy/`, `404.html`.

## Deploy on GitHub Pages
1. Push the contents of this folder to the root of a repository.
2. Settings > Pages > Source: "Deploy from a branch", branch `main`, folder `/ (root)`.
3. All links are relative, so it works at `username.github.io/repo/` and on a custom domain.
4. Custom domain: the `CNAME` file (sundayroast.studio) is included. Also set the custom domain under Settings > Pages.

## Still to do
- Brand Foundations, Brand Strategy, Marketing Strategy and Sales Strategy have their full copy. Privacy Policy shows `[Page copy to be added.]`.
- The contact form posts to a Google Apps Script web app (URL in `contact/index.html`). Send a test enquiry after deploying to confirm it arrives.
- `sitemap.xml` and `robots.txt` assume the domain `https://sundayroast.studio` (no www). Edit them if the domain differs.
- The favicon is `favicon.svg`: the /sr mark in ink, switching to cream in dark mode. `favicon.ico`, `favicon.png` and `apple-touch-icon.png` are fallbacks with the mark on the site's grey (#f3f3f3). Source files live in `_tools/source`.
- `404.html` uses root-relative paths (`/`), so it assumes a custom domain at the site root; on a project URL (`username.github.io/repo/`) its styling and links will break.
- Old Wix URLs are forwarded by small stub pages (see `REDIRECTS` in `_tools/convert.py`). Currently: /services/marketing-roadmap to /services/marketing-strategy/, /services/vision-workshop to /services/brand-foundations/, /services/sales-systems to /services/sales-strategy/, /copy-of-home to the homepage and /projects to /case-studies/. They are left out of the sitemap. Add an entry to `REDIRECTS` for any other old address.
- Canela Condensed is a commercial font: check your licence covers web use before publishing the files in a public repo.
