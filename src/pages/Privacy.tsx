import React from 'react';

const Privacy = () => {
  // Get the base path from environment or default to empty string
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <iframe 
        src={`${basePath}/Privacy.pdf`}
        className="w-full h-screen"
        title="Privacy Policy"
      />
    </div>
  );
};

export default Privacy; 