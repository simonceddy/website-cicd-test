import { useState } from 'react';
import {
  header1Shadow, header2Shadow, randShadows, shadowStyle
} from '../../util/styles';

function AppHeading() {
  const [simonShadows, setSimonShadows] = useState(header1Shadow);
  const [eddyShadows, setEddyShadows] = useState(header2Shadow);

  return (
    <h1 className="font-mono sm:justify-start items-start relative sm:row col font-bold sm:text-[700%] text-[400%] h-full w-full bg-slate-400/30 select-none">
      <span
        role="presentation"
        onClick={() => {
          setSimonShadows(randShadows());
        }}
        style={{
          textShadow: shadowStyle(simonShadows)
        }}
        className="text-cyan-800 cursor-pointer dark:text-cyan-300 app-heading sm:absolute top-2 sm:top-[-20px] left-1"
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
        className="text-purple-600 cursor-pointer dark:text-purple-300 app-heading absolute sm:left-[340px] left-[200px] top-[-10px] sm:top-1"
      >
        Eddy
      </span>
    </h1>
  );
}

export default AppHeading;
