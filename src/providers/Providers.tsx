import StylesProvider from "./StylesProvider";
import { Outlet } from "react-router-dom";
import { GlobalStateProvider } from "./GlobalStateProvider";

const Providers = () => {
  return (
    <StylesProvider>
      <GlobalStateProvider>
        <Outlet />
      </GlobalStateProvider>
    </StylesProvider>
  );
};

export default Providers;
