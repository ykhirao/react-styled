import { createContext, ReactNode, useContext } from 'react';
import { Question } from '../data/types';

type SelectedQuestionContext = {
  question: Question | null;
};
const InvoiceTableDataCountContext = createContext<SelectedQuestionContext | undefined>(undefined);

type Props = {
  children: ReactNode;
  question: Question | null;
};
const SelectedQuestionProvider = ({ children, question }: Props) => {
  return (
    <InvoiceTableDataCountContext.Provider value={{ question }}> {children} </InvoiceTableDataCountContext.Provider>
  );
};

// hooks
const useSelectedQuestionContext = (): SelectedQuestionContext => {
  const context = useContext(InvoiceTableDataCountContext);
  if (context === undefined) {
    throw new Error('useSelectedQuestion must be used within a InvoiceTableDataCountProvider');
  }
  return context;
};

const useSelectedQuestion = (): Question | null => {
  const context = useSelectedQuestionContext();
  return context.question;
};
const useSameQuestion = (question: Question): boolean => {
  const context = useSelectedQuestionContext();
  return context.question?.id === question.id;
};

export { SelectedQuestionProvider, useSelectedQuestionContext, useSelectedQuestion, useSameQuestion };
