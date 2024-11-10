import { FaGithub } from "react-icons/fa";

const GitHubSection = () => {
  return (
    <div className="w-full min-h-screen bg-transparent text-white flex flex-col items-center justify-center py-15 mb-8">
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-6">
          Explore Our Code on GitHub
        </h2>
        
        {/* GitHub Link */}
        <div className="flex justify-center items-center space-x-4 text-blue-400">
          <a
            href="https://github.com/Omkar982004/hashguard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-4xl font-semibold hover:text-blue-500"
          >
            <FaGithub className="w-12 h-12 mr-4" />
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubSection;
