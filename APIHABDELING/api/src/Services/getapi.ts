// yha sy hm data fetch krwa kr bhejengy
const Token =
  "def43008017b9208368580c024faaf3d976ad32440a9484459c2870aed7671da";
export async function Getapi() {
  const response = await fetch("https://simple-books-api.glitch.me/orders", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
  return await response.json();
}

//   try {

//     if (!response.ok) {
//       throw new Error(`this is my error 😪 ${response.status} `);

//     }

//     console.log("data😊" ,data);

//   } catch (error) {
//     console.log("error😫" ,error);

//   }
