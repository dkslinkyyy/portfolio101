import React, { useState } from 'react';
import LoadingTerminal from './components/LoadingTerminal';
import profilePicture from './profile-pic.png'; // Ensure path is correct
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false); // Stop loading and render the main content
  };

  return (
    <div className={`App ${!isLoading ? 'fade-in' : ''}`}>
      {isLoading ? (
        <LoadingTerminal onComplete={handleLoadingComplete} />
      ) : (
        <div className="main-content">
          <div className="background-image"></div>
          <div className="navbar">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="hero-section">
            <h1>Welcome to the Main Page</h1>
            <p>This is the content that loads after the terminal sequence.</p>
          </div>
          <div className="profile-container">
            <img src={profilePicture} alt="Profile" className="profile-picture" />
            <div className="overlay"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
