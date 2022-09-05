import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const SEO = (props) => {
  const { title, description, url, lang } = props;
  return (
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/icons/BrandLogo.svg" />
        <meta name="title" content={title}/>
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/icons/BrandLogo.svg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/icons/BrandLogo.svg" />
    </Head>
  )
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  lang: PropTypes.string,
};

SEO.defaultProps = {
  lang: 'en',
};

export default SEO;