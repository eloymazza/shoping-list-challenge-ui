import StylesProvider from "./StylesProvider";
import { Outlet } from "react-router-dom";

const Providers = () => {
  return (
    <StylesProvider>
      <Outlet />
    </StylesProvider>
  );
};

export default Providers;
