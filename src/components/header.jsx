import React, { Component } from "react";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

class Header extends Component {
  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <React.Fragment>
        {/*
        {AddLibrary(
          "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js",
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
          "https://fonts.googleapis.com",
          "https://fonts.gstatic.com",
          "https://fonts.googleapis.com/css2?family=League+Spartan&family=Poppins:wght@200&display=swap"
        )}
        
<header className="h-12 w-full flex bg-white py-0.5 shadow-lg shadow-lime-500 ">
  <div className="p-1 pl-2 flex">
  <a href="#" className="font-sans"><i className="fas fa-graduation-cap pr-2 text-2xl"></i><span className="lg:text-xl">Personal Instructing Agent</span></a>
  <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={this.handleClick}>
      <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
      <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
      <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
  </button>
  </div>
  <nav {:className="{'flex': open, 'hidden': !open}"} className="flex-col flex-grow pb-4 md:pb-0 mr-2 hidden md:flex md:justify-end md:flex-row">
      <div  className="relative" x-data="{ open: false }">
          <button  className="lg:text-xl flex flex-row items-center w-full px-2 py-2 text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900  hover:bg-gray-200 focus:outline-none focus:shadow-outline">
          <span>Username</span>
          <svg fill="currentColor" viewBox="0 0 20 20" {:className="{'rotate-180': open, 'rotate-0': !open}"} className="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 ">
          <div className="py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
              <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200  focus:shadow-outline" href="#">Profile</a>
              <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200  focus:shadow-outline" href="#">Progress</a>
              <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200  focus:shadow-outline" href="#">Settings</a>
          </div>
          </div>
      </div>    
  </nav>
</header>      
        */}
      </React.Fragment>
    );
  }
}

export default Header;
