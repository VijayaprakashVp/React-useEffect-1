import { useState, useEffect } from "react";
import { Listing } from "./Listing";

export function Grocerylist() {
  const [showitem, setShowitem] = useState("");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  console.log("page:", page);

  const display = () => {
    try {
      fetch(`http://localhost:3001/groceries?_limit=3&_page=${page}`)
        .then((res) => res.json())
        .then((data) => setList(data));
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    display();
  }, [page]);

  const submit = () => {
    try {
      fetch("http://localhost:3001/groceries", {
        method: "POST",
        body: JSON.stringify({ title: showitem, purchased: false }),
        headers: {
          "content-type": "application/json",
        },
      }).then(() => {
        display();
      });
      //   alert("added");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <input type="text" onChange={(e) => setShowitem(e.target.value)} />
      <button onClick={submit}>Save</button>
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      <Listing value={list} />
    </div>
  );
}
