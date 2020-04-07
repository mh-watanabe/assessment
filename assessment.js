/*comment
*/
const userNameInput = document.getElementById('user_name')
const assessmentButton = document.getElementById('assessment')
const getResultarea = document.getElementById('result_area')
const getTweetarea = document.getElementById('tweet_area')

function removeALLChildren ( devAria ) {
    while (devAria.firstChild) { // 子どもの要素があるかぎり削除
        devAria.removeChild(devAria.firstChild);
    }
}


'use strict';
const answer = [
'{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
'{userName}のいいところは優しさです。{userName}の優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
]

userNameInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
      // TODO ボタンのonclick() 処理を呼び出す
      assessmentButton.onclick();
    }
}

assessmentButton.onclick = () => {
    const userName = userNameInput.value ;
    removeALLChildren(getResultarea);
    const header = document.createElement('h3');
    header.innerText = 'result' ;
    getResultarea.appendChild(header); 

    const paragraph = document.createElement('p');
    let result = assessment(userName);
    paragraph.innerText = result;
    getResultarea.appendChild(paragraph); 

//Tweet
    removeALLChildren(getTweetarea);
    const Tweet_test = document.createElement('a');
    const Tweet_url = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponent('あなたのいいところ') + '&ref_src=twsrc%5Etfw' ;
    Tweet_test.setAttribute('href',Tweet_url);
    Tweet_test.setAttribute('class','twitter-hashtag-button');
    Tweet_test.setAttribute('data-text',result);
    Tweet_test.innerText = 'Tweet #あなたのいいところ';

    getTweetarea.appendChild(Tweet_test);

    const Tweet_script = document.createElement("script") 
    Tweet_script.setAttribute('src','https://platform.twitter.com/widgets.js');
    getTweetarea.appendChild(Tweet_script);
}

function assessment ( userName ) {
    let sum_char_code = 0 ;
    for (let i = 0 ; i < userName.length ; i++ ) {
        sum_char_code = sum_char_code +  userName.charCodeAt(i);
    }

    const index = sum_char_code % answer.length;
    let result = answer[index];
    result = result.replace(/\{userName\}/g, userName);
    return result ;
}

// テストコード
console.assert(
    assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
  console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  );
