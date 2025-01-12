'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'

interface Product {
  id: number
  image: string
  heading: string
  description: string
}

export default function Home() {
  const [data, setData] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://67842c5e8b6c7a1316f6e9ff.mockapi.io/fakeapi/ProductData")
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error("Error fetching data:", error)
        setError('Failed to load products. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

function Card({ image, heading, description }: Omit<Product, 'id'>) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <Image
          src={image}
          alt={heading}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{heading}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

