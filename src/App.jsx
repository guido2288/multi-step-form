import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import Laststep from './components/Laststep'
import PersonalInfo from './components/PersonalInfo'
import PickAdd from './components/PickAdd'
import PlanSelect from './components/PlanSelect'
import Steps from './components/Steps'
import Summary from './components/Summary'
import './App.css'


function App() {

  const [step, setStep] = useState(1);

  const handleBackBtn = () => {
    let backStep = step - 1;

    setStep(backStep)
  } 

  return (
  <main>
    <aside className="img_container">
      <Steps step={step}/>
    </aside>

    {/* {
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
    } */}

    <Outlet />


  <footer>
      {
        step != 1 && <button className='button_back' onClick={handleBackBtn}>Go Back</button>
      }
      
      <button className='button_next' type='submit' form='personalInfo'>Next Step</button>
    </footer>
  </main>

  )
}

export default App
