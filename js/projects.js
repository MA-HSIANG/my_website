const main = document.querySelector("main");
const line = document.createElement("div");
line.classList.add("line");
function mainContainer() {
  const section = document.createElement("section");
  section.classList.add("project--list-container");
  const ul = document.createElement("ul");

  const projectData = [
    {
      id: 0,
      img: "./ICONS/easyBlog.jpg",
      alt: "easyBlog-cover",
      title: "easyBlog",
      description:
        "此項目是一個全端響應式作品，前端Vue3、後端NodeJS、資料庫mySql。",
    },
    {
      id: 1,
      img: "./ICONS/todoList.jpg",
      alt: "todoList-cover",
      title: "todoList",
      description:
        "使用html、sass、javascript建構web app。儲存方面使用瀏覽器localStorage，為響應式web app。",
    },

    {
      id: 2,
      img: "./ICONS/easyBook.jpg",
      alt: "project-cover",
      title: "easyBook",
      description:
        "使用Vue3構成web app。儲存方面使用瀏覽器localStorage，為響應式web app。",
    },
  ];

  for (const data of projectData) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const contentDiv = document.createElement("div");
    div.classList.add("projcet--cover-container");
    const img = document.createElement("img");
    img.src = data.img;
    img.alt = data.alt;
    contentDiv.classList.add("project--content");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    p.textContent = data.description;
    h2.textContent = data.title;
    div.appendChild(img);
    contentDiv.appendChild(h2);
    contentDiv.appendChild(p);
    li.appendChild(div);
    li.appendChild(contentDiv);
    ul.appendChild(li);
  }
  section.appendChild(ul);
  main.appendChild(section);
  main.appendChild(line);
  const clickH2 = document.querySelectorAll("h2");
  const clickP = document.querySelectorAll("p");
  clickH2.forEach((h2) => {
    h2.addEventListener("click", (e) => {
      const clickTitle = e.target.parentElement.children[0].textContent;
      if (clickTitle === "easyBlog") {
        location.href = "https://blog-server-6lno.onrender.com/";
      }
      if (clickTitle === "todoList") {
        location.href = "https://ma-hsiang.github.io/ToDoList/";
      }
      if (clickTitle === "easyBook") {
        location.href = "https://ma-hsiang.github.io/easyBook/";
      }
    });
  });
}
function contact() {
  const section = document.createElement("section");
  section.classList.add("contact");
  const div = document.createElement("div");
  div.classList.add("content");
  const phone = document.createElement("h2");
  const email = document.createElement("h2");
  const time = document.createElement("h2");
  const contactMe = document.createElement("h2");
  phone.textContent = "我的電話 : 0976-292-108";
  email.textContent = "我的信箱 : deat40051@gmail.com";
  time.textContent = "方便聯絡的時間 : 周一至周六 09點到22點";
  contactMe.textContent = "聯絡方式 : 104、e-mail、phone";
  div.appendChild(phone);
  div.appendChild(email);
  div.appendChild(time);
  div.appendChild(contactMe);
  section.appendChild(div);
  main.appendChild(section);
}
document.title ='作品集'
mainContainer();
contact();
