# GitHub Pages Deployment Guide for subornadashtuli.com

This guide will help you deploy your Astro portfolio to GitHub Pages with your custom domain.

## Prerequisites
- GitHub account
- Domain name: `subornadashtuli.com` (purchased)
- Git installed locally

## Step 1: Prepare Your GitHub Repository

1. **Ensure your repository is on GitHub**
   ```bash
   git remote -v
   ```
   You should see your repository URL. If not, add it:
   ```bash
   git remote add origin https://github.com/sagar290/suborna.dash.tuli.git
   ```

2. **Commit all changes**
   ```bash
   git add .
   git commit -m "Add SEO optimizations and GitHub Pages deployment setup"
   git push origin main
   ```

## Step 2: Configure GitHub Pages Settings

1. **Go to your repository on GitHub**
   - Visit: https://github.com/sagar290/suborna.dash.tuli

2. **Navigate to Settings**
   - Click on "Settings" tab
   - Go to "Pages" in the left sidebar

3. **Configure Source**
   - Source: Select "GitHub Actions"
   - The workflow file `.github/workflows/deploy.yml` is already created

4. **Wait for initial deployment**
   - Go to "Actions" tab
   - You'll see the workflow running
   - Wait for it to complete (green checkmark)

## Step 3: Configure Custom Domain

1. **In GitHub Pages Settings**
   - Under "Custom domain", enter: `subornadashtuli.com`
   - Click "Save"
   - Check "Enforce HTTPS" (wait for DNS to propagate first)

2. **Get DNS Records from GitHub**
   - GitHub will show you DNS records to add
   - You'll see something like:
     - A record: `185.199.108.153` (and two more IPs)
     - CNAME: `username.github.io` (for www subdomain)

## Step 4: Update DNS at Your Domain Registrar

**Option A: If using the root domain (subornadashtuli.com)**

Add these A records at your domain provider (GoDaddy, Namecheap, etc.):

```
Type: A    Host: @        Value: 185.199.108.153
Type: A    Host: @        Value: 185.199.109.153
Type: A    Host: @        Value: 185.199.110.153
Type: A    Host: @        Value: 185.199.111.153
```

**Option B: If you also want www subdomain**

Add these CNAME records:

```
Type: CNAME    Host: www    Value: sagar290.github.io
```

## Step 5: Verify DNS Propagation

1. **Wait for DNS to propagate**
   - This can take anywhere from 5 minutes to 48 hours
   - Usually completes within 1-2 hours

2. **Check DNS status**
   - Visit: https://dnschecker.org/
   - Enter: `subornadashtuli.com`
   - Wait until all servers show green

3. **Verify GitHub Pages status**
   - Go to your repository → Settings → Pages
   - Wait for the "Your site is live" message
   - The DNS status should show a green checkmark

## Step 6: Test Your Website

1. **Visit your domain**
   - Open: https://subornadashtuli.com
   - Verify the site loads correctly

2. **Test SSL/HTTPS**
   - Make sure HTTPS is enabled (padlock icon in browser)
   - If not, enable "Enforce HTTPS" in GitHub Pages settings

## Step 7: Future Updates

**To update your site:**

1. Make changes locally
2. Commit and push:
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. GitHub Actions automatically builds and deploys
4. Wait 2-3 minutes for deployment to complete

## Troubleshooting

### Issue: DNS status shows "Pending"
- Solution: Wait longer for DNS propagation (up to 48 hours)
- Check that all 4 A records are added correctly

### Issue: Site shows 404 error
- Solution: Check GitHub Actions workflow for errors
- Verify the build completed successfully

### Issue: Custom domain not working
- Solution: 
  1. Verify DNS records are correct
  2. Check if domain registrar is blocking GitHub IPs
  3. Try adding `www` subdomain first

### Issue: HTTPS not working
- Solution:
  1. Wait for DNS to fully propagate
  2. Enable "Enforce HTTPS" in GitHub Pages settings
  3. If still not working, disable and re-enable after 24 hours

## Important Notes

- ✅ CNAME file is already in `public/CNAME`
- ✅ GitHub Actions workflow is configured
- ✅ Build will automatically trigger on push to main branch
- ✅ Site URL is set to `https://subornadashtuli.com` in config
- ✅ SEO meta tags are optimized for search engines

## File Structure for Deployment

```
tulis-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── CNAME                 # Custom domain configuration
│   ├── robots.txt            # SEO robots file
│   └── sitemap-index.xml     # SEO sitemap
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # SEO-optimized layout
│   ├── pages/
│   │   └── index.astro      # Main page
│   └── components/          # React components
├── astro.config.mjs          # Site configuration
└── package.json
```

## Additional SEO Tips

1. **Submit sitemap to Google Search Console**
   - Add: https://subornadashtuli.com/sitemap-index.xml
   - Helps Google index your site faster

2. **Monitor with Google Analytics**
   - Consider adding GA4 tracking code
   - Monitor visitor statistics

3. **Regular updates**
   - Update content regularly for better SEO
   - Add new voiceover samples regularly

## Support Resources

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Astro Deployment Guide: https://docs.astro.build/en/guides/deploy/github-pages
- DNS Checker: https://dnschecker.org/

---

**Your site will be live at:** https://subornadashtuli.com

**Status:** Ready to deploy! 🚀