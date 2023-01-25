import {createContext, useState, useEffect} from 'react'
import {tasks as date} from '../tasks'

export const tcontex = createContext();

export function Contexprovider(props) {
  
  const [tasks, settasks] = useState([])
  
  const createt = (task) =>{
    settasks([...tasks, {
      id: tasks.length + 1,
      title: task.title,
      descripcion: task.descripcion
    }])
  }

  const delite = (taskid) =>{
    settasks(tasks.filter((tasks) => tasks.id !== taskid))
  }

  useEffect(() => {
    settasks(date)
  }, [])

  return (
    <tcontex.Provider value={{
      tasks,
      createt,
      delite,
    }}>
     {props.children}
    </tcontex.Provider>
  )
}

export default Contexprovider;
