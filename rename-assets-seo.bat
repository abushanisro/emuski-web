@echo off
REM SEO-Optimized Asset Renaming Script for EMUSKI Web

echo Starting SEO asset renaming...

REM Create backup directory
if not exist "public\assets\backup" mkdir "public\assets\backup"

REM Engineering folder
cd public\assets\engineering
if exist "breadown.png" ren "breadown.png" "product-teardown-analysis.png"
if exist "breakdown.png" ren "breakdown.png" "cost-breakdown-engineering.png"
if exist "bullet.png" ren "bullet.png" "precision-manufacturing-bullet.png"
if exist "car.png" ren "car.png" "automotive-engineering-cost-estimation.png"
if exist "cost360.png" ren "cost360.png" "cost360-platform-dashboard.png"
if exist "cost360crm.png" ren "cost360crm.png" "cost360-crm-system.png"
if exist "costtransparency.svg" ren "costtransparency.svg" "cost-transparency-engineering.svg"
if exist "designdecisions.svg" ren "designdecisions.svg" "design-decisions-optimization.svg"
if exist "mesurement.png" ren "mesurement.png" "precision-measurement-tools.png"
if exist "negotion.svg" ren "negotion.svg" "supplier-negotiation-process.svg"
if exist "reduction.png" ren "reduction.png" "cost-reduction-strategies.png"
if exist "scan.png" ren "scan.png" "3d-scanning-technology.png"
if exist "sourcing.svg" ren "sourcing.svg" "strategic-sourcing-solutions.svg"
if exist "supplier.png" ren "supplier.png" "supplier-management-system.png"
if exist "supplierevaluation.svg" ren "supplierevaluation.svg" "supplier-evaluation-metrics.svg"
cd ..\..\..

REM Engineering Services folder
cd public\assets\engineeringservices
if exist "1.svg" ren "1.svg" "engineering-service-cost-estimation.svg"
if exist "2.svg" ren "2.svg" "engineering-service-value-analysis.svg"
if exist "3.svg" ren "3.svg" "engineering-service-design-optimization.svg"
if exist "4.svg" ren "4.svg" "engineering-service-supplier-sourcing.svg"
if exist "5.svg" ren "5.svg" "engineering-service-quality-assurance.svg"
if exist "6.svg" ren "6.svg" "engineering-service-process-improvement.svg"
if exist "7.svg" ren "7.svg" "engineering-service-technical-support.svg"
if exist "8.svg" ren "8.svg" "engineering-service-project-management.svg"
if exist "9.svg" ren "9.svg" "engineering-service-manufacturing-consulting.svg"
if exist "10.svg" ren "10.svg" "engineering-service-product-development.svg"
if exist "11.svg" ren "11.svg" "engineering-service-benchmarking-analysis.svg"
if exist "12.svg" ren "12.svg" "engineering-service-cost-modeling.svg"
if exist "13.svg" ren "13.svg" "engineering-service-supply-chain-optimization.svg"
cd ..\..\..

REM Hero folder
cd public\assets\hero
if exist "engineering.svg" ren "engineering.svg" "precision-engineering-hero-banner.svg"
if exist "genai.svg" ren "genai.svg" "ai-mithran-hero-banner.svg"
if exist "manufaturing.svg" ren "manufaturing.svg" "manufacturing-services-hero-banner.svg"
cd ..\..\..

REM Hero Mobile folder
cd public\assets\hero-mobile
if exist "engineeringmobile.svg" ren "engineeringmobile.svg" "precision-engineering-mobile-banner.svg"
if exist "genaimobile.svg" ren "genaimobile.svg" "ai-mithran-mobile-banner.svg"
if exist "manufaturingmobile.svg" ren "manufaturingmobile.svg" "manufacturing-services-mobile-banner.svg"
cd ..\..\..

REM Infographic folder
cd public\assets\infograpic
if exist "bussiness.svg" ren "bussiness.svg" "business-operations-infographic.svg"
if exist "delivery.svg" ren "delivery.svg" "delivery-process-infographic.svg"
if exist "methodology.svg" ren "methodology.svg" "manufacturing-methodology-infographic.svg"
if exist "operations.svg" ren "operations.svg" "operations-workflow-infographic.svg"
if exist "quality.svg" ren "quality.svg" "quality-assurance-infographic.svg"
cd ..\..\..

