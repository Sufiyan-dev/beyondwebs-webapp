import "./Home.css"
import Main from "./Main/Main"
import Services from "./Services/Services"

const Home = () => {
  return (
    <div className="home-main-wrapper">
      <Main/>
      <Services/>
    </div>
  )
}

export default Home