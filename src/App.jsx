// src/App.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient";
import HomePage from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [session, setSession] = useState(null);

  useEffect(() => {
    // 1. Obtener la sesión activa al cargar la app
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // 2. Escuchar cambios de sesión (login, logout, retorno de Google OAuth)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        setCurrentView("home");
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSubmitAuth = async ({
    mode,
    email,
    password,
    setStatusMsg,
    setErrorMsg,
  }) => {
    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      setStatusMsg("¡Sesión iniciada! Redirigiendo...");
      setCurrentView("home");
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      if (data?.session) {
        setStatusMsg("¡Cuenta creada y sesión iniciada!");
        setCurrentView("home");
      } else {
        setStatusMsg(
          "¡Registro exitoso! Revisá tu correo para confirmar tu cuenta antes de iniciar sesión.",
        );
      }
    }
  };

  const handleGoogleAuth = async ({ setErrorMsg }) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) {
      setErrorMsg(error.message);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentView("home");
  };

  if (currentView === "login") {
    return (
      <LoginPage
        onBackToHome={() => setCurrentView("home")}
        onSubmitAuth={handleSubmitAuth}
        onGoogleAuth={handleGoogleAuth}
      />
    );
  }

  return (
    <HomePage
      user={session?.user ?? null}
      onOpenLogin={() => setCurrentView("login")}
      onLogout={handleLogout}
    />
  );
}
