import Landingpage from "./pages/landingPage/Landingpage"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import ProjectPage from "./pages/projectPage/ProjectPage"
import Resume from "./pages/resume/resume"
import { useEffect, useState } from "react"


const App = () => {



  const [result, setResult] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    const getData = async () => {

      const response = await fetch("../db.json")
      const data = await response.json()
      setResult(data)
      setIsLoading(true)
    }

    getData()
  }, [])




  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>


        <Route index
          element={<Landingpage data={isLoading === true && result} />} />
        <Route path="/project" element={<ProjectPage
          data={isLoading === true
            && result
          }

        />} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    )
  )


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App


const Root = () => {


  return (
    <>
      <Outlet />
    </>
  )
}



