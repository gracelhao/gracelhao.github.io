import React from 'react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 rounded w-full"
          >
            Sign In
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-4 text-gray-500 hover:text-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SignInModal;
