import styled from 'styled-components';
import propToStyle from '../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('display')}
  ${propToStyle('flexDirection')}
  ${propToStyle('justifyContent')}
  ${propToStyle('flex')}
  ${propToStyle('flexWrap')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('width')}
  ${propToStyle('boxShadow')}
  ${propToStyle('padding')}
  ${propToStyle('alignItems')}
  ${propToStyle('position')}
  ${propToStyle('top')}
  ${propToStyle('right')}
`;

export default Box;
