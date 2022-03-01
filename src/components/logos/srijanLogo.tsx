import React from "react";

interface SrijanLogoInterface {
  className: string;
}

function SrijanLogo({ className }: SrijanLogoInterface) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="181"
      height="59"
      fill="none"
      viewBox="0 0 181 59"
    >
      <path
        fill="#FD8353"
        fillRule="evenodd"
        d="M157.758.138c-1.624.414-3.216 1.685-3.961 3.164-.53 1.051-.904 2.481-.684 2.618.103.065.803.251 1.555.415.752.164 1.458.332 1.568.374.122.047.245-.176.317-.574.183-1.014.734-2.064 1.294-2.468.782-.562 2.071-.61 2.812-.106 1.236.842 1.462 2.3.59 3.803-.577.994-3.44 3.664-6.054 5.643l-2.185 1.655-.048 1.737-.048 1.737h12.956l.012-.467c.006-.257.065-1.06.131-1.783l.118-1.316h-8.177l1.983-1.345c4.784-3.244 6.129-5.093 5.89-8.101-.169-2.12-1.478-3.902-3.417-4.647-1.12-.431-3.586-.61-4.652-.339zm14.289 0c-1.624.414-3.216 1.685-3.961 3.164-.53 1.051-.904 2.481-.684 2.618.103.065.803.251 1.555.415.752.164 1.458.332 1.568.374.122.047.245-.176.317-.574.183-1.014.733-2.064 1.294-2.468.781-.562 2.07-.61 2.812-.106 1.236.842 1.462 2.3.59 3.803-.577.994-3.441 3.664-6.054 5.643l-2.185 1.655-.048 1.737-.048 1.737h12.956l.012-.467c.006-.257.065-1.06.13-1.783l.119-1.316h-8.177l1.983-1.345c4.784-3.244 6.129-5.093 5.89-8.101-.169-2.12-1.478-3.902-3.417-4.647-1.12-.431-3.586-.61-4.652-.339zM1.085 2.833C.807 3.118.791 4.67.791 30.57c0 22.876.038 27.467.228 27.626.167.14 10.074.18 37.445.148l37.218-.043.044-4.087.046-4.088-32.91.05c-18.1.028-33.042.009-33.204-.042-.278-.087-.294-1.17-.294-19.61V11.004l24.546-.043 24.546-.043.04-4.203.039-4.203-28.578.01c-27.137.01-28.593.025-28.872.311zm88.084.205c-.269.298-.293.692-.252 4.105l.045 3.775h61.694V2.767l-30.595-.029c-30.07-.028-30.6-.023-30.892.3zm-24.329.028c-.323.109-.977.583-1.455 1.053-.95.938-1.233 1.64-1.235 3.072-.002 1.78 1.427 3.602 3.137 4.001 3.13.73 5.689-1.62 5.258-4.83-.164-1.215-.834-2.237-1.91-2.909-.687-.429-1.017-.519-2.015-.548-.656-.02-1.457.053-1.78.161zm15.157 0c-.307.1-.927.516-1.377.924-1.238 1.125-1.644 2.83-1.075 4.517.382 1.13 1.79 2.404 2.934 2.651 1.818.394 2.756.123 4.047-1.173.846-.848.962-1.052 1.118-1.96.38-2.208-.362-3.82-2.179-4.734-.952-.48-2.39-.572-3.468-.224zM53.503 17.316c-1.289.249-3.148 1.2-4.047 2.07-.447.433-.853.746-.902.697-.05-.05-.093-.488-.097-.976l-.008-.885-3.153-.046c-2.69-.04-3.213-.006-3.573.232l-.42.279.042 13.608.043 13.609 3.35.046c1.843.025 3.408-.013 3.478-.085.07-.072.209-3.646.307-7.943.193-8.438.36-10.164 1.127-11.718.51-1.036 1.256-1.843 2.061-2.232.945-.457 3.026-.411 4.386.096.601.224 1.18.475 1.287.557.127.098.307-.014.523-.325.541-.777 1.934-4.497 1.954-5.218.016-.58-.057-.72-.555-1.063-1.218-.838-3.605-1.127-5.803-.703zm-30.522.072c-2.89.516-5.845 2.477-6.793 4.509-1.282 2.749-.907 6.874.8 8.789.71.798 4.388 2.984 6.291 3.74 2.326.924 4.158 1.949 4.947 2.767.71.737.806.924.806 1.569 0 1.437-1.787 2.641-3.92 2.641-1.988 0-3.892-1.276-5.17-3.466-.197-.335-.39-.61-.432-.61-.041 0-.62.302-1.286.67-.666.37-1.85 1.012-2.63 1.43-1.67.89-1.87 1.213-1.323 2.123 1.323 2.2 3.31 3.765 6.207 4.887 1.204.467 1.333.48 4.268.467 5.192-.025 7.519-.72 9.43-2.815.888-.972 1.54-2.39 1.848-4.01.24-1.272.222-1.855-.12-3.77-.609-3.399-2.292-4.872-8.418-7.367-2.846-1.159-3.186-1.335-4.002-2.08-.716-.653-1.096-1.542-.917-2.142.147-.49.87-1.279 1.456-1.588.624-.33 2.484-.305 3.367.044.962.38 1.877 1.12 2.334 1.888.207.347.396.658.42.69.025.034.674-.38 1.442-.918.768-.538 1.737-1.209 2.153-1.49.416-.28.922-.658 1.125-.84l.368-.333-.43-.702c-1.019-1.665-2.438-2.786-4.486-3.543-1.276-.471-1.554-.51-4.141-.56-1.526-.03-2.963-.02-3.194.02zm77.916.065c-1.307.283-2.023.5-2.605.792-2.475 1.24-4.497 3.243-5.602 5.55-.944 1.973-1.219 3.087-1.712 6.948-.346 2.708.144 6.544 1.156 9.05 1.47 3.644 3.946 5.864 7.587 6.804 1.497.387 5.599.44 6.976.091 1.259-.319 2.751-1.079 3.894-1.984.524-.414 1.003-.753 1.064-.753.062 0 .062.23.001.51a2.86 2.86 0 000 1.018l.111.51h7.204l-.043-13.884-.043-13.883h-7.229l.057 1.146c.032.63-.011 1.147-.094 1.147-.084 0-.373-.233-.642-.517-.746-.786-1.905-1.475-3.461-2.055-1.268-.472-1.632-.53-3.677-.58-1.248-.03-2.572.01-2.942.09zm39.402.08c-.041.042-.652.148-1.357.236-1.656.208-3.093.92-4.561 2.258-.618.563-1.13.96-1.139.883a51.78 51.78 0 01-.042-1.414l-.026-1.274-3.065-.046c-2.887-.044-3.083-.027-3.405.298-.337.34-.34.478-.298 13.887l.043 13.543 3.489.046 3.488.046.001-3.952c.001-5.583.163-11.714.349-13.19.128-1.025.274-1.428.793-2.196 1.142-1.69 3.14-2.734 5.497-2.874 2.17-.129 3.484.435 4.703 2.017.54.701.623.946.77 2.293.091.828.221 5.175.288 9.658l.123 8.152h7.204l.027-9.001c.028-9.719-.079-11.508-.812-13.55-.862-2.4-1.865-3.64-3.753-4.646-1.703-.907-3.387-1.25-6.143-1.25-1.155 0-2.133.035-2.174.076zm-77.015.923c-.275.284-.294 1.181-.294 13.918v13.615H70.052l-.043-13.884-.043-13.883-3.194-.035c-2.873-.031-3.224-.004-3.488.27zm15.13-.083c-.276.211-.295 1.322-.315 18.378-.013 9.985-.013 19.014-.001 20.064l.021 1.91h6.871l.057-1.91c.086-2.871-.043-38.383-.14-38.541-.046-.075-1.46-.135-3.141-.132-2.273.004-3.134.064-3.352.23zm82.024 2.591c-.064.064-.117 6.58-.118 14.481-.002 7.9-.066 14.466-.143 14.59-.116.184-6.452.215-36.014.18-28.204-.035-35.955 0-36.255.165-.381.21-.381.21-.336 4.05l.045 3.842 32.192-.018c17.706-.01 35.956-.022 40.556-.027l8.364-.01-.043-18.64-.042-18.638-4.046-.045c-2.225-.025-4.097.007-4.16.07zm-53.405 3.23c2.229.955 3.468 2.269 4.41 4.678.291.742.352 1.268.353 3.021 0 1.878-.053 2.28-.464 3.482-.592 1.734-.873 2.187-2.082 3.352-1.464 1.411-2.276 1.744-4.234 1.735-2.908-.012-4.505-.885-5.551-3.031-1.78-3.651-1.5-8.7.626-11.29 1.581-1.93 4.848-2.845 6.942-1.948z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SrijanLogo;