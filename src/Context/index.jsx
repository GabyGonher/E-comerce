import { createContext, useState } from "react";
export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [productOpen, setproductOpen] = useState(false);
    const openProductDetail = () => setproductOpen(true)
    const closeProductDetail = () => setproductOpen(false)
return (
  <AppContext.Provider value={{
    count,
    setCount,
    productOpen,
    openProductDetail,
    closeProductDetail,
    
    
  }}>
  {children}
  </AppContext.Provider>
)
}
