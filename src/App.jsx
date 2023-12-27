import './App.css'
import Footer from './components/Footer'
import PersonalInfo from './components/PersonalInfo'
import PickAdd from './components/PickAdd'
import PlanSelect from './components/PlanSelect'
import Steps from './components/Steps'

function App() {

  return (
  <main>
    <aside className="img_container">
      <Steps />
    </aside>

    {/* <PersonalInfo /> */}

    {/* <PlanSelect /> */}

    <PickAdd />

    <Footer />
  </main>

  )
}

export default App
