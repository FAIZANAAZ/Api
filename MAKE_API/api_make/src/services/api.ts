
// const res = await fetch("http://localhost:3000/api/DATA",{
//   method:"GET"
// })

// const data =await  res.json ()
// console.log(data);
export const api_post = async () => {
    


const resPO = await fetch ("http://localhost:3000/api/DATA",{
  method:"POST"
})
if (!resPO.ok) {

    return 'Failed to fetch BooksData'
      
  }
const datapo =await  resPO.json ()
return datapo;

// const respu = await fetch ("http://localhost:3000/api/DATA",{
//   method:"PUT"
// })

// const datapu =await  respu.json ()
// console.log(datapu);

// const resd = await fetch ("http://localhost:3000/api/DATA",{
//   method:"DELETE"
// })

// const datad =await  resd.json ()
// console.log(datad);
}

export const api_del = async () => {
    


    const resde = await fetch ("http://localhost:3000/api/DATA",{
      method:"DELETE"
    })
    if (!resde.ok) {
    
        return 'Failed to fetch BooksData'
          
      }
    const datade =await  resde.json ()
    return datade;

    }

    export const api_put = async () => {
    


        const resPU = await fetch ("http://localhost:3000/api/DATA",{
          method:"PUT"
        })
        if (!resPU.ok) {
        
            return 'Failed to fetch BooksData'
              
          }
        const datapu =await  resPU.json ()
        return datapu;
        
       
        }


