import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
    <h1>Chai or Fullstack</h1>
    <p>JOKES : {jokes.length}</p>
    <div className="container">
    {
      jokes.map((joke,index)=>
        <div key={joke.id} className='box'>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
        </div>
      )
    }
    </div>
    </>
  )
}

export default App
