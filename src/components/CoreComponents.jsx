// src/components/CoreComponents.jsx
import React from 'react';
import GameBasedLearning from './GameBasedLearning';
import Web3Rewards from './Web3Rewards';
import SocialPlatformIntegration from './SocialPlatformIntegration';
import Marketplace from './Marketplace';
import LoyaltyProgram from './LoyaltyProgram';

function CoreComponents() {
  return (
    <section className="mb-8">
      <h2 className="text-3xl font-heading mb-4">4. Core Components of the Platform</h2>
      <GameBasedLearning />
      <Web3Rewards />
      <SocialPlatformIntegration />
      <Marketplace />
      <LoyaltyProgram />
    </section>
  );
}

export default CoreComponents;
