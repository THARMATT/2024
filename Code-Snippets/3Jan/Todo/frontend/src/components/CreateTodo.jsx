import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <input
        type="text"
        style={{ margin: 10, padding: 10 }}
        placeholder="title"
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        style={{ margin: 10, padding: 10 }}
        placeholder="description"
        onChange={function (e) {
          setDescription(e.target.value);
        }}
      />
      <button
        style={{ margin: 10, padding: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body:JSON.stringify ({
              title: title,
              description: description,
            }),
            headers:{
                "Content-type":"application/json"
            }
          }).then(async function (res) {
            const json = await res.json();
            alert("todo added");
          });
        }}
      >
        Add Todo
      </button>
    </>
  );
}
