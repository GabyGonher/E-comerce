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
    // Agregar articulos al carrito
    const [cartProducts, setCartProducts] = useState([]);
    //Mostrar detalles de orden
     const [isCheckoutSideMenuOpen, setCheckoutSideMenu] = useState(false);
    const openCheckoutSideMenu = () => setCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setCheckoutSideMenu(false)
    
    
return (
  <AppContext.Provider value={{
    count,
    setCount,
    productOpen,
    openProductDetail,
    closeProductDetail,
    productToShow, 
    setProductToShow,
    cartProducts, 
    setCartProducts,
    isCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    
    
  }}>
  {children}
  </AppContext.Provider>
)
}
