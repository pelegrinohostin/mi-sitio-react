// src/App.jsx
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  if (currentView === 'login') {
    return <LoginPage onBackToHome={() => setCurrentView('home')} />;
  }

  return <HomePage onOpenLogin={() => setCurrentView('login')} />;
}
