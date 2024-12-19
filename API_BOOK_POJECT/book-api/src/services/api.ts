"use server"

export async function fetchbook() {
  
        const booksdata = await fetch('https://simple-books-api.glitch.me/books')

        if (!booksdata.ok) {

          return 'Failed to fetch BooksData'
            
        }
 
        const data = await booksdata.json();
 
        return data;
    
}