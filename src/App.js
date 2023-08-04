import { useLocation, useOutlet } from 'react-router-dom';
import { SwitchTransition } from 'react-transition-group';
import routes from './routes';
import CSSTransition from './containers/CSSTransition';
import Navbar from './components/Navbar';
import AppHeading from './components/AppHeading';

function App() {
  const location = useLocation();
  const outlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="w-full h-full col justify-start items-start bg-blue-200 dark:text-teal-100 dark:bg-blue-950 text-black">
      <header className="row w-full items-start justify-start">
        <AppHeading />
      </header>
      <div className="col sm:row flex-1 w-full h-auto">
        <div className="col relative bg-lime-300/30 dark:bg-lime-800/30">
          <Navbar />
        </div>
        <div className="w-full col flex-1 relative h-full">
          <SwitchTransition>
            <CSSTransition
              key={location.pathname}
              nodeRef={nodeRef}
              timeout={100}
              classNames="page"
              unmountOnExit
            >
              <div ref={nodeRef} className="page m-2 p-2 bg-blue-300/30 rounded-lg flex-1 col justify-start items-center">
                {outlet}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      {}
    </div>
  );
}

export default App;
