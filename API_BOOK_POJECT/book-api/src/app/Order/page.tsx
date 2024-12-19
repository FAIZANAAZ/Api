"use client"
import BookCards from '@/components/Cards'
import { Button } from '@/components/ui/button'
import { PlaceOrder } from '@/services/order'
import Link from 'next/link'
import React from 'react'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
// import { FaShoppingCart } from "react-icons/fa";

 const Orderpage = () => {
 const btnFunc=async(bookId:any)=>{
  const token  =localStorage.getItem("accessToken")
  const clientName = localStorage.getItem("clientName")

console.log(`token😍:${token}`);
console.log(`clientName😎:${clientName}`);
console.log(`bookId😪:${bookId}`);



  if (!token && !clientName ) {
    alert("Missing Token or clientName")
    // agr usr direct url ke zrite a jay bina athantication ke

    return;
  }

 const data= await PlaceOrder(token,bookId, clientName)

 if (data !== 'Failed to place order') {
  alert("Order Placed Successfully")
  
 }else{
  alert(data)
 }




  }
  return (
    <>
    
    <section className=' w-full '> 

        <div className='flex sm:p-5 p-1 justify-between items-center'>
        
        <h1 className="md:text-5xl sm:text-2xl text-1xl font-bold underline ">Confirm Your Order</h1>
        <div>
           <Link href={'/Showorder'}>
           <Button >View Your Order<PiShoppingCartSimpleFill /></Button></Link>
        </div>
        </div>


        <BookCards href={"/Order"} func={btnFunc}/>
        </section>
    </>
  )
}

export default Orderpage
