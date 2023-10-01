import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faCode,
  faServer,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";

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

const TechSection: React.FC<{
  icon: IconDefinition;
  title: string;
  items: string[];
}> = ({ icon, title, items }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center">
        <FontAwesomeIcon icon={icon} className="mr-2" /> {title}
      </h2>
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="container mx-auto px-4">
        {/* Spinner Section */}
        <div className="flex flex-col items-center space-y-4">
          <div
            className={`${spinnerStyles} w-16 h-16 border-t-4 border-london-blue animate-stretch`}
          ></div>
          <h1 className="text-2xl font-semibold">London Cashmere Boutique</h1>
          <p className="mt-2 text-center">
            This portfolio project&aposs server sits offline until visited, so
            please give us a few minutes while it starts up. In the meantime,
            check out the technologies used in this project below.
          </p>
        </div>

        {/* Technologies Used Section */}
        <div className="grid grid-cols-3 gap-4 mt-10 text-sm">
          <TechSection
            icon={faCode}
            title="Client Side"
            items={[
              "React & TypeScript: Modular components",
              "State Management: React's context API",
              "Tailwind CSS: Responsive design",
              "Axios: API requests",
              "React Router: Dynamic routing",
              "Vite: Bundling & dev experience",
              "Jest: Client-side testing",
            ]}
          />
          <TechSection
            icon={faServer}
            title="Server Side"
            items={[
              "Express & TypeScript: Server setup",
              "Mongoose: MongoDB interactions",
              "Modular Architecture: Controllers, models, routes",
              "Middleware: Custom solutions",
              "Jest & Supertest: API testing",
            ]}
          />
          <TechSection
            icon={faWrench}
            title="Additional Features"
            items={[
              "Docker: Containerization",
              "CI with GitHub Actions: Automated workflows",
              "Husky: Git hooks for code quality",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
