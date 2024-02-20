// モーダルの取得
var modal = document.getElementById("modelSelectModal");

// ボタンの取得
var btn = document.getElementById("modelSelectBtn");

// <span>要素を取得してモーダルを閉じる
var span = document.getElementsByClassName("close")[0];

// ボタンをクリックした時にモーダルを表示するイベントリスナーを追加
btn.addEventListener('click', function() {
  modal.style.display = "block";
});

// <span> (x) をクリックした時にモーダルを閉じるイベントリスナーを追加
span.addEventListener('click', function() {
  modal.style.display = "none";
});

// モーダルの外側をクリックした時にモーダルを閉じるイベントリスナーを追加
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// ページの読み込みが完了した後にイベントリスナーを設定
document.addEventListener('DOMContentLoaded', function() {
    // ボタンをクリックした時にモーダルを表示
    btn.addEventListener('click', function() {
      modal.style.display = "block";
    });
  
    // <span> (x) をクリックした時にモーダルを閉じる
    span.addEventListener('click', function() {
      modal.style.display = "none";
    });
  
    // モーダルの外側をクリックした時にモーダルを閉じる
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });

// 送信ボタンのクリックイベントリスナー
document.getElementById('submitButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;

    // RのAPIを呼び出す
    fetch('http://your-r-api-endpoint.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: userInput }),
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      document.getElementById('result').textContent = data.result;
    })
    .catch(function(error) {
      console.error('エラー:', error);
    });
  });

// フォーム送信処理
function submitForm() {
  var submitButton = document.getElementById('submitButton');
  submitButton.textContent = 'Processing...';
  submitButton.disabled = true;

  // 仮のAPI呼び出しをシミュレート
  setTimeout(function() {
    submitButton.textContent = 'Completed!';
    setTimeout(function() {
      submitButton.textContent = 'Submit';
      submitButton.disabled = false;
    }, 5000);
  }, 2000);
}

// モデル適用ボタンの取得
var applyModelBtn = document.getElementById("applyModel");

// モデル適用ボタンをクリックした時の処理
applyModelBtn.addEventListener('click', function() {
  var selectedModel = document.getElementById("modelOptions").value;
  console.log("選択されたモデル:", selectedModel);
  modal.style.display = "none";
});
