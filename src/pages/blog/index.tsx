import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, ChevronRight, Search } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'Advanced CNC Machining Techniques for Precision Manufacturing',
    excerpt: 'Explore cutting-edge CNC machining methods that deliver micron-level precision for automotive and aerospace components.',
    image: '/assets/blog/cnc-machining.jpg',
    date: '2025-01-15',
    category: 'Manufacturing',
    slug: 'cnc-machining-techniques',
  },
  {
    id: 2,
    title: 'Industry 4.0: Smart Manufacturing Solutions',
    excerpt: 'How EMUSKI integrates IoT, AI, and automation to revolutionize manufacturing efficiency and quality control.',
    image: '/assets/blog/industry-4.jpg',
    date: '2025-01-10',
    category: 'Technology',
    slug: 'industry-4-smart-manufacturing',
  },
  {
    id: 3,
    title: 'ISO 9001 Quality Standards in OEM Manufacturing',
    excerpt: 'Understanding quality management systems and their critical role in delivering consistent manufacturing excellence.',
    image: '/assets/blog/quality-control.jpg',
    date: '2025-01-05',
    category: 'Quality',
    slug: 'iso-9001-quality-standards',
  },
];

export default function BlogIndex() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    document.title = "Manufacturing Blog | EMUSKI Insights & Innovations";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Expert insights on precision engineering, CNC machining, manufacturing innovations, and Industry 4.0 solutions from EMUSKI Manufacturing Solutions.');

    let canonicalUrl = document.querySelector('link[rel="canonical"]');
    if (!canonicalUrl) {
      canonicalUrl = document.createElement('link');
      canonicalUrl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalUrl);
    }
    canonicalUrl.setAttribute('href', 'https://www.emuski.com/blog');
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = blogPosts.filter(post =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-16 bg-gray-50 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">EMUSKI Manufacturing Blog</h1>
            <p className="text-gray-600">
              Expert insights on precision engineering, manufacturing innovations, and industry trends.
            </p>
          </div>

          <form onSubmit={handleSearch} className="max-w-lg mx-auto mb-8 flex items-center bg-white rounded-full shadow-sm overflow-hidden">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-emuski-teal-dark text-white text-sm font-medium flex items-center gap-1 hover:bg-emuski-teal-darker transition-colors"
            >
              <Search size={16} />
              Search
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-5">
                  <div className="flex items-center text-xs text-gray-500 mb-2 gap-2">
                    <Calendar size={12} className="mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="bg-emuski-teal-dark/10 text-emuski-teal-dark px-2 py-0.5 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-2 group-hover:text-emuski-teal-dark transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="inline-flex items-center text-emuski-teal-dark font-medium group-hover:underline">
                    Read More
                    <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="text-center text-gray-600 mt-10">No posts found. Try a different search.</p>
          )}
        </div>
      </section>

      <div className="pb-20">
        <Footer />
      </div>
    </div>
  );
}
