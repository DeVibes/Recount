const getStyleFromNavStatus = ({ isActive }) => {
  const activeClasses = [
    isActive ? 'text-gruvbox_green' : 'text-gruvbox_subtext',
  ].join(' ')
  const allClasses = ''
  return `${allClasses} ${activeClasses}`
}

export { getStyleFromNavStatus }
