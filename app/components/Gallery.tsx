"use client";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";

interface iAppProps {
    images: any;
}
export default function Gallery({images}: iAppProps) {
    const [bigImg, setBigImg] = useState(images[0])
    const handleSmallImageClick = (image:any) => {
        setBigImg(image);
    }

    return (
        <div className="grid gap-4 lg:grid-cols-6">
            <div className="order-last lg:order-none flex gap-4 lg:flex-col">
                {images.map((img:any, idx:any)=>(
                    <div key={idx} className="overflow-hidden rounded-lg bg-gray-100">
                        <Image src={urlFor(img).url()} alt="just an image" width={200} height={200} className="h-full w-full object-cover object-center cursor-pointer" onClick={() => handleSmallImageClick(img)}/>
                        <span className="absolute top-0 left-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Sale</span>
                    </div>
                ))}
            </div>
            <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image src={urlFor(bigImg).url()} alt="big image" width={500} height={500} className="h-full w-full object-cover object-center"/>
            </div>
        </div>
    )
}
