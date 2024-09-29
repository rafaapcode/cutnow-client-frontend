export default function redirectGoogleLink(): string {
  const options = `client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=http://localhost:5173/callback/google&response_type=code&scope=email profile`;
  return encodeURI(options);
}