export function getDeployEnvironment(): "dev" | "prod" | "test" {
  const env = process.env.NEXT_PUBLIC_DEPLOY_ENV;

  if (env === "prod" || env === "test" || env === "dev") return env;

  return "prod";
}

export function getFrontendUrl(): string {
  const host = process.env.NEXT_PUBLIC_SERVER_FRONTEND;
  const port = process.env.NEXT_PUBLIC_SERVER_FRONTEND_PORT;

  return `http://${host}:${port}`;
}

export function getBackendUrl(): string {
  const host = process.env.NEXT_PUBLIC_BACKEND_HOST;
  const port = process.env.NEXT_PUBLIC_BACKEND_PORT;

  return `http://${host}:${port}`;
}

export function getLoginUrl(): string {
  const host = process.env.NEXT_PUBLIC_SERVER_FRONTEND;
  const port = process.env.NEXT_PUBLIC_LOGIN_FRONTEND_PORT;

  return `http://${host}:${port}`;
}

export function getClientId(): string {
  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
  if (!clientId) throw new Error("Falta definir NEXT_PUBLIC_CLIENT_ID");
  return clientId;
}
