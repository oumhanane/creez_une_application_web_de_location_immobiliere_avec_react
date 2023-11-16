import { useState } from "react"

function App() {

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(new FormData(e.target))
  }

  console.log('render')

  return <form onSubmit={handleSubmit}>
    <input type="text" name="firstname" defaultValue="adresse"/>
    <button>Envoyer</button>
  </form>
}

export default App
