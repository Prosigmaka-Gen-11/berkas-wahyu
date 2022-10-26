import axios from "axios";
import { useState } from "react";


export default function App () {


  const [userId, setUserId] = useState('')
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')

  function getApiThenCatch () {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (benar) {
      setUserId(benar.data.userId)
    }).catch((error) => {
      alert('Terjadi Kesalahan')
    })
  }

  async function getApiAsyncAwait () {
    try {
      const api = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      setId(api.data.id)
      setTitle(api.data.title)
    } catch (error) {
      alert('Terjadi Kesalahan')
    }
  }

  return <>
    <h1><center>React API Call</center></h1>
    <h2>then catch</h2>
    <button onClick={getApiThenCatch}> Get API</button>
    <p>User ID : {userId}</p>
    <hr />
    <h2>async await</h2>
    <button onClick={getApiAsyncAwait}> Get API</button>
    <p>ID : {id}</p>
    <p>Title : {title}</p>
  </>


}