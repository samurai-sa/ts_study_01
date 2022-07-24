export default function callbackSample() {
  const url = 'https://api.github.com/users/samurai-sa';

  // コールバックで呼び出す非同期処理
  const fetchProfile = () => {
    return fetch(url)
      .then((res) => {
        // レスポンスの body を JSON で読み取った結果を返す
        res
          .json()
          .then((json) => {
            console.log('01', json);
            return json;
          })
          .catch((e) => {
            console.error(e);
          });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const profile = fetchProfile();
  console.log('02', profile);
}
