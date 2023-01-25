import {tcontex} from '../src/hola/Contex'
import {useContext} from 'react'

function Taskscar({task}) {
  const {delite} = useContext(tcontex)
  
  return (
    <div className='bg-slate-800 text-center rounded-md p-4'>
        <h2 className='text-xl font-bold text-zinc-50'>{task.title}</h2>
        <h4 className='text-ms text-neutral-500'>{task.descripcion}</h4> 
        <button className='bg-lime-700 px-2 py-1 mt-2 rounded-md hover:bg-red-400'  onClick={() => delite(task.id)} >
          Eliminar
        </button>
          
    </div>
  )
}

export default Taskscar;

