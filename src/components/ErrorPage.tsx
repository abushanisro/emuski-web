import { Link } from "react-router-dom";
import { ChevronRight, Home, ArrowLeft, Search, FileX, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface ErrorPageProps {
  errorType?: "404" | "500" | "loading" | "network";
  title?: string;
  description?: string;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  showSearchSuggestions?: boolean;
  customActions?: React.ReactNode;
}

export const ErrorPage = ({
  errorType = "404",
  title,
  description,
  showBackButton = true,
  showHomeButton = true,
  showSearchSuggestions = true,
  customActions
}: ErrorPageProps) => {
  const getErrorConfig = () => {
    switch (errorType) {
      case "404":
        return {
          icon: <FileX className="h-24 w-24 text-emuski-teal" />,
          defaultTitle: "Page Not Found",
          defaultDescription: "The page you're looking for doesn't exist or has been moved.",
          errorCode: "404"
        };
      case "500":
        return {
          icon: <AlertCircle className="h-24 w-24 text-error" />,
          defaultTitle: "Internal Server Error",
          defaultDescription: "Something went wrong on our end. Please try again later.",
          errorCode: "500"
        };
      case "loading":
        return {
          icon: (
            <div className="animate-spin rounded-full h-24 w-24 border-4 border-emuski-teal border-t-transparent" />
          ),
          defaultTitle: "Loading Content",
          defaultDescription: "Please wait while we fetch your content...",
          errorCode: ""
        };
      case "network":
        return {
          icon: <AlertCircle className="h-24 w-24 text-warning" />,
          defaultTitle: "Connection Error",
          defaultDescription: "Unable to connect to our servers. Please check your internet connection.",
          errorCode: "Network"
        };
      default:
        return {
          icon: <FileX className="h-24 w-24 text-emuski-teal" />,
          defaultTitle: "Something went wrong",
          defaultDescription: "An unexpected error occurred.",
          errorCode: "Error"
        };
    }
  };

  const config = getErrorConfig();
  const displayTitle = title || config.defaultTitle;
  const displayDescription = description || config.defaultDescription;

  const popularPages = [
    { label: "Manufacturing Services", href: "/manufacturing-services" },
    { label: "Engineering Precision", href: "/precision-engineering" },
    { label: "AI Solutions", href: "/solutions/ai" },
    { label: "Industries", href: "/industries" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" }
  ];

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-emuski-teal/5 flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto w-full">
        {/* Main Error Content */}
        <div className="text-center mb-12">
          {/* Error Code */}
          {config.errorCode && (
            <div className="text-8xl md:text-9xl font-bold text-emuski-teal/20 mb-4 select-none">
              {config.errorCode}
            </div>
          )}
          
          {/* Icon */}
          <div className="flex justify-center mb-8">
            {config.icon}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-dark-text mb-6 tracking-tight">
            {displayTitle}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-gray max-w-2xl mx-auto mb-8 leading-relaxed">
            {displayDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {showBackButton && (
              <Button 
                variant="outline" 
                className="border-emuski-teal text-emuski-teal hover:bg-emuski-teal hover:text-white"
                onClick={handleGoBack}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            )}
            
            {showHomeButton && (
              <Link to="/">
                <Button className="bg-emuski-teal hover:bg-emuski-teal-dark text-white">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            )}

            {customActions}
          </div>
        </div>

        {/* Popular Pages Section */}
        {showSearchSuggestions && (
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-border-gray shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-dark-text mb-2">
                Popular Pages
              </h2>
              <p className="text-text-gray">
                Maybe you're looking for one of these pages instead?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {popularPages.map((page) => (
                <Link
                  key={page.href}
                  to={page.href}
                  className="group flex items-center justify-between p-4 rounded-lg bg-white hover:bg-emuski-teal/5 border border-transparent hover:border-emuski-teal/20 transition-all duration-200"
                >
                  <span className="font-medium text-dark-text group-hover:text-emuski-teal">
                    {page.label}
                  </span>
                  <ChevronRight className="h-4 w-4 text-text-gray group-hover:text-emuski-teal transition-colors" />
                </Link>
              ))}
            </div>

            {/* Search Suggestion */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-text-gray">
                <Search className="h-4 w-4" />
                <span className="text-sm">
                  Still can't find what you're looking for? Try searching from our{" "}
                  <Link to="/" className="text-emuski-teal hover:text-emuski-teal-dark font-medium">
                    homepage
                  </Link>
                </span>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};