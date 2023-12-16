import Header from "./components/Header.jsx"
import Banner from "./components/Banner.jsx"
import Apartments from "./components/Apartments.jsx"
import Main from "./components/Main.jsx"
import Footer from "./components/Footer.jsx"
import "./App.css"

function App() {
  return (
    <div>
        <Header />
        <Main>
          <Banner />
          <Apartments />
        </Main>
        <Footer />
    </div>
  )
}

export default App