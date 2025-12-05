# SEO Asset Renaming Guide

## Overview
This guide documents the SEO optimization of all asset filenames in the EMUSKI website. SEO-friendly filenames improve search engine discoverability and provide better context for images.

## Benefits of SEO-Optimized Filenames
- **Better Search Rankings**: Descriptive filenames help search engines understand image content
- **Improved Accessibility**: Screen readers can better describe images
- **Enhanced User Experience**: Clear filenames make asset management easier
- **Image Search Optimization**: Images appear in relevant Google Image searches

## Renaming Strategy
All files have been renamed following these SEO best practices:
- Use descriptive, keyword-rich names
- Separate words with hyphens (-)
- Use lowercase letters
- Include relevant industry terms (manufacturing, engineering, AI, etc.)
- Keep names concise but descriptive

## How to Apply Changes

### Step 1: Run the Renaming Script
```bash
# From the project root directory
rename-assets-seo.bat
```

### Step 2: Update Code References
After renaming files, you MUST update all code references. See the sections below for files that need updates.

## Files Requiring Code Updates

### 1. FeaturedTabs.tsx
**Location**: `src/components/FeaturedTabs.tsx`

**Lines to Update**:
- Line 76-77: Manufacturing slides array
- Line 80-82: Engineering slides array
- Line 17: `/assets/manufacturing/services.svg`
- Line 23: `/assets/manufacturing/solution.svg`
- Line 33: `/assets/engineering/car.png` → `/assets/engineering/automotive-engineering-cost-estimation.png`
- Line 40: `/assets/engineering/breadown.png` → `/assets/engineering/product-teardown-analysis.png`
- Line 49: `/assets/mitran/dashboard.jpeg` → `/assets/mitran/ai-mithran-platform-dashboard.jpeg`
- Line 56: `/assets/mitran/sourcing.jpeg` → `/assets/mitran/ai-intelligent-sourcing-system.jpeg`

### 2. Page Files

#### manufacturing-services/page.tsx
**Lines to Update**:
- Line 73: `/assets/hero/manufaturing.svg` → `/assets/hero/manufacturing-services-hero-banner.svg`
- Line 74: `/assets/hero-mobile/manufaturingmobile.svg` → `/assets/hero-mobile/manufacturing-services-mobile-banner.svg`

#### precision-engineering/page.tsx
**Lines to Update**:
- Line 79: `/assets/hero/engineering.svg` → `/assets/hero/precision-engineering-hero-banner.svg`
- Line 80: `/assets/hero-mobile/engineeringmobile.svg` → `/assets/hero-mobile/precision-engineering-mobile-banner.svg`
- Line 155: `/assets/engineering/cost360.png` → `/assets/engineering/cost360-platform-dashboard.png`
- Line 163: `/assets/engineering/cost360crm.png` → `/assets/engineering/cost360-crm-system.png`

#### solutions/ai/page.tsx
**Lines to Update**:
- Line 30: `/assets/hero/genai.svg` → `/assets/hero/ai-mithran-hero-banner.svg`
- Line 36: `/assets/hero-mobile/genaimobile.svg` → `/assets/hero-mobile/ai-mithran-mobile-banner.svg`

### 3. Component Files to Check
Search for these patterns in all component files:
- `/assets/engineering/`
- `/assets/engineeringservices/`
- `/assets/manufacturingservices/`
- `/assets/mitran/`
- `/assets/hero/`
- `/assets/hero-mobile/`
- `/assets/Partners/`
- `/assets/infograpic/`
- `/assets/team/`

## Complete Filename Mapping

### Engineering Assets
| Old Name | New Name | Description |
|----------|----------|-------------|
| breadown.png | product-teardown-analysis.png | Teardown analysis image |
| breakdown.png | cost-breakdown-engineering.png | Cost breakdown visualization |
| car.png | automotive-engineering-cost-estimation.png | Automotive cost estimation |
| cost360.png | cost360-platform-dashboard.png | Cost360 platform screenshot |
| cost360crm.png | cost360-crm-system.png | Cost360 CRM interface |

