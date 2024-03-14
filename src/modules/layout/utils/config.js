export const getConfig = () => {
  const mobileWidth = import.meta.env.VITE_MOBILE_WIDTH || 500
  return {
    mobileWidth,
  }
}
