import styled from 'styled-components';
import { useCallback, useState } from 'react';

import { question1 } from './data/questions1';
import { Answer, Question } from './data/types';
import { SimpleButton } from './components/Atoms';
import { API } from './API';
import { CardFormWrapper } from './components/CardFormWrapper';
import { CardFormSwither } from './components/CardForms';
import { SelectedQuestionProvider } from './components/useSelectedQuestion';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  text-align: center;
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  max-width: 1200px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  margin-bottom: 24px;
  margin: 0 auto;
`;
const Header = styled.header`
  width: 1200px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  height: 72px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 24px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 24px;
`;
const SimpleButtonMargin = styled.div`
  margin-right: 24px;
  margin: 20px;
`;
const CardGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 30px;
`;

function App() {
  const [questions, setQuestions] = useState<Question[]>(question1);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const updateAnswer = useCallback(
    (oldQuestion: Question) => {
      return (answer: Answer) => {
        const newQuestions = questions.map((q) => {
          // FIXME: 型パズル
          return q.id !== oldQuestion.id ? q : ({ ...oldQuestion, answer } as Question);
        });
        setQuestions(newQuestions);
      };
    },
    [questions],
  );
  const handleOnSubmit = useCallback(() => {
    API.submit(questions);
  }, [questions]);

  return (
    <SelectedQuestionProvider question={selectedQuestion}>
      <Page>
        <Container>
          <Header>
            <SimpleButtonMargin>
              <SimpleButton color='green' text='回答を保存' onClick={handleOnSubmit} />
            </SimpleButtonMargin>
          </Header>
          <CardGap>
            {questions.map((question) => (
              <CardFormWrapper key={question.id} onSelect={() => setSelectedQuestion(question)} question={question}>
                <CardFormSwither question={question} updateAnswer={updateAnswer(question)} />
              </CardFormWrapper>
            ))}
          </CardGap>
        </Container>
      </Page>
    </SelectedQuestionProvider>
  );
}

export default App;
