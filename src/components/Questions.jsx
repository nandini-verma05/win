// QuestionsPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const Question = () => {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* ... other code ... */}

        <div className="mb-4">
          <h3 className="text-lg lg:text-xl font-medium mb-2">How much time do you generally sleep?</h3>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-lg lg:text-xl font-medium mb-2">Are you dedicating time towards physical activities?</h3>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full"
          />
        </div>

        {/* Next Page Button */}
        <div className="mt-6">
            <Link to='/questions2'>   <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            onClick={() => {
              // Add logic to navigate to the next page
              console.log('Next Page Clicked');
            }}
          >
            Next Page
          </button>
            
            </Link>
        
        </div>

      </div>
    </div>
  );
};

export default Question;
