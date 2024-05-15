import styled from 'styled-components';
import { Answer, ChoiceAnswer, QuestionCheckbox } from '../data/types';
import { useCallback, useMemo, useState } from 'react';

const CardRow = styled.div`
  margin: 15px;
  width: 100%;
  width: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const TextInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #999;
  width 100%;
  flex: 1;
  background-color: transparent;
`;
const CheckboxRow = styled.div`
  width: 100%;
  font-size: 0.9em;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

type CheckboxProps = {
  question: QuestionCheckbox;
  updateAnswer: (answer: Answer) => void;
};

export const CardCheckboxForm = ({ question, updateAnswer }: CheckboxProps) => {
  const initialChoices = useMemo<ChoiceAnswer[]>(() => {
    return question.choices.map((choice) => {
      const text = choice.type === 'TEXT' ? choice.text : '';
      return {
        ...choice,
        text,
        checked: false,
        isOther: choice.type === 'OTHER',
        type: choice.type,
      };
    });
  }, [question]);
  const [choices, setChoices] = useState<ChoiceAnswer[]>(initialChoices);
  const onCheck = useCallback(
    (choice: ChoiceAnswer) => {
      const newChoices = choices.map((c) => {
        if (c.id === choice.id) {
          return { ...c, checked: !c.checked };
        }
        return c;
      });
      setChoices(newChoices);
    },
    [choices],
  );
  const onChangeText = useCallback(
    (choice: ChoiceAnswer, text: string) => {
      const newChoices = choices.map((c) => {
        if (c.id === choice.id) {
          return { ...c, text };
        }
        return c;
      });
      setChoices(newChoices);
    },
    [choices],
  );

  return (
    <>
      <CardRow>
        {choices.map((choice) => {
          return (
            <CheckboxRow key={choice.id}>
              <Label onBlur={() => updateAnswer({ choiced: choices })}>
                <input type='checkbox' checked={choice.checked} onChange={() => onCheck(choice)} />
                {choice.isOther ? (
                  <TextInput
                    type='text'
                    value={choice.text}
                    onChange={(e) => {
                      onChangeText(choice, e.target.value);
                    }}
                    disabled={!choice.checked}
                    placeholder='その他'
                  />
                ) : (
                  choice.text
                )}
              </Label>
            </CheckboxRow>
          );
        })}
      </CardRow>
    </>
  );
};
