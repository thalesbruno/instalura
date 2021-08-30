import HomeScreen from '../src/components/screens/HomeScreen';
import websitePageHOC from '../src/contexts/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    pageBoxProps: {
      justifyContent: 'space-between',
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
