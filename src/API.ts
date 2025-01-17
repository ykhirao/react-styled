export const API = {
  /**
   * 回答送信処理を呼び出すダミーメソッドです
   * この課題ではサーバーとの通信を実装しません。
   * */
  submit: async (args: any /* 必要があれば型や変数名を変更してください */) => {
    // 内部の送信処理を書く必要はありません
    if (process.env.NODE_ENV === 'development') {
      console.info('## API.submit');
      console.dir(args);
    }
  },
};
