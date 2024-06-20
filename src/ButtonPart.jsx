import React, { useState } from 'react';

const colors = {
  'medium': ['bg-blue-100', 'bg-blue-900', "border-blue-300", "bg-blue-600", "bg-blue-500"],
  'hard': ['bg-gray-100', 'bg-gray-900', "border-gray-300", "bg-gray-600", "bg-gray-500"],
  'easy': ['bg-orange-100', 'bg-orange-900', "border-orange-300", "bg-orange-600", "bg-orange-500"],


}


function ButtonPart({title, color, content}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  let colorClass = colors[color] || 'bg-gray-900';

  return (
    <div className={"w-11/12 my-4 border  rounded " + colorClass[0] + " " + colorClass[2]}  >
      <button
        onClick={toggleContent}
        className={"flex justify-start w-full px-4 py-2 text-lg font-bold text-white " + colorClass[4] + " hover:" + colorClass[3] + " focus:outline-none"}
      >
        <span className="mr-2">{(isOpen)?"▼":"▲"}</span> {title}
      </button>
      {isOpen && (
        <div className={"mt-4 p-4 rounded " +  colorClass[0] + " " + colorClass[2]}>
          {content}
        </div>


      )}
    </div>
  );
}

export default ButtonPart;