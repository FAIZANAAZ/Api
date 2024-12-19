"use server"
export async function PlaceOrder(token:any,bookId:any, clientName:any) {
    


const response=await fetch("https://simple-books-api.glitch.me/orders",{
    method  :"POST",
    headers:{
        "Content-Type":"application/json",
         "Authorization":`Barer ${token}`
    },
    body:JSON.stringify({
        "bookId": bookId,
       "customerName": clientName
    })
})
if (response.status !== 201) {
    return('Failed to place order')
    
}

const data=await response.json()
return data
}


//////////////////////////////orders
export async function getOrder(token:any) {

    let response=await fetch("https://simple-books-api.glitch.me/orders",{
        method:"GET",
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    if (!response.ok) {
        
        return('Failed to get order')
        
    }

    const data=await response.json()
    return data
}


//////////////////////////////DELET orders

export async function deleteOrder(orderId:any,token:any) {
  const response=await fetch(`https://simple-books-api.glitch.me/orders/${orderId}`,{
        method:"DELETE",
        headers:{
            "Authorization":`Barer ${token}`
        },}
      )
     if (!response.ok) {
        
        return('Failed to delete order')
     }else{
        return('Order Deleted Successfully')
     }
    }
   
