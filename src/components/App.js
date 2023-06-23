
import React, { useState } from "react";
import './../styles/App.css';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];


const App = () => {
  const [search, setSearch] = useState("");
  const [filteredItem, setFilteredItem] = useState([...fruits]);

  useState(() => {
    if (!search) setFilteredItem([...fruits]);
    else setFilteredItem = filteredItem.filter((fruit) => fruit.includes(search));
  }, [search])

  return (
    <div>
      <h1>Search item</h1>
      <input type="text" onInput={(e) => setSearch(e.target.value)}></input>
      {/* Do not remove the main div */}
      <ul>
        {
          filteredItem.map((filteredFruit) => (
            <li>{filteredFruit}</li>
          ))
        }
      </ul>

    </div>
  )
}

// const App = () => {
//   return(
//     <div>
//       <h1>Hello</h1>
//     </div>
//   )
// }

export default App;
