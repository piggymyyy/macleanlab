import React from 'react';

interface BacteriophageIconProps {
  className?: string;
}

export function BacteriophageIcon({ className = "h-6 w-6" }: BacteriophageIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bacteriophage head (icosahedral capsid) */}
      <polygon
        points="12,3 16,6 16,10 12,13 8,10 8,6"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
      
      {/* Tail tube */}
      <rect
        x="11"
        y="13"
        width="2"
        height="4"
        fill="currentColor"
      />
      
      {/* Base plate */}
      <rect
        x="10"
        y="17"
        width="4"
        height="1"
        fill="currentColor"
      />
      
      {/* Tail fibers */}
      <line
        x1="10"
        y1="18"
        x2="8"
        y2="21"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <line
        x1="11"
        y1="18"
        x2="9"
        y2="21"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <line
        x1="13"
        y1="18"
        x2="15"
        y2="21"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <line
        x1="14"
        y1="18"
        x2="16"
        y2="21"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      
      {/* Additional detail lines on head */}
      <line
        x1="10"
        y1="7"
        x2="14"
        y2="7"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.7"
      />
      <line
        x1="10"
        y1="9"
        x2="14"
        y2="9"
        stroke="currentColor"
        strokeWidth="0.3"
        opacity="0.7"
      />
    </svg>
  );
}