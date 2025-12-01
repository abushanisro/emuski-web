import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';

export default function BlogPost() {
  const { tag, slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${slug} | EMUSKI Blog`;
  }, [slug]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="w-full mt-20 max-w-[1200px] mx-auto px-4 pt-8 pb-16">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="flex items-center text-base text-gray-500 space-x-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li>/</li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li>/</li>
            <li className="text-gray-700">{slug}</li>
          </ol>
        </nav>

        <button
          onClick={() => navigate('/blog')}
          className="mb-6 flex items-center text-emuski-teal-dark font-medium hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Blog
        </button>

        <h1 className="text-4xl font-bold mb-6 text-emuski-teal-darker">
          Manufacturing Blog Post
        </h1>

        <div className="flex flex-wrap items-center text-gray-500 mb-8 gap-8">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            January 2025
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            5 min read
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p>This blog post is coming soon. Visit our <Link to="/blog" className="text-emuski-teal-dark hover:underline">blog</Link> for more manufacturing insights.</p>
        </div>
      </div>

      <div className="pb-20">
        <Footer />
      </div>
    </div>
  );
}
