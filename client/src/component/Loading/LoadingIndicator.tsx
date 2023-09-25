import { FC } from "react";

interface LoadingIndicatorProps {
  radius?: number;
  strokeWidth?: number;
  angle?: number;
}

export const LoadingIndicator: FC<LoadingIndicatorProps> = ({
  radius = 14,
  strokeWidth = 4,
  angle = 270,
}) => {
  const size = radius * 2 + strokeWidth;
  const CIRCUMFERENCE = 2 * radius * Math.PI;
  const dashOffset = CIRCUMFERENCE * ((360 - angle) / 360);
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ width: size, height: size }}
      className="animate-spin"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        strokeWidth={strokeWidth}
        r={radius}
        fill="none"
        stroke="var(--grayscale-gray300)"
      ></circle>
      <circle
        cx={size / 2}
        cy={size / 2}
        strokeWidth={strokeWidth}
        r={radius}
        fill="none"
        stroke="var(--brand-blue)"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
      ></circle>
    </svg>
  );
};
