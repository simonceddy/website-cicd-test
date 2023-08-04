import { createRef } from 'react';
import Home from './pages/Home';
import Audio from './pages/Audio';

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
    element: <div>Heyyyy</div>,
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
    element: <div>tunes</div>,
    label: 'music',
  },
  {
    key: 'contact',
    nodeRef: createRef(),
    path: '/contact',
    element: <div>hello</div>,
    label: 'contact',
  },
];

export default routes;
