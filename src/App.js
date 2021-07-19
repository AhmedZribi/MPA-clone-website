import './css/index.css'
import Home from './Home'
import Incubator from './Incubator'
import Learn from './Learn'
import StartupInfo from './StartupInfo'
import {Route} from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
      <div classname = "page-wrapper"> 
        <div classname="page-header">
          <NavBar />
        </div>
        <Route path ="/" exact component={Home} />
        <Route path ="/incubator" component={Incubator} />
        <Route path ="/learn" component={Learn} /> 
        <Route path ="/startupInfo" component={StartupInfo} />
      </div> 
    </>
  )
}

export default App
