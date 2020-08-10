// const size = {
//     mobileS: "320px",
//     mobileM: "375px",
//     mobileL: "425px",
//     tablet: "768px",
//     laptop: "1024px",
//     laptopL: "1440px",
//     desktop: "2560px",
// };

// export default {
//     mobileS: `(max-width: ${size.mobileS})`,
//     mobileM: `(max-width: ${size.mobileM})`,
//     mobileL: `(max-width: ${size.mobileL})`,
//     tablet: `(max-width: ${size.tablet})`,
//     laptop: `(max-width: ${size.laptop})`,
//     laptopL: `(max-width: ${size.laptopL})`,
//     desktop: `(max-width: ${size.desktop})`,
//     desktopL: `(max-width: ${size.desktop})`,
// };

const size = {
    // giant: "1170px",
    giant: "1400px",
    // desktop: "992px",
    desktop: "1100px",
    tablet: "768px",
    phone: "500px",
};

export default {
    giant: `(max-width: ${size.giant})`,
    desktop: `(max-width: ${size.desktop})`,
    tablet: `(max-width: ${size.tablet})`,
    phone: `(max-width: ${size.phone})`,
};

// import { css } from "styled-components";

// // iterate through the sizes and create a media template
// export const media = Object.keys(sizes).reduce((accumulator, label) => {
//     accumulator[label] = (...args) => css`
//         @media (max-width: ${sizes[label]}px) {
//             ${css(...args)}
//         }
//     `;
//     return accumulator;
// }, {});
