import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Laststep from './components/Laststep'
import PersonalInfo from './components/PersonalInfo'
import PickAdd from './components/PickAdd'
import PlanSelect from './components/PlanSelect'
import Steps from './components/Steps'
import Summary from './components/Summary'

function App() {

  const [step, setStep] = useState(1);

  return (
  <main>
    <aside className="img_container">
      <Steps step={step}/>
    </aside>

    {
      step === 1 && <PersonalInfo setStep={setStep} />
    }

    {
      step === 2 && <PlanSelect />
    }

    {
      step === 3 && <PickAdd />
    }

    {
      step === 4 && <Summary />
    }
    {
      step === 5 && <Laststep />
    }


    <Footer step={step} setStep={setStep} />
  </main>

  )
}

export default App
