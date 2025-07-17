import React, { useEffect, useRef, useState } from 'react'
import './Home.css'


const Home = () => {
  const [text, setText] = useState('');
  const currentPhraseIndex = useRef(0);
  const timeoutRef = useRef(null);
  const phrasesRef = useRef(["Web Developer", "Full-Stack Engineer", "Software Engineer"]);
  
  const typeSpeed = 100;
  const eraseSpeed = 100;
  const delayAfterType = 1500;
  const delayAfterErase = 500;

  useEffect(() => {
    let mounted = true; 
    const sleep = (ms) => new Promise((resolve) => {
      timeoutRef.current = setTimeout(resolve, ms);
    });

    const typePhrase = async () => {
      if (!mounted) return;

      const currentPhrase = phrasesRef.current[currentPhraseIndex.current];

      // Type the phrase
      for (let i = 0; i <= currentPhrase.length; i++) {
        if (!mounted) return;
        setText(currentPhrase.substring(0, i));
        await sleep(typeSpeed);
      }

      await sleep(delayAfterType);

      // Erase the phrase
      for (let i = currentPhrase.length; i >= 0; i--) {
        if (!mounted) return;
        setText(currentPhrase.substring(0, i));
        await sleep(eraseSpeed);
      }

      await sleep(delayAfterErase);

      // Move to next phrase
      currentPhraseIndex.current = (currentPhraseIndex.current + 1) % phrasesRef.current.length;
      
      // Continue the loop
      if (mounted) {
        typePhrase();
      }
    };

    typePhrase();

    // Cleanup function
    return () => {
      mounted = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);


 



  return (
    <div className="home-section">
      <h4>Hi, my name is</h4>
      <h1 id='name'>Cody Yonkin</h1>
      <h4>
        <span>{text}</span>
        <span className="cursor">|</span>
      </h4>
     
    </div>
  );
};





export default Home;