import ReactGA from 'react-ga';

const analytics = () => {
  ReactGA.initialize('UA-171512295-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
};

export default analytics;
