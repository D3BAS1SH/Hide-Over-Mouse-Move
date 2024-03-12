import './App.scss'
import useMousePosition from './useMousePosition'
function App() {
  const {x,y}=useMousePosition;
  return (
    <main className='main'>
      <div className="mask">
        <p>Visual desinger - with skills that haven't been replaced by A.I(yet)  - making good shit only if the paycheck is equall good.</p>
      </div>
      <div className="body">
        <p>
          I'm a <span>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  )
}

export default App
