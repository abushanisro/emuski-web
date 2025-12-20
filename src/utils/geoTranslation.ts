// Geographic Translation and Localization Utility
export interface GeoLocation {
  country: string;
  countryCode: string;
  region: string;
  city: string;
  latitude: number;
  longitude: number;
  timezone: string;
  currency: string;
  language: string;
}

export interface TranslationConfig {
  enableAutoTranslation: boolean;
  enableCurrencyConversion: boolean;
  enableUnitsConversion: boolean;
  defaultLanguage: string;
  supportedLanguages: Record<string, {
    name: string;
    currency: string;
    units: 'metric' | 'imperial';
  }>;
}

// Language mappings based on country codes
const COUNTRY_LANGUAGE_MAP: Record<string, string> = {
  'US': 'en-US',
  'GB': 'en-GB',
  'CA': 'en-CA',
  'AU': 'en-AU',
  'DE': 'de-DE',
  'FR': 'fr-FR',
  'ES': 'es-ES',
  'IT': 'it-IT',
  'BR': 'pt-BR',
  'JP': 'ja-JP',
  'KR': 'ko-KR',
  'CN': 'zh-CN',
  'AE': 'ar-AE',
  'SA': 'ar-SA',
  'IN': 'en-IN'
};

// Currency conversion rates (should be fetched from API in production)
const CURRENCY_RATES: Record<string, number> = {
  'USD': 1.00,
  'GBP': 0.79,
  'EUR': 0.92,
  'JPY': 149.50,
  'KRW': 1320.00,
  'CNY': 7.24,
  'INR': 83.12,
  'AED': 3.67,
  'BRL': 4.95
};

