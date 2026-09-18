// Official KAGE links — update here and they propagate everywhere.
export const LINKS = {
  steam: "https://store.steampowered.com/app/4440650/KAGE/",
  discord: "https://discord.com/invite/xBqbWw7WbH",
};

// Videos are hosted on Vercel Blob instead of being committed to the repo
// (GitHub Release assets are served as forced downloads, which iOS Safari
// refuses to play inline as <video> sources).
const BLOB_HOST = "https://iddekzpax2sbldwo.public.blob.vercel-storage.com";
export const VIDEOS = {
  bow: `${BLOB_HOST}/bow-W63hglaIqAkvBUgScHClGDS4PuSKzd.mp4`,
  combat: `${BLOB_HOST}/combat-HO0681Ery5cXoIwT2IRcxf6i2hivi9.mp4`,
  dungeon: `${BLOB_HOST}/dungeon-lFuiOF5SY4Xkz4fzmJaqwDiTIt95sb.mp4`,
  heroReel: `${BLOB_HOST}/hero-reel-XI6nRRkPtyjj4YtHL82dI58K78z5rF.mp4`,
  katana: `${BLOB_HOST}/katana-AKdXy4NnGmE8XVf3dSLG9odEwY9uvE.mp4`,
  location: `${BLOB_HOST}/location-ikU7MVCHkCUhqJLYyX17VDw1GP3jpJ.mp4`,
  motorcycle: `${BLOB_HOST}/motorcycle-BkL2NrUemnD2kN5K0w7sQdyfq9TP1Q.mp4`,
  run: `${BLOB_HOST}/run-8E6I05DlfqO2m9zODNjcszNQ4gj2jW.mp4`,
  scythe: `${BLOB_HOST}/scythe-f2gw8t5vH59iXayxOOLgGGNpPqFHmw.mp4`,
  technics: `${BLOB_HOST}/technics-zYziHY7xdPBKjEwT80kPW1UEhSsJ3p.mp4`,
  trailer: `${BLOB_HOST}/trailer-CV8UsizqyvYSLNk8xJvyU3KpUhWMEo.mp4`,
};
