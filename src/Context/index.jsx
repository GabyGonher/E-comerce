import { createContext, useState } from "react";
export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
  // Contador en carrito 
    const [count, setCount] = useState(0);
    const [productOpen, setproductOpen] = useState(false);
    const openProductDetail = () => setproductOpen(true)
    const closeProductDetail = () => setproductOpen(false)
    //  Para mostrar detalles del producto
    const [productToShow, setProductToShow] = useState({});
    
    
return (
  <AppContext.Provider value={{
    count,
    setCount,
    productOpen,
    openProductDetail,
    closeProductDetail,
    productToShow, 
    setProductToShow,
    
    
  }}>
  {children}
  </AppContext.Provider>
)
}
