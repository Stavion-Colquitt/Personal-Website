# stavioncolquitt.com

Personal site and project aggregator. Built 2026.

## Stack

Pure HTML + CSS. No build step. No framework. Hosted on GitHub Pages with custom domain via Cloudflare DNS.

## Local dev (VS Code)

1. Open this folder in VS Code: `File → Open Folder...` → select `aggregator/`
2. Install the recommended extensions when prompted (Live Server is the important one).
3. Right-click `index.html` → `Open with Live Server`. Browser opens at `http://localhost:5500/`, auto-refreshes on save.

If you don't want extensions:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## File structure

```
aggregator/
├── index.html       # Home page (Work, Music, Study, Connect)
├── about.html       # About me page (bio, photo slots, honors)
├── styles.css       # All shared styling, CSS variables at top
├── CNAME            # GitHub Pages custom domain
├── .vscode/         # Editor defaults
├── .gitignore
└── README.md
```

## Editing tips

- **Colors** live as CSS variables at the top of `styles.css` under `:root`. Change `--pink`, `--cyan`, `--violet`, `--gold`, `--lime`, `--coral` to recolor the whole site.
- **Each section** on the home page has its own accent color via `--accent`. To recolor a section, edit `#work { --accent: var(--cyan); }` etc.
- **Photo placeholders** on the About page are styled blocks with the filename and dimensions baked in. Replace each `<div class="photo-placeholder">...</div>` with `<img src="assets/your-photo.jpg" alt="..." loading="lazy">` when you're ready.

## Deploy to GitHub Pages

1. Push this folder to a repo (recommended name: `stavion-colquitt.github.io` for the username repo, or any name if you'll enable Pages on it).
2. In Cloudflare DNS for `stavioncolquitt.com`, add these `A` records pointing at GitHub Pages:
   ```
   A    @    185.199.108.153
   A    @    185.199.109.153
   A    @    185.199.110.153
   A    @    185.199.111.153
   ```
3. In the repo on GitHub: `Settings → Pages → Custom domain` → enter `stavioncolquitt.com`. GitHub issues a Let's Encrypt cert automatically within 10–30 min.
4. Site goes live at `stavioncolquitt.com`.

## Roadmap

- Replace photo placeholders with real images
- Add a Writing section
- Build the auto-update tool (poll GitHub + Spotify + YouTube weekly, draft PRs with new content)

## License

Site content © Stavion Colquitt. Code structure free to fork and adapt — credit appreciated, not required.
