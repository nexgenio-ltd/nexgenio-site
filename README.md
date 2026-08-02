# nexgenio-site

Source for [nexgenio.com](https://nexgenio.com).

## Infrastructure

| Resource | Value |
|---|---|
| CloudFront | E2CENAXP7JGRVQ (nexgenio.com, www.nexgenio.com) |
| S3 Origin | nxg-site-public (eu-central-1, nxg-root account 661069877777) |

## Deploy

Push to `main` syncs to S3 and invalidates CloudFront via GitHub Actions.
Repo secrets required: `NXG_ROOT_AWS_ACCESS_KEY_ID`, `NXG_ROOT_AWS_SECRET_ACCESS_KEY`.

## Status

Single-page static site. Upgrade plan: NA-45.
