(function () {
  "use strict";

  const config = window.SITE_CONFIG;
  if (!config) {
    return;
  }

  const root = document.documentElement;
  const body = document.body;
  const menuButton = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-site-menu]");
  const demoDialog = document.querySelector("#demo-dialog");
  const privacyDialog = document.querySelector("#privacy-dialog");

  function setTheme() {
    const themeMap = {
      ink: "--ink",
      paper: "--paper",
      cream: "--cream",
      clay: "--clay",
      clayDark: "--clay-dark",
      olive: "--olive",
      blue: "--blue"
    };

    Object.entries(themeMap).forEach(([key, variable]) => {
      if (config.theme && config.theme[key]) {
        root.style.setProperty(variable, config.theme[key]);
      }
    });
  }

  function getConfigValue(path) {
    return path.split(".").reduce((value, key) => value && value[key], config);
  }

  function setConfigText() {
    document.querySelectorAll("[data-config]").forEach((element) => {
      const value = getConfigValue(element.dataset.config);
      if (typeof value === "string" && value.trim()) {
        element.textContent = value;
      }
    });
  }

  function createCourseCard(course) {
    const article = document.createElement("article");
    article.className = "course-card";

    const top = document.createElement("div");
    top.className = "course-top";
    top.innerHTML = `<span class="course-number" aria-hidden="true">${course.order}</span><span class="course-note">${course.note}</span>`;

    const title = document.createElement("h3");
    title.textContent = course.name;
    const summary = document.createElement("p");
    summary.className = "course-summary";
    summary.textContent = course.summary;

    const list = document.createElement("dl");
    list.className = "course-meta";
    [
      ["適合對象", course.audience],
      ["課程特色", course.feature],
      ["預估時間", course.duration]
    ].forEach(([label, value]) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const description = document.createElement("dd");
      term.textContent = label;
      description.textContent = value;
      row.append(term, description);
      list.append(row);
    });

    const button = document.createElement("button");
    button.className = "card-link";
    button.type = "button";
    button.dataset.contactAction = "booking";
    button.innerHTML = `詢問這堂課 <span aria-hidden="true">→</span>`;

    article.append(top, title, summary, list, button);
    return article;
  }

  function createWorkVisual(work) {
    const wrapper = document.createElement("div");
    wrapper.className = "work-visual";

    if (work.image) {
      const image = document.createElement("img");
      image.src = work.image;
      image.alt = work.alt;
      image.width = 720;
      image.height = 540;
      image.loading = "lazy";
      image.decoding = "async";
      image.addEventListener("error", () => {
        wrapper.replaceChildren(createFallbackArt(work));
      }, { once: true });
      wrapper.append(image);
      return wrapper;
    }

    wrapper.append(createFallbackArt(work));
    return wrapper;
  }

  function createFallbackArt(work) {
    const art = document.createElement("div");
    art.className = `fabric-art ${work.visualClass}`;
    art.setAttribute("role", "img");
    art.setAttribute("aria-label", work.alt);
    art.innerHTML = '<span class="fabric-piece piece-one"></span><span class="fabric-piece piece-two"></span><span class="fabric-piece piece-three"></span>';
    return art;
  }

  function createWorkCard(work) {
    const article = document.createElement("article");
    article.className = "work-card";
    const visual = createWorkVisual(work);
    const caption = document.createElement("div");
    caption.className = "work-caption";
    const category = document.createElement("span");
    category.textContent = work.category;
    const title = document.createElement("h3");
    title.textContent = work.name;
    const description = document.createElement("p");
    description.textContent = work.description;
    caption.append(category, title, description);
    article.append(visual, caption);
    return article;
  }

  function renderContent() {
    const courseList = document.querySelector("[data-course-list]");
    const workList = document.querySelector("[data-work-list]");
    const faqList = document.querySelector("[data-faq-list]");

    if (courseList) {
      courseList.replaceChildren(...config.courses.map(createCourseCard));
    }

    if (workList) {
      workList.replaceChildren(...config.works.map(createWorkCard));
    }

    if (faqList) {
      const faqs = config.faqs.map((faq, index) => {
        const item = document.createElement("details");
        item.className = "faq-item";
        if (index === 0) item.open = true;
        const summary = document.createElement("summary");
        summary.innerHTML = `<span>${faq.question}</span><span class="faq-toggle" aria-hidden="true"></span>`;
        const answer = document.createElement("div");
        answer.className = "faq-answer";
        const paragraph = document.createElement("p");
        paragraph.textContent = faq.answer;
        answer.append(paragraph);
        item.append(summary, answer);
        return item;
      });
      faqList.replaceChildren(...faqs);
    }
  }

  function setMenu(open) {
    if (!menuButton || !menu) return;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "關閉導覽選單" : "開啟導覽選單");
    menu.classList.toggle("is-open", open);
    body.classList.toggle("menu-open", open);
  }

  function showDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeDialog(dialog) {
    if (!dialog) return;
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  function showDemoMessage(customMessage) {
    const message = demoDialog && demoDialog.querySelector("[data-demo-message]");
    if (message) {
      message.textContent = customMessage || config.demoMessage;
    }
    showDialog(demoDialog);
  }

  function handleContactAction(event) {
    const trigger = event.currentTarget;
    const action = trigger.dataset.contactAction;

    if (config.DEMO_MODE) {
      event.preventDefault();
      showDemoMessage();
      return;
    }

    const links = {
      line: config.contact.lineUrl,
      booking: config.contact.lineUrl || config.contact.formEndpoint,
      social: config.contact.instagramUrl,
      service: config.contact.email ? `mailto:${config.contact.email}` : ""
    };
    const target = links[action];
    if (target) {
      window.location.href = target;
    } else {
      event.preventDefault();
      showDemoMessage("此聯絡方式尚未設定。請先在 site-config.js 補上正式品牌資料。");
    }
  }

  function initializeInteractions() {
    if (menuButton && menu) {
      menuButton.addEventListener("click", () => {
        setMenu(menuButton.getAttribute("aria-expanded") !== "true");
      });

      menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenu(false));
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuButton && menuButton.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuButton.focus();
      }
    });

    document.querySelectorAll("[data-contact-action]").forEach((trigger) => {
      trigger.addEventListener("click", handleContactAction);
    });

    document.querySelectorAll("[data-dialog-close]").forEach((button) => {
      button.addEventListener("click", () => closeDialog(demoDialog));
    });

    document.querySelectorAll("[data-privacy]").forEach((button) => {
      button.addEventListener("click", () => showDialog(privacyDialog));
    });

    document.querySelectorAll("[data-privacy-close]").forEach((button) => {
      button.addEventListener("click", () => closeDialog(privacyDialog));
    });

    [demoDialog, privacyDialog].forEach((dialog) => {
      if (!dialog) return;
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) closeDialog(dialog);
      });
    });

    const demoForm = document.querySelector("#demo-form");
    if (demoForm) {
      demoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (config.DEMO_MODE) {
          showDemoMessage("這是示範表單。你選擇的內容沒有被儲存或傳送；正式合作後才會串接品牌的 LINE 或安全表單。");
          return;
        }
        showDemoMessage("正式表單端點尚未設定，沒有任何資料被送出。");
      });
    }
  }

  setTheme();
  setConfigText();
  renderContent();
  initializeInteractions();

  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
})();
