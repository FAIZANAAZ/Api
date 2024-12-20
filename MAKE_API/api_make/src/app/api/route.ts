import { NextRequest, NextResponse } from "next/server";

let data = [];

export function GET() {
  return NextResponse.json([
    { id: 1, name: "Faiza Naaz", age: 30, gender: "Female" },
    { id: 2, name: "Taha", age: 25, gender: "Male" },
    { id: 3, name: "Sara Ahmed", age: 22, gender: "Female" },
    { id: 4, name: "Hamza Sheikh", age: 28, gender: "Male" },
    { id: 5, name: "Ayesha Tariq", age: 27, gender: "Female" },
    { id: 6, name: "Zain Malik", age: 24, gender: "Male" },
    { id: 7, name: "Hina Qureshi", age: 26, gender: "Female" },
    { id: 8, name: "Usman Ali", age: 29, gender: "Male" },
    { id: 9, name: "Nida Aslam", age: 23, gender: "Female" },
    { id: 10, name: "Fahad Jamil", age: 31, gender: "Male" }
  ]);
}
