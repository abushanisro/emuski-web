'use client'

import Link from "next/link";
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
          defaultTitle: "Page Not Found",
          defaultDescription: "The page you're looking for doesn't exist or has been moved.",
          errorCode: "404"
        };
      case "500":
        return {
          defaultTitle: "Internal Server Error",
          defaultDescription: "Something went wrong on our end. Please try again later.",
          errorCode: "500"
        };
      case "loading":
        return {
          defaultTitle: "Loading Content",
          defaultDescription: "Please wait while we fetch your content...",
          errorCode: ""
        };
      case "network":
        return {
          defaultTitle: "Connection Error",
          defaultDescription: "Unable to connect to our servers. Please check your internet connection.",
          errorCode: "Network"
        };
      default:
        return {
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
    { label: "Manufacturing Excellences", href: "/manufacturing-services" },
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
    <div className="flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto w-full">
        {/* Main Error Content */}
        <div className="text-center mb-12">
          {/* Error Code */}
          {config.errorCode && (
            <div className="text-8xl md:text-9xl font-bold mb-8 select-none" style={{color: '#4fd3d4', opacity: 0.3}}>
              {config.errorCode}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            {displayTitle}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed text-white/80">
            {displayDescription}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {showBackButton && (
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white hover:text-gray-900"
                onClick={handleGoBack}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Button>
            )}
            
            {showHomeButton && (
              <Link href="/">
                <Button className="text-white hover:opacity-80" style={{backgroundColor: '#4fd3d4'}}>
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
          <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 shadow-lg">
            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-white mb-2">
                Popular Pages
              </h2>
              <p className="text-white/70">
                Maybe you're looking for one of these pages instead?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {popularPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 transition-all duration-200"
                >
                  <span className="font-medium text-white group-hover:text-white" style={{'--hover-color': '#4fd3d4'} as React.CSSProperties}>
                    {page.label}
                  </span>
                  <ChevronRight className="h-4 w-4 text-white/60 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>

            {/* Search Suggestion */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-white/70">
                <Search className="h-4 w-4" />
                <span className="text-sm">
                  Still can't find what you're looking for? Try searching from our{" "}
                  <Link href="/" className="font-medium hover:opacity-80" style={{color: '#4fd3d4'}}>
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