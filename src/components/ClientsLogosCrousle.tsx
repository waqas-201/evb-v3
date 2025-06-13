import React from 'react';

interface Logo {
    id: number;
    imageUrl: string;
}

const LogoBanner: React.FC = () => {
    const logos: Logo[] = [
        { id: 1, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyKXyPAykmDgqVAUisTnHel1hZILj6YdbypG5O" },
        { id: 2, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpy6YFrzMwiTEmRHz7cS4lDZvN5sduCx9UrjMPY" },
        { id: 3, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpy8EU6RydWiETSfsCPbnH5BjK34kNomJxA2FL1" },
        { id: 4, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyANBMnLxz0qRSwO7nKAbray1luMXcmoxBkhZ2" },
        { id: 5, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyUcaObugGCqzTuFJN6QmZXkxsMLI8PloAiRj9" },
        { id: 6, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpysHyKGmO1BpCj6vQ0As9eSdYDrW8XOzqkoLNP" },
        { id: 7, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyDjbO1JHv4ciMFZydUTGONufjDP2nCmklqwQh" },
        { id: 8, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpykiICXLqVWG0tMax2PdQjH9lqDFmp46RJgw7s" },
        { id: 9, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyhQkDCJAKj7fA3e85OBlx0zgaYQTt4INcwCqU" },
        { id: 10, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyOjjhCczVIhDQtZcw8vre9MmpA3B0y4ifYWTq" },
        { id: 11, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpytDDDsxirRWE631amLTylo07sQqzv8Kc29YFB" },
        { id: 12, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyg6yEokBYON5KEV6bQM7zx0psw9DHqoudkGJZ" },
        { id: 13, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpy8gyR2SFdWiETSfsCPbnH5BjK34kNomJxA2FL" },
        { id: 14, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpy0gIplbR82eN57yxGY9OAXMjqLQravUkh6ftw" },
        { id: 15, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpy8ouRRPdWiETSfsCPbnH5BjK34kNomJxA2FL1   " },
        { id: 16, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyuyPE9s2euV5MTzfslNivgacUjwyYKAZSXm49" },
        { id: 17, imageUrl: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyg8dblpYON5KEV6bQM7zx0psw9DHqoudkGJZt" },
    ];

    return (
        <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join thousands of companies worldwide who trust our platform to power
                        their success
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-100 to-transparent z-10" />

                    <div className="flex animate-scroll space-x-8">
                        {[...logos, ...logos].map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 hover:scale-105 transition-transform duration-300"
                            >
                                <img
                                    src={logo.imageUrl}
                                    className="h-32 object-contain bg-white rounded-lg shadow-sm"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm">
                        And thousands more companies
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default LogoBanner;
