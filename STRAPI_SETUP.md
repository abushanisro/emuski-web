# Strapi CMS Integration Guide

This project supports both static blog data and Strapi CMS for dynamic content management. Follow this guide to set up Strapi as your blog backend.

## Quick Setup

### Option 1: Use Static Data (Current Setup)
Your blog currently uses static data. No additional setup required.

### Option 2: Enable Strapi CMS
Follow the steps below to switch to Strapi for dynamic content management.

## Strapi Installation

### 1. Create Strapi Project
```bash
# In a separate directory (e.g., emuski-strapi)
npx create-strapi-app@latest emuski-strapi --quickstart
cd emuski-strapi
```

### 2. Create Content Types

#### Articles Content Type
Create an "Article" content type with these fields:

**Text Fields:**
- `title` (Text, Required)
- `slug` (Text, Required, Unique) 
- `excerpt` (Text)
- `content` (Rich Text)
- `fullContent` (Rich Text)
- `seoTitle` (Text)
- `metaDescription` (Text)

**Boolean Fields:**
- `featured` (Boolean, Default: false)

**JSON Field:**
- `keywords` (JSON)

**Relations:**
- `category` (Relation: Many Articles to One Category)
- `author` (Relation: Many Articles to One Author)
- `tags` (Relation: Many Articles to Many Tags)

**Media Field:**
- `featuredImage` (Media: Single Image)

#### Category Content Type
Create a "Category" content type:
- `name` (Text, Required)
- `slug` (Text, Required, Unique)
- `description` (Text)

#### Tag Content Type  
Create a "Tag" content type:
- `name` (Text, Required)
- `slug` (Text, Required, Unique)

#### Author Content Type
Create an "Author" content type:
- `name` (Text, Required)
- `email` (Email)
- `bio` (Rich Text)
- `avatar` (Media: Single Image)

### 3. Configure API Permissions

In Strapi Admin → Settings → Roles → Public:

**Enable these permissions:**
- Articles: find, findOne
- Categories: find, findOne  
- Tags: find, findOne
- Authors: find, findOne

### 4. Generate API Token

1. Go to Settings → API Tokens
2. Create new token with "Read-only" access
3. Copy the token for your environment variables

## Frontend Configuration

### 1. Environment Variables
Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
# Enable Strapi
REACT_APP_USE_STRAPI=true
REACT_APP_STRAPI_URL=http://localhost:1337
REACT_APP_STRAPI_API_TOKEN=your_api_token_here
```

### 2. Start Development
```bash
# Start Strapi backend
cd emuski-strapi
npm run develop

# Start React frontend (in separate terminal)
cd emuski-website
npm run dev
```

## Content Migration

### Migrate Existing Blog Data

If you want to migrate your current static blog data to Strapi:

1. **Export Static Data**: Your current blog data is in `src/data/blogData.ts`
2. **Create Categories & Tags**: Manually create categories and tags in Strapi
3. **Import Articles**: Use Strapi's import plugin or manually create articles
4. **Upload Images**: Upload featured images to Strapi media library

### Sample Content Structure

**Categories:**
- AI & Technology
- Manufacturing 
- Engineering
- Innovation
- Case Studies

**Authors:**
- Create author profiles with bios and avatars

**Articles:**
- Migrate existing articles from blogData.ts
- Set featured images and proper relationships

## API Endpoints

Once Strapi is running, these endpoints will be available:

```
GET /api/articles                    # All articles
GET /api/articles?filters[slug][$eq]=article-slug  # Article by slug  
GET /api/articles?filters[featured][$eq]=true      # Featured articles
GET /api/categories                  # All categories
GET /api/tags                       # All tags  
GET /api/authors                    # All authors
```

## Switching Between Static and Strapi

You can easily switch between static data and Strapi by changing the environment variable:

```env
# Use static data
REACT_APP_USE_STRAPI=false

# Use Strapi CMS  
REACT_APP_USE_STRAPI=true
```

The blog components automatically use the appropriate data source based on this setting.

## Production Deployment

### Strapi Production
1. Deploy Strapi to your preferred hosting (Heroku, DigitalOcean, AWS, etc.)
2. Configure production database (PostgreSQL recommended)
3. Update REACT_APP_STRAPI_URL to your production Strapi URL

### Frontend Production
1. Update environment variables in your hosting platform
2. Ensure API tokens are secure and read-only
3. Configure CORS in Strapi for your frontend domain

## Troubleshooting

### Common Issues

**API Token Issues:**
- Ensure token has correct permissions
- Check token is properly set in environment variables

**CORS Issues:**
- Configure Strapi CORS settings for your frontend domain

**Missing Content:**
- Verify content types are published
- Check API permissions are enabled

**Image Issues:**
- Ensure images are uploaded to Strapi media library
- Check image URLs in API responses

### Support

For Strapi-specific issues, refer to:
- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi Community](https://discord.strapi.io/)

For frontend integration issues, check the API configuration in:
- `src/api/strapiApi.ts` - Strapi API service
- `src/api/blogApiConfig.ts` - API switching logic
- `src/hooks/useBlogApiConfig.ts` - Universal hooks