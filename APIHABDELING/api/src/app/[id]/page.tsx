import { Getapi } from '@/Services/getapi'
import React from 'react'

 async function Dynamic({params}: {params: Promise<{id: string}>}){
    const {id} :any=await params
    const response = await Getapi()
    

    const data = response.filter((obj :any) =>{
 // filter isi liye lgaya h ke agr koi name same hoga to wo 2 name lakr dkkha dega ak nhi layga sifr
    

return obj.customerName === id
       })

    //    console.log(data);

       
  return (
    <>
    {data.map((item: any, index: any) => {
      return (
        <div
          key={index}
          className="ml-14 mb-6 p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:bg-gray-100 transition duration-200"
        >
          <h1 className="text-xl font-bold text-blue-600">ID: {item.id}</h1>
          <h1 className="text-lg text-gray-700">
            <span className="font-semibold text-purple-600">Book ID:</span> {item.bookId}
          </h1>
          <h1 className="text-lg text-gray-700">
            <span className="font-semibold text-green-600">Customer Name:</span> {item.customerName}
          </h1>
          <h1 className="text-lg text-gray-700">
            <span className="font-semibold text-orange-600">Quantity:</span> {item.quantity}
          </h1>
          <h1 className="text-lg text-gray-700">
            <span className="font-semibold text-red-600">Timestamp:</span> {item.timestamp}
          </h1>
        </div>
      );
    })}
  </>
  
  
  )
}

export default Dynamic
