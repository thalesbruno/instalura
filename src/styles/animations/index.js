import { createGlobalStyle } from 'styled-components';
import Flash from './Flash';
import Pulse from './Pulse';

const Animations = createGlobalStyle`
  ${Pulse}
  ${Flash}
`;

export default Animations;
