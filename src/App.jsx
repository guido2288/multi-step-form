import { Outlet } from 'react-router-dom'

import Laststep from './components/Laststep'
import PersonalInfo from './components/PersonalInfo'
import PickAdd from './components/PickAdd'
import PlanSelect from './components/PlanSelect'
import Steps from './components/Steps'
import Summary from './components/Summary'
import './App.css'
import RegFormProvider from './provider/RegFormProvider'


function App() {



  return (
    <RegFormProvider>
      <main>
        <aside className="img_container">
          <Steps />
        </aside>

        <Outlet />
    </main>
  </RegFormProvider>
  )
}

export default App
