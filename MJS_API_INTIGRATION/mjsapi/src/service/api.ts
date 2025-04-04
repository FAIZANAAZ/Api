"use server"

import { client } from "@/sanity/lib/client"

export async function get() {
    const api =await client.fetch(`*[_type=="products"]{
        isNew,
        name,
        _createdAt,
        "colors":colors[],
        "sizes":sizes[],
        category,
        discountPercent,
        _updatedAt,
        "image":image.asset->url,
        _id
      }`) 
    return api
}

