"use server"
// kioky jb hm api bhejty hen or use krty hen to broswer khta he ke ke api server side sy hona chiye client side sy nhi to wo confusy hota he by default to hota hi he server side lekin api kioky jha hm fetch krty hen email wagera athentication ke liye wha input use hota he zaror or input me usestate hota he to use client likhna lazmi he 
// isi liye hm  jha sy bhejty hen wha use server likh kr bhejty hen



async function RegisterClient(clientName: string, clientEmail: string) {

    const responses = await fetch('https://simple-books-api.glitch.me/api-clients/' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             "clientName": clientName,
             "clientEmail": clientEmail
          })
    })

    if (responses.status===409) {
        return 'Email already exists'
    }else if (!responses.ok) {
        return 'Failed to register client'}

    const data = await responses.json()

    return data.accessToken
    }

    export default RegisterClient