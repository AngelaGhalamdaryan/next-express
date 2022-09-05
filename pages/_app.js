import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/global.scss';
// components
import Header from '../components/HOC/Header';
import SEO from '../components/HOC/SEO/SEO';
// translate
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from '../i18n';

const getPageNameWithRoute = (pathname) => {
  if (pathname === '/') {
    return 'home';
  }
  return pathname.substring(1);
};

function MyApp({ Component, pageProps }) {
  const [isMobile, setIsMobile ] = useState(true);
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const [page, setPage] = useState(getPageNameWithRoute(pathname));
  const { t } = useTranslation();

  const detectMobileResolutionHandler = () => {
    window.innerWidth > 960 ?   setIsMobile(false) : setIsMobile(true);
  };
  useEffect(() => {
    window.innerWidth > 960 && setIsMobile(false);
    window.addEventListener('resize', detectMobileResolutionHandler);

    return () => {
      window.removeEventListener('resize', detectMobileResolutionHandler);
    }
  }, []);

  useEffect(() => {
    setPage(getPageNameWithRoute(pathname));
    let lng = !!router.locale ? router.locale : i18n.language; 
    i18n.changeLanguage(lng);
  }, [pathname]);

  useEffect(() => {
    router.push({ pathname, query }, asPath, { locale: i18n.language });
  }, [i18n.language])

  return (
    <I18nextProvider i18n={i18n}>
        <Header isMobile={isMobile} />
        <SEO
          title={t(`pages.${page}.title`)}
          description={t(`pages.${page}.description`)}
          url={t(`pages.${page}.url`)}
          lang={i18n.language}
        />
        <Component {...pageProps} isMobile={isMobile} />
    </I18nextProvider>
  )
}

export default MyApp
