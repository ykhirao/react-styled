import styled, { css } from 'styled-components';
import { Answer, QuestionText } from '../data/types';
import { useMemo, useState } from 'react';
import { countText } from '../utils';
import { CaptionBox } from './Caption';
import { useSameQuestion } from './useSelectedQuestion';

type TextProps = {
  question: QuestionText;
  updateAnswer: (answer: Answer) => void;
};

type Error = {
  $errored: boolean;
};
const CardRow = styled.div`
  margin: 15px;
  width: 100%;
  width: calc(100% - 30px);
`;
const RowWidthCss = css`
  width: calc(100% - 30px);
`;
const TextArea = styled.textarea<Error>`
  ${RowWidthCss}
  resize: vertical;
  min-height: 4em;
  max-height: 16em;
  padding: 10px;
`;
const TextAreaWithError = styled(TextArea)<Error>`
  ${({ $errored }) =>
    $errored &&
    css`
      border-color: red;
    `};
`;
const StringLengthRow = styled.div<Error>`
  ${RowWidthCss}
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
`;
const StringLengthRowWithError = styled(StringLengthRow)<Error>`
  ${({ $errored }) =>
    $errored &&
    css`
      color: red;
    `};
`;
const MAX_TEXT_LENGTH = 2000;

export const CardTextForm = ({ question, updateAnswer }: TextProps) => {
  const [changedText, setChangedText] = useState<string>(question.answer?.textFormat || '');
  const textLength = useMemo(() => countText(changedText), [changedText]);
  const isTextLengthError = textLength > MAX_TEXT_LENGTH;
  const selected = useSameQuestion(question);

  return (
    <>
      <CardRow>
        <CaptionBox caption='回答を入力してください' selected={selected} errored={isTextLengthError}>
          <TextAreaWithError
            value={changedText || ''}
            onChange={(e) => setChangedText(e.target.value)}
            onBlur={() => updateAnswer({ textFormat: changedText })}
            rows={4}
            $errored={isTextLengthError}
          />
        </CaptionBox>
        <StringLengthRowWithError $errored={isTextLengthError}>
          <span>{isTextLengthError && `${MAX_TEXT_LENGTH}文字以下にしてください`}</span>
          <span>
            {textLength} / {MAX_TEXT_LENGTH}文字
          </span>
        </StringLengthRowWithError>
      </CardRow>
    </>
  );
};
