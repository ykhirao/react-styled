import styled, { css } from 'styled-components';
import { Question } from '../data/types';
import { ButtonCommonCss } from './Atoms';
import { Link } from '@styled-icons/bootstrap/Link';
import { useSameQuestion } from './useSelectedQuestion';

type WapperProps = {
  question: Question;
  onSelect: () => void;
  children: React.ReactNode;
};
type Selected = {
  $selected: boolean;
};
const Card = styled.div`
  width: 1040px;
  @media screen and (max-width: 1040px) {
    width: 100%;
  }
  margin: 0px auto;
  min-height: 200px;
  background-color: #f8f8f8;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  text-align: left;
`;
const SelectedCard = styled(Card)<Selected>`
  ${({ $selected }) => {
    const color = $selected ? '#FFF' : '#EEE';
    return css`
      background-color: ${color};
      textarea {
        background-color: ${color};
      }
    `;
  }}
`;
const CardRow = styled.div`
  margin: 15px;
  width: 100%;
`;
const TitleRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  font-size: 0.8em;
  color: #666;
`;
const ShareRow = styled.div`
  display: flex;
  gap: 4px;
  font-size: 0.8em;
  align-items: center;
  color: green;

  button {
    ${ButtonCommonCss}
    font-weight: bold;
    color: green;
    cursor: pointer;
  }
`;
const Hr = styled.hr`
  border: 0.5px solid #ccc;
`;

export const CardFormWrapper = ({ question, onSelect, children }: WapperProps) => {
  const selected = useSameQuestion(question);

  return (
    <>
      <SelectedCard key={question.id} onClick={() => onSelect()} $selected={selected}>
        {selected && (
          <>
            <CardRow>
              <ShareRow>
                <Link size={15} />
                <button type='button'>共有リンクを発行</button>
              </ShareRow>
            </CardRow>
            <Hr />
          </>
        )}
        <CardRow>
          <TitleRow>
            <span>{question.questionNumber}</span>
            <span>{question.questionTitle}</span>
          </TitleRow>
        </CardRow>
        <CardRow>{question.questionSentence}</CardRow>
        {children}
        <CardRow></CardRow>
      </SelectedCard>
    </>
  );
};
