import React from 'react' ;
import './App.css' ;
import Profile from './components/Profile.js' ;
import Education from './components/Education.js' ;
import Skill from './components/Skill.js' ;
import Hobby from './components/Hobby.js' ;

function App() {
  return (
    <div className="App">
        <Profile/>
        <Education/>
        <Skill/>
        <Hobby/>
    </div>
  );
}

export default App;
