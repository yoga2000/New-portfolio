import { ThemeProvider } from "styled-components"
import GlobalStyle from "./GlobalStyles"
import { DarkTheme, lightTheme } from "./components/theme"
import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import About from "./components/About"
import Work from "./components/Work"
import Skills from "./components/Skills"
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";



function App() {
  const location = useLocation();
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path='/work' element ={<Work/>}/>
        <Route path="*" element={<Main />} />
      </Routes>
      </AnimatePresence>

    </ThemeProvider>

    </>
  )
}

export default App
   