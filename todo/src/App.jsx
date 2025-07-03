import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState('');
  const [edit, setEdit] = useState(null);

  const addTodo = () => {
    if (text==='') {
      return
      
    }
    if (edit !== null) {
      console.log('first')
      const updatedTodos = [...todo];
      updatedTodos[edit] = text;
      setTodo(updatedTodos);
      setEdit(null); 
    } else {
      console.log('2')
      setTodo([...todo, text]);
      console.log('3')
    }
    setText('')
  };

  const editTodo = (index) => {
    setText(todo[index]);
    setEdit(index);
    console.log('5')
  };

  const deleteTodo = (index) => {
    const deleted = todo.filter((_,i) => i !==index )
    setTodo(deleted)
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Todo App</h1>
        
        <div className="flex mb-6">
          <input
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg transition duration-200"
            onClick={addTodo}
          >
           {edit !== null ? 'Update' : 'Add'}
          </button>
        </div>

        <ul className="space-y-3">
          {todo.map((value, index) => (
            <li 
              key={index} 
              className="bg-gray-50 p-3 rounded-lg flex justify-between items-center"
            >
              <span className="text-gray-800">{value}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => editTodo(index)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(index)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;