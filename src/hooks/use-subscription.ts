import axios from "axios";
import { useState } from "react";

export const useSubscription = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const onSubscribe = async () => {
    setIsProcessing(true);
    let response;

    try {
      response = await axios.get("/api/payment");
    } catch (error) {
      console.log("API call failed, using fallback data", error);
      // Fallback response in case of API failure
      response = {
        data: {
          status: 200,
          session_url: "/fallback-subscription-page", // You can change this to any URL
        },
      };
    }

    if (response && response.data.status === 200) {
      window.location.href = response.data.session_url;
    }

    setIsProcessing(false);
  };

  return { onSubscribe, isProcessing };
};
