import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Globe, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { geoTranslationService } from '../utils/geoTranslation';

interface LocationConfig {
  country: string;
  countryCode: string;
  language: string;
  currency: string;
  timezone: string;
  flag: string;
  greeting: string;
  benefits: string[];
  testimonial: {
    name: string;
    company: string;
    text: string;
  };
  localPartners?: string[];
  shippingInfo: string;
  contactHours: string;
}

const LOCATION_CONFIGS: Record<string, LocationConfig> = {
  'us': {
    country: 'United States',
    countryCode: 'US',
    language: 'English',
    currency: 'USD',
    timezone: 'EST/PST',
    flag: '🇺🇸',
    greeting: 'Welcome to EMUSKI - Your American Manufacturing Partner',
    benefits: [
      '30-50% cost savings compared to US manufacturing',
      'ISO certified quality standards',
      'English-speaking engineering team',
      'Compliance with US export regulations',
      '24/7 support across US time zones',
      'Fast shipping via established logistics partners'
    ],
    testimonial: {
      name: 'John Mitchell',
      company: 'TechCorp Industries, California',
      text: 'EMUSKI has been our go-to manufacturing partner for 3 years. Their quality matches US standards while offering significant cost savings.'
    },
    localPartners: ['FedEx', 'UPS', 'DHL Express'],
    shippingInfo: 'Express shipping: 3-5 business days | Standard: 7-10 business days',
    contactHours: 'US Business Hours: 9 AM - 6 PM EST (24/7 emergency support)'
  },
  'uk': {
    country: 'United Kingdom',
    countryCode: 'GB',
    language: 'English (British)',
    currency: 'GBP',
    timezone: 'GMT/BST',
    flag: '🇬🇧',
    greeting: 'Welcome to EMUSKI - Your British Manufacturing Partner',
    benefits: [
      '40-60% cost savings compared to UK manufacturing',
      'British quality standards and compliance',
      'Brexit-compliant trade processes',
      'CE marking and UK compliance support',
      'UK-friendly business hours support',
      'Established UK shipping networks'
    ],
    testimonial: {
      name: 'Sarah Thompson',
      company: 'Precision Automotive Ltd, Birmingham',
      text: 'Outstanding quality and service. EMUSKI understands British manufacturing requirements perfectly.'
    },
    localPartners: ['Royal Mail', 'DPD', 'DHL UK'],
    shippingInfo: 'Express shipping: 2-4 business days | Standard: 5-7 business days',
    contactHours: 'UK Business Hours: 9 AM - 6 PM GMT (Extended support available)'
  },
  'de': {
    country: 'Germany',
    countryCode: 'DE',
    language: 'German',
    currency: 'EUR',
    timezone: 'CET/CEST',
    flag: '🇩🇪',
    greeting: 'Willkommen bei EMUSKI - Ihr deutscher Fertigungspartner',
    benefits: [
      '35-55% Kosteneinsparungen gegenüber deutscher Fertigung',
      'Deutsche Qualitätsstandards und DIN-Normen',
      'CE-Kennzeichnung und EU-Compliance',
      'Deutsch-sprechende Projektmanager verfügbar',
      'Europäische Logistiknetzwerke',
      'Industry 4.0 kompatible Fertigungssysteme'
    ],
    testimonial: {
      name: 'Klaus Weber',
      company: 'Maschinenbau Schmidt GmbH, München',
      text: 'Hervorragende Präzision und Termintreue. EMUSKI versteht deutsche Qualitätsanforderungen.'
    },
    localPartners: ['DHL Deutschland', 'Hermes', 'UPS'],
    shippingInfo: 'Express-Versand: 2-3 Werktage | Standard: 5-7 Werktage',
    contactHours: 'Deutsche Geschäftszeiten: 9-18 Uhr CET (Erweiterte Unterstützung)'
  },
  'jp': {
    country: 'Japan',
    countryCode: 'JP',
    language: 'Japanese',
    currency: 'JPY',
    timezone: 'JST',
    flag: '🇯🇵',
    greeting: 'EMUSKIへようこそ - あなたの日本の製造パートナー',
    benefits: [
      '日本の製造業比20-40%のコスト削減',
      '日本品質基準（JISマーク）対応',
      'カイゼン手法とリーン製造',
      '日本語サポートチーム',
      '日本時間でのビジネスサポート',
      '日本向け物流ネットワーク'
    ],
    testimonial: {
      name: '田中太郎',
      company: '精密機械株式会社、東京',
      text: 'EMUSKIの精密技術と品質管理は日本の基準を満たしています。優秀なパートナーです。'
    },
    localPartners: ['ヤマト運輸', '佐川急便', 'DHL Japan'],
    shippingInfo: '速達: 2-3営業日 | 通常: 4-6営業日',
    contactHours: '日本営業時間: 午前9時-午後6時 JST（24時間緊急サポート）'
  },
  'cn': {
    country: 'China',
    countryCode: 'CN',
    language: 'Chinese',
    currency: 'CNY',
    timezone: 'CST',
    flag: '🇨🇳',
    greeting: '欢迎来到EMUSKI - 您的中国制造合作伙伴',
    benefits: [
      '比中国本土制造节省15-25%成本',
      '中国国家标准（GB标准）合规',
      '中文技术支持团队',
      '中国时区业务支持',
      '熟悉中国制造业标准',
      '中国物流网络优化'
    ],
    testimonial: {
      name: '李明',
      company: '精密制造有限公司，深圳',
      text: 'EMUSKI的质量控制体系和交付能力在行业中处于领先地位。'
    },
    localPartners: ['顺丰速运', '中通快递', 'DHL中国'],
    shippingInfo: '快递: 1-2个工作日 | 标准: 3-5个工作日',
    contactHours: '中国营业时间: 上午9点-下午6点 CST（扩展支持）'
  }
};

