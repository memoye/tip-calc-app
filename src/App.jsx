import './App.css'
import InputSide from './components/inputSide'
import TipCard from './components/tipCard'
import logo from './assets/logo.svg'
import TipProvider from './contexts/TipProvider.jsx'

function App() {


  return (
    <>
      <TipProvider>
        <div className='App'>
          <div>

            <div className='logo'>
              <img src={ logo } alt="Logo" />
            </div>

            <div className='container'>
              <div className='inputSide'>
                <InputSide />
              </div>

              <div className='output'>
                <TipCard />
              </div>
            </div>

          </div>
        </div >
      </TipProvider>
    </>
  )
}

export default App
