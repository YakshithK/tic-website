import React from 'react';
import '../App.css';  // Ensure the CSS file is properly linked
import { Header } from '../components/Header';

export const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="grid-container">
        <div className="text-container">
          <div>
            <p className="subtitle">Shoot for the stars, aim for the moon.</p>  
            <h1 className="title">Welcome to Toronto Innovation Challenge</h1>
            <p className="coming-soon">Coming Soon May 2025</p>
          </div>
        </div>
        <div className="image-container">
          <img className="logo-image" src='/logo-transparent-bg.png' alt="Logo" />
        </div>
      </div>
    </div>
  );
};