export const LocationSpecific: React.FC = () => {
  const { country } = useParams<{ country: string }>();
  const [config, setConfig] = useState<LocationConfig | null>(null);
  const [userLocation, setUserLocation] = useState<any>(null);

  useEffect(() => {
    if (country && LOCATION_CONFIGS[country]) {
      setConfig(LOCATION_CONFIGS[country]);
      // Set language based on location
      geoTranslationService.setLanguage(LOCATION_CONFIGS[country].language.split(' ')[0].toLowerCase());
    }
    
    // Get user's actual location for comparison
    const location = geoTranslationService.getUserLocation();
    setUserLocation(location);
  }, [country]);

  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Location not found</h1>
          <p className="text-gray-600">The requested location page is not available.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6">{config.flag}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6" data-translate="greeting">
              {config.greeting}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Premium manufacturing solutions tailored for {config.country}
            </p>
            
            {/* Location Info Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Globe className="h-8 w-8 mx-auto mb-2" />
                <div className="text-sm opacity-80">Language</div>
                <div className="font-semibold">{config.language}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl mb-2">💰</div>
                <div className="text-sm opacity-80">Currency</div>
                <div className="font-semibold">{config.currency}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="h-8 w-8 mx-auto mb-2" />
                <div className="text-sm opacity-80">Timezone</div>
                <div className="font-semibold">{config.timezone}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <div className="text-sm opacity-80">From</div>
                <div className="font-semibold">Bangalore</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Why {config.country} Companies Choose EMUSKI
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {config.benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-blue-600 text-2xl mb-4">✓</div>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">What Our {config.country} Clients Say</h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="text-6xl mb-6">💬</div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 italic">
                "{config.testimonial.text}"
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-lg">{config.testimonial.name}</div>
                <div className="text-gray-600">{config.testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logistics & Contact Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">
              Seamless Service to {config.country}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Shipping Info */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">🚚</div>
                  <h3 className="text-2xl font-bold">Logistics & Shipping</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Shipping Times</h4>
                    <p className="text-gray-600">{config.shippingInfo}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Partner Networks</h4>
                    <div className="flex flex-wrap gap-2">
                      {config.localPartners?.map((partner, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">📞</div>
                  <h3 className="text-2xl font-bold">Contact & Support</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                    <p className="text-gray-600">{config.contactHours}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <span>+91-83444-74556</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <span>enquiries@emuski.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Manufacturing Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a customized quote for your {config.country} business requirements
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Quote in {config.currency}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Call ({config.timezone})
            </button>
          </div>
        </div>
      </div>

      {/* Auto-detected location notice */}
      {userLocation && userLocation.countryCode !== config.countryCode && (
        <div className="fixed bottom-4 right-4 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-lg shadow-lg max-w-sm">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-yellow-600 mr-2" />
            <div>
              <p className="text-sm font-medium text-yellow-800">
                Detected location: {userLocation.country}
              </p>
              <p className="text-xs text-yellow-700">
                <a href={`/${userLocation.countryCode.toLowerCase()}`} className="underline hover:text-yellow-900">
                  Visit {userLocation.country} page
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};