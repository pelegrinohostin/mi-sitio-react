// src/pages/LoginPage.jsx
import React from 'react';
import { AuthForm } from '../components/AuthForm';
import '../styles/auth.css';

export function LoginPage({ onBackToHome, onSubmitAuth, onGoogleAuth }) {
  return (
    <main className="auth-page d-flex flex-column justify-content-center align-items-center">
      <div className="auth-wrapper">
        <div className="d-flex justify-content-between align-items-center mb-3">
          {onBackToHome ? (
            <button
              type="button"
              className="btn btn-link auth-back-btn p-0"
              onClick={onBackToHome}
            >
              ← Volver al inicio
            </button>
          ) : (
            <span />
          )}

          <img
            src="/assets/images/logo.svg"
            alt="Logo del sitio"
            style={{ maxHeight: '32px' }}
          />
        </div>

        <AuthForm onSubmitAuth={onSubmitAuth} onGoogleAuth={onGoogleAuth} />
      </div>
    </main>
  );
}