REM Manufacturing Services folder
cd public\assets\manufacturingservices
if exist "1.svg" ren "1.svg" "custom-manufacturing-solutions.svg"
if exist "2.svg" ren "2.svg" "prototype-manufacturing-services.svg"
if exist "3.svg" ren "3.svg" "production-scaling-capabilities.svg"
if exist "4.svg" ren "4.svg" "on-demand-manufacturing.svg"
if exist "5.svg" ren "5.svg" "cnc-machining-services.svg"
if exist "6.svg" ren "6.svg" "sheet-metal-fabrication.svg"
if exist "7.svg" ren "7.svg" "injection-molding-services.svg"
if exist "9.svg" ren "9.svg" "quality-control-manufacturing.svg"
if exist "10.svg" ren "10.svg" "assembly-services-manufacturing.svg"
if exist "11.svg" ren "11.svg" "finishing-services-manufacturing.svg"
cd ..\..\..

REM Mithran folder
cd public\assets\mitran
if exist "commodity.jpeg" ren "commodity.jpeg" "ai-commodity-management-dashboard.jpeg"
if exist "dashboard.jpeg" ren "dashboard.jpeg" "ai-mithran-platform-dashboard.jpeg"
if exist "rawmaterial.jpeg" ren "rawmaterial.jpeg" "ai-raw-material-optimization.jpeg"
if exist "sourcing.jpeg" ren "sourcing.jpeg" "ai-intelligent-sourcing-system.jpeg"
cd ..\..\..

REM Partners folder
cd public\assets\Partners
if exist "1.svg" ren "1.svg" "manufacturing-partner-logo-1.svg"
if exist "2.svg" ren "2.svg" "manufacturing-partner-logo-2.svg"
if exist "3.svg" ren "3.svg" "manufacturing-partner-logo-3.svg"
if exist "4.svg" ren "4.svg" "manufacturing-partner-logo-4.svg"
if exist "5.svg" ren "5.svg" "manufacturing-partner-logo-5.svg"
if exist "6.svg" ren "6.svg" "manufacturing-partner-logo-6.svg"
if exist "7.svg" ren "7.svg" "manufacturing-partner-logo-7.svg"
if exist "8.svg" ren "8.svg" "manufacturing-partner-logo-8.svg"
if exist "9.svg" ren "9.svg" "manufacturing-partner-logo-9.svg"
if exist "10.svg" ren "10.svg" "manufacturing-partner-logo-10.svg"
if exist "11.svg" ren "11.svg" "manufacturing-partner-logo-11.svg"
if exist "12.svg" ren "12.svg" "manufacturing-partner-logo-12.svg"
if exist "13.svg" ren "13.svg" "manufacturing-partner-logo-13.svg"
if exist "14.svg" ren "14.svg" "manufacturing-partner-logo-14.svg"
if exist "15.svg" ren "15.svg" "manufacturing-partner-logo-15.svg"
if exist "16.svg" ren "16.svg" "manufacturing-partner-logo-16.svg"
cd ..\..\..

REM Team folder
cd public\assets\team
if exist "founder.jpg" ren "founder.jpg" "emuski-founder-ceo.jpg"
cd ..\..\..

REM Root assets
cd public\assets
if exist "AI-mitran.svg" ren "AI-mitran.svg" "ai-mithran-logo.svg"
if exist "emuskilogo.webp" ren "emuskilogo.webp" "emuski-manufacturing-logo.webp"
if exist "engineering.svg" ren "engineering.svg" "precision-engineering-icon.svg"
if exist "Manufacturing.svg" ren "Manufacturing.svg" "manufacturing-services-icon.svg"
cd ..\..

echo SEO asset renaming completed!
echo.
echo IMPORTANT: You must now update all code references to use the new filenames.
echo See asset-rename-mapping.json for the complete mapping.
pause
