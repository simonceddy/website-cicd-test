import { createRef } from 'react';
import Home from './pages/Home';
import Audio from './pages/Audio';
import Coding from './pages/Coding';
import Music from './pages/Music';
import Contact from './pages/Contact';

const routes = [
  {
    key: 'home',
    nodeRef: createRef(),
    path: '/',
    element: <Home />,
    label: 'home',
  },
  {
    key: 'coding',
    nodeRef: createRef(),
    path: '/coding',
    element: <Coding />,
    label: 'coding',
  },
  {
    key: 'audio',
    nodeRef: createRef(),
    path: '/audio',
    element: <Audio />,
    label: 'audio',
  },
  {
    key: 'music',
    nodeRef: createRef(),
    path: '/music',
    element: <Music />,
    label: 'music',
  },
  {
    key: 'contact',
    nodeRef: createRef(),
    path: '/contact',
    element: <Contact />,
    label: 'contact',
  },
];

export default routes;
