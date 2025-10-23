# Startup Deployment Guide - Varahi

## Vercel Free Tier Deployment (Recommended)

### Step 1: Prepare Repository
```bash
git add .
git commit -m "feat: production-ready with Vercel config"
git push origin main
```

### Step 2: Deploy to Vercel (Free)
1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub (free)
3. Import `varahi` repository
4. Deploy automatically (no config needed)

### Step 3: Add Custom Domain (Free)
1. Vercel Dashboard → Domains
2. Add your domain: `varahi.com`
3. Update DNS with your domain provider:
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com
4. SSL certificate auto-generated

### Step 4: Environment Variables
Add in Vercel Dashboard → Settings → Environment Variables:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

## Free Tier Limits
- ✅ 100GB bandwidth/month (10K+ visitors)
- ✅ Unlimited deployments
- ✅ Custom domain + SSL
- ✅ Basic analytics

## When to Upgrade
- Monthly visitors > 10,000
- Need advanced analytics
- Team collaboration features
- Currently: $20/month (when needed)

## Alternative: GitHub Pages (100% Free Forever)
If budget is extremely tight, GitHub Pages is always free but requires more setup.

## Monitoring Usage
Check bandwidth usage in Vercel dashboard to stay within free limits.