# Personal security portfolio (Jekyll)

## Publish on GitHub Pages
(See the steps in the chat; short version below.)
1. Create a repo named exactly `CostasPent.github.io` and push these files to `main`.
2. Settings > Pages > Deploy from a branch > `main` / root.
3. Put your CV at `assets/KostasPentarakis_Resume.pdf`.
4. Site appears at https://costaspent.github.io within a minute or two.

## Add a writeup
Copy `_templates/writeup-template.md` to `_posts/YYYY-MM-DD-short-title.md`, edit, commit, push.

## Fill in your details (empty values stay hidden)
- Profiles (HTB, PortSwigger, ...): `_data/profiles.yml`. Fill `handle` and `url`; they show as `short://handle` under `$ ls profiles`
- Location, availability, work mode: `_data/availability.yml`
- Skills: `_data/skills.yml` (keep it honest, move items between groups as you learn; add `languages` to show it)
- Progress numbers: `_data/stats.yml` (set `show: true`)

## Writeup fields
`summary` (one line in lists), `pinned: true` (shown first on home and writeups), `severity`.
For a full mock pentest report use `_templates/pentest-report-template.md`.

## Edit content
- Projects: the /projects page is hidden until you have one. Add it to `_data/projects.yml`, then move `_templates/projects.html` to the repo root.
- Progress numbers on the home page: `_data/stats.yml` (set `show: true`)
- Pages: `index.html`, `experience.html`, `education.html`

## Preview locally (before publishing anything)
Linux or WSL (Ubuntu):
```
sudo apt install ruby-full build-essential zlib1g-dev
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```
Open http://localhost:4000. Saving a file refreshes the page.
Docker instead: `docker run --rm -p 4000:4000 -v "$PWD":/srv/jekyll -it jekyll/jekyll jekyll serve`

## Writeup rules
Labs, retired machines and finished CTFs only. Never publish flags, passwords, or anything about live systems. Do not post active Hack The Box machines.
