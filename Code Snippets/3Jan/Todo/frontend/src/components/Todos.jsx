export function Todos({todos}){
    <>

    {todos.map(function(todo){
        return <div key={todo.title}>
            <h1>{todos.title}</h1>
            <h2>{todos.description}</h2>
            <button>{todos.completed==true?"completed":"Mark as Done"}</button>
        </div>
    })}
    </>
}