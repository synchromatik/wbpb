import React, { useState, useEffect } from 'react';
import { useStateValue } from '../state';

function Header() {
  const [isTop, setTop] = useState(true);
  const [{ lang }, dispatch] = useStateValue();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isTopWindow = window.scrollY > 100;
      if (isTopWindow !== isTop) {
        setTop(false);
      } else if (window.scrollY === 0) {
        setTop(true);
      }
    });
  });

  return (
    <header className="header">
      <div className={isTop ? 'nav' : 'nav nav--scrolling'}>
        <p className="nav__text"> En </p>
        <link
          className={lang === 'en' ? 'nav__switcher en-active' : 'nav__switcher sr-active'}
          onClick={() => dispatch({
            type: 'updateLang',
            newLang: lang === 'en' ? 'sr' : 'en',
          })}
        />
      </div>
    </header>
  );
}

export default Header;
