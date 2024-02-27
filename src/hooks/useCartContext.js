import {useContext} from "react"
import { CartContext } from "../context/CartContext";

export const useCartContext=()=>{

  const context = useContext(CartContext)

  if(!context){
    throw new Error('You must call useCartContext inside a CartContextProvider.')
  }
return context
}