import { Answer, Question } from '../data/types';
import { CardCheckboxForm } from './CardCheckboxForm';
import { CardTextForm } from './CardTextForm';

type Props = {
  question: Question;
  updateAnswer: (answer: Answer) => void;
};

export const CardFormSwither = ({ question, updateAnswer }: Props) => {
  if (question.qaFormat === 'TEXT') {
    return <CardTextForm question={question} updateAnswer={updateAnswer} />;
  }
  if (question.qaFormat === 'CHECKBOX') {
    return <CardCheckboxForm question={question} updateAnswer={updateAnswer} />;
  }
  return null;
};
