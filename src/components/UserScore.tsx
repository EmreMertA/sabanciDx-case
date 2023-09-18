import React, { useEffect, useState } from 'react';

interface UserScoreProps {
  radius: number;
  strokeWidth: number;
  progress?: any; 
}

const UserScore: React.FC<UserScoreProps> = ({
  radius,
  strokeWidth,
  progress,
}) => {
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(strokeDashoffset);
  }, [strokeDashoffset]);

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle
        stroke='#EBEBEB'
        fill='transparent'
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke='#4ade80' // Change this color as needed
        fill='transparent'
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s' }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <text
        x={radius}
        stroke='#FFFF'
        fill='#FFF'
        y={radius}
        className='font-semibold text-lg'
        textAnchor='middle'
        dominantBaseline='middle'
      >
        {progress}%
      </text>
    </svg>
  );
};

export default UserScore;
