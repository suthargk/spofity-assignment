const PauseIcon = ({ isBackgroundHidden = false, ...rest }) => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect
        y="0.120483"
        width="48"
        height="48"
        rx="24"
        fill={isBackgroundHidden ? "transparent" : "white"}
      />
      <path
        d="M17.8713 34.1205H20.7296C21.9612 34.1205 22.5886 33.4918 22.5886 32.2579V15.9948C22.5886 14.7608 21.9612 14.1554 20.7296 14.1205H17.8713C16.628 14.1205 16.0006 14.7608 16.0006 15.9948V32.2579C15.9774 33.4918 16.6048 34.1205 17.8713 34.1205ZM27.2711 34.1205H30.141C31.3726 34.1205 32 33.4918 32 32.2579V15.9948C32 14.7608 31.3726 14.1205 30.141 14.1205H27.2711C26.0394 14.1205 25.412 14.7608 25.412 15.9948V32.2579C25.412 33.4918 26.0162 34.1205 27.2711 34.1205Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PauseIcon;
