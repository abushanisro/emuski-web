import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ErrorPage } from "../components/ErrorPage";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Update document title
    document.title = "Page Not Found | EMUSKI";
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ErrorPage 
        errorType="404"
        title="Page Not Found"
        description="The page you're looking for doesn't exist or may have been moved. Let us help you find what you need."
      />
      <Footer />
    </div>
  );
};

export default NotFound;
