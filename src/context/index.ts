import { createContext } from "react";

interface ContextType {
  pageNumber: number;
  handlePageNumber: (event: any, newValue: number) => void;
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainContext = createContext<ContextType>({
  pageNumber: 0,
  handlePageNumber: () => {},
  drawerOpen: false,
  setDrawerOpen: () => {},
});

export default MainContext;
