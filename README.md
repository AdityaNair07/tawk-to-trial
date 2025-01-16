# Next.js Application with Tawk.to Live Chat Integration

Welcome to the Next.js application showcasing the integration of the Tawk.to live chat widget. This project demonstrates how to implement dynamic triggers that display page-specific messages to users upon visiting different pages. The live chat feature allows administrators to engage with users in real-time.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Integration Details](#integration-details)
  - [Adding Tawk.to Widget](#adding-tawkto-widget)
  - [Implementing Dynamic Triggers](#implementing-dynamic-triggers)
- [Contributing](#contributing)

## Introduction

This project is a Next.js application that integrates the Tawk.to live chat widget. It demonstrates how to set up dynamic triggers to send page-specific messages to users, enhancing user engagement and providing real-time communication between administrators and users.

## Features

- **Tawk.to Live Chat Integration**: Seamless integration of the Tawk.to live chat widget into a Next.js application.
- **Dynamic Triggers**: Sends customized messages to users based on the specific page they visit. :contentReference[oaicite:0]{index=0}
- **Real-time Communication**: Allows administrators to interact with users in real-time through the chat interface.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- **Node.js**: Ensure that Node.js is installed on your machine. You can download it from the [official website](https://nodejs.org/).
- **Tawk.to Account**: Create a free account at [Tawk.to](https://www.tawk.to/) to obtain the necessary widget credentials.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AdityaNair07/tawk-to-trial.git
   cd tawk-to-trial

2. **Install Dependencies**:

    ```bash
    npm install
    or 
    yarn install

3. **Running the application**:

    Start the development server

    ```bash
    npm run dev

### Running the Application

Open your browser and navigate to <http://localhost:3000> to see the application in action.

### Integration Details

**Adding Tawk.to Widget**:

  1. Sign Up for Tawk.to: If you haven't already, create an account at Tawk.to.

  2. Obtain Widget Code: After setting up your property in the Tawk.to dashboard, retrieve the widget code snippet provided for integration.

**Integrate into Next.js**:

  In your Next.js application, use the Script component to add the Tawk.to widget. This ensures the script loads correctly with Next.js's optimized loading strategy.

    ```bash
    import Script from 'next/script';

    function MyApp({ Component, pageProps }) {
    return (
        <>
        <Script
            id="tawk-to"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
            __html: `
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();
            `,
            }}
        />
        <Component {...pageProps} />
        </>
    );
    }

    export default MyApp;

Replace 'YOUR_PROPERTY_ID' with the actual property ID from your Tawk.to account.

**Setting Up Dynamic Triggers**:

    1. To display page-specific messages to users via the chat widget
    
    2. Access Tawk.to Dashboard: Log in to your Tawk.to account and navigate to the desired property.

    3. Navigate to Triggers: Go to Administration > Settings > Triggers.

    4. Create an Advanced Trigger:

    5. Click on Add Trigger and select Advanced as the trigger type.

    6. Configure Conditions:

    7. Still on site: Set the desired time (e.g., 1 minute).
    
    8. Visitor served: Set to False.

    9. Visitor requesting chat: Set to False.

    10. Visitor page URL: Use the Contains condition and specify a keyword related to the page (e.g., 'about' for the About page).
    
    11. Set the Message: Craft a message relevant to the page, such as "Welcome to our About page! How can we assist you today?"

    12. Save the Trigger: Click Save to activate the trigger.

    13. Repeat this process for each page, customizing the URL condition and message accordingly.

### Contributing

Contributions are welcomed to enhance this project. Please follow these steps:

1. Fork the Repository: Click the 'Fork' button at the top right of this page.

2. Create a New Branch: Use a descriptive name for your branch.

    ```bash
    git checkout -b feature/your-feature-name

3. Make Changes: Implement your feature or fix.

4. Commit Changes: Write a clear and concise commit message.

    ```bash
    git commit -m 'Add new feature: your feature name'

5. Push to Branch:

    ```bash
    git push origin feature/your-feature-name

6. Create a Pull Request: Submit your changes for review.

### Thank you for visiting this repo. Happy Learning 🫡