import Taskscar from './Taskscar'
import {tcontex} from '../src/hola/Contex'
import {useContext} from 'react'

function TaskList() {

  const {tasks} = useContext(tcontex)
  
  
 if(tasks.length === 0){
  return <h1 className='text-center font-semibold'>No hay tareas disponibles</h1>
 }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {
        tasks.map((task) => {
          return(
            <div key={task.id}>
              <Taskscar task={task}  />
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskList



