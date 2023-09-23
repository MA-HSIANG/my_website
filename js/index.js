function mainContainer() {
  const main = document.querySelector("main");
  const sectionLeft = document.createElement("section");
  const sectionRight = document.createElement("section");
  const rightContent = document.createElement("div");
  const rightImg = document.createElement("img");
  sectionLeft.classList.add("left");
  sectionRight.classList.add("right");

  const h1 = document.createElement("h1");
  h1.innerHTML = `Hi,I am<br>
    永星`;
  const p = document.createElement("p");
  p.innerHTML = ` 大學畢業後，在國軍志願役服務，服役於陸軍三支部補給油料庫，中壢補給分庫。
    <br>在役4年後，至新光合成纖維，擔任技術員，一邊工作一邊複習大學所學和學習。
    <br>歡迎持續關注我的104或Github。`;
  rightContent.classList.add("content");
  rightImg.src = "./ICONS/avatar.jpg";
  rightImg.alt = "picture";
  rightImg.classList.add("myPic");

  sectionLeft.appendChild(h1);
  sectionLeft.appendChild(p);
  rightContent.appendChild(rightImg);
  sectionRight.appendChild(rightContent);
  main.appendChild(sectionLeft);
  main.appendChild(sectionRight);
}
document.title = "首頁";
mainContainer();
