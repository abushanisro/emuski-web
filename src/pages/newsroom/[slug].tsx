import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export default function NewsroomPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `${slug} | EMUSKI Newsroom`;
  }, [slug]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="w-full mt-20 max-w-[1200px] mx-auto px-4 pt-8 pb-16">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="flex items-center text-base text-gray-500 space-x-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li>/</li>
            <li><Link to="/newsroom" className="hover:underline">Newsroom</Link></li>
            <li>/</li>
            <li className="text-gray-700">{slug}</li>
          </ol>
        </nav>

        <button
          onClick={() => navigate('/newsroom')}
          className="mb-6 flex items-center text-emuski-teal-dark font-medium hover:underline"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Newsroom
        </button>

        <h1 className="text-4xl font-bold mb-6 text-center text-emuski-teal-darker">
          Manufacturing Innovation Article
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
          <p>This article is coming soon. Visit our <Link to="/blog" className="text-emuski-teal-dark hover:underline">blog</Link> for the latest manufacturing insights.</p>
        </div>
      </div>

      <div className="pb-20">
        <Footer />
      </div>
    </div>
  );
}
