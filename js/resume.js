const main = document.querySelector("main");
function table() {
  const trData = [
    {
      id: 0,
      title: "自我簡介",
      content:
        "我目前正在待業中，並修改曾經利用工作時所寫的side project，目前一邊投遞履歷一邊繼續累積作品。",
    },
    {
      id: 2,
      title: "學歷",
      content: " 健行科技大學資訊工程系",
    },
    {
      id: 3,
      title: "經歷",
      content: `  <ol>
      <li>陸軍第三地區支援指揮部 補給兵</li>
      <li>新光合成纖維技術員</li>
  </ol>`,
    },
    {
      id: 4,
      title: "專長",
      content: `<img src="./ICONS/icons8-html-5.svg" alt="picHtml5">
      <img src="./ICONS/icons8-css3.svg" alt="picCSS3">
      <img src="./ICONS/icons8-javascript.svg" alt="picJS">
      <img src="./ICONS/vue.svg" alt="picVue">`,
    },
    {
      id: 5,
      title: "作品",
      content: ` <ol>
      <li>easyBlog 手刻響應式部落格作品，前端採用了Vue3，後端則使用了NodeJs和Express，而資料庫方面則採用了MySQL。</li>
      <li>各項前端web app。包含: toDoList原生響應式待辦事清單、筆記應用程式Vue3響應式筆記本</li>
  </ol>
`,
    },
  ];
  const table = document.createElement("table");
  const section = document.createElement("section");
  section.classList.add("table");
  for (const data of trData) {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdContent = document.createElement("td");
    tdTitle.textContent = data.title;
    tdContent.innerHTML = data.content;
    tr.appendChild(tdTitle);
    tr.appendChild(tdContent);
    table.appendChild(tr);
  }
  section.appendChild(table);
  main.appendChild(section);
}
function avatar() {
  const section = document.createElement("section");
  section.classList.add("picture");
  section.innerHTML = `<img src="./ICONS/avatar.jpg" alt="avatar">
    <div></div>`;
  main.appendChild(section);
}
document.title = "我的履歷";
table();
avatar();
