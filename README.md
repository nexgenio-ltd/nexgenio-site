# nexgenio-site

Source for [nexgenio.com](https://nexgenio.com).

## Infrastructure

| Resource | Value |
|---|---|
| AWS Account | 124971231536 (nexgenio) |
| CloudFront | E2WWYNB9MTIF3N (nexgenio.com, www.nexgenio.com) |
| S3 Origin | nxg-web-public (eu-central-1) |
| Assets CDN | E2CAYG5EO6VM6Q → nxg-assets (assets.nexgenio.com) |

## Deploy

Push to `main` syncs to S3 and invalidates CloudFront via GitHub Actions.
Uses OIDC roles `NexgenioPublicDeployRole` and `NexgenioAdminDeployRole`.

## Structure

```
apex/       → nexgenio.com root (static HTML)
admin/      → admin.nexgenio.com (deployed to EC2 nginx via SSM)
blog/       → placeholder for Ghost integration
tokens/     → design tokens / shared CSS
training/   → placeholder for training content
```

## Status

Single-page static site. Upgrade plan: NA-45.
