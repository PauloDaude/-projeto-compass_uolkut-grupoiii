import './emoji.css';

const ThumbsUp = (): JSX.Element => {
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
        d="M3 9.75H7.5V19.5H3C2.80109 19.5 2.61032 19.421 2.46967 19.2803C2.32902 19.1397 2.25 18.9489 2.25 18.75V10.5C2.25 10.3011 2.32902 10.1103 2.46967 9.96967C2.61032 9.82902 2.80109 9.75 3 9.75Z"
        stroke="#26CAFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.5 9.75L11.25 2.25C12.0456 2.25 12.8087 2.56607 13.3713 3.12868C13.9339 3.69129 14.25 4.45435 14.25 5.25V7.5H20.0531C20.2658 7.49947 20.4762 7.54447 20.67 7.63197C20.8639 7.71946 21.0368 7.84743 21.1771 8.00728C21.3174 8.16712 21.4219 8.35514 21.4835 8.55871C21.5451 8.76228 21.5625 8.97667 21.5344 9.1875L20.4094 18.1875C20.3639 18.5488 20.1885 18.8812 19.9159 19.1227C19.6434 19.3642 19.2923 19.4983 18.9281 19.5H7.5"
        stroke="#26CAFF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default ThumbsUp;