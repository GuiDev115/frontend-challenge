import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./cart-icon";
import styled from "styled-components";

const CartCount = styled.span`
width: 17px
height: 17px
top: 43px
left: 1263px
`




export function CartControle(){
    const {value} = useLocalStorage('cart-items')
    return(
        <div>
            <CartIcon/>
            {value.length && <CartCount></CartCount>}
        </div>
    )
}