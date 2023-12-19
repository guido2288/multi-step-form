import './App.css'
import PersonalInfo from './components/PersonalInfo'

function App() {

  return (
  <main>
    <aside className="img_container">
        <ul className='steps_containers'>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
    </aside>

    <PersonalInfo />



    <footer>
      <button className='button_back'>Go Back</button>
      <button className='button_next'>Next Step</button>
    </footer>
  </main>

  )
}

export default App
