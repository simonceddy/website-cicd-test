import { useState } from 'react';
import {
  header1Shadow, header2Shadow, randShadows, shadowStyle
} from '../../util/styles';

function AppHeading() {
  const [simonShadows, setSimonShadows] = useState(header1Shadow);
  const [eddyShadows, setEddyShadows] = useState(header2Shadow);

  return (
    <h1 className="font-mono sm:justify-start items-start relative sm:row col font-bold sm:text-huge text-7xl sm:h-[160px] h-[100px] w-full bg-slate-400/30 select-none">
      <span
        role="presentation"
        onClick={() => {
          setSimonShadows(randShadows());
        }}
        style={{
          textShadow: shadowStyle(simonShadows)
        }}
        className="text-cyan-800 cursor-pointer dark:text-cyan-300 app-heading sm:absolute top-0 left-1"
      >
        Simon
      </span>
      <span
        role="presentation"
        onClick={() => {
          setEddyShadows(randShadows());
        }}
        style={{
          textShadow: shadowStyle(eddyShadows)
        }}
        className="text-purple-600 cursor-pointer dark:text-purple-300 app-heading absolute sm:left-[320px] left-[180px] bottom-3"
      >
        Eddy
      </span>
    </h1>
  );
}

export default AppHeading;
