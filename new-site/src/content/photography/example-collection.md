---
title: "Vermont Landscapes"
date: 2024-01-10
description: "Winter scenes from Vermont"
location: "White River Junction, Vermont"
images:
  - url: "https://via.placeholder.com/1600x1200"
    alt: "Snow-covered mountains"
    width: 1600
    height: 1200
  - url: "https://via.placeholder.com/1600x1200/333"
    alt: "Frozen river"
    width: 1600
    height: 1200
  - url: "https://via.placeholder.com/1600x1200/555"
    alt: "Winter forest"
    width: 1600
    height: 1200
draft: true
---

This is an example photography collection. When you're ready to use Cloudflare R2:

## Setup R2 Storage

1. Create an R2 bucket in Cloudflare dashboard
2. Upload your photos to R2
3. Get public URLs for each image
4. Update the `images` array in frontmatter with R2 URLs

## Cost Breakdown

Cloudflare R2 pricing (as of 2024):
- Storage: $0.015/GB/month
- Class A operations (writes): $4.50/million
- Class B operations (reads): $0.36/million
- **Egress: FREE** (no bandwidth fees!)

For 100GB of photos with moderate traffic: ~$1.50-2/month
