import { useContext } from "react"
import {CartContext} from "../providers/Cart"

const useCart = () => {
    const products = useContext(CartContext);
    if(!products) throw new Error("useCart can only be used within a CartProvider")
    return products;
}

export default useCart;