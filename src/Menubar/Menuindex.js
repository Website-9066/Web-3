import React, { useState } from 'react';
import Menubar from './Menubar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';

const Menuindex = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMobile && (
        <div className="mobile-device absolute" style={{zIndex:'2'}}>
          <FontAwesomeIcon
            icon={faBars}
            className="text-[30px] ml-3 mt-3 fixed"
            onClick={toggleMenu}
          />
          {isMenuOpen && <Menubar onClose={closeMenu} />}
          
        </div>
      )}

      {!isMobile && (
        <div className="desktop">
          <Menubar />
        </div>
      )}
    </>
  );
};

export default Menuindex;
