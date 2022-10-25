import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'
import { worker } from './api/server'
import { BrowserRouter } from "react-router-dom";
import { fetchUsers } from './features/posts/userSlice';

// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
//   // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })
store.dispatch(fetchUsers())
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
             <App />
           </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

start()
