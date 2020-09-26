import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Accordion = (props) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  const size = useAccordion();
  // Hook
  function useAccordion() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [accordion, setAccordion] = useState({ width: undefined });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setAccordion({
          width: window.innerWidth,
        });
      }
      // Add event listener
      window.addEventListener('resize', handleResize);
      // Call handler right away so state gets updated with initial window size
      handleResize();
      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return accordion;
  }

  useEffect(() => {
    if (size.width < 910) {
      contentRef.current.style.maxHeight = active
        ? `${contentRef.current.scrollHeight}px`
        : '0px';
    } else {
      contentRef.current.style.maxHeight = '500px';
    }
  }, [contentRef, active, size]);

  /*
  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : '0px';
  }, [contentRef, active]);
*/
  const toogleActive = () => {
    setActive(!active);
  };

  return (
    <div className="accordion-section">
      <h6 className="accordion-title accordion" onClick={toogleActive}>
        {props.title}
        <AiOutlineArrowRight
          className={
            active ? 'accordion-icon accordion-icon-rotate' : 'accordion-icon'
          }
        />
      </h6>

      <ol ref={contentRef} className="accordion-content">
        {props.children}
      </ol>
    </div>
  );
};

export default Accordion;
