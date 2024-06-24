import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Info({title, content})
{
  const structure = `
Tp-acdc
├── TheGreatOffensive
│   ├── Attack
│   │   ├── Galaxy.cs
│   │   └── Planet.cs
│   ├── Preparation
│   │   ├── Documents.cs
│   │   ├── Encryption.cs
│   │   └── Enum.cs
│   ├── Tests
│   │   └── Put your tests inside here
│   ├── TheGreatOffensive.csproj
│   └── Program.cs
├── .gitignore
├── TheGreatOffensive.sln
└── README`;
  return (

    <div>
      <div className="bg-red-600 text-white rounded-t-lg p-3">
        <span
          className="font-semibold bg-red-600 pr-2 pl-2 pb-1.5 pt-1.5 bg rounded border border-gray-800 border-2">{title}</span>
      </div>
      <div className="bg-code_color p-1 rounded-b-lg">
        <pre className="text-gray-400 pl-2">{structure}</pre>
      </div>
    </div>
  );
}

export default Info;