# Krypt-Tools
Krypt bot and dashboard.

## Railway deploy

1. Create a new Railway project from this GitHub repo.
2. Set required environment variables (for example `BOT_TOKEN`, `OWNER_ID`, and any optional IDs used by your bot).
3. Railway uses `railway.json` to run:
	- build: `npm install && npm run build`
	- start: `npm run start`
4. Health check endpoint: `/api/health`
