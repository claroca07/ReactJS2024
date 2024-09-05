import './App.css'
import { Button } from './components/Button.jsx'

function exibirMensagem(){
  alert("Parabéns! agora você é Corinthiano!")
}

function App() {

  return (
    <>
      <Button texto='Ver meu time' mensagem={exibirMensagem}/>
    </>
  )
}

export default App
