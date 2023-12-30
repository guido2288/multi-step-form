import './App.css'
import Footer from './components/Footer'
import Laststep from './components/Laststep'
import PersonalInfo from './components/PersonalInfo'
import PickAdd from './components/PickAdd'
import PlanSelect from './components/PlanSelect'
import Steps from './components/Steps'
import Summary from './components/Summary'

function App() {

  return (
  <main>
    <aside className="img_container">
      <Steps />
    </aside>

    <PersonalInfo />

    {/* <PlanSelect /> */}

    {/* <PickAdd /> */}

    {/* <Summary /> */}

    {/* <Laststep /> */}

    <Footer />
  </main>

  )
}

export default App
