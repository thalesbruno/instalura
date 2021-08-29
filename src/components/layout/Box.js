import styled from 'styled-components';
import propToStyle from '../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('alignItems')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('backgroundImage')}
  ${propToStyle('backgroundPosition')}
  ${propToStyle('backgroundRepeat')}
  ${propToStyle('boxShadow')}
  ${propToStyle('display')}
  ${propToStyle('flex')}
  ${propToStyle('flexDirection')}
  ${propToStyle('flexWrap')}
  ${propToStyle('justifyContent')}
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  ${propToStyle('padding')}
  ${propToStyle('position')}
  ${propToStyle('right')}
  ${propToStyle('top')}
  ${propToStyle('width')}
  ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};

`;

export default Box;
