import React, {createContext, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const UserContext = createContext();

const user = JSON.parse(localStorage.getItem("user"));

function Provider() {
  const [state, setState] = useState({user: user});
  const obj = {
    state: state,
    actions: setState
  }

  return <UserContext.Provider value={obj}><App /></UserContext.Provider>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>,
)
