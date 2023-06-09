
// Your Code Here

//An asynchronous function that fetches a list of books from the server and returns the parsed JSON result

async function listBooks() {
    const response = await fetch("http://localhost:3001/listBooks");
    const result = await response.json();
    return result;
      }
