import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFire, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import emoji1 from '../img/imogi/emoji_1.png';
import emoji2 from '../img/imogi/emoji_2.png';
import emoji3 from '../img/imogi/emoji_3.png';
import emoji4 from '../img/imogi/emoji_4.png';
import emoji5 from '../img/imogi/emoji_5.png';
import dailyTaskImage from '../img/dailytask.jpg';
import resourcesImage from '../img/resources.jpg';
import mindfullnessImage from '../img/mindfulness.jpeg';



library.add(faFire, faBell);

const Home = () => {
  return (
    <>
    <Navbar/>
    {/* <div className="min-h-screen bg-gray-100 flex flex-col"> */}

      {/* Profile Section */}

    <div class="bg-orange-300">
      {/* Mood Section */}
      <div className="p-4">
        <div className='todays_mood'>
          <h2 className="text-1xl font-semibold mb-4">How are you feeling today?</h2>
          <div className='my-7 flex flex-row justify-between ' >
            <span className='bg-neutral-200 rounded-full p-3'> <img src={emoji1} alt="Image" class="w-full h-auto rounded-lg h-10 w-10"/> </span>
            <span className='bg-neutral-200 rounded-full p-3'> <img src={emoji2} alt="Image" class="w-full h-auto rounded-lg h-10 w-10"/> </span>
            <span className='bg-neutral-200 rounded-full p-3'> <img src={emoji3} alt="Image" class="w-full h-auto rounded-lg h-10 w-10"/> </span>
            <span className='bg-neutral-200 rounded-full p-3'> <img src={emoji4} alt="Image" class="w-full h-auto rounded-lg h-10 w-10"/> </span>
            <span className='bg-neutral-200 rounded-full p-3'> <img src={emoji5} alt="Image" class="w-full h-auto rounded-lg h-10 w-10"/> </span>
          </div>
        </div>

        {/* daily task card */}
<Link to="/task1">
        <div class="max-w-2xl mx-auto">
              
              <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img class="rounded-t-lg" src={dailyTaskImage} alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Daily Stride</h5>
                      </a>
                      <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">small tasks bring large changes. Improve mental health by daily small tasks</p>
                      <a href="" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Perform Task
                          <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
           </div>
</Link>
        
        <div>
          
           {/* mindfullness section */}
<Link to="/resources">
           <div class="max-w-2xl mx-auto m-10">
              
              <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img class="rounded-t-lg" src={mindfullnessImage} alt="" />
                  </a>
                  <div class="p-5">
                      <Link to='/resources'>
                          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Calm Crafter</h5>
                          </Link>
                      <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Explore your inner dimension. By going on the journey through podcasts, books, blogs, music that nourctures your soal and bring inner you out.</p>
                      <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Explore
                          <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
           </div>
</Link>

<Link to="/mindfullness">
           {/* resources section */}
           <div class="max-w-2xl mx-auto m-10">
              
              <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                      <img class="rounded-t-lg" src={resourcesImage} alt="" />
                  </a>
                  <div class="p-5">
                      <a href="#">
                          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Info Voult</h5>
                      </a>
                      <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Lokking for something new and indulding try our resources build to feed the inner you.</p>
                      <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                          Explore
                          <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
           </div>
</Link>
        </div>

          

        </div>
      </div>

    
      {/* </div> */}
    </>
  );
};

export default Home;