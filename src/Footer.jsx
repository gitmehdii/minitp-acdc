import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Importer l'icône Github

// Composant Footer

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 mt-10 rounded">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-auto mb-8 sm:mb-0 flex justify-center sm:justify-start">
          <h5 className="font-semibold text-lg mb-2">Mehdi AZOUZ</h5>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="px-5">
            <a href="https://gitlab.cri.epita.fr/mehdi.azouz/tp_acdc" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="text-gray-400 hover:text-white transition-colors duration-200" />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-auto mt-8 sm:mt-0 flex justify-center sm:justify-end">
          <p className="text-sm text-gray-400">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;