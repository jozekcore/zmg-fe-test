import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import theme from '~/styles/themes/light';
import I18n from '~/config/lib/contexts/i18n';
import GlobalStyles from '~/styles/core/globals';

const handleExitComplete = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 });
  }
};

const MainComponent = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <Component {...pageProps} />
      </AnimatePresence>
    </I18n>
  </ThemeProvider>
);

MainComponent.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.instanceOf(Array)
  ]).isRequired
};

export default MainComponent;
