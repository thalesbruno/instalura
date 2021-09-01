import FAQScreen from '../../src/components/screens/FAQScreen';
import websitePageHOC from '../../src/contexts/hoc';

export default websitePageHOC(FAQScreen, {
  pageWrapperProps: {},
});

export const getStaticProps = async () => {
  const response = await fetch('https://api.jsonbin.io/b/612f4d7797616340d2df036d');
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
