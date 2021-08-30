import FAQScreen from '../src/components/screens/FAQScreen';
import websitePageHOC from '../src/contexts/hoc';

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

export default websitePageHOC(FAQScreen, {
  pageWrapperProps: {},
});
