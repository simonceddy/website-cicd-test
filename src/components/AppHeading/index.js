import { useState } from 'react';
import {
  header1Shadow, header2Shadow, randShadows, shadowStyle
} from '../../util/styles';

function AppHeading() {
  const [simonShadows, setSimonShadows] = useState(header1Shadow);
  const [eddyShadows, setEddyShadows] = useState(header2Shadow);

  return (
    <h1 className="font-mono sm:justify-start items-start relative row font-bold sm:text-[500%] text-[300%] h-full w-full bg-slate-400/30 select-none">
      <span
        role="presentation"
        onClick={() => {
          setSimonShadows(randShadows());
        }}
        style={{
          textShadow: shadowStyle(simonShadows)
        }}
        className="text-cyan-800 cursor-pointer dark:text-cyan-300 app-heading"
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
        className="text-purple-600 cursor-pointer dark:text-purple-300 app-heading"
      >
        Eddy
      </span>
    </h1>
  );
}

export default AppHeading;
