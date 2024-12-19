"use client"
import Link from "next/link";
import { useState } from "react";

// yha hm apni bnai hoi api ko get kr rhy hen 
export default  function Home() {
const [name, setname] = useState("")




  return (
  <>
  <div className="min-h-[50%] flex flex-col items-center justify-center bg-gradient-to-r   shadow-black shadow-lg from-blue-300 rounded-lg via-purple-300 to-pink-300 p-6">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-6 shadow-lg p-4 rounded-md bg-white">
        GET API 
    </h1>
    <div className="flex flex-col items-center mb-4 rounded-lg bg-black p-3">
    <input 
        type="text" 
        placeholder="Enter your name" 
        className="w-full max-w-md p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-400 shadow-md mb-6 text-lg"
        onChange={(e) => setname(e.target.value)}
    />

        <Link 
            href={`/api/DATA?name=${name}`}
            className="px-6 py-3 bg-purple-500 text-white font-bold rounded-lg shadow-md hover:bg-purple-600 focus:ring-4 focus:ring-purple-300 transition-all"
        >
            ENTER NAME TO FIND SPECIFIC DATA
        </Link>
        </div>
        <div className="flex flex-col w-full p-3 items-center gap-4 bg-yellow-400">
        <Link 
            href={`/api`}
            className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition-all"
        >
           GET ALL DATA
        </Link>
    </div>
</div>

  </>
  );
}
