export type Question = QuestionText | QuestionCheckbox;
type QuestionBase = {
  id: string;
  questionNumber?: string | null; // 質問番号
  questionTitle?: string | null; // 質問タイトル
  questionSentence: string; // 質問文
  qaFormat: QAFormat; // 質問フォーマット
  answer?: Answer; // 回答
};
export type QuestionText = QuestionBase & {
  qaFormat: QAFormat.TEXT;
  answer?: AnswerText;
};
export type QuestionCheckbox = QuestionBase & {
  qaFormat: QAFormat.CHECKBOX;
  answer?: AnswerChoice;
  choices: Choice[]; // 選択肢
};
export type Choice = ChoiceText | ChoiceOther;
type BaseId = { id: string };
type ChoiceText = BaseId & {
  type: 'TEXT';
  text: string;
};
type ChoiceOther = BaseId & {
  type: 'OTHER';
};
export type Answer = AnswerText | AnswerChoice;
export type AnswerText = {
  textFormat?: string | null; // テキストフォーマットの回答
};
export type AnswerChoice = {
  choiced: Array<ChoiceAnswer & { checked: boolean }>;
};
export type ChoiceAnswer = BaseId & {
  checked: boolean;
  text: string;
  isOther: boolean;
};

export enum QAFormat {
  TEXT = 'TEXT', // フリーテキスト
  DATE = 'DATE', // 日付(yyyyMMdd)
  DATE_YYYY_MM = 'DATE_YYYY_MM', // 月(yyyyMM)
  DATE_YYYY = 'DATE_YYYY', // 年(yyyy)
  NUMBER = 'NUMBER', // 数値
  RADIO = 'RADIO', // ラジオボタン
  CHECKBOX = 'CHECKBOX', // チェックボックス
  GRID = 'GRID', // グリッド
  FILE = 'FILE', // ファイル
}
