import { FC } from "react";
import { Pages } from "./pages";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="">
      <Pages />
    </div>
  );
};

export default App;