// Translation strings for key manufacturing terms
const TRANSLATIONS: Record<string, Record<string, string>> = {
  'en': {
    'oem_manufacturing': 'OEM Manufacturing',
    'precision_engineering': 'Precision Engineering',
    'rapid_prototyping': 'Rapid Prototyping',
    'cnc_machining': 'CNC Machining',
    'injection_molding': 'Injection Molding',
    'quality_assurance': 'Quality Assurance',
    'get_quote': 'Get Quote',
    'contact_us': 'Contact Us',
    'learn_more': 'Learn More',
    'our_services': 'Our Services',
    'about_us': 'About Us',
    'industries': 'Industries',
    'automotive': 'Automotive',
    'aerospace': 'Aerospace',
    'medical_devices': 'Medical Devices',
    'electronics': 'Electronics',
    'iso_certified': 'ISO Certified',
    'years_experience': 'Years Experience',
    'clients_worldwide': 'Clients Worldwide',
    'cost_savings': 'Cost Savings',
    'faster_delivery': 'Faster Delivery',
    'bangalore_india': 'Bangalore, India'
  },
  'de': {
    'oem_manufacturing': 'OEM-Fertigung',
    'precision_engineering': 'Präzisionstechnik',
    'rapid_prototyping': 'Rapid Prototyping',
    'cnc_machining': 'CNC-Bearbeitung',
    'injection_molding': 'Spritzguss',
    'quality_assurance': 'Qualitätssicherung',
    'get_quote': 'Angebot Anfordern',
    'contact_us': 'Kontaktiere Uns',
    'learn_more': 'Mehr Erfahren',
    'our_services': 'Unsere Dienstleistungen',
    'about_us': 'Über Uns',
    'industries': 'Branchen',
    'automotive': 'Automobil',
    'aerospace': 'Luft- und Raumfahrt',
    'medical_devices': 'Medizinische Geräte',
    'electronics': 'Elektronik',
    'iso_certified': 'ISO Zertifiziert',
    'years_experience': 'Jahre Erfahrung',
    'clients_worldwide': 'Kunden Weltweit',
    'cost_savings': 'Kosteneinsparungen',
    'faster_delivery': 'Schnellere Lieferung',
    'bangalore_india': 'Bangalore, Indien'
  },
  'fr': {
    'oem_manufacturing': 'Fabrication OEM',
    'precision_engineering': 'Ingénierie de Précision',
    'rapid_prototyping': 'Prototypage Rapide',
    'cnc_machining': 'Usinage CNC',
    'injection_molding': 'Moulage par Injection',
    'quality_assurance': 'Assurance Qualité',
    'get_quote': 'Obtenir un Devis',
    'contact_us': 'Contactez-nous',
    'learn_more': 'En Savoir Plus',
    'our_services': 'Nos Services',
    'about_us': 'À Propos',
    'industries': 'Industries',
    'automotive': 'Automobile',
    'aerospace': 'Aérospatiale',
    'medical_devices': 'Dispositifs Médicaux',
    'electronics': 'Électronique',
    'iso_certified': 'Certifié ISO',
    'years_experience': 'Années d\'Expérience',
    'clients_worldwide': 'Clients dans le Monde',
    'cost_savings': 'Économies de Coûts',
    'faster_delivery': 'Livraison Plus Rapide',
    'bangalore_india': 'Bangalore, Inde'
  },
  'es': {
    'oem_manufacturing': 'Fabricación OEM',
    'precision_engineering': 'Ingeniería de Precisión',
    'rapid_prototyping': 'Prototipado Rápido',
    'cnc_machining': 'Mecanizado CNC',
    'injection_molding': 'Moldeo por Inyección',
    'quality_assurance': 'Aseguramiento de Calidad',
    'get_quote': 'Obtener Cotización',
    'contact_us': 'Contáctanos',
    'learn_more': 'Saber Más',
    'our_services': 'Nuestros Servicios',
    'about_us': 'Acerca de Nosotros',
    'industries': 'Industrias',
    'automotive': 'Automotriz',
    'aerospace': 'Aeroespacial',
    'medical_devices': 'Dispositivos Médicos',
    'electronics': 'Electrónica',
    'iso_certified': 'Certificado ISO',
    'years_experience': 'Años de Experiencia',
    'clients_worldwide': 'Clientes en Todo el Mundo',
    'cost_savings': 'Ahorro de Costos',
    'faster_delivery': 'Entrega Más Rápida',
    'bangalore_india': 'Bangalore, India'
  },
  'ja': {
    'oem_manufacturing': 'OEM製造',
    'precision_engineering': '精密工学',
    'rapid_prototyping': '高速プロトタイピング',
    'cnc_machining': 'CNC加工',
    'injection_molding': '射出成形',
    'quality_assurance': '品質保証',
    'get_quote': '見積もりを取得',
    'contact_us': 'お問い合わせ',
    'learn_more': 'もっと詳しく',
    'our_services': '私たちのサービス',
    'about_us': '私たちについて',
    'industries': '産業',
    'automotive': '自動車',
    'aerospace': '航空宇宙',
    'medical_devices': '医療機器',
    'electronics': 'エレクトロニクス',
    'iso_certified': 'ISO認証',
    'years_experience': '年の経験',
    'clients_worldwide': '世界中のクライアント',
    'cost_savings': 'コスト削減',
    'faster_delivery': 'より迅速な配送',
    'bangalore_india': 'バンガロール、インド'
  },
  'zh': {
    'oem_manufacturing': 'OEM制造',
    'precision_engineering': '精密工程',
    'rapid_prototyping': '快速原型',
    'cnc_machining': 'CNC加工',
    'injection_molding': '注塑成型',
    'quality_assurance': '质量保证',
    'get_quote': '获取报价',
    'contact_us': '联系我们',
    'learn_more': '了解更多',
    'our_services': '我们的服务',
    'about_us': '关于我们',
    'industries': '行业',
    'automotive': '汽车',
    'aerospace': '航空航天',
    'medical_devices': '医疗设备',
    'electronics': '电子产品',
    'iso_certified': 'ISO认证',
    'years_experience': '年经验',
    'clients_worldwide': '全球客户',
    'cost_savings': '成本节约',
    'faster_delivery': '更快交付',
    'bangalore_india': '班加罗尔，印度'
  }
};

