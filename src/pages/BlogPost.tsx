import { Navbar } from "../components/Navbar";
import { BlogPostComponent } from "../components/BlogPost";
import { Footer } from "../components/Footer";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BlogPostComponent />
      <Footer />
    </div>
  );
};

export default BlogPost;