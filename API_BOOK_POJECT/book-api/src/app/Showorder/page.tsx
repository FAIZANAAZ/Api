"use client"
import { Button } from '@/components/ui/button'
import { deleteOrder, getOrder } from '@/services/order'
import { Link } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { MdOutlineDeleteForever } from "react-icons/md";

const ShowPage = () => {
  const token = localStorage.getItem('accessToken')
  const [set, setOrder] = useState<any[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const orders: any = await getOrder(token)

      if (orders !== 'Failed to get orders') {
        setOrder(orders)
      } else {
        alert(orders)
      }
    }
    fetchData()
  }, [])

  const DeleteFunc = async (orderId: any) => {
    const data = await deleteOrder(orderId, token)
    if (data !== 'Failed to delete order') {
      alert("Order Deleted Successfully")
      window.location.reload()
    } else {
      alert(data)
    }
  }

  return (
    <>
      <section>
        <h1 className="md:text-5xl sm:text-2xl text-1xl font-bold underline text-center">Here's Your Order</h1>

        <div className='gp-5 grid grid-cols-1 md:grid-cols-2 mt-5 gap-10 justify-center items-center px-10'>
          {set.map((order: any) => {
            return (
              <div
                key={order.id}
                className="bg-white grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-2xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto hover:scale-100 transition duration-300 ease-in-out p-5">
                
                <div className="max-h-[280px] h-full flex justify-center items-center md:mr-20">
                  <Image
                    src={`/book${order.id}.png`}
                    alt="Profile Image"
                    className="w-[150px] h-full object-cover border-l-[10px] border-r-[10px] border-l-black border-b-[10px]"
                    width={500}
                    height={500}
                  />
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Customer Name: {order.customerName}</h3>

                  <div className="ml-1 flex-1">
                    <p className="text-xs text-gray-500 mt-0.5">Book Id: {order.bookId}</p>
                  </div>

                  <div className="ml-1 flex-1">
                    <p className="text-xs text-gray-500 mt-0.5">Order Id: {order.id}</p>
                  </div>

                  <div className="flex justify-end p-1 w-full">
                    <MdOutlineDeleteForever
                      cursor={"pointer"}
                      onClick={() => {
                        DeleteFunc(order.id)
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ShowPage