export class GeoTranslationService {
  private userLocation: GeoLocation | null = null;
  private currentLanguage: string = 'en';
  private config: TranslationConfig;

  constructor(config: TranslationConfig) {
    this.config = config;
    this.init();
  }

  private async init() {
    try {
      await this.detectUserLocation();
      if (this.config.enableAutoTranslation) {
        this.applyAutoTranslation();
      }
      // Auto-detect and apply silently for SEO
      this.setupSilentGeoOptimization();
    } catch (error) {
      console.warn('GeoTranslation init failed:', error);
    }
  }

  private async detectUserLocation(): Promise<void> {
    try {
      // First try browser geolocation
      if (navigator.geolocation) {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 5000,
            enableHighAccuracy: false
          });
        });

        // Use reverse geocoding to get country info
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&localityLanguage=en`
        );
        const data = await response.json();

        this.userLocation = {
          country: data.countryName,
          countryCode: data.countryCode,
          region: data.principalSubdivision,
          city: data.city,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          currency: this.getCurrencyForCountry(data.countryCode),
          language: this.getLanguageForCountry(data.countryCode)
        };
      } else {
        // Fallback to IP-based detection
        await this.detectLocationByIP();
      }
    } catch (error) {
      console.warn('Location detection failed:', error);
      // Fallback to IP-based detection
      await this.detectLocationByIP();
    }
  }

  private async detectLocationByIP(): Promise<void> {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();

      this.userLocation = {
        country: data.country_name,
        countryCode: data.country,
        region: data.region,
        city: data.city,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone,
        currency: data.currency,
        language: this.getLanguageForCountry(data.country)
      };
    } catch (error) {
      console.warn('IP location detection failed:', error);
    }
  }

  private getCurrencyForCountry(countryCode: string): string {
    const currencyMap: Record<string, string> = {
      'US': 'USD', 'GB': 'GBP', 'DE': 'EUR', 'FR': 'EUR', 'ES': 'EUR',
      'IT': 'EUR', 'JP': 'JPY', 'KR': 'KRW', 'CN': 'CNY', 'IN': 'INR',
      'AE': 'AED', 'BR': 'BRL', 'CA': 'CAD', 'AU': 'AUD'
    };
    return currencyMap[countryCode] || 'USD';
  }

  private getLanguageForCountry(countryCode: string): string {
    return COUNTRY_LANGUAGE_MAP[countryCode] || 'en';
  }

  private applyAutoTranslation(): void {
    if (!this.userLocation) return;

    const detectedLanguage = this.userLocation.language;
    const languageCode = detectedLanguage.split('-')[0];
    
    if (languageCode !== 'en' && TRANSLATIONS[languageCode]) {
      this.setLanguage(languageCode);
    }
  }

  public setLanguage(languageCode: string): void {
    this.currentLanguage = languageCode;
    this.translatePage(languageCode);
    this.updateCurrency();
    this.updateUnits();
    
    // Store user preference
    localStorage.setItem('emuski-language', languageCode);
    
    // Trigger custom event
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: languageCode, location: this.userLocation }
    }));
  }

  private setupSilentGeoOptimization(): void {
    if (!this.userLocation) return;

    // Add geo-specific meta tags silently
    this.addGeoMetaTags();
    
    // Set up structured data for the detected location
    this.addLocationStructuredData();
    
    // Update page content for SEO without showing notifications
    this.optimizeForGeoSEO();
  }

  private addGeoMetaTags(): void {
    const head = document.head;
    
    // Add geo-specific meta tags
    const geoMetas = [
      { name: 'geo.region', content: `${this.userLocation?.countryCode}-${this.userLocation?.region}` },
      { name: 'geo.placename', content: `${this.userLocation?.city}, ${this.userLocation?.country}` },
      { name: 'ICBM', content: `${this.userLocation?.latitude}, ${this.userLocation?.longitude}` },
      { name: 'geo.position', content: `${this.userLocation?.latitude};${this.userLocation?.longitude}` }
    ];

    geoMetas.forEach(meta => {
      const existingMeta = head.querySelector(`meta[name="${meta.name}"]`);
      if (existingMeta) {
        existingMeta.setAttribute('content', meta.content);
      } else {
        const metaTag = document.createElement('meta');
        metaTag.setAttribute('name', meta.name);
        metaTag.setAttribute('content', meta.content);
        head.appendChild(metaTag);
      }
    });
  }

  private addLocationStructuredData(): void {
    if (!this.userLocation) return;

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "audience": {
        "@type": "Audience",
        "geographicArea": {
          "@type": "Country",
          "name": this.userLocation.country
        }
      },
      "mainEntity": {
        "@type": "Organization",
        "areaServed": [
          {
            "@type": "Country",
            "name": this.userLocation.country
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }

  private optimizeForGeoSEO(): void {
    if (!this.userLocation) return;

    // Update page title for geo-targeting
    const currentTitle = document.title;
    if (!currentTitle.includes(this.userLocation.country)) {
      document.title = `${currentTitle} | Serving ${this.userLocation.country}`;
    }

    // Add location-specific keywords to meta description
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDesc && !metaDesc.content.includes(this.userLocation.country)) {
      const originalDesc = metaDesc.content;
      metaDesc.content = `${originalDesc} Expert Manufacturing Excellences for ${this.userLocation.country} businesses.`;
    }

    // Set HTML lang attribute based on detected language
    document.documentElement.lang = this.currentLanguage;

    // DISABLED: Modifying canonical URLs with query parameters
    // This can negatively impact SEO as search engines prefer clean canonical URLs
    // Canonical URLs should remain static without geo parameters
    // const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    // if (canonical && this.userLocation.countryCode) {
    //   const url = new URL(canonical.href);
    //   url.searchParams.set('geo', this.userLocation.countryCode.toLowerCase());
    //   canonical.href = url.toString();
    // }
  }

  private translatePage(languageCode: string): void {
    const translations = TRANSLATIONS[languageCode];
    if (!translations) return;

    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach((element) => {
      const key = element.getAttribute('data-translate');
      if (key && translations[key]) {
        if (element.tagName === 'INPUT' && element.getAttribute('type') === 'submit') {
          (element as HTMLInputElement).value = translations[key];
        } else {
          element.textContent = translations[key];
        }
      }
    });

    // Update document language
    document.documentElement.lang = languageCode;
    
    // Update meta tags
    this.updateMetaTags(languageCode);
  }

  private updateMetaTags(languageCode: string): void {
    // Update title and description based on language
    const titleTranslations: Record<string, string> = {
      'de': 'EMUSKI - Führende OEM-Fertigungslösungen | Präzisionstechnik & KI-gestützte Produktion in Bangalore, Indien',
      'fr': 'EMUSKI - Solutions de Fabrication OEM Leaders | Ingénierie de Précision & Production Alimentée par l\'IA à Bangalore, Inde',
      'es': 'EMUSKI - Soluciones de Fabricación OEM Líderes | Ingeniería de Precisión & Producción Impulsada por IA en Bangalore, India',
      'ja': 'EMUSKI - 主要なOEM製造ソリューション | バンガロール、インドでの精密工学＆AI駆動生産',
      'zh': 'EMUSKI - 领先的OEM制造解决方案 | 班加罗尔，印度的精密工程和AI驱动生产'
    };

    const title = titleTranslations[languageCode];
    if (title) {
      document.title = title;
      const metaTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
      if (metaTitle) metaTitle.content = title;
    }
  }

  private updateCurrency(): void {
    if (!this.config.enableCurrencyConversion || !this.userLocation) return;

    const userCurrency = this.userLocation.currency;
    
    document.querySelectorAll('[data-price]').forEach((element) => {
      const basePrice = parseFloat(element.getAttribute('data-price') || '0');
      const convertedPrice = this.convertCurrency(basePrice, 'USD', userCurrency);
      const formattedPrice = this.formatCurrency(convertedPrice, userCurrency);
      
      element.textContent = formattedPrice;
    });
  }

  private updateUnits(): void {
    if (!this.config.enableUnitsConversion || !this.userLocation) return;

    const userUnits = this.config.supportedLanguages[this.userLocation.language]?.units || 'metric';
    
    document.querySelectorAll('[data-unit]').forEach((element) => {
      const unit = element.getAttribute('data-unit');
      const value = parseFloat(element.getAttribute('data-value') || '0');
      
      if (unit === 'weight' && userUnits === 'imperial') {
        // Convert kg to lbs
        const lbs = value * 2.20462;
        element.textContent = `${lbs.toFixed(1)} lbs`;
      } else if (unit === 'length' && userUnits === 'imperial') {
        // Convert mm to inches
        const inches = value / 25.4;
        element.textContent = `${inches.toFixed(2)}"`;
      }
    });
  }

  private convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
    const fromRate = CURRENCY_RATES[fromCurrency] || 1;
    const toRate = CURRENCY_RATES[toCurrency] || 1;
    return (amount / fromRate) * toRate;
  }

  private formatCurrency(amount: number, currency: string): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  }

  private setupLanguageSelector(): void {
    // Create language selector if it doesn't exist
    let selector = document.getElementById('language-selector') as HTMLSelectElement;
    if (!selector) {
      selector = document.createElement('select');
      selector.id = 'language-selector';
      selector.className = 'language-selector';
      
      // Add to header or navigation
      const header = document.querySelector('header') || document.querySelector('nav');
      if (header) {
        header.appendChild(selector);
      }
    }

    // Populate options
    selector.innerHTML = '';
    Object.entries(this.config.supportedLanguages).forEach(([code, info]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = info.name;
      option.selected = code === this.currentLanguage;
      selector.appendChild(option);
    });

    // Handle selection change
    selector.addEventListener('change', (e) => {
      const target = e.target as HTMLSelectElement;
      this.setLanguage(target.value);
    });
  }

  public getUserLocation(): GeoLocation | null {
    return this.userLocation;
  }

  public getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  public translate(key: string): string {
    const translations = TRANSLATIONS[this.currentLanguage];
    return translations?.[key] || key;
  }

  // Method to get localized content for specific regions
  public getLocalizedContent(): { greeting: string; currency: string; timezone: string } {
    if (!this.userLocation) {
      return { greeting: 'Welcome', currency: 'USD', timezone: 'UTC' };
    }

    const greetings: Record<string, string> = {
      'US': 'Welcome to EMUSKI - Your US Manufacturing Partner',
      'GB': 'Welcome to EMUSKI - Your UK Manufacturing Partner', 
      'DE': 'Willkommen bei EMUSKI - Ihr deutscher Fertigungspartner',
      'FR': 'Bienvenue chez EMUSKI - Votre partenaire de fabrication français',
      'JP': 'EMUSKIへようこそ - あなたの日本の製造パートナー',
      'CN': '欢迎来到EMUSKI - 您的中国制造合作伙伴'
    };

    return {
      greeting: greetings[this.userLocation.countryCode] || 'Welcome to EMUSKI',
      currency: this.userLocation.currency,
      timezone: this.userLocation.timezone
    };
  }
}

// Export singleton instance
export const geoTranslationService = new GeoTranslationService(
  (window as any).EmuskiGeoConfig || {
    enableAutoTranslation: true,
    enableCurrencyConversion: true,
    enableUnitsConversion: true,
    defaultLanguage: 'en',
    supportedLanguages: {}
  }
);