// src/components/AuthForm.jsx
import React, { useState } from "react";

function EyeIcon({ visible }) {
  if (visible) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3l18 18M10.584 10.587a2 2 0 002.828 2.83M9.363 5.365A9.466 9.466 0 0112 5c4.478 0 8.268 2.943 9.543 7a9.97 9.97 0 01-1.563 3.029m-5.858.908a3 3 0 01-4.243-4.243M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65"
        />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

export function AuthForm({ onSubmitAuth, onGoogleAuth }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMsg("");
    setErrorMsg("");

    if (mode === "register" && password !== confirmPassword) {
      setErrorMsg("Las contraseñas no coinciden. Verificá e intentá de nuevo.");
      return;
    }

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

  const toggleMode = () => {
    setMode((prev) => (prev === "login" ? "register" : "login"));
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    setErrorMsg("");
    setStatusMsg("");
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
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Mínimo 6 caracteres"
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary d-flex align-items-center"
              onClick={() => setShowPassword((prev) => !prev)}
              disabled={loading}
              aria-label={
                showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
              title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              <EyeIcon visible={showPassword} />
            </button>
          </div>
        </div>

        {mode === "register" && (
          <div className="mb-3">
            <label className="form-label fw-medium small">
              Confirmar contraseña
            </label>
            <div className="input-group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                placeholder="Repetí tu contraseña"
                minLength={6}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary d-flex align-items-center"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                disabled={loading}
                aria-label={
                  showConfirmPassword
                    ? "Ocultar confirmación de contraseña"
                    : "Mostrar confirmación de contraseña"
                }
                title={
                  showConfirmPassword
                    ? "Ocultar contraseña"
                    : "Mostrar contraseña"
                }
              >
                <EyeIcon visible={showConfirmPassword} />
              </button>
            </div>
          </div>
        )}

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
          onClick={toggleMode}
        >
          {mode === "login"
            ? "¿No tenés cuenta? Registrate"
            : "¿Ya tenés cuenta? Iniciá sesión"}
        </button>
      </div>
    </div>
  );
}
