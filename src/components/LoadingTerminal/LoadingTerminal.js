import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './LoadingTerminal.css';

const commands = [
  'Initializing profile...',
  'Loading user data...',
  'Setting up preferences...',
  'Profile setup complete!'
];

function LoadingTerminal({ onComplete }) {
  const [commandIndex, setCommandIndex] = useState(0);
  const [displayedCommands, setDisplayedCommands] = useState([]);
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    if (commandIndex < commands.length) {
      const timeout = setTimeout(() => {
        setDisplayedCommands((prev) => [...prev, commands[commandIndex]]);
        setCommandIndex((prev) => prev + 1);
      }, commands[commandIndex].length * 50 + 1000);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setIsShrinking(true);
        setTimeout(onComplete, 1000); 
      }, 2000);
    }
  }, [commandIndex, onComplete]);

  return (
    <div className={`cmd-interface ${isShrinking ? 'shrink' : ''}`}>
      <div className="cmd-content">
        {displayedCommands.map((command, index) => (
          <pre key={index}>
            <Typewriter
              words={[command]}
              loop={1}
              typeSpeed={5}
              cursor
              cursorStyle="_"
              deleteSpeed={0}
              delaySpeed={0}
            />
          </pre>
        ))}
      </div>
    </div>
  );
}

export default LoadingTerminal;
