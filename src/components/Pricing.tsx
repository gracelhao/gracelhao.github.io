import React, { useState } from 'react';

import config from '../config/index.json';
import SignInModal from './SignInModal'; // Import your SignInModal component

const Pricing = () => {
  const { pricing } = config;
  const { title } = pricing;
  //   const [firstPlan, secondPlan, thirdPlan] = items;

  // State for modal visibility
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSignInClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default action for the button
    setModalOpen(true); // Open the sign-in modal
  };

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>

        <div className="flex justify-center my-8">
          <button
            onClick={handleSignInClick}
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition duration-200"
          >
            Sign In
          </button>
        </div>

        {/* SignIn Modal */}
        <SignInModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </section>
  );
};

export default Pricing;
