'use client'

import { ErrorPage } from "../ErrorPage";
import { Button } from "./button";
import Link from "next/link";
import { RefreshCw, Wifi } from "lucide-react";

// Pre-configured error page components for common use cases

export const BlogNotFoundPage = ({ description }: { description?: string }) => (
  <ErrorPage 
    errorType="404"
    title="Article Not Found"
    description={description || "The article you're looking for doesn't exist or may have been moved."}
    customActions={
      <Link href="/blog">
        <Button className="bg-emuski-teal hover:bg-emuski-teal-dark text-white">
          Browse All Articles
        </Button>
      </Link>
    }
  />
);

export const LoadingPage = ({ title, description }: { title?: string; description?: string }) => (
  <ErrorPage 
    errorType="loading"
    title={title || "Loading Content"}
    description={description || "Please wait while we fetch your content..."}
    showBackButton={false}
    showHomeButton={false}
    showSearchSuggestions={false}
  />
);

export const ServerErrorPage = ({ description }: { description?: string }) => (
  <ErrorPage 
    errorType="500"
    title="Something Went Wrong"
    description={description || "We're experiencing technical difficulties. Please try again later."}
    customActions={
      <Button 
        onClick={() => window.location.reload()}
        variant="outline"
        className="border-emuski-teal text-emuski-teal-darker hover:bg-emuski-teal hover:text-white"
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Refresh Page
      </Button>
    }
  />
);

export const NetworkErrorPage = ({ onRetry }: { onRetry?: () => void }) => (
  <ErrorPage 
    errorType="network"
    title="Connection Problem"
    description="Unable to connect to our servers. Please check your internet connection and try again."
    customActions={
      onRetry && (
        <Button 
          onClick={onRetry}
          className="bg-emuski-teal hover:bg-emuski-teal-dark text-white"
        >
          <Wifi className="mr-2 h-4 w-4" />
          Try Again
        </Button>
      )
    }
  />
);

export const UnauthorizedPage = () => (
  <ErrorPage 
    errorType="404"
    title="Access Denied"
    description="You don't have permission to access this page. Please contact support if you believe this is an error."
    customActions={
      <Link href="/contact">
        <Button className="bg-emuski-teal hover:bg-emuski-teal-dark text-white">
          Contact Support
        </Button>
      </Link>
    }
  />
);

export const MaintenancePage = () => (
  <ErrorPage 
    errorType="500"
    title="Under Maintenance"
    description="We're currently performing scheduled maintenance. We'll be back shortly. Thank you for your patience."
    showBackButton={false}
    showSearchSuggestions={false}
    customActions={
      <Button 
        onClick={() => window.location.reload()}
        variant="outline"
        className="border-emuski-teal text-emuski-teal-darker hover:bg-emuski-teal hover:text-white"
      >
        <RefreshCw className="mr-2 h-4 w-4" />
        Check Again
      </Button>
    }
  />
);