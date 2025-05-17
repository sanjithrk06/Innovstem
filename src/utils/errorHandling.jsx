import React from "react";
import PropTypes from "prop-types";
import ErrorState from "../components/ui/ErrorState";

// Handle data fetching errors, returning an ErrorState component
export const handleDataError = (error, retry = null) => {
  let errorDetails = {
    title: "Unable to load data",
    message: "There was a problem loading the data. Please try again.",
    isDataError: true,
  };

  // Handle specific error types
  if (error?.response?.status === 404) {
    errorDetails = {
      title: "No Data Found",
      message: "The requested data could not be found.",
      isDataError: true,
    };
  } else if (error?.response?.status === 403) {
    errorDetails = {
      title: "Access Denied",
      message: "You do not have permission to access this data.",
      isDataError: true,
    };
  } else if (error?.response?.status === 500) {
    errorDetails = {
      title: "Server Error",
      message: "An unexpected server error occurred. Please try again later.",
      isDataError: true,
    };
    // Check for Razorpay-specific errors
    if (error?.config?.url?.includes("razorpay")) {
      errorDetails.title = "Payment Processing Error";
      errorDetails.message =
        "Failed to process payment. Please try again or contact support.";
    }
  } else if (error instanceof TypeError) {
    // Handle network errors
    errorDetails = {
      title: "Network Error",
      message:
        "Unable to connect to the server. Please check your internet connection.",
      isDataError: true,
    };
  }

  return (
    <ErrorState
      {...errorDetails}
      error={error}
      onRetry={retry}
      showHome={false}
    />
  );
};

// Hook for handling loading states and errors in data fetching
export const useDataFetchState = (
  isLoading,
  error,
  retry = null,
  loadingComponent = null
) => {
  if (isLoading) {
    return (
      loadingComponent || (
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
        </div>
      )
    );
  }

  if (error) {
    return handleDataError(error, retry);
  }

  return null;
};

// HOC to wrap components that need data fetching error handling
export const withDataFetchHandling = (WrappedComponent) => {
  function WithDataFetchHandlingComponent({
    isLoading,
    error,
    retry,
    loadingComponent,
    ...props
  }) {
    const errorState = useDataFetchState(
      isLoading,
      error,
      retry,
      loadingComponent
    );
    if (errorState) return errorState;

    return <WrappedComponent {...props} />;
  }

  WithDataFetchHandlingComponent.displayName = `WithDataFetchHandling(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  WithDataFetchHandlingComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    retry: PropTypes.func,
    loadingComponent: PropTypes.node,
  };

  return WithDataFetchHandlingComponent;
};

// PropTypes for exported functions
handleDataError.propTypes = {
  error: PropTypes.any,
  retry: PropTypes.func,
};

useDataFetchState.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.any,
  retry: PropTypes.func,
  loadingComponent: PropTypes.node,
};
