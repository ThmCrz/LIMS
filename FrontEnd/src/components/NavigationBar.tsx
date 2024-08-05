import { useState } from 'react';

const NavigationBar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className='NavContainer flex flex-col'>
    <nav className="flex h-auto w-auto bg-white shadow-lg justify-between md:h-16">
      <div className="flex w-full justify-between">
        <div className="flex w-1/2 items-center font-semibold md:w-1/5 md:flex md:items-center md:justify-center">
          <a href="/" className="text-black flex items-center gap-2">
            <img 
              src="https://scontent.fcrk4-1.fna.fbcdn.net/v/t39.30808-6/305656820_492553336211909_2967023127563225341_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEXUkKyWXtKCCzJ0U0z6vpsx8spnFtNANbHyymcW00A1n8HAr082vHCGyc7DMS8nwu-DVZQh8xIOYImAERAeyLG&_nc_ohc=d7rqRYOhKvMQ7kNvgHQYxh0&_nc_zt=23&_nc_ht=scontent.fcrk4-1.fna&oh=00_AYAwz0RrFbMYtvtebbbOIkqz_7KEKJPNR3eYTFyB2zZPow&oe=66B4440A" 
              alt="Mac Tycoon Logo" 
              className="nav-image"/>  
            Laboratory IMS
          </a>
        </div>
        <div className="flex w-1/2 justify-end items-center pr-4 gap-2">
          <button className="text-black">Login</button>
           <button
          className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`}
            ></span>
          </div>
        </button>
        </div>
      </div>
    </nav>

      <div className='flex h-auto w-auto bg-white shadow-lg rounded-lg justify-between'>
        {open && (
            <div className="flex flex-col w-full h-auto md:hidden">
              <div className="flex flex-col items-center gap-2">
                <a href="/Sample Tracking" className="text-black">Sample Tracking</a>
                <a href="/Data Management" className="text-black">Data Management</a>
                <a href="/Inventory Management" className="text-black">Inventory Management</a>
                <a href="/User Account Management" className="text-black">User Account Management</a>
                <a href="/Reporting" className="text-black">Reporting</a>
              </div>
            </div>
          )}
        
           
        </div>   
      </div>
  );
};

export default NavigationBar;