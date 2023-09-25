import { FC, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import MainPage from "./MainPage";
import { LoadingScreen } from "../component/Loading/LoadingScreen";

interface PagesProps {}

export const Pages: FC<PagesProps> = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
