// 追加ボタ押下後の処理
const onClickAdd = () => {
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  const div = document.createElement("div");
  div.className = "listRow";

  createImcompleteItem(div, inputText);
};

// リストからアイテムを削除
const deleteFromList = (listName, buttonName) => {
  const deleteTarget = buttonName.parentNode;
  console.log(deleteTarget);
  deleteTarget.remove();
};

// アイテムのテキストを取得
const getText = (target) => {
  const text = target.parentNode.firstElementChild.innerText;
  return text;
};

// 完了リストに追加
const createCompleteItem = (target, text) => {
  deleteFromList("imcompleteList", target);

  const backButton = document.createElement("button");
  backButton.innerText = "戻す";

  backButton.addEventListener("click", () => {
    alert();
  });
};

// 未完了リストに追加
const createImcompleteItem = (target, text) => {
  const li = document.createElement("li");
  li.innerText = text;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    const text = getText(completeButton);
    console.log(text);

    deleteFromList("imcompleteList", completeButton);
    createCompleteItem(target, text);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  target.appendChild(li);
  target.appendChild(completeButton);
  target.appendChild(deleteButton);

  document.getElementById("imcompleteList").appendChild(target);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());
