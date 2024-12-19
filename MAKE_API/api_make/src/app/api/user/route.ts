import { NextRequest, NextResponse } from "next/server";

// make api functionality
interface UserData {
  name: string;
  age: string;
  gender: string;
  id:number
}
let data:UserData[]=[]

export function GET() {
    
    return NextResponse.json(data);
}


export async function POST(request: NextRequest) {
  const body = await request.json();
  const { id } = body;

  // Check if the ID already exists in the data array
  const userid = data.findIndex((user) => user.id === id);
  // ismy ho ye rha he ke findIndex ye cheq krta he ke id mojood he ya nhi agr mojood he o wo index number oska return kr deta he 
  // agr mojood nhi he wo -1 return kr deta he
  // to wo yha ye cheq kryga ke -1 ke agr braber he yani id mojood nhi he nhi hogi to same bhi nhi ho skti to wo push krwadega wrna errro dega

  if (userid === -1) {
    // If ID is unique, add the new user
    data.push(body);

    return NextResponse.json({
      message: "User added successfully",
      body,
    });
  } else {
    // If ID already exists, return an error
    return NextResponse.json(
      { error: `User with ID ${id} already exists.` },
      { status: 400 } // 400 Bad Request
    );
  }
}



export async function PUT(request: NextRequest) {
  const { name, age, gender, id } = await request.json();

  // Find the user in the data array by ID
  const userid = data.findIndex((user) => user.id === id);
  // yha wo ye dekhegy ga ke -1 ke braber nhi he yani id mojood he to oska index number return kryga jo ke userid ke nder ayga jesy
  // hmny likha id 1 to oska index hoga 0 if (name) data[0].name = "Ahmed"; wo is trha 0 index waly ko update krdega

  // Update the user if it exists
  if (userid !== -1) {
    
    if (name) {data[userid].name = name;}
    if (age) {data[userid].age = age;}
    if (gender) {data[userid].gender = gender;}

    return NextResponse.json({
      message: "User updated successfully",
      updatedUser: data[userid],
    });
  } else {
    // If the user is not found, return an appropriate response
    return NextResponse.json(
      { error: `User with ID ${id} not found.` },
      { status: 404 }
    );
  }
}


export async function DELETE(request :NextRequest) {
  const {  id } = await request.json();

  // Find the user in the data array by ID
  const userId = data.findIndex((user) => user.id === id);
  // yha bhi isi trha osko -1 nhi yani index milyga to wo condedition chalyga or splice ke zariye os index waly ko jo userid me aya hoga osko delet krdega 

  // Update the user if it exists
  if (userId !== -1) {

    data.splice(userId, 1);
    
     


    return NextResponse.json({
      message: "User DELETE successfully",
      updatedDELETE: data[userId],
    });
  } else {
    // If the user is not found, return an appropriate response
    return NextResponse.json(
      { error: `User with ID ${id} not found.` },
      { status: 404 }
    );
  }
}