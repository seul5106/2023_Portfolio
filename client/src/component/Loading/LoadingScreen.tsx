import { FC } from "react";
import { LoadingIndicator } from "./LoadingIndicator";

export const LoadingScreen: FC = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center"
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <LoadingIndicator />
    </div>
  );
};
