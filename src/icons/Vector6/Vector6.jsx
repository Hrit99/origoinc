/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Vector6 = ({ color = "#FAFAFA", className }) => {
  return (
    <svg
      className={`vector-6 ${className}`}
      fill="none"
      height="58"
      viewBox="0 0 59 58"
      width="59"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M29.5001 58C13.5095 58 0.5 44.9905 0.5 29.0001C0.5 13.0095 13.5095 0 29.5001 0C45.4908 0 58.5 13.0095 58.5 29.0001C58.5 44.9905 45.4908 58 29.5001 58ZM29.5001 2.79743C15.052 2.79743 3.29743 14.552 3.29743 29.0001C3.29743 43.448 15.052 55.2026 29.5001 55.2026C43.948 55.2026 55.7026 43.448 55.7026 29.0001C55.7026 14.552 43.948 2.79743 29.5001 2.79743ZM29.5001 52.6762C16.4451 52.6762 5.82407 42.0552 5.82407 29.0001C5.82407 15.9451 16.4451 5.32407 29.5001 5.32407C42.5552 5.32407 53.1762 15.9451 53.1762 29.0001C53.1762 42.0552 42.5552 52.6762 29.5001 52.6762ZM29.5001 8.1215C17.9876 8.1215 8.6215 17.4876 8.6215 29.0001C8.6215 40.5127 17.9876 49.8788 29.5001 49.8788C41.0124 49.8788 50.3788 40.5127 50.3788 29.0001C50.3788 17.4876 41.0124 8.1215 29.5001 8.1215ZM29.5001 47.0805C19.5307 47.0805 11.4198 38.9696 11.4198 29.0001C11.4198 19.0307 19.5307 10.9198 29.5001 10.9198C39.4696 10.9198 47.5805 19.0307 47.5805 29.0001C47.5805 38.9696 39.4696 47.0805 29.5001 47.0805ZM29.5001 13.7172C21.0729 13.7172 14.2172 20.5732 14.2172 29.0001C14.2172 37.4271 21.0732 44.2831 29.5001 44.2831C37.9271 44.2831 44.7831 37.4271 44.7831 29.0001C44.7831 20.5732 37.9271 13.7172 29.5001 13.7172ZM35.3834 38.6734C35.1566 38.6735 34.9332 38.6184 34.7325 38.5128L29.5001 35.7618L24.2675 38.5128C24.0365 38.6343 23.7761 38.6887 23.5157 38.6699C23.2554 38.6511 23.0055 38.5598 22.7943 38.4063C22.5831 38.2529 22.4191 38.0434 22.3208 37.8016C22.2225 37.5598 22.1938 37.2953 22.238 37.038L23.2372 31.2118L19.0042 27.0853C18.8172 26.9031 18.685 26.6723 18.6224 26.4189C18.5598 26.1655 18.5694 25.8996 18.6501 25.6514C18.7308 25.4031 18.8793 25.1824 19.079 25.0142C19.2786 24.846 19.5213 24.7371 19.7796 24.6996L25.6296 23.8498L28.2461 18.5487C28.3616 18.3146 28.5403 18.1176 28.7619 17.9798C28.9835 17.8421 29.2393 17.7691 29.5003 17.7691C29.7613 17.7691 30.017 17.8421 30.2387 17.9798C30.4603 18.1176 30.639 18.3146 30.7545 18.5487L33.3709 23.8498L39.2209 24.6996C39.4793 24.737 39.7221 24.8459 39.9217 25.0141C40.1214 25.1823 40.2699 25.4031 40.3506 25.6514C40.4313 25.8996 40.4408 26.1655 40.3782 26.419C40.3155 26.6724 40.1832 26.9032 39.9961 27.0853L35.7628 31.2118L36.762 37.038C36.7964 37.2388 36.7866 37.4446 36.7332 37.6412C36.6798 37.8378 36.5841 38.0203 36.4528 38.1761C36.3215 38.3318 36.1578 38.457 35.9731 38.5429C35.7884 38.6288 35.5871 38.6733 35.3834 38.6734ZM22.9863 27.0604L25.7166 29.7222C25.879 29.8804 26.0004 30.0758 26.0705 30.2914C26.1406 30.5071 26.1572 30.7365 26.1189 30.96L25.4744 34.7181L28.8492 32.9437C29.0499 32.8381 29.2733 32.783 29.5001 32.783C29.7269 32.783 29.9504 32.8381 30.1511 32.9437L33.5256 34.7181L32.8811 30.96C32.8428 30.7365 32.8594 30.5071 32.9295 30.2914C32.9995 30.0758 33.121 29.8804 33.2834 29.7222L36.0137 27.0604L32.2408 26.5124C32.0164 26.4798 31.8032 26.3931 31.6197 26.2598C31.4363 26.1265 31.2879 25.9506 31.1876 25.7473L29.5001 22.328L27.8125 25.7473C27.7121 25.9507 27.5638 26.1266 27.3803 26.2599C27.1968 26.3932 26.9837 26.4799 26.7592 26.5124L22.9863 27.0604Z"
        fill={color}
      />
    </svg>
  );
};

Vector6.propTypes = {
  color: PropTypes.string,
};