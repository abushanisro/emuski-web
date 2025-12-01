require('dotenv').config();
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch'); // npm install node-fetch

const BASE_URL = 'https://emuski.com';
const today = new Date().toISOString().split('T')[0];

const GHOST_API_URL = process.env.NEXT_PUBLIC_GHOST_API_URL;
const GHOST_API_KEY = process.env.NEXT_PUBLIC_GHOST_API_KEY;

if (!GHOST_API_URL || !GHOST_API_KEY) {
  throw new Error('Ghost API credentials not set in env vars');
}

// --- Currency codes for converter links ---
const ALLOWED_CODES = [
  "USD", "AED", "AUD", "CNY", "EUR", "GBP", "SGD", "INR"
];

const staticUrls = [
  { path: '', lastmod: today, priority: 1.0, changefreq: 'daily' },
  { path: '/cn', lastmod: today, priority: 1.0, changefreq: 'daily' },
  { path: '/ko', lastmod: today, priority: 1.0, changefreq: 'daily' },
  { path: '/hscode-finder', lastmod: today, priority: 0.9, changefreq: 'weekly' },
  { path: '/terms-and-conditions', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/social-links', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/request-demo', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/redressal-policy', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/privacy-policy', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/invoice-generator', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/global-collection', lastmod: today, priority: 0.9, changefreq: 'yearly' },
  { path: '/contact-us', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/blog', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/about-eximpe', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/newsroom', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/currency-converter', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/global-trade', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  // Updated country paths with underscores
  { path: '/swift-code-finder/albania', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/algeria', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/andorra', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/angola', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/anguilla', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/antigua_and_barbuda', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/argentina', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/armenia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/aruba', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/australia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/austria', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/azerbaijan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bahamas', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bahrain', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bangladesh', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/barbados', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/belgium', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/belize', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/benin', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bermuda', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bhutan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bolivia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bonaire', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bosnia_and_herzegovina', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/botswana', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/brazil', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/brunei', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bulgaria', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/burkina_faso', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/cambodia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/cameroon', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/canada', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/cape_verde', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/cayman_islands', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/chile', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/china', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/colombia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/comoros', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/cook_islands', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/costa_rica', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/croatia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/curaçao', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/cyprus', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/czech_republic', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/denmark', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/djibouti', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/dominica', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/dominican_republic', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/ecuador', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/egypt', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/el_salvador', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/equatorial_guinea', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/estonia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/ethiopia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/falkland_islands', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/faroe_islands', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/fiji', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/finland', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/france', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/french_polynesia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/gabon', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/gambia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/georgia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/germany', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/ghana', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/gibraltar', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/greece', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/greenland', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/grenada', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/guadeloupe', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/guam', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/guatemala', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/guernsey', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/guinea', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/guinea_bissau', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/guyana', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/haiti', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/honduras', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/hong_kong', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/hungary', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/iceland', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/india', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/indonesia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/ireland', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/isle_of_man', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/israel', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/italy', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/jamaica', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/japan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/jersey', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/jordan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/kazakhstan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/kenya', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/kiribati', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/kosovo', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/kuwait', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/kyrgyzstan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/laos', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/latvia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/lebanon', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/lesotho', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/liberia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/liechtenstein', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/lithuania', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/luxembourg', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/macao', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/macedonia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/madagascar', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/malawi', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/malaysia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/maldives', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/mali', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/malta', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/marshall_islands', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/martinique', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/mauritania', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/mauritius', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/mayotte', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/mexico', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/moldova', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/monaco', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/mongolia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/montenegro', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/montserrat', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/morocco', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/mozambique', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/namibia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/nepal', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/netherlands', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/new_caledonia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/new_zealand', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/nicaragua', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/niger', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/nigeria', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/norway', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/oman', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/pakistan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/palau', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/palestine', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/panama', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/papua_new_guinea', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/paraguay', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/peru', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/philippines', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/poland', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/portugal', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/puerto_rico', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/qatar', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/romania', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/rwanda', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/réunion', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/saint_helena', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/saint_kitts_and_nevis', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/saint_lucia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/samoa', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/san_marino', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/saudi_arabia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/senegal', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/serbia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/seychelles', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/sierra_leone', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/singapore', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/sint_maarten', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/slovakia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/slovenia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/solomon_islands', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/south_africa', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/south_korea', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/spain', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/sri_lanka', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/st_vincent_and_grenadines', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/suriname', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/swaziland', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/sweden', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/switzerland', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/são_tomé_and_príncipe', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/taiwan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/tajikistan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/tanzania', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/thailand', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/timor_leste', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/togo', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/tonga', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/trinidad_and_tobago', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/tunisia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/turkey', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/turkmenistan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/turks_and_caicos_islands', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/tuvalu', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/uganda', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/ukraine', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/united_arab_emirates', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/united_kingdom', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/united_states', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/uruguay', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/uzbekistan', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/vanuatu', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/vatican_city', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/vietnam', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/virgin_islands_uk', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/wallis_and_futuna_islands', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/zambia', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/zimbabwe', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bank_of_baroda', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bank_of_baroda_ifsc_banking_unit', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bank_of_ceylon', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bank_of_china_india_branch', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bank_of_india', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bank_of_india_ifsc_banking_unit', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bank_of_maharashtra', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bank_of_nova_scotia_the', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/barclays_bank_plc', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bassein_catholic_co_operative_bank_limited', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bharat_co_operative_bank_mumbai_ltd', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bnp_paribas', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bombay_mercantile_cooperative_bank_limited', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/bombay_stock_exchange_limited', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/briskpe', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/canara_bank', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/central_bank_of_india', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/ces_limited', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/citibank_na', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/indian_bank', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/indian_overseas_bank', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/indianivesh_securities_limited', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/indianivesh_shares_securities_private_limited', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/indusind_bank_limited', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/punjab_national_bank', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/state_bank_of_india', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/the_saraswat_co_operative_bank_ltd', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/the_south_indian_bank_ltd', lastmod: today, priority: 0.5, changefreq: 'yearly' },
  { path: '/swift-code-finder/bank/uco_bank', lastmod: today, priority: 0.5, changefreq: 'yearly' },
];

// --------- CURRENCY CONVERTER URLS -----------
function getCurrencyConverterUrls() {
  const urls = [];

  // 1. All to INR (except INR itself)
  ALLOWED_CODES.forEach(from => {
    if (from !== 'INR') {
      urls.push({
        path: `/currency-converter/${from.toLowerCase()}-inr?amount=1`,
        lastmod: today,
        priority: 0.8,
        changefreq: 'weekly'
      });
    }
  });

  // 2. INR to all (except INR itself)
  ALLOWED_CODES.forEach(to => {
    if (to !== 'INR') {
      urls.push({
        path: `/currency-converter/inr-${to.toLowerCase()}?amount=1`,
        lastmod: today,
        priority: 0.8,
        changefreq: 'weekly'
      });
    }
  });

  return urls;
}

// -------------- GHOST POSTS FETCH --------------
async function fetchAllGhostPosts(typeTag) {
  let page = 1;
  let posts = [];
  let totalPages = 1;
  do {
    const url = new URL(`${GHOST_API_URL}/ghost/api/content/posts/`);
    url.search = new URLSearchParams({
      key: GHOST_API_KEY,
      filter: `tag:${typeTag}`,
      include: 'tags,authors',
      limit: 100,
      page,
    }).toString();

    const res = await fetch(url.toString());
    if (!res.ok) {
      let msg = `[Ghost] ${typeTag} posts fetch failed (${res.statusText})`;
      try {
        const err = await res.json();
        msg += '\n' + JSON.stringify(err, null, 2);
      } catch {}
      throw new Error(msg);
    }
    const json = await res.json();
    posts.push(...json.posts);
    totalPages = json.meta.pagination.pages;
    page++;
  } while (page <= totalPages);

  return posts;
}

// -------------- MAIN SCRIPT --------------
(async () => {
  try {
    // --- BLOGS ---
    console.log('Fetching blog posts...');
    const blogPosts = await fetchAllGhostPosts('blog');
    console.log(`Fetched ${blogPosts.length} blog posts.`);

    const blogUrls = blogPosts.map(post => {
      let categorySlug =
        (post.primary_tag && post.primary_tag.slug) ||
        (post.tags && post.tags[0] && post.tags[0].slug) ||
        'uncategorized';
      return {
        path: `/blog/${categorySlug}/${post.slug}`,
        lastmod: post.updated_at?.split('T')[0] || today,
        priority: 0.8,
        changefreq: 'monthly',
      };
    });

    // --- ANNOUNCEMENTS ---
    console.log('Fetching announcement posts...');
    const announcementPosts = await fetchAllGhostPosts('newsroom');
    console.log(`Fetched ${announcementPosts.length} announcement posts.`);

    const announcementUrls = announcementPosts.map(post => ({
      path: `/newsroom/${post.slug}`,
      lastmod: post.updated_at?.split('T')[0] || today,
      priority: 0.8,
      changefreq: 'monthly',
    }));

    // --- CURRENCY CONVERTER LINKS ---
    const currencyConverterUrls = getCurrencyConverterUrls();

    // --- Combine all URLs ---
    const allUrls = [
      ...staticUrls,
      ...blogUrls,
      ...announcementUrls,
      ...currencyConverterUrls
    ];

    // -------- WRITE SINGLE SITEMAP-1.XML --------
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(
      ({ path, lastmod, priority, changefreq }) => `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
  </url>`
    ).join('\n')}
</urlset>`;

    fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), xml, 'utf8');
    console.log(`✅ sitemap-1.xml generated with ${allUrls.length} URLs.`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
})();
