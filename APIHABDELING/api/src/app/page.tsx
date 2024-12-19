// *******yha hm api ko web pr dekhengy data mngwa kr
import Link from "next/link";
import {Getapi} from "../Services/getapi"

// yha hm front oage dikhaygy jispr click kkrky user phonchyga dynamic data tk
export default async function Home() {

  const apidata = await Getapi()
  // console.log(apidata);
  
  return (
    <>
    {apidata.map((item:any ,index:any)=>{
      return(
        <Link
        href={`/${item.customerName}`}
        key={index}
        className="block mb-4 p-4 text-lg font-semibold text-blue-600 bg-gray-100 rounded-lg shadow-md hover:bg-blue-100 hover:text-blue-800 transition duration-200"
      >
        Customer Name: {item.customerName}
      </Link>
      
      )
      // jb bhi link pr click hoga to wo customer name add krdyga url me 
    })}
   
    </>
  );
}


// https://github.com/vdespa/introduction-to-postman-course/blob/main/simple-books-api.md

// export default async function Home() {

//   // POST 

//   // kioky ye server side pr kry hen to terminal me dikhyga
//  const   Token= 'def43008017b9208368580c024faaf3d976ad32440a9484459c2870aed7671da'
// //  ye athontication ke bad milyga hmy
// const orderId= 'OLCu2fpMuAcWesDj3ij5E' 
// // ye create krny ke bad milygi order submit ke bad or post ki jga hm get lga kr isko dekh skty hen OR srif apna order dekhny ke liye hm orders ke end point ke sath order id apni likh kr dekh skty hen or body ko comment krky

//   const response = await fetch("https://simple-books-api.glitch.me/orders" ,{
//     method : "GET" ,//yha hm  methods likhty hen  
//     headers : {
//       "Content-Type" : "application/json" ,//yha hm ye btaty hen ke bee ye jeson wala data he isko jeson ke tor pr hi handle krna
//       Authorization :  `Bearer ${"def43008017b9208368580c024faaf3d976ad32440a9484459c2870aed7671da"}`
//     },
  

//     // body : JSON.stringify(//isko bhi jeson me krna lazmi he agr requirement hoto api ki wrna nhi krengy change
//     //   {
//     //     "bookId": 1,
//     //    "customerName": "Faiza"
//     //  }
//   //)

//   })

//   // ye base api he jisky agy add krkrky hm kam krty hen 
//   const data = await response.json();
//   // ismy bhi await lga hota kioky response any me time lgta he

//   console.log("data😊" ,data);

// //  " GET /status" jb ye likha hota he iska matlb get medthod pr url ke end me status lgana hota he or by default ye get pr hi hota he

  
//   return (
//     <>
    
//     </>
//   );
// }



// export default async function Home() {

//   // PUT /PATCH 

// try {
  
//   const   Token= 'def43008017b9208368580c024faaf3d976ad32440a9484459c2870aed7671da'

// const orderId= 'OLCu2fpMuAcWesDj3ij5E' 


//   const response = await fetch("https://simple-books-api.glitch.me/orders/OLCu2fpMuAcWesDj3ij5E" ,{
//     method : "PATCH" ,
//     headers : {
//       "Content-Type" : "application/json" ,
//       "Authorization" :  `Bearer ${Token}`
//     },
  

//     body : JSON.stringify(
//       {
       
//        "customerName": "NAAZ"
//       //  update krengy name
//      }
//   )

//   })


//   if (!response.ok) {
//     throw new Error(`this is my error 😪 ${response.status} `);
    
//   }
// // ye hm isi liye likhty hen ke jb response na ay to ye wala error catch krly dosry error pr jany sy phly ok by default property he jeson ki trha trha wo cheq krta he ke response ok he ya nhi he or hm jb isky sath lagadengy ! iska matlb agr ok nhi he response to yani false osko wo true bnadega 

// // agr response succees ho jata he or 200 ok bhi ajatahe lekin bs wo khali a jay empty tb ye wala if else  le ayga or agr response ay hi na success hi na ho to 404 ka error catch method handle kryga
//   const data = await response.json();


//   console.log("data😊" ,data);
 
 


 
// } catch (error) {
//   console.log("error😫" ,error);
  
// }

//   // PATCH ME HMYKOCH NAZR HIAYGA KE UPDATE HOWA HE YA NHI WO BS HMY DEGA 204 TO MATLB UPDATE HOGYA OSKY LIYE HM GET PR CHANG KRKY DEKHNA  HOGA OR BODY KO CMMENT KRKY DEKHENGY LEKIN PHLY HM PATCH WALA KAM ZAROR KRENGY
//   return (
//     <>
    
//     </>
//   );
// }


// export default async function Home() {

//   // DELETE

// try {
  
//   const   Token= 'def43008017b9208368580c024faaf3d976ad32440a9484459c2870aed7671da'

// const orderId= 'OLCu2fpMuAcWesDj3ij5E' 


//   const response = await fetch("https://simple-books-api.glitch.me/orders/OLCu2fpMuAcWesDj3ij5E" ,{
    
//     method : "DELETE" ,
//     headers : {
//       "Content-Type" : "application/json" ,
//       "Authorization" :  `Bearer ${Token}`
//     },



//   })


//   if (!response.ok) {
//     throw new Error(`this is my error 😪 ${response.status} `);
    
//   }

//   const data = await response.json();


//   console.log("data😊" ,data);
 
 


 
// } catch (error) {
//   console.log("error😫" ,error);
  
// }

//   return (
//     <>
    
//     </>
//   );
// }

// //   // DELETE ME HMY KOCH NAZR NHI AYGA KE DLETE HOWA HE YA NHI WO BS HMY DEGA 204 TO MATLB DLEETE HOGYA OSKY LIYE HM GET PR CHANG KRKY DEKHNA  HOGA OR BODY KO CMMENT KRKY OR ID REMOVE KRKY DEKHENGY LEKIN PHLY HM PATCH WALA KAM ZAROR KRENGY








