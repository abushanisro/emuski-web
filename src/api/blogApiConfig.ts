import { blogApi } from './blogApi';
import { strapiApi } from './strapiApi';

// Configuration to switch between static data and Strapi
export const USE_STRAPI = import.meta.env.VITE_USE_STRAPI === 'true';

// Export the appropriate API based on configuration
export const activeBlogApi = USE_STRAPI ? strapiApi : blogApi;

export default activeBlogApi;