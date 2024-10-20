import React, { useState } from 'react';
import LoadingTerminal from './components/LoadingTerminal/LoadingTerminal';
import Project from './components/ProjectCard/ProjectCard'
import Navbar from './components/Navbar/Navbar'
import './styling/App.css';


function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false); 
  };

  return (
    <div className={`App ${!isLoading ? 'fade-in' : ''}`}>
      {isLoading ? (
        <LoadingTerminal onComplete={handleLoadingComplete} />
      ) : (
        <div className="main-content">
          <div className="background-image"></div>

          <Navbar>

          </Navbar>
          <div className="hero-section">
            <h1>Welcome to the Main Page</h1>
            <p>This is the content that loads after the terminal sequence.</p>
          </div>

          <div>

          <Project>
            Testing
          </Project>
          

          </div>
          {/* <div className="profile-container">
            <img src={profilePicture} alt="Profile" className="profile-picture" />
            <div className="overlay"></div>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default App;
