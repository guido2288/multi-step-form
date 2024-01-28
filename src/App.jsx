import { Outlet } from 'react-router-dom'

import Steps from './components/Steps'
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
