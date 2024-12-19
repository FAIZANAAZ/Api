import { NextRequest, NextResponse } from "next/server";

let data=[]

export function GET() {
    
    return NextResponse.json([
        { "name": "Faiza Naaz", "age": 30, "gender": "Female" },
        { "name": "Taha", "age": 25, "gender": "Male" },
        { "name": "Sara Ahmed", "age": 22, "gender": "Female" },
        { "name": "Hamza Sheikh", "age": 28, "gender": "Male" },
        { "name": "Ayesha Tariq", "age": 27, "gender": "Female" },
        { "name": "Zain Malik", "age": 24, "gender": "Male" },
        { "name": "Hina Qureshi", "age": 26, "gender": "Female" },
        { "name": "Usman Ali", "age": 29, "gender": "Male" },
        { "name": "Nida Aslam", "age": 23, "gender": "Female" },
        { "name": "Fahad Jamil", "age": 31, "gender": "Male" }
      ]
      )
}


