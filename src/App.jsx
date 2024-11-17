import { Suspense } from 'react'
import './App.css'
// import { Footer } from './components/footer'
import { Header } from './components/header'
// import { MainContent } from './components/maincontent'


function App() {

  return (
    <Suspense fallback="Loading...">
      <Header />
      {/* <MainContent /> */}
      {/* <Footer /> */}
    </Suspense>
  )
}

export default App
