import styled, { css } from 'styled-components';

export const ButtonCommonCss = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  &:hover {
    transition: filter 0.1s ease;
    filter: brightness(1.3);
  }
`;

const Button = styled.button`
  ${ButtonCommonCss}
  font-size: 1em;
  font-weight: bold;
  color: white;
  background: #35836d;
  cursor: pointer;
  height: 40px;
  padding: 8px 16px;
  border-radius: 5px;
  ${({ color }) => css`
    border-color: ${color};
  `};


`;

type SimpleButtonProps = {
  text: string;
  color?: string;
  style?: React.CSSProperties;
  onClick: () => void;
};

export const SimpleButton = ({ text, color, style, onClick }: SimpleButtonProps) => {
  const c = color === 'green' ? '#35836D' : 'blue';
  return (
    <Button color={c} style={style} onClick={() => onClick()}>
      {text}
    </Button>
  );
};
