import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  showText?: boolean;
}

export default function Logo({ className = 'w-16 h-16', variant = 'gold', showText = true }: LogoProps) {
  // Determine fill/stroke colors based on variant
  const goldColor = '#D4AF37';
  const lightColor = '#FFFFFF';
  const darkColor = '#050505';
  
  const textColor = variant === 'light' ? lightColor : goldColor;
  const primaryColor = variant === 'light' ? lightColor : goldColor;

  return (
    <svg
      viewBox={showText ? "0 0 160 160" : "0 30 160 85"}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g>
        {/* Decorative top dots arc */}
        <path
          d="M 50 48 Q 80 32 110 48"
          stroke={primaryColor}
          strokeWidth="1.5"
          strokeDasharray="1 4"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Outer decorative thin arc */}
        <path
          d="M 45 58 A 42 42 0 0 1 115 58"
          stroke={primaryColor}
          strokeWidth="1"
          opacity="0.4"
        />

        {/* Core Double circle border */}
        <circle
          cx="80"
          cy="70"
          r="30"
          stroke={primaryColor}
          strokeWidth="1.5"
          opacity="0.9"
        />
        <circle
          cx="80"
          cy="70"
          r="26"
          stroke={primaryColor}
          strokeWidth="0.75"
          opacity="0.6"
        />

        {/* Inner letter 'SM' */}
        <text
          x="80"
          y="77"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="18"
          fontWeight="bold"
          fill={primaryColor}
          textAnchor="middle"
          letterSpacing="0.5"
        >
          SM
        </text>

        {/* Left flourish wing */}
        <path
          d="M 46 70 Q 30 70 24 64 Q 18 58 24 50 Q 28 46 26 53 Q 24 60 38 64 L 48 66"
          stroke={primaryColor}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 43 73 Q 22 75 14 83 Q 8 90 18 97 Q 24 101 26 94 Q 28 87 38 81 L 47 75"
          stroke={primaryColor}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Right flourish wing */}
        <path
          d="M 114 70 Q 130 70 136 64 Q 142 58 136 50 Q 132 46 134 53 Q 136 60 122 64 L 112 66"
          stroke={primaryColor}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 117 73 Q 138 75 146 83 Q 152 90 142 97 Q 136 101 134 94 Q 132 87 122 81 L 113 75"
          stroke={primaryColor}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Bottom flourish swirl with dot link */}
        <path
          d="M 52 92 C 60 102, 100 102, 108 92"
          stroke={primaryColor}
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        <circle cx="80" cy="100" r="1.5" fill={primaryColor} />
        <circle cx="74" cy="99" r="1" fill={primaryColor} />
        <circle cx="86" cy="99" r="1" fill={primaryColor} />

        {showText && (
          <>
            {/* Branding wording */}
            <text
              x="80"
              y="126"
              fontFamily="Outfit, Helvetica, sans-serif"
              fontSize="11.5"
              fontWeight="900"
              fill={textColor}
              textAnchor="middle"
              letterSpacing="4.5"
            >
              SAIMAYA
            </text>

            <text
              x="80"
              y="139"
              fontFamily="Outfit, Helvetica, sans-serif"
              fontSize="5.2"
              fontWeight="600"
              fill={primaryColor}
              textAnchor="middle"
              letterSpacing="1.8"
              opacity="0.85"
            >
              PARLOUR &amp; ACADEMY
            </text>
          </>
        )}
      </g>
    </svg>
  );
}
