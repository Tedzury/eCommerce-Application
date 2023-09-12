import { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import xIcon from '../../assets/icons/xIcon.svg';

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = window.screen.width < 768;
  const isCart = location.pathname.includes('cart');

  useEffect(() => {
    if (!isMobile && isCart) {
      navigate('categories/all?sort=price+desc');
    }
  });

  return (
    <div
      className="
      my-28
      border-b-2
      border-separation-line
      px-6
      sm:mt-16
      sm:px-28
      md:fixed
      md:mx-3 
      md:px-0
      md:py-[6px]
"
    >
      <h2 className="mb-6 text-xl sm:mt-24 md:mt-10">Your order</h2>
      <div className="relative flex items-start gap-x-4 md:gap-x-1 lg:gap-x-2">
        <div className="md:max-w-[33%] lg:max-w-[35%]">
          <img className="h-full w-full object-cover" src="src/assets/img/cart-img.png" alt="" />
        </div>
        <h3 className="text-lg sm:text-xl md:mr-4 md:text-sm lg:text-base">Set four flavours of salmon</h3>
        <div className="absolute right-0 top-0">
          <img src={xIcon} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="block text-lg font-medium sm:text-xl md:ml-auto md:mt-2 md:text-sm lg:text-base">$24,50</span>
      </div>
      <div className="flex items-center justify-end gap-x-3 md:mt-2 lg:gap-x-2">
        <button
          type="button"
          className="h-7 w-7 rounded-full bg-accent-lightest px-2 text-center text-xl leading-[40px] text-accent sm:text-xl md:px-1 md:text-sm lg:px-2 lg:text-lg"
        >
          -
        </button>
        <div className="text-lg sm:text-xl md:text-sm">1</div>
        <button
          type="button"
          className="h-7 w-7 rounded-full bg-accent-lightest px-2 text-center text-xl text-accent sm:text-xl md:px-1 md:text-sm lg:px-2 lg:text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
}
