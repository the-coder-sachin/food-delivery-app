import {useState, createContext, useEffect} from "react";
import { foodList } from "../assets/img/img";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) =>{
    const [cartItem, setCartItem] = useState({});
    const [token, setToken] = useState('');
    const url = `http://localhost:4000`;
    useEffect(() => {
      setToken(localStorage.getItem('token'))
    }, [])
    
    

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

    const removeAllFromCart = (itemId) =>{
        setCartItem(prev=>({...prev, [itemId]:0}))
    }

    const subTotalCart = () =>{
        let subTotal = 0;
        for(let item in cartItem){
           if(cartItem[item]>0){
             let itemInfo = foodList.find((product) => product.id == item);
             if(itemInfo){
                 subTotal += itemInfo.price * cartItem[item];
             }
           }            
        }
        return subTotal;
    }
    
    const contextValue = {
        foodList,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        subTotalCart,
        url,
        token,
        setToken,
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;