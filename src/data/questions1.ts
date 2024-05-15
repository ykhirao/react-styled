import { QAFormat, Question } from './types';

export const question1: Question[] = [
  {
    id: '6c49ce03-b165-47f3-b7f6-03856291299b',
    questionNumber: 'Q001',
    questionTitle: '◎回答必須',
    questionSentence: '質問の選択肢を選んでください',
    qaFormat: QAFormat.CHECKBOX,
    // CHECKME: CHECKBOXは複数回答可かどうか
    choices: [
      { id: '1', type: 'TEXT', text: '選択肢1' },
      { id: '2', type: 'TEXT', text: '選択肢2' },
      { id: '3', type: 'OTHER' },
    ],
    answer: {
      choiced: [],
    },
  },
  {
    id: '6a06a83d-7ff9-47bd-91d4-1173097f4e35',
    questionNumber: 'S8',
    // CHECKME: 回答必須フラグをつける必要はないかどうか
    questionTitle: '◎回答必須',
    questionSentence: '貴社の直近1年間の人事・労務管理等に関する集計期間の年月をご記入ください。',
    qaFormat: QAFormat.TEXT,
    answer: {
      textFormat: null,
    },
  },
  {
    id: '3a2091c3-a649-48bf-99d3-09ed9ef8087f',
    questionNumber: 'S7',
    questionTitle: '◎回答必須',
    questionSentence: '貴社の直近の会計年度末の年月をご記入ください。',
    qaFormat: QAFormat.TEXT,
    answer: {
      textFormat: null,
    },
  },
  {
    id: '387c4a7a-faf9-4626-b20c-0869fc10d754',
    questionNumber: 'S9SF1',
    questionTitle: '★「なでしこ銘柄」「準なでしこ」スクリーニング要件です。',
    questionSentence:
      '（S9で「1. 行動計画の策定・周知・公表・届出を行っている」とお答えの場合）\nその計画を確認できるURLをご記入ください。',
    qaFormat: QAFormat.TEXT,
    answer: {
      textFormat: null,
    },
  },
  {
    id: '14cd0682-47a0-4da6-84bb-ef1c4e9e6641',
    questionNumber: 'S10SF1_2',
    questionTitle: '★「なでしこ銘柄」「準なでしこ」スクリーニング要件です。',
    questionSentence: '（S10SF1で「2. いいえ、連結グループ内のその他企業です」とお答えの場合）\n企業名',
    qaFormat: QAFormat.TEXT,
    answer: {
      textFormat: null,
    },
  },
  {
    id: '060fbcc5-c8ee-4447-8cad-d598f05b1342',
    questionNumber: 'S6SF1',
    questionTitle: '◎回答必須',
    questionSentence: 'ご回答の範囲に含まれる企業名を全て、具体的に正式名称でご記入ください。',
    qaFormat: QAFormat.TEXT,
    answer: {
      textFormat: null,
    },
  },
];