### Manufacturing Services (Carousel Images)
| Old Name | New Name | Purpose |
|----------|----------|---------|
| 1.svg | custom-manufacturing-solutions.svg | Custom manufacturing |
| 2.svg | prototype-manufacturing-services.svg | Prototyping services |
| 3.svg | production-scaling-capabilities.svg | Scaling capabilities |
| 4.svg | on-demand-manufacturing.svg | On-demand services |
| 5.svg | cnc-machining-services.svg | CNC machining |
| 6.svg | sheet-metal-fabrication.svg | Sheet metal work |
| 7.svg | injection-molding-services.svg | Injection molding |
| 9.svg | quality-control-manufacturing.svg | Quality control |
| 10.svg | assembly-services-manufacturing.svg | Assembly services |
| 11.svg | finishing-services-manufacturing.svg | Finishing services |

### Engineering Services (Carousel Images)
| Old Name | New Name | Purpose |
|----------|----------|---------|
| 1.svg | engineering-service-cost-estimation.svg | Cost estimation |
| 2.svg | engineering-service-value-analysis.svg | Value analysis |
| 3.svg | engineering-service-design-optimization.svg | Design optimization |
| 4.svg | engineering-service-supplier-sourcing.svg | Supplier sourcing |
| 5.svg | engineering-service-quality-assurance.svg | Quality assurance |
| 6.svg | engineering-service-process-improvement.svg | Process improvement |
| 7.svg | engineering-service-technical-support.svg | Technical support |
| 8.svg | engineering-service-project-management.svg | Project management |
| 9.svg | engineering-service-manufacturing-consulting.svg | Manufacturing consulting |
| 10.svg | engineering-service-product-development.svg | Product development |
| 11.svg | engineering-service-benchmarking-analysis.svg | Benchmarking |
| 12.svg | engineering-service-cost-modeling.svg | Cost modeling |
| 13.svg | engineering-service-supply-chain-optimization.svg | Supply chain |

### Hero Banners
| Old Name | New Name |
|----------|----------|
| engineering.svg | precision-engineering-hero-banner.svg |
| genai.svg | ai-mithran-hero-banner.svg |
| manufaturing.svg | manufacturing-services-hero-banner.svg |
| engineeringmobile.svg | precision-engineering-mobile-banner.svg |
| genaimobile.svg | ai-mithran-mobile-banner.svg |
| manufaturingmobile.svg | manufacturing-services-mobile-banner.svg |

### AI Mithran Assets
| Old Name | New Name |
|----------|----------|
| commodity.jpeg | ai-commodity-management-dashboard.jpeg |
| dashboard.jpeg | ai-mithran-platform-dashboard.jpeg |
| rawmaterial.jpeg | ai-raw-material-optimization.jpeg |
| sourcing.jpeg | ai-intelligent-sourcing-system.jpeg |

## Testing After Renaming

1. **Visual Check**: Browse all pages and verify images load correctly
2. **Console Check**: Open browser DevTools and check for 404 errors
3. **Build Test**: Run `npm run build` to ensure no broken references
4. **Link Check**: Verify all image links work in production

## SEO Impact

### Expected Improvements:
- ✅ Better Google Image Search rankings
- ✅ Improved page SEO scores
- ✅ Enhanced accessibility compliance
- ✅ Clearer asset management
- ✅ Better crawlability for search engines

### Additional SEO Recommendations:
1. Add descriptive `alt` attributes to all images
2. Implement lazy loading for below-the-fold images
3. Use Next.js Image component for automatic optimization
4. Add structured data (Schema.org) for images
5. Create an image sitemap

## Rollback Instructions

If you need to revert the changes:
1. The original filenames are documented in `asset-rename-mapping.json`
2. Create a reverse mapping script if needed
3. Restore from backup if you created one before renaming

## Notes
- The script skips files that don't exist
- Industry-specific images in `industry-components/` were not renamed (contain client names)
- Document files in `documents/` were not renamed
- Backup your files before running the script

## Support
For questions or issues with the renaming process, refer to the project README or contact the development team.
