
const RSMediaLogo = ({
    className = "",
    size = "medium",
}: {
    className?: string;
    size?: "small" | "medium" | "large" | "navbar";
}) => {
    const sizePresets: Record<"small" | "medium" | "large" | "navbar", string> = {
        small: "w-20 h-8",
        medium: "w-30 h-10",
        large: "w-45 h-15",
        navbar: "w-25 h-9",
    };

    const sizeClass = sizePresets[size] || "";

    return (
        <div className={`inline-block ${className} ${sizeClass}`}>
            <svg
                viewBox="0 0 320 80"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
            >
                {/* Gradient Definitions */}
                <defs>
                    <linearGradient id="sphereGradient" cx="0.3" cy="0.3" r="0.7">
                        <stop offset="0%" stopColor="#f0f0f0" />
                        <stop offset="70%" stopColor="#d0d0d0" />
                        <stop offset="100%" stopColor="#a0a0a0" />
                    </linearGradient>
                    <linearGradient id="blueGradient" cx="0" cy="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#4A90E2" />
                        <stop offset="50%" stopColor="#5BA3F5" />
                        <stop offset="100%" stopColor="#87CEEB" />
                    </linearGradient>
                </defs>

                {/* Headset Base Circle */}
                <circle
                    cx="40"
                    cy="40"
                    r="25"
                    fill="url(#sphereGradient)"
                    stroke="#2D1B69"
                    strokeWidth="2"
                />

                {/* Inner Circle */}
                <circle
                    cx="40"
                    cy="40"
                    r="18"
                    fill="none"
                    stroke="#2D1B69"
                    strokeWidth="1"
                />

                {/* RS Text in Center */}
                <text
                    x="40"
                    y="46"
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="bold"
                    fontFamily="serif"
                    fill="#2D1B69"
                >
                    RS
                </text>

                {/* Left Headphone */}
                <ellipse
                    cx="20"
                    cy="40"
                    rx="8"
                    ry="12"
                    fill="#2D1B69"
                />
                <ellipse
                    cx="20"
                    cy="40"
                    rx="5"
                    ry="8"
                    fill="#4A4A4A"
                />

                {/* Right Headphone */}
                <ellipse
                    cx="60"
                    cy="40"
                    rx="8"
                    ry="12"
                    fill="#2D1B69"
                />
                <ellipse
                    cx="60"
                    cy="40"
                    rx="5"
                    ry="8"
                    fill="#4A4A4A"
                />

                {/* Headset Arc */}
                <path
                    d="M 28 30 Q 40 20 52 30"
                    fill="none"
                    stroke="#2D1B69"
                    strokeWidth="3"
                    strokeLinecap="round"
                />

                {/* Microphone Boom */}
                <path
                    d="M 35 48 Q 42 55 48 52"
                    fill="none"
                    stroke="#2D1B69"
                    strokeWidth="2"
                    strokeLinecap="round"
                />

                {/* Microphone */}
                <circle
                    cx="48"
                    cy="52"
                    r="2"
                    fill="#2D1B69"
                />

                {/* RS MEDIA Text */}
                <text
                    x="85"
                    y="35"
                    fontSize="16"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                    fill="#2D1B69"
                >
                    RS
                </text>

                <text
                    x="110"
                    y="35"
                    fontSize="16"
                    fontWeight="bold"
                    fontFamily="Arial, sans-serif"
                    fill="url(#blueGradient)"
                >
                    MEDIA
                </text>

                {/* Solution Text */}
                <text
                    x="195"
                    y="35"
                    fontSize="12"
                    fontWeight="normal"
                    fontFamily="serif"
                    fill="#2D1B69"
                    fontStyle="italic"
                >
                    Solution
                </text>

                {/* Tagline */}
                <text
                    x="85"
                    y="50"
                    fontSize="8"
                    fontFamily="Arial, sans-serif"
                    fill="url(#blueGradient)"
                >
                    From Imagination to Reality
                </text>

                {/* Decorative Diamond Shapes */}
                <polygon
                    points="270,25 273,28 270,31 267,28"
                    fill="url(#blueGradient)"
                />
                <polygon
                    points="280,20 282,22 280,24 278,22"
                    fill="url(#blueGradient)"
                />
                <polygon
                    points="285,30 287,32 285,34 283,32"
                    fill="url(#blueGradient)"
                />
            </svg>
        </div>
    );
};

export default RSMediaLogo;
