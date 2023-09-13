import LikeButton from "./components/LikeButton"
import State from "./components/State"
import './app.css'
function App() {


  return (
    <>
    <div className='like'>
    <LikeButton/>
    </div>
    <br></br>
    <div className='state'>
    <State/>
    </div>
    </>
  )
}

export default App
