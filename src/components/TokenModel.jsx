// src/components/TokenModel.jsx
import React from 'react';
import Tokenomics from './Tokenomics';
import TokenAllocation from './TokenAllocation';

function TokenModel() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-heading mb-4">5. Token Model</h2>
      <Tokenomics />
      <TokenAllocation />
    </section>
  );
}

export default TokenModel;
