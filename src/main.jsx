import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PersonalInfo from './components/PersonalInfo.jsx'
import PlanSelect from './components/PlanSelect.jsx'
import PickAdd from './components/PickAdd.jsx'
import Summary from './components/Summary.jsx'
import Laststep from './components/Laststep.jsx'

const router = createBrowserRouter([
  { 
    path: '' ,
    element: <App/>, 
    children: [ 
      {path: '' , element: <PersonalInfo /> }, 
      {path: 'plan_select' , element: <PlanSelect /> },
      {path: 'pick_add' , element: <PickAdd /> },
      {path: 'summary' , element: <Summary /> },
      {path: 'laststep' , element: <Laststep /> },
    ] 
  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
