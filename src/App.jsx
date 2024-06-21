import RootLayout from "./layouts/RootLayout";
import AboutPage from "./pages/AboutPage";
import AgeCalculator from "./pages/AgeCAlculator";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import WordCounter from "./pages/WordCounter";
import PasswordGenerator from "./pages/PasswordGenerator";

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="AgeCalculator" element={<AgeCalculator/>}/>
        <Route path="About" element={<AboutPage/>}/>
        <Route path='Contact' element={<ContactPage/>}/>
        <Route path='WordCounter' element={<WordCounter/>}/>
        <Route path='Password' element={<PasswordGenerator/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}
