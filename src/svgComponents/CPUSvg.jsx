import React from 'react'

function CPUSvg({w, h, fill}) {
  return (
    <svg
      width={w || "14"}
      height={h || "14"}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.69434 5.21973H8.50684V8.03223H5.69434V5.21973ZM13.6631 8.03223C13.6631 8.15655 13.6137 8.27578 13.5258 8.36368C13.4379 8.45159 13.3187 8.50098 13.1943 8.50098H12.2568V10.8447C12.2568 11.0934 12.1581 11.3318 11.9822 11.5076C11.8064 11.6835 11.568 11.7822 11.3193 11.7822H8.97559V12.7197C8.97559 12.844 8.9262 12.9633 8.83829 13.0512C8.75039 13.1391 8.63116 13.1885 8.50684 13.1885C8.38252 13.1885 8.26329 13.1391 8.17538 13.0512C8.08747 12.9633 8.03809 12.844 8.03809 12.7197V11.7822H6.16309V12.7197C6.16309 12.844 6.1137 12.9633 6.02579 13.0512C5.93788 13.1391 5.81866 13.1885 5.69434 13.1885C5.57002 13.1885 5.45079 13.1391 5.36288 13.0512C5.27497 12.9633 5.22559 12.844 5.22559 12.7197V11.7822H2.88184C2.6332 11.7822 2.39474 11.6835 2.21892 11.5076C2.04311 11.3318 1.94434 11.0934 1.94434 10.8447V8.50098H1.00684C0.882516 8.50098 0.763287 8.45159 0.67538 8.36368C0.587472 8.27578 0.538086 8.15655 0.538086 8.03223C0.538086 7.90791 0.587472 7.78868 0.67538 7.70077C0.763287 7.61286 0.882516 7.56348 1.00684 7.56348H1.94434V5.68848H1.00684C0.882516 5.68848 0.763287 5.63909 0.67538 5.55118C0.587472 5.46327 0.538086 5.34405 0.538086 5.21973C0.538086 5.09541 0.587472 4.97618 0.67538 4.88827C0.763287 4.80036 0.882516 4.75098 1.00684 4.75098H1.94434V2.40723C1.94434 2.15859 2.04311 1.92013 2.21892 1.74431C2.39474 1.5685 2.6332 1.46973 2.88184 1.46973H5.22559V0.532227C5.22559 0.407906 5.27497 0.288678 5.36288 0.20077C5.45079 0.112863 5.57002 0.0634766 5.69434 0.0634766C5.81866 0.0634766 5.93788 0.112863 6.02579 0.20077C6.1137 0.288678 6.16309 0.407906 6.16309 0.532227V1.46973H8.03809V0.532227C8.03809 0.407906 8.08747 0.288678 8.17538 0.20077C8.26329 0.112863 8.38252 0.0634766 8.50684 0.0634766C8.63116 0.0634766 8.75039 0.112863 8.83829 0.20077C8.9262 0.288678 8.97559 0.407906 8.97559 0.532227V1.46973H11.3193C11.568 1.46973 11.8064 1.5685 11.9822 1.74431C12.1581 1.92013 12.2568 2.15859 12.2568 2.40723V4.75098H13.1943C13.3187 4.75098 13.4379 4.80036 13.5258 4.88827C13.6137 4.97618 13.6631 5.09541 13.6631 5.21973C13.6631 5.34405 13.6137 5.46327 13.5258 5.55118C13.4379 5.63909 13.3187 5.68848 13.1943 5.68848H12.2568V7.56348H13.1943C13.3187 7.56348 13.4379 7.61286 13.5258 7.70077C13.6137 7.78868 13.6631 7.90791 13.6631 8.03223ZM9.44434 4.75098C9.44434 4.62666 9.39495 4.50743 9.30704 4.41952C9.21914 4.33161 9.09991 4.28223 8.97559 4.28223H5.22559C5.10127 4.28223 4.98204 4.33161 4.89413 4.41952C4.80622 4.50743 4.75684 4.62666 4.75684 4.75098V8.50098C4.75684 8.6253 4.80622 8.74453 4.89413 8.83243C4.98204 8.92034 5.10127 8.96973 5.22559 8.96973H8.97559C9.09991 8.96973 9.21914 8.92034 9.30704 8.83243C9.39495 8.74453 9.44434 8.6253 9.44434 8.50098V4.75098Z"
        fill={fill || "#050505"}
      />
    </svg>
  );
}

export default CPUSvg