import { ReactNode } from "react";
import StylesProvider from "./StylesProvider";

type Props = {
  children: ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => {
  return <StylesProvider>{children}</StylesProvider>;
};

export default Providers;
