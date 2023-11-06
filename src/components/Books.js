import Book from "./Book"
import data from "../data"

const Books = () => {
  return <div>
    {data.map((oneBook)=>{
        return <Book key={oneBook.id} {...oneBook}/>
    })}
  </div>
}

export default Books