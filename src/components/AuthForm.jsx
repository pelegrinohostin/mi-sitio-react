// src/components/AuthForm.jsx
import React, { useState } from "react";

export function AuthForm({ onSubmitAuth, onGoogleAuth }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMsg, setStatusMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg("");
    setErrorMsg("");
    setLoading(true);

    try {
      if (onSubmitAuth) {
        await onSubmitAuth({
          mode,
          email,
          password,
          setStatusMsg,
          setErrorMsg,
        });
      } else {
        setStatusMsg(
          `Formulario listo en modo "${mode}" para: ${email} (pendiente conectar backend)`,
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setStatusMsg("");
    setErrorMsg("");
    setLoading(true);

    try {
      if (onGoogleAuth) {
        await onGoogleAuth({ setStatusMsg, setErrorMsg });
      } else {
        setStatusMsg(
          'Botón "Continuar con Google" listo (pendiente conectar OAuth)',
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card auth-card shadow-lg p-4 p-sm-5">
      <div className="text-center mb-4">
        <h3 className="fw-bold mb-1">
          {mode === "login" ? "Bienvenido de nuevo" : "Creá tu cuenta"}
        </h3>
        <p className="text-muted small mb-0">
          {mode === "login"
            ? "Ingresá con tu correo o continuá con Google"
            : "Completá tus datos para empezar en el sitio"}
        </p>
      </div>

      {errorMsg && (
        <div className="alert alert-danger py-2 small" role="alert">
          {errorMsg}
        </div>
      )}
      {statusMsg && (
        <div className="alert alert-info py-2 small" role="alert">
          {statusMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label fw-medium small">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="nombre@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-medium small">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 py-2 fw-semibold rounded-3"
          disabled={loading}
        >
          {loading
            ? "Procesando..."
            : mode === "login"
              ? "Iniciar sesión"
              : "Registrarme con correo"}
        </button>
      </form>

      <div className="auth-divider">
        <span>o</span>
      </div>

      <button
        type="button"
        className="btn btn-outline-dark w-100 py-2 fw-medium rounded-3 mb-3"
        onClick={handleGoogle}
        disabled={loading}
      >
        Continuar con Google
      </button>

      <div className="text-center pt-1">
        <button
          type="button"
          className="btn btn-link btn-sm text-decoration-none fw-medium"
          disabled={loading}
          onClick={() => {
            setMode(mode === "login" ? "register" : "login");
            setErrorMsg("");
            setStatusMsg("");
          }}
        >
          {mode === "login"
            ? "¿No tenés cuenta? Registrate"
            : "¿Ya tenés cuenta? Iniciá sesión"}
        </button>
      </div>
    </div>
  );
}
