# Deployment and Going Live - Activity 12

Deploy your Quest Tracker app to the internet using Vercel.

## Getting Started

### Quick Start (30 Seconds)

1. Open this folder in your terminal
2. Run:
   ```bash
   npm install
   npm start
   ```
3. Open http://localhost:3000 to see the deployment guide

### What's Already Set Up

**65% of the work is done for you:**
- Vercel deployment config (`vercel.json`)
- Serverless function entry point (`api/index.js`)
- Health check script (working)
- Environment variable templates (ready to use)

**Your tasks (the remaining 35%):**
- Configure environment variables for production
- Complete the deployment script TODOs
- Deploy and test your app
- Set up monitoring (challenge)

## How Vercel Deployment Works

```
Your Code (GitHub)
       |
       v
  Vercel detects changes
       |
       v
  Builds your project
       |
       v
  Deploys to the internet
       |
       v
  Live at https://your-app.vercel.app
```

**Key concept:** Every time you push to GitHub, Vercel automatically builds and deploys your app. No manual steps needed after the initial setup.

## Project Structure

```
activity-12-deployment/
├── api/
│   └── index.js              # Vercel serverless entry point
├── frontend/
│   ├── server.js             # Express app (deployment guide)
│   └── .env.example          # Environment variable template
├── backend/
│   └── .env.example          # Backend env template
├── scripts/
│   ├── deploy-frontend.js    # CLI deployment script
│   ├── deploy-backend.js     # Explains unified deployment
│   └── health-check.js       # Post-deployment testing
├── vercel.json               # Vercel configuration
├── package.json              # Scripts and dependencies
└── README.md                 # This file
```

## Tasks to Complete

### TODO 1: Set Up Your Vercel Account (Easy)
1. Go to [vercel.com](https://vercel.com) and sign up with your GitHub account
2. That's it! Your GitHub repos are automatically connected

### TODO 2: Deploy Your App (Easy)
1. Push your code to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Click "Import Git Repository"
4. Select your repository
5. Click "Deploy"
6. Wait ~30 seconds — your app is live!

### TODO 3: Configure Environment Variables (Medium)
In your Vercel dashboard:
1. Go to your project > Settings > Environment Variables
2. Add any variables your app needs:
   ```
   NODE_ENV = production
   ```
3. Redeploy (Vercel > Deployments > Redeploy)

### TODO 4: Complete the Code TODOs (Medium)
Look for `TODO` markers in these files:
- `backend/.env.example` — TODO 1: Environment Configuration
- `scripts/deploy-backend.js` — TODO 2: Build Process
- `scripts/deploy-frontend.js` — TODO 3: Deployment Script
- `scripts/health-check.js` — TODO 4: Error Monitoring

### TODO 5: Set Up Health Monitoring (Challenge)
- Run `npm run health-check https://your-app.vercel.app`
- Set up [UptimeRobot](https://uptimerobot.com/) for free uptime alerts
- Optionally add [Sentry](https://sentry.io/) for error tracking

## Deployment Commands

```bash
# View deployment guide locally
npm start

# Deploy via CLI (requires: npm install -g vercel)
npm run deploy

# Preview deploy (staging)
npm run deploy:preview

# Run health checks on deployed app
npm run health-check https://your-app.vercel.app
```

## Testing Your Deployment

After deploying, check:
- [ ] Site loads in your browser
- [ ] No errors in browser console (F12 > Console)
- [ ] All features work (quests, players, categories)
- [ ] Health check script passes
- [ ] HTTPS padlock icon shows in browser

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check build logs in Vercel dashboard |
| Page shows "404" | Make sure `vercel.json` exists in project root |
| Environment variables not working | Add them in Vercel dashboard, then redeploy |
| Slow loading | Check Vercel Analytics in your dashboard |

## Success Criteria

Your deployment is complete when:
- App is live on a `.vercel.app` URL
- Health checks pass
- No console errors in production
- You can share the URL and others can access it

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Express.js on Vercel](https://vercel.com/guides/using-express-with-vercel)
- [Environment Variables on Vercel](https://vercel.com/docs/environment-variables)
- [UptimeRobot](https://uptimerobot.com/) — Free uptime monitoring

Happy deploying!
