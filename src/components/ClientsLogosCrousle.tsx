import React from 'react';

interface Logo {
    id: number;
    imageUrl: string;
}

const LogoBanner: React.FC = () => {
    const logos: Logo[] = [
        { id: 1, imageUrl: "/public/coreClient/1.png" },
        { id: 2, imageUrl: "/public/coreClient/2.png" },
        { id: 3, imageUrl: "/public/coreClient/3.png" },
        { id: 4, imageUrl: "/public/coreClient/4.png" },
        { id: 5, imageUrl: "/public/coreClient/5.png" },
        { id: 6, imageUrl: "/public/coreClient/6.png" },
        { id: 7, imageUrl: "/public/coreClient/7.png" },
        { id: 8, imageUrl: "/public/coreClient/8.png" },
        { id: 9, imageUrl: "/public/coreClient/9.png" },
        { id: 10, imageUrl: "/public/coreClient/10.png" },
        { id: 11, imageUrl: "/public/coreClient/11.png" },
        { id: 12, imageUrl: "/public/coreClient/12.png" },
        { id: 13, imageUrl: "/public/coreClient/13.png" },
        { id: 14, imageUrl: "/public/coreClient/14.png" },
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
