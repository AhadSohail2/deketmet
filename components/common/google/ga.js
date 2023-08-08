import ReactGA from 'react-ga';

export const initGA = () => {
    ReactGA.initialize('G-EXJNX1X5JW'); // Replace with your actual Tracking ID
};

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
};
