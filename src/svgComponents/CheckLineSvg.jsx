import React from 'react'

function CheckLineSvg({checkWidth, checkHeight, lineWidth}) {
  return (
    <svg
      width="301"
      height="20"
      viewBox="0 0 301 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4263_269)">
        <path
          d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433284 8.00042 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9972 7.34869 18.9427 4.80678 17.068 2.93202C15.1932 1.05727 12.6513 0.00279983 10 0ZM14.3904 8.23654L9.00577 13.6212C8.93433 13.6927 8.84949 13.7494 8.75611 13.7881C8.66273 13.8268 8.56263 13.8468 8.46154 13.8468C8.36045 13.8468 8.26035 13.8268 8.16697 13.7881C8.07359 13.7494 7.98875 13.6927 7.91731 13.6212L5.60962 11.3135C5.46528 11.1691 5.38419 10.9734 5.38419 10.7692C5.38419 10.5651 5.46528 10.3693 5.60962 10.225C5.75396 10.0807 5.94972 9.99957 6.15385 9.99957C6.35798 9.99957 6.55374 10.0807 6.69808 10.225L8.46154 11.9894L13.3019 7.14808C13.3734 7.07661 13.4582 7.01991 13.5516 6.98123C13.645 6.94256 13.7451 6.92265 13.8462 6.92265C13.9472 6.92265 14.0473 6.94256 14.1407 6.98123C14.2341 7.01991 14.3189 7.07661 14.3904 7.14808C14.4619 7.21954 14.5185 7.30439 14.5572 7.39777C14.5959 7.49115 14.6158 7.59123 14.6158 7.69231C14.6158 7.79338 14.5959 7.89346 14.5572 7.98684C14.5185 8.08022 14.4619 8.16507 14.3904 8.23654Z"
          fill="#050505"
        />
      </g>
      <path
        d="M30 9.5H300"
        stroke="url(#paint0_linear_4263_269)"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4263_269"
          x1="30"
          y1="10"
          x2="300"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_4263_269">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CheckLineSvg