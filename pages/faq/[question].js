import React from 'react';
import FAQQuestionScreen from '../../src/components/screens/FAQQuestionScreen';
import websitePageHOC from '../../src/contexts/hoc';

const FAQQuestionPage = ({ category, question }) => (
  <FAQQuestionScreen
    question={question}
    category={category}
  />
);

export const getStaticPaths = async () => {
  const res = await fetch('https://api.jsonbin.io/b/612f4d7797616340d2df036d');
  const faqData = await res.json();

  const slugs = faqData.data.reduce((previous, current) => {
    const slugsByCat = current.questions.map((question) => question.slug);
    return [...previous, ...slugsByCat];
  }, []);

  const paths = slugs.map((slug) => (
    {
      params: { question: slug },
    }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch('https://api.jsonbin.io/b/612f4d7797616340d2df036d');
  const faqData = await res.json();

  if (!faqData) {
    return {
      notFound: true,
    };
  }

  const question = faqData.data.reduce((previous, current) => {
    const found = current.questions.find((q) => q.slug === params.question);
    if (found) {
      return {
        ...previous,
        category: current,
        question: found,
      };
    }
    return previous;
  }, {});

  return {
    props: {
      category: question.category,
      question: question.question,
    },
  };
};

FAQQuestionPage.propTypes = FAQQuestionScreen.propTypes;

export default websitePageHOC(FAQQuestionPage, { pageWrapperProps: {} });
