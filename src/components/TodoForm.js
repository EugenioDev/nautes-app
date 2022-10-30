import {useState} from "react";

const TodoForm = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = e => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      state: 'pending',
      value: input
    }

    addNewTodo(newTodo)
    setInput('')
  }

const addNewTodo = todo => {
    console.log(todo)
      if(!todo || /^\s*$/.test(todo.value)){
      return;
      }

    setTodos((prevTodo) => {
      return [...prevTodo, todo]
    })

}

  const handleCompleted = (id) => {
    setTodos(current =>
     current.map(todo => {
       if (todo.id === id) {
         return {...todo, state: 'completed' };
       }
       return todo;
     }),
    );
  };

  const handleReopen = (id) => {
    setTodos(current =>
     current.map(todo => {
       if (todo.id === id) {
         return {...todo, state: 'pending' };
       }
       return todo;
     }),
    );
  };


  return (
   <div className='p-2'>
     <form onSubmit={handleSubmit} className='flex space-x-2'>
       <input type="text"
              className='outline-none flex-grow'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Add new Todo'
       />
       <button className='border rounded-lg p-2'>Add New</button>
     </form>
     <div>
       <p className='font-bold text-2xl py-2 mt-2'>Task in Pending </p>
       {todos && todos.map(todo => {
        if(todo.state === 'pending'){
          return (
           <div key={todo.id} className='flex space-x-2 items-center justify-between mt-2'>
             <p>{todo.value}</p>
             <button className='text-white bg-orange-400 p-2 rounded-sm' onClick={() => handleCompleted(todo.id)}>Complete</button>
           </div>
          )
        }
       })}
     </div>

     <div>
       <p className='font-bold text-2xl py-2 mt-2'>Task Completed </p>
       {todos && todos.map(todo => {
         if(todo.state === 'completed'){
           return (
            <div key={todo.id} className='flex space-x-2 items-center justify-between mt-2'>
              <p>{todo.value}</p>
              <button className='text-white bg-green-400 p-2 rounded-sm' onClick={() => handleReopen(todo.id)}>Reopen</button>
            </div>
           )
         }
       })}
     </div>

   </div>
  )
}
export default TodoForm