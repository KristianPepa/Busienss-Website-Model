import './App.css';
import { Home, ContactUs, TeamMembers, Resources, LearningModules, AboutUs } from './Pages';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Learning" element={<LearningModules/>}/>
          <Route path='/OurTeam' element={<TeamMembers/>}/>
          <Route path="//Resources" element={<Resources/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
