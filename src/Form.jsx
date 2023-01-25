import {useState,useContext} from 'react'
import {tcontex} from './hola/Contex'


function Form() {

    const [title, settitle] = useState('')
    const [descripcion, setdescripcion] = useState('')
    const {createt}= useContext(tcontex)
    

    const handle = (e) =>{
        e.preventDefault()
        createt({
          title,
          descripcion
        })
        settitle("")
        setdescripcion('')
    }
  return (
    <div className='max-w-md mx-auto'>
    <form onSubmit={handle} className='bg-slate-900 mb-4 p-3 rounded-t'>
      <h1 className='text-2xl text-white font-bold text-center p-1'>Crea tu tarea</h1>
      <input type="text" placeholder='Ingresa tu tarea' onChange={(e)=>settitle(e.target.value)}
        value={title}
        className='bg-black text-gray-50 m-1 p-3 w-full mb-2'
        autoFocus
      />

      <textarea  placeholder='Esacribe tu descriscripcion' onChange={(e)=>setdescripcion(e.target.value)}
        value={descripcion}
        className='bg-black text-gray-50 m-1 p-3 w-full mb-2'
      ></textarea>
      <button className='bg-lime-700 px-2 py-1  rounded-md hover:bg-red-400 '>
        enviar
      </button>
    </form>
    </div>
  )
}

export default Form
