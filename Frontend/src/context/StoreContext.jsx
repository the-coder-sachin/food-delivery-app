import {useState, createContext, useEffect} from "react";
import { foodList } from "../assets/img/img";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>{
    const [cartItem, setCartItem] = useState({})

    const addToCart = (itemId) =>{
        if(!cartItem[itemId]){
            setCartItem(prev=>({...prev, [itemId]:1}))
        }else{
            setCartItem(prev=>({...prev, [itemId]: prev[itemId] + 1}))
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItem(prev=>({...prev,[itemId]:prev[itemId]-1}))
    }


    useEffect(() => {
      console.log(cartItem);
    }, [cartItem])
    
    const contextValue = {
        foodList,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;