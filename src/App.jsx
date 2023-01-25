import TaskList from "./TaskList";
import Form from "./Form";




const App = () =>{

  return(
    <main className="bg-gray-500 h-screen">
      <div className="container mx-auto p-4">
      <Form />
      <TaskList />
      </div>
    </main>
  )
}

export default App;


