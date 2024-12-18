import "./Home.css"
import Main from "./Main/Main"
import Partners from "./Partners/Partners"
import Reviews from "./Reviews/Reviews"
import Services from "./Services/Services"
import StartProject from "./StartProject/StartProject"
import Work from "./Work/Work"

const Home = () => {
  return (
    <div className="home-main-wrapper">
      <Main/>
      <Services/>
      <Work/>
      <Partners/>
      <Reviews/>
      <StartProject/>
    </div>
  )
}

export default Home