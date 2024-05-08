import React from 'react'

function PhoneSvg({w,h, color}) {
  return (
    <svg
      width={w || "17"}
      height={h || "17"}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1156 12.6782C15.9763 13.7368 15.4564 14.7085 14.6531 15.4119C13.8497 16.1152 12.8177 16.502 11.75 16.5001C5.54688 16.5001 0.500007 11.4532 0.500007 5.25009C0.498093 4.18234 0.884919 3.15042 1.58824 2.34704C2.29155 1.54366 3.26326 1.02376 4.32188 0.884461C4.58958 0.851774 4.86067 0.906541 5.09468 1.04058C5.3287 1.17463 5.51309 1.38076 5.62032 1.62821L7.27032 5.3118V5.32118C7.35242 5.5106 7.38633 5.7174 7.36901 5.92311C7.3517 6.12883 7.2837 6.32706 7.1711 6.50009C7.15704 6.52118 7.14219 6.54071 7.12657 6.56024L5.50001 8.48837C6.08516 9.67743 7.32891 10.9102 8.5336 11.497L10.4352 9.87899C10.4538 9.86329 10.4734 9.84869 10.4938 9.83524C10.6666 9.71993 10.8655 9.64954 11.0725 9.63045C11.2794 9.61135 11.4878 9.64415 11.6789 9.72587L11.6891 9.73056L15.3695 11.3798C15.6174 11.4866 15.8241 11.6709 15.9585 11.9049C16.093 12.1389 16.1481 12.4102 16.1156 12.6782Z"
        fill={color || "white"}
      />
    </svg>
  );
}

export default PhoneSvg
