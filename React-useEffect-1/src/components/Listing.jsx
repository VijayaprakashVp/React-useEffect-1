import { nanoid } from "nanoid";

export function Listing({ value }) {
  return (
    <div>
      <h1>List</h1>
      {value.map((e) => (
        <div key={nanoid()}>
          <p>{e.title}</p>
          {/* <span>{e.purchased}</span> */}
        </div>
      ))}
    </div>
  );
}
