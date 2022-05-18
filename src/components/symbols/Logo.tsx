import React from "react";

interface Props {
  color?: string;
}
const Logo: React.FC<Props> = ({ color }) => {
  const fillColor = color ? color : "#000000";
  return (
    <svg
      width="53"
      height="15"
      viewBox="0 0 53 15"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_33_32)">
        <path
          d="M13.4753 7.34104C13.4753 3.61884 11.4433 0.751221 6.27779 0.751221H0.751465V13.9309H6.27779C11.4433 13.9309 13.4753 11.0633 13.4753 7.34104ZM9.71514 7.34104C9.71514 9.94279 8.25285 10.9113 6.22085 10.9113H4.34073V3.77077H6.22085C8.25285 3.77077 9.71514 4.7393 9.71514 7.34104Z"
          fill={fillColor}
        />
        <path
          d="M14.3345 13.9309H24.7794V10.9303H17.9237V8.67043H23.9438V5.82177H17.9237V3.75178H24.6085V0.751221H14.3345V13.9309Z"
          fill={fillColor}
        />
        <path
          d="M36.9387 5.32803C36.9387 2.00462 34.8117 0.751221 31.5073 0.751221H25.791V13.9309H29.3803V9.90483H31.5073C34.8117 9.90483 36.9387 8.6514 36.9387 5.32803ZM33.2165 5.32803C33.2165 6.61941 32.6088 7.15116 31.1464 7.15116H29.3803V3.5049H31.1464C32.6088 3.5049 33.2165 4.03664 33.2165 5.32803Z"
          fill={fillColor}
        />
        <path
          d="M37.3301 3.82774H41.489V13.9309H45.0783V3.82774H49.2373V0.751221H37.3301V3.82774Z"
          fill={fillColor}
        />
        <path
          d="M47.7461 12.0856C47.7461 13.2783 48.7116 14.2438 49.9044 14.2438C51.097 14.2438 52.0721 13.2783 52.0721 12.0856C52.0721 10.8929 51.097 9.91797 49.9044 9.91797C48.7116 9.91797 47.7461 10.8929 47.7461 12.0856ZM48.1626 12.0856C48.1626 11.1012 48.9387 10.2966 49.9044 10.2966C50.8697 10.2966 51.6555 11.1012 51.6555 12.0856C51.6555 13.07 50.8697 13.8652 49.9044 13.8652C48.9387 13.8652 48.1626 13.07 48.1626 12.0856ZM48.8914 13.1553H49.5728V12.4169H49.9613L50.368 13.1553H51.1064L50.6141 12.2844C50.8415 12.1898 51.0115 11.9342 51.0115 11.6502C51.0115 11.1485 50.6898 10.9119 50.1407 10.9119H48.8914V13.1553ZM50.3206 11.6596C50.3206 11.8395 50.2074 11.9153 49.9894 11.9153H49.5728V11.4419H49.9894C50.2074 11.4419 50.3206 11.4988 50.3206 11.6596Z"
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_33_32">
          <rect width="52.8237" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;