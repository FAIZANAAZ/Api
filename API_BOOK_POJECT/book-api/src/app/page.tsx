"use client";
import BookCards from "@/components/Cards";


export default function Home() {
  return (
   <>
   <section>
    <h1 className="md:text-5xl sm:text-2xl mt-10 text-2xl font-bold underline text-center">WELCOME TO BOOK STORE</h1>
    {/* cards */}
    <BookCards href={"/Registration"} func={()=>{}}/>
   </section>
   </>
  );
}
