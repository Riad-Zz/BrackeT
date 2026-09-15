import './App.css'

function App() {

  type test = {
    name : string ,
    age : number ,
  }

  const Test:test = {
    name : "Riad" ,
    age : 18 ,
  }

  const some = {
    Na : "heeee"
  }


  return (
    <div>
      <h1>{Test.name}</h1>
      <p>{some.Na}</p>
    </div>
  )
}

export default App
