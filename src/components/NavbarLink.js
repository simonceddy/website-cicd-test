import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

function NavbarLink({ label = '', to = '/' }) {
  const [str, setStr] = useState(label);
  const ref = useRef(null);
  useEffect(() => {
    let setup = false;
    if (!setup && ref.current) {
      ref.current.addEventListener('click', (e) => {
        if (e.altKey) {
          console.log('here');
        }
      });
    }
    return () => {
      setup = true;
    };
  });
  return (
    <NavLink
      ref={ref}
      className="navbar-link even:bg-slate-400/30 dark:even:bg-slate-800/30 dark:odd:bg-blue-800/30 odd:bg-blue-400/30 py-2 pl-6 pr-2 text-pink-700 dark:text-pink-200 hover:text-cyan-700 dark:hover:text-cyan-200 font-bold text-3xl sm:text-5xl block font-mono hover:underline w-full hover:bg-pink-300/30 dark:hover:bg-pink-700/30 border-2 border-opacity-0 hover:border-opacity-100 border-blue-900/0 hover:border-blue-900 dark:hover:border-blue-300 capitalize"
      to={to}
      onDoubleClick={() => setStr(label)}
      onClick={(e) => {
        if (e.altKey) {
          setStr(
            str.split('').sort(() => 0.5 - Math.random()).join('')
          );
        }
      }}
    >
      {str}
    </NavLink>
  );
}

export default NavbarLink;
