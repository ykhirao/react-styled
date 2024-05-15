import styled, { css } from 'styled-components';

type Props = {
  caption: string;
  children: JSX.Element;
  selected: boolean;
  errored: boolean;
};
type Selected = {
  $selected: boolean;
  $errored: boolean;
};

const CaptionContainer = styled.div`
  position: relative;
  width: 100%;
`;
const CaptionText = styled.div`
  position: absolute;
  top: 0;
  left: -0.5em;

  font-size: 0.7em;
  padding: 0 0.51em;
  margin: 0;
  transform: translateY(-50%) translateX(1em);
`;
const CaptionTextSelected = styled(CaptionText)<Selected>`
  ${({ $selected }) => {
    return css`
      background-color: ${$selected ? '#FFF' : '#EEE'};
    `;
  }}
  ${({ $errored }) =>
    $errored &&
    css`
      color: red;
    `};
`;

export const CaptionBox = ({ caption, children, selected, errored }: Props) => {
  return (
    <>
      <CaptionContainer>
        <CaptionTextSelected $selected={selected} $errored={errored}>
          {caption}
        </CaptionTextSelected>
        {children}
      </CaptionContainer>
    </>
  );
};
