"use client"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from 'react'
import { fetchbook } from '@/services/api'
import Link from 'next/link'

const  BookCards =({href,func}:any) => {

  const [Book, setBook] = useState([])
  useEffect(() => {

   const fetchData =async()=>{
    const Book= await fetchbook()
    setBook(Book)
   }

   fetchData()
  },[])
 

  if (!Book || Book.length == 0) {
    return <p>No books available</p>;
  }
  return (
    
    <>
     <section className='p-5 grid grid-cols-1 md:grid-cols-2 mt-5 gap-10  justify-center items-center   px-10'>
      {Book.map((book: any) => {
        return (
          <div key={book.id}
      className="bg-white grid sm:grid-cols-2  items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-2xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto hover:scale-100 transition duration-300 ease-in-out p-5  ">
   <div className="max-h-[280px] h-full flex justify-center items-center md:mr-20">
  <Image
    src={`/book${book.id}.png`}
    alt="Profile Image"
    className="w-[150px] h-full object-cover border-l-[10px] border-r-[10px] border-l-black  border-b-[10px]  "
    width={500}
    height={500}
  />
</div>



      <div className="p-6">
        <h3 className="text-xl font-semibold">{book.name}</h3>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
          arcu.
        </p>
        

        <div className="flex flex-wrap items-center cursor-pointer border border-gray-300 rounded-lg w-full px-4 py-2 mt-6">
        
          <div className="ml-1 flex-1">
            <p  className={book.available ? "text-green-500 text-sm font-semibold" : "text-red-600 text-[12px] font-semibold" }> {book.available ? "Available" : "Not Available"}</p>
            <p className="text-xs text-gray-500 mt-0.5">{book.type}</p>

          </div>
          <Link href={href}><Button
          onClick={()=>{func(book.id)}}
          >Place an Order</Button></Link>
          
        </div>
      </div>
    </div>
    
        )
      })}
     </section>
    </>
  )
}

export default BookCards
