"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const TawkToChat = ({ pageData }) => {
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    // Remove any existing Tawk.to script before adding a new one
    const existingScript = document.querySelector(
      "script[src*='embed.tawk.to']"
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Add Tawk.to script dynamically
    const tawkScript = document.createElement("script");
    tawkScript.src = "https://embed.tawk.to/6786138849e2fd8dfe0712a3/1ihhrok31";
    tawkScript.async = true;
    tawkScript.charset = "UTF-8";
    tawkScript.setAttribute("crossorigin", "*");
    document.body.appendChild(tawkScript);

    // Configure Tawk.to API after script loads
    tawkScript.onload = () => {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      window.Tawk_API.onChatStarted = function () {
        window.Tawk_API.visitor = {
          name: "Visitor",
          greeting: "how are you?",
        };
      };

      // Define the onChatStarted callback
      // window.Tawk_API.onChatStarted = function () {
      //   // Send a dynamic greeting message
      //   window.Tawk_API.addEvent("dynamic-message", {
      //     message: "Hi there! How can we assist you today?",
      //   });
      // };

      // Set Tawk.to attributes dynamically
      // if (window.Tawk_API.setAttributes && window.Tawk_API.addEvent) {
      //   window.Tawk_API.setAttributes(
      //     {
      //       greeting: "Hello world",
      //       // greetings: getGreetingMessage(pathname),
      //       "Department ID": pageData.id,
      //       "Department Name": pageData.department,
      //       "Suggested Topics": pageData.generalTerm.replace("#", ","),
      //     },
      //     (error) => {
      //       if (error) console.error("Tawk.to attribute error:", error);
      //     }
      //   );

      //   // Add a dynamic welcome message
      //   window.Tawk_API.addEvent("dynamic-message", {
      //     message: `Hi there! How can we assist you regarding ${pageData.department}?`,
      //   });
      // }
    };

    // Cleanup script and reset Tawk.to instance on unmount
    return () => {
      if (existingScript) {
        existingScript.remove();
      }
      if (window.Tawk_API) {
        window.Tawk_API = null;
        window.Tawk_LoadStart = null;
      }
    };
  }, [pageData]);

  return null; // No visual component, just injects Tawk.to script
};

export default TawkToChat;
