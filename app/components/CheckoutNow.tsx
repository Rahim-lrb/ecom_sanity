"use client";

import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";
import { productCart } from "./AddToBag";

export default function CheckoutNow({currency, name, description, image, price, price_id}: productCart) {
    const { checkoutSingleItem } = useShoppingCart();

    const buyNow = (priceId: string) => {
      checkoutSingleItem(priceId);
    }

    const product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        price_id: price_id,
    }
    return (
        <Button variant={"ghost"} onClick={() => { buyNow(price_id); }}>
            checkout now
        </Button>
    )
}
