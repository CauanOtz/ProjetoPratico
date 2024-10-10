import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TodoList from './components/App/TodoList.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoList />
  </StrictMode>,
)
