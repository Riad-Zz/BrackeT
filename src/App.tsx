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


  return (
    <div>
      <h1>{Test.name}</h1>
    </div>
  )
}

export default App
