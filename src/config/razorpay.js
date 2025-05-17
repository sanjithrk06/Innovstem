// This is a mock implementation for testing
// In a real app, you would use the actual Razorpay SDK

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    // Mock Razorpay initialization
    console.log("Initializing Razorpay...");

    // Create a mock Razorpay constructor
    const mockRazorpay = function (options) {
      this.options = options;

      this.open = function () {
        console.log(
          "Opening Razorpay payment form with options:",
          this.options
        );

        // For testing, we'll simulate a successful payment after a delay
        setTimeout(() => {
          if (typeof this.options.handler === "function") {
            this.options.handler({
              razorpay_payment_id: `pay_${Date.now()}`,
              razorpay_order_id: this.options.order_id,
              razorpay_signature: "mock_signature",
            });
          }
        }, 2000);
      };
    };

    // Resolve with the mock Razorpay constructor
    resolve(mockRazorpay);
  });
};
