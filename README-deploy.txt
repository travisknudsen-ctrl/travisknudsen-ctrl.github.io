DEPLOYING TO GITHUB PAGES
=========================
Option A — User pages site (recommended if you want username.github.io):
1. Create a new GitHub repository named exactly: <your-username>.github.io
2. Clone it locally:
   git clone https://github.com/<your-username>/<your-username>.github.io
3. Copy the files from this zip into the repository root (index.html at root).
4. Commit and push:
   git add .
   git commit -m "Initial net-art site — Atlas of Small Things"
   git push origin main
5. Wait a minute — your site should appear at:
   https://<your-username>.github.io/

Option B — Project pages (if you prefer to keep repo name different):
1. Create a normal repository (any name).
2. Push the site to the 'gh-pages' branch or enable GitHub Pages in the repository settings and choose the branch 'main' (root).
3. GitHub will give you a link like:
   https://<your-username>.github.io/<repo-name>/

TESTING LOCALLY
===============
- Open index.html in a browser (double-click file). On some browsers, CORS blocks may affect fetches (we use none).
- To test on phone: host locally with a simple server:
  python -m http.server 8000
  Then visit http://<your-computer-ip>:8000 on your phone's browser (same Wi-Fi).

NOTES
=====
- Replace <your-username> with your GitHub username wherever used.
- The site is intentionally minimal and self-contained (no external images) to make deployment simple.
- If you want, rename pages or edit lyrics; all links are relative.
