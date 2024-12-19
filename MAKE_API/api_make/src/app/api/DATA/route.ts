import { NextRequest, NextResponse } from "next/server";

// yha hm khod ki api bnary hen

//1))) Default Behavior of Next.js:

// FIRSTLY browser (client) pr jb rquest ati he to wo jata he server pr
// Jab hum page.tsx use karte hain, to Next.js apne framework ke mutabiq ek default HTML response generate karta hai aur client ko bhejta hai.

// Yeh ho raha hai ke jab hum page.tsx ki file banate hain, to Next.js apna response bhejta hai. Jaise jab hum about ka route banaya aur usmein page.tsx ki file likhi, to Google ka server Next.js ke server par gaya. Phir Next.js ne ek HTML response bhej diya, aur us route ka jo bhi kaam hoga wo sab dikhayega. Kyunki Next.js ek framework hai jo isko handle karta hai.

//2))) Custom Response with rout.ts:

// Jab hum rout.ts likhte hain, to Next.js ko batate hain ke ab humein iska default behavior nahi chahiye.
// Is case mein hum apne HTTP response (jaise JSON, text, etc.) ko khud define karte hain.
// Response bhejne ke liye NextResponse ka use karte hain, lekin control pura humare haath mein hota hai.   

// yani jab humne page.tsx ke bajaye route.ts likh diya, iska matlab hai ke ab hum isko khud handle karenge. Ab kya bhejna hai, yeh humare haath mein hai, Next.js ke nahi. Jo bhi bhejna hai, hum ismein define karenge. Lekin hum ismein bhi NextResponse ka use karenge taake response Next.js ke framework se hi jaye. Bas decide hum karenge ke kya bhejna hai aur kya nahi.

export function GET(request:NextRequest) {
    // ismy wo sb show krwata he ke hm agr kisi ki api use kry hen or hm ye dekhna chaty hen ke end point kiya he https kiya he to wo hm esy dekh skty hen   
   const url = request.nextUrl
   const urlParams = url.searchParams.get("name")
//    yha hm request me ak property hoty he nexturl hmny phly osko bolaya or osmy sy searchParams.get sy hmny name lekr ay hen wo name jo hmny searchParams ke url me link ke ander set kiya tha 
  
   
if (urlParams === "Faiza Naaz") {
    return NextResponse.json({ "name": "Faiza Naaz", "age": 30, "gender": "Female" })
}else if (urlParams === "Taha") {
    return NextResponse.json( { "name": "Taha", "age": 25, "gender": "Male" })
    
}else if (urlParams === "Sara") {
    return NextResponse.json({ "name": "Sara", "age": 22, "gender": "Female" })
    
}else if (urlParams === "Hamza") {
    return NextResponse.json( { "name": "Hamza", "age": 28, "gender": "Male" })
    
}else if (urlParams === "Ayesha") {
    return NextResponse.json(    { "name": "Ayesha", "age": 27, "gender": "Female" })
    
}else if (urlParams === "Zain") {
    return NextResponse.json( { "name": "Zain", "age": 24, "gender": "Male" })
    
}else if (urlParams === "Hina") {
    return NextResponse.json(      { "name": "Hina", "age": 26, "gender": "Female" })
    
}else if (urlParams === "Usman") {
    return NextResponse.json( { "name": "Usman", "age": 29, "gender": "Male" })
    
}else if (urlParams === "Nida") {
    return NextResponse.json({ "name": "Nida", "age": 23, "gender": "Female" })
    
}else if (urlParams === "Fahad") {
    return NextResponse.json({ "name": "Fahad", "age": 31, "gender": "Male" })
    
}

else{
    return NextResponse.json({message: "request not found" })
}
}



 