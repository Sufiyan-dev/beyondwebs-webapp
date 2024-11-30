import './StartProject.css'

const StartProject = () => {
  return (
    <div className='start-project-main-wrapper'>
        <div className='start-project-left-wrapper'>
            {/* <div> */}
                <h3>Start a Project</h3>
            {/* </div> */}
            {/* <div> */}
                <h1>Are you ready to unleash<br/>
                your arsenal?</h1>
            {/* </div> */}
        </div>
        <div className='start-project-right-wrapper'>
            <div className='start-project-btn-wrapper'>
                <button className='start-project-btn'>Let's go...</button>
            </div>
            {/* <div> */}
                <h1 className='start-project-action'>Create</h1>
            {/* </div> */}
        </div>
    </div>
  )
}

export default StartProject