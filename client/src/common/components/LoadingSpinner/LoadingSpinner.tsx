// LoadingSpinner.tsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faServer, faWrench } from "@fortawesome/free-solid-svg-icons";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-800 p-0 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-rows-2 gap-1">
          {/* Spinner Section */}
          <div className="flex flex-col items-center space-y-4">
            <div
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              className={`${spinnerStyles} w-16 h-16 border-t-4 border-london-blue animate-stretch`}
            ></div>
            <h1 className="text-2xl font-semibold">London Cashmere Boutique</h1>
            <p className="mt-2 text-center">
              The app is currently waking up, this may take a minute or two.
              Thank you for your patience.
            </p>
          </div>

          {/* Project Overview Section */}
          <div className="grid grid-cols-3 gap-0 text-sm">
            {/* Client Side */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center">
                <FontAwesomeIcon icon={faCode} className="mr-2" /> Client Side:
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  React & TypeScript: Core application structure with modular
                  components.
                </li>
                <li>State Management: Using React&apos;s context API.</li>
                <li>Tailwind CSS: Modern and responsive design.</li>
                <li>Axios: Efficient API requests.</li>
                <li>React Router: Dynamic routing with data pre-loading.</li>
                <li>Image Optimization: Faster load times with prefetching.</li>
                <li>Custom Hooks: Functions like useAddToCart and useAuth.</li>
                <li>Vite: Efficient bundling and development experience.</li>
                <li>Jest: Comprehensive client-side testing.</li>
              </ul>
            </div>

            {/* Server Side */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center">
                <FontAwesomeIcon icon={faServer} className="mr-2" /> Server
                Side:
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Express & TypeScript: Robust server setup.</li>
                <li>Mongoose: Database interactions with MongoDB.</li>
                <li>Modular Architecture: Controllers, models, and routes.</li>
                <li>Middleware: Custom solutions like authentication.</li>
                <li>Jest & Supertest: Server reliability and API testing.</li>
              </ul>
            </div>

            {/* Additional Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold flex items-center">
                <FontAwesomeIcon icon={faWrench} className="mr-2" /> Additional
                Features:
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Docker: Containerization for development and deployment.
                </li>
                <li>
                  CI with GitHub Actions: Automated testing and deployment.
                </li>
                <li>Husky: Code quality with git hooks.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const spinnerStyles = `
    animate-spin 
    border-t-4 
    border-transparent 
    rounded-full 
    w-16 
    h-16 
    border-london-blue 
    border-t-current 
`;

const spinAnimation = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = spinAnimation;
document.head.appendChild(styleSheet);

export default LoadingSpinner;
