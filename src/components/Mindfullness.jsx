// MindfulnessSection.js

import React from 'react';
import { Link } from 'react-router-dom';
import BgImage from '../img/BgImage.png';
import MeditationImage from '../img/meditation.jpeg';
import CalmnessImage from '../img/calmness.jpeg';
import BineuralImage from '../img/binuralBeats.jpeg';
import MusicImage from '../img/musicTherapy.jpeg';
import YogaImage from '../img/yoga.jpeg';

const Mindfulness = () => {
  return (
    <>
      <div className="p-4 bg-gradient-to-br from-blue-500 via-green-500 to-teal-500 text-white rounded-md shadow-lg transition-all duration-300">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-center text-black " >Mindfulness</h2>

        {/* Subheading */}
        <p className="text-gray-200 mb-6 text-bla">Discover how mindfulness can help students grow and thrive.</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Meditation Card */}
          <Link to='/meditation'>

            {/* meditation */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-max h-20" class="w-full" src={MeditationImage} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Meditaion</div>
                <p class="text-gray-700 text-base">
                  antidode to wories stress and non stop thinking
                </p>
              </div>
            </div>
          </Link>


          <Link to='/yoga'>
            {/* Yoga Card */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-max h-20" class="w-full" src={CalmnessImage} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Calmness</div>
                <p class="text-gray-700 text-base">
                  heal your inner self with yoga
                </p>
              </div>
            </div>
          </Link>
          <Link to='/calmness'>
            {/* Calmness Card */}
             {/* Yoga Card */}
             <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-max h-20" class="w-full" src={YogaImage} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Calmness</div>
                <p class="text-gray-700 text-base">
                  your soal needs calmness
                </p>
              </div>
            </div>
          </Link>
          <Link to="/bineural">
            {/* Binaural Beats Card */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-max h-20" class="w-full" src={BineuralImage} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Binaural Beats</div>
                <p class="text-gray-700 text-base">
                  beats that heal your heart
                </p>
              </div>
            </div>
          </Link>
          <Link to='/musictherephy'>       {/* Music Therapy Card */}
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-max h-20" class="w-full" src={MusicImage} alt="Sunset in the mountains" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">Music Therapy</div>
                <p class="text-gray-700 text-base">
                  be in your own rithem
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* ///// */}





    </>
  );
};

export default Mindfulness;
