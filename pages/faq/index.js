import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

// eslint-disable-next-line react/jsx-props-no-spreading
const FAQPage = (props) => (<FAQScreen {...props} />);

export const getStaticProps = async () => {
  const response = await fetch('https://instalura-api.vercel.app/api/content/faq');
  const faqData = await response.json();

  if (!faqData) {
    return {
      notFound: true,
    };
  }

  const faqCategories = faqData.data;

  return {
    props: { faqCategories },
  };
};

export default FAQPage;
