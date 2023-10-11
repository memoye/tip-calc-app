import './App.css'
import InputSide from './components/inputSide'
import TipCard from './components/tipCard'
import logo from './assets/logo.svg'
import TipProvider from './contexts/TipProvider.jsx'

function App() {


  return (
    <>
      <TipProvider>
        <main className='App'>
          <div>

            <h1 className='logo'>
              <img src={ logo } alt="Logo" />
            </h1>

            <div className='container'>
              <div className='inputSide'>
                <InputSide />
              </div>

              <div className='output'>
                <TipCard />
              </div>
            </div>

          </div>
        </main >
        <footer className="attribution">
          Challenge by <a href="https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8"
            target="_blank">Frontend Mentor</a>.
          Coded with ❤️‍🩹 by <a href="https://github.com/memoye">Memoye</a>.
        </footer>
      </TipProvider>
    </>
  )
}

export default App
