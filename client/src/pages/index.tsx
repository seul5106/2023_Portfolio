import { FC, Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoadingScreen } from "../component/Loading/LoadingScreen";
import { Header } from "../component/Layout/Header";

interface PagesProps {}

export const Pages: FC<PagesProps> = () => {
  const MainP = lazy(() => import("./MainPage"));
  const NotFoundP = lazy(() => import("./NotFoundPage"));

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<MainP />} />
          <Route path="*" element={<NotFoundP />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
