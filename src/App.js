import './App.css';
import Destination from './Destination';
import Login from './Login';
import { Routes,Route} from 'react-router-dom';
import Property from './Properties';
import Sign from './Sign';
import Home from './Home';
import Travel from './Travel';
import Mountaineering from './Mountaineering';
import MountAnnapurna from './Mountaineering/MountAnnapurna';
import Chitwan from './Travel/Chitwan';
import GuideAnnapurna from './Mountaineering/GuideAnnapurna';
import Cheppal from './Mountaineering/Cheppal';
import Unexplored from './Travel/Unexplored';
import Khalti from './Payment/Khalti';

function App() {
  return (
    <div className="App">
      <Home/>
      <Routes>
        <Route path='/signUp' Component={Sign}/>
        <Route path='/Login' Component={Login}/>
        <Route path='/Destination' Component={Destination}/>
        <Route path='/Trekking' Component={Property}/>
        <Route path='/Travel' Component={Travel}/>
        <Route path='/Mountaineering' Component={Mountaineering}/>
        <Route exact path='/property/0' Component={MountAnnapurna}/>
        <Route exact path='/property/2' Component={Chitwan}/>
        <Route exact path='/Mountain/guide' Component={GuideAnnapurna}/>
        <Route exact path='/annapurnaguide/0' Component={Cheppal}/>
        <Route exact path='/unexplored' Component={Unexplored}/>
        <Route exact path='/khaltipay' Component={Khalti}/>
        </Routes>
    </div>
  );
}

export default App;
