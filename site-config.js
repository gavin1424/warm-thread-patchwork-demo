/*
 * 暖線拼布工作室示範站：集中資料設定
 * 正式使用前，請先閱讀「網站資料替換指南.md」。
 */
window.SITE_CONFIG = {
  DEMO_MODE: true,

  brand: {
    name: "暖線拼布工作室",
    englishName: "Warm Thread Studio",
    headline: "把喜歡的布，縫成生活裡的溫度",
    subheadline: "小班制拼布與生活布作課程，從零開始，也能親手完成屬於自己的作品。",
    description: "提供成人拼布入門、生活布作與小班制手作課程，讓沒有基礎的人也能完成自己的第一件作品。"
  },

  seo: {
    title: "暖線拼布工作室｜零基礎拼布與生活布作課程",
    description: "暖線拼布工作室商用示範網站：小班制拼布與生活布作課程，零基礎也能完成第一件作品。",
    baseUrl: "https://gavin1424.github.io/warm-thread-patchwork-demo/",
    ogImage: "assets/hero-patchwork.jpg"
  },

  theme: {
    ink: "#2f2b27",
    paper: "#f7f1e8",
    cream: "#fffaf3",
    clay: "#a45f47",
    clayDark: "#7e4433",
    olive: "#66705b",
    blue: "#647887"
  },

  contact: {
    lineUrl: "",
    phone: "",
    email: "",
    instagramUrl: "",
    facebookUrl: "",
    formEndpoint: ""
  },

  demoMessage: "這是示範網站，正式合作後將串接品牌的 LINE、電話或表單。目前不會開啟假帳號、不會撥打假號碼，也不會儲存或傳送任何資料。",

  courses: [
    {
      order: "01",
      name: "拼布入門體驗課",
      summary: "從布料方向、基本工具到手縫練習，完成一件小型實用作品。",
      audience: "第一次接觸拼布、想先體驗製作流程的人",
      feature: "工具認識、基礎拼接、作品收尾",
      duration: "約 2.5–3 小時（示範時數）",
      note: "課程內容與費用請洽詢"
    },
    {
      order: "02",
      name: "生活布作基礎班",
      summary: "循序練習布料搭配、裁切、車縫與基本收邊，建立獨立製作的基礎。",
      audience: "想有系統學習實用布作與車縫技巧的人",
      feature: "布料搭配、精準裁切、車縫與收邊",
      duration: "依作品安排 2–3 堂（示範時數）",
      note: "課程內容與費用請洽詢"
    },
    {
      order: "03",
      name: "個人作品進階班",
      summary: "依照想完成的包款、掛飾或居家布品，拆解步驟並提供個別製作指導。",
      audience: "已有基本經驗、希望完成指定作品的人",
      feature: "作品規劃、技法調整、細節完成度",
      duration: "依作品尺寸與難度評估",
      note: "課程內容與費用請洽詢"
    }
  ],

  works: [
    {
      name: "日常拼布包",
      category: "拼布包",
      description: "練習色塊配置、袋身結構與提把收邊。",
      visualClass: "work-bag",
      image: "",
      alt: "暖色與藍灰色布塊組成的日常拼布包圖形"
    },
    {
      name: "午後杯墊組",
      category: "杯墊",
      description: "從小面積作品熟悉拼接與壓線節奏。",
      visualClass: "work-coaster",
      image: "",
      alt: "幾何色塊組成的拼布杯墊圖形"
    },
    {
      name: "季節壁飾",
      category: "壁飾",
      description: "以布色與留白，完成適合空間陳列的作品。",
      visualClass: "work-hanging",
      image: "",
      alt: "米白與陶土色幾何拼布壁飾圖形"
    },
    {
      name: "隨身收納袋",
      category: "小型收納袋",
      description: "練習拉鍊、內裡與小型袋物的完整收邊。",
      visualClass: "work-pouch",
      image: "",
      alt: "柔和橄欖綠布料製作的小型收納袋圖形"
    },
    {
      name: "餐桌布品",
      category: "居家布品",
      description: "把配色、尺寸與實用性帶進日常空間。",
      visualClass: "work-home",
      image: "",
      alt: "暖灰與藍灰色拼接的居家桌布圖形"
    },
    {
      name: "冬日手作掛飾",
      category: "節慶手作",
      description: "以小型布件練習造型、填充與細節裝飾。",
      visualClass: "work-seasonal",
      image: "",
      alt: "陶土紅與米白色布料製作的節慶掛飾圖形"
    }
  ],

  faqs: [
    {
      question: "完全沒有基礎可以參加嗎？",
      answer: "可以。入門體驗課會從工具、布料方向與基本手勢開始，並把製作流程拆成清楚的小步驟。正式報名前仍建議說明自己的經驗，方便安排合適課程。"
    },
    {
      question: "需要自己準備工具嗎？",
      answer: "示範方案預設會在預約確認時提供工具與材料清單。正式網站應依工作室實際規則，清楚標示哪些由課程提供、哪些需要自備。"
    },
    {
      question: "一堂課大約多久？",
      answer: "入門體驗課示範時數約為 2.5–3 小時；其他課程會依作品尺寸、技法與學員進度安排。正式時數與費用需由品牌確認後更新。"
    },
    {
      question: "沒有完成作品怎麼辦？",
      answer: "課程會以完成一件作品為目標，若個人進度不同，可依實際教學規則安排課後說明、補充步驟或後續課程。此項需在正式合作時確認。"
    },
    {
      question: "可以一個人報名嗎？",
      answer: "可以。小班課程通常可接受個人報名，再依可預約日期與名額安排。正式名額規則請以品牌公告為準。"
    },
    {
      question: "是否接受團體包班？",
      answer: "可在正式網站中提供團體包班詢問入口，並依人數、作品內容、場地與日期另外確認。示範站不承諾實際包班名額。"
    },
    {
      question: "如何確認日期與名額？",
      answer: "正式網站上線後，將透過品牌的 LINE 或指定表單確認日期與名額。目前按鈕為示範模式，不會連到不存在的帳號。"
    }
  ]
};
