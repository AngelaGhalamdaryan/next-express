import Head from 'next/head';
import Image from 'next/image'
import Button from '../components/uiDetails/Button';
import Welcome from '../components/Wrapper/Welcome';
import { useTranslation } from 'react-i18next';

const Home = (props) => {
  const { isMobile } = props;
  const { t } = useTranslation();
  return (
    <div>
      <Welcome
        title={t("Welcome To Mantissa LLC")}
        firstBtn={{ children: t("about us"), size: "xm", outline: true, capitalize: true }}
        lastBtn={{ children: t("products"), size: "xm" , capitalize: true }}
      />
    </div>
  )
};

// Home.getInitialProps = async () => {
//   const res = await fetch(`${process.env.URL}/api/users`, { method: "GET" })
//   const data = await res.json()
//   return { data: data }
// }

export default Home;