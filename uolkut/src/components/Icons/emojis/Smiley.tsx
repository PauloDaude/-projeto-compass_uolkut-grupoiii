import './emoji.css';

const Smiley = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="emoji"
    >
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        stroke="#FACF41"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.625 11.25C9.24632 11.25 9.75 10.7463 9.75 10.125C9.75 9.50368 9.24632 9 8.625 9C8.00368 9 7.5 9.50368 7.5 10.125C7.5 10.7463 8.00368 11.25 8.625 11.25Z"
        fill="#FACF41"
      />
      <path
        d="M15.375 11.25C15.9963 11.25 16.5 10.7463 16.5 10.125C16.5 9.50368 15.9963 9 15.375 9C14.7537 9 14.25 9.50368 14.25 10.125C14.25 10.7463 14.7537 11.25 15.375 11.25Z"
        fill="#FACF41"
      />
      <path
        d="M15.8999 14.25C15.5034 14.9331 14.9345 15.5 14.25 15.8941C13.5656 16.2882 12.7896 16.4956 11.9999 16.4956C11.2101 16.4956 10.4341 16.2882 9.74969 15.8941C9.06526 15.5 8.49633 14.9331 8.09985 14.25"
        stroke="#FACF41"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default Smiley;