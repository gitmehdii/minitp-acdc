import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-csharp';

function TexttoCode({code, title})
{
  const highlightedCode = Prism.highlight(code, Prism.languages.csharp, 'csharp');
  return (
      <div >
        <div className="bg-color_header_code text-white rounded-t-lg p-3">
          <span className="font-semibold bg-color_titre_code pr-2 pl-2 pb-1.5 pt-1.5 bg rounded border border-black">{title}</span>
        </div>
        <div className="bg-code_color p-1 rounded-b-lg">
          <pre className="language-csharp">
            <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        </div>
    </div>
  );
}

export default TexttoCode;