import '../styles/globals.scss';
import { AppProps } from 'next/app';
import nprogress from 'nprogress';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const handleRouteChangeStart = () => {
    nprogress.start();
  };

  const handleRouteChangeComplete = () => {
    nprogress.done();
  };

  const handleRouteChangeError = () => {
    nprogress.done();
  };

  useEffect(() => {
    history.scrollRestoration = 'manual'; //more testing is required

    router.events.on('routeChangeStart', handleRouteChangeStart);

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    router.events.on('routeChangeError', handleRouteChangeError);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);

      router.events.off('routeChangeComplete', handleRouteChangeComplete);

      router.events.off('routeChangeError', handleRouteChangeError);
    };
  }, []);

  return <Component {...pageProps} />;
};

export default App;
