import Footer from "./components/Footer"
import Header from "./components/Header"
import ContactPage from "./pages/contactPage/ContactPage"
import Landingpage from "./pages/landingPage/Landingpage"
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
import ProjectPage from "./pages/projectPage/ProjectPage"
import AboutPage from "./pages/aboutPage/AboutPage"


const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Landingpage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
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
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}