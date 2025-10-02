# Yusuf Abdulsobur — Portfolio (Ready to Deploy)

This is a simple portfolio website for **Yusuf Abdulsobur**. It fetches public GitHub repositories from the `soburyusuf` account and displays them on the Projects section.

## How to deploy with GitHub Pages

1. Create a repository on GitHub (for example: `Yusuf-Abdulsobur-Portfolio`) or use your existing one.
2. Upload the files from this package to the repository root (`index.html`, `style.css`, `script.js`, `README.md`).
3. Commit & push to the `main` branch.
4. In your repository on GitHub, go to **Settings → Pages**.
   - Under **Source**, select branch `main` and folder `/ (root)`.
   - Save.
5. Wait a minute or two, then visit: `https://<your-github-username>.github.io/<repo-name>/`

## Notes & tips

- The site uses GitHub's public API to list repositories. For a large number of requests, you may encounter rate limits from GitHub.
- To highlight only particular projects, edit `script.js` and filter repos before rendering.
- To add screenshots, create an `assets/` folder and add image tags to the project cards in `index.html` / `script.js`.

Built for Yusuf Abdulsobur — enjoy!