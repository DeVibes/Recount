export const getConfig = () => {
  const auth0Domain = import.meta.env.VITE_AUTH0_DOMAIN || ''
  const auth0ClientId = import.meta.env.VITE_AUTH0_CLIENTID || ''
  const auth0RedirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL || ''
  const auth0BaseUri = import.meta.env.VITE_AUTH0_BASE_URL || ''
  return {
    auth0ClientId,
    auth0Domain,
    auth0RedirectUri,
    auth0BaseUri,
  }
}
