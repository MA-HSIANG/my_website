export function navBar() {
  const header = document.querySelector("header");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const navData = [
    {
      id: 0,
      href: "index.html",

      text: "首頁",
    },
    {
      id: 1,
      href: "resume.html",

      text: "我的履歷",
    },
    {
      id: 2,
      href: "projects.html",
      text: "作品集",
    },
  ];
  const hrefName = window.location.pathname.split("/")[1];
  for (const data of navData) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = data.href;
    a.textContent = data.text;
    if (hrefName === data.href) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
    li.appendChild(a);
    ul.appendChild(li);
  }

  nav.appendChild(ul);
  header.appendChild(nav);
}

export function footerBar() {
  const footer = document.querySelector("footer");
  const footerData = [
    {
      id: 0,
      href: "https://blog-server-6lno.onrender.com/",
      img: "./ICONS/blog.svg",
      alt: "blog",
    },
    {
      id: 1,
      href: "https://pda.104.com.tw/profile/share/eTcSlcShP7e8DHCQIdrSDg4RmV7RhQyF",
      img: "./ICONS/104.svg",
      alt: "104",
    },
    {
      id: 2,
      href: "https://github.com/MA-HSIANG",
      img: "./ICONS/github-brands 1.svg",
      alt: "Github",
    },
  ];

  for (const data of footerData) {
    const a = document.createElement("a");
    const img = document.createElement("img");
    a.href = data.href;
    img.src = data.img;
    img.alt = data.alt;
    a.appendChild(img);
    footer.appendChild(a);
  }
}
