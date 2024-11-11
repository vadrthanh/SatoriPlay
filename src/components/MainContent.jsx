// src/components/MainContent.jsx
import React from 'react';
import Introduction from './Introduction';
import Vision from './Vision';
import Mission from './Mission';
import CoreComponents from './CoreComponents';
import TokenModel from './TokenModel';

function MainContent() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-black" style={{ backgroundColor: '#F4E1C1' }}>
      <Introduction />
      <Vision />
      <Mission />
      <CoreComponents />
      <TokenModel />
    </div>
  );
}

export default MainContent;
