import React, { useState } from 'react';

const TextInput = () => {
  const [inputText, setInputText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log('Stored Text:', inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mt-4">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Enter your phishing email..."
        className="px-5 py-20 border border-gray-300 rounded-md mb-2 bg-white text-lg" // Increased padding and font size
        style={{
          width: '100%',
          height: '50px',
          textAlign: 'left',
          paddingTop: '2rem',
        }} // Adjust width and height
      />
      <button
        type="submit"
        className="px-20 py-2 bg-primary text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default TextInput;
