"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";

export interface productCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: string | number;
    price_id: string;
}
export default function AddToBag({currency, name, description, image, price, price_id}: productCart) {
    const { addItem, handleCartClick } = useShoppingCart();
    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    }
    return (
        <Button onClick={() => { addItem(product); handleCartClick(); }}>
            add to cart
        </Button>
    )
}
