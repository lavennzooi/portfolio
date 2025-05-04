import React, { useState } from 'react';

export function Collapsible({ children, title }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="collapsible">
          <button className="collapsible-title" onClick={toggleOpen}>
            {title}
            <span >{isOpen ? '-' : '+'}</span>
          </button>
          {isOpen && <div className="collapsible-content">{children}</div>}
        </div>
      );
}