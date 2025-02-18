import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Dashboard from './app/dashboard/page'
import Login from './app/login/page'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/login",
    element: <Login />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App