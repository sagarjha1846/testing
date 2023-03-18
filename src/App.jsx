import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex bg-yellow-100 w-full h-screen">
      <div class="flex bg-red-300 w-96 h-screen">01</div>
      <div class="flex flex-col bg-gray-300 w-full h-screen ">
        <div class="flex bg-blue-400 w-full h-20">02</div>
        <div class="flex bg-green-500 w-full h-screen overflow-hidden">
          <div className="overflow-y-scroll w-full">
            <div className="flex bg-teal-100 w-full h-full">
              <div class="flex bg-purple-300 w-96 h-full">01</div>
              <div class="flex flex-col bg-pink-300 w-full h-full ">
                <div class="flex bg-cyan-500 w-full h-full">
                  <div className="p-2 w-full"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
