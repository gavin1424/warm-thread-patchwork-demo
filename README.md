# 暖線拼布工作室｜v1.1 成交展示版

這是一個「拼布／手作課程工作室」的商用網站設計示範案例。暖線拼布工作室為虛構品牌，作品影像與部分內容為情境展示用途；正式網站製作服務已移至獨立網站。

- 品牌示範首頁：<https://gavin1424.github.io/warm-thread-patchwork-demo/>
- 獨立網站製作方案：<https://gavin1424.github.io/>
- 舊服務頁：`service.html`（保留相容連結，設定 `noindex, follow`，canonical 指向獨立服務網站）

## 技術與本機瀏覽

- 原生 HTML、CSS、JavaScript
- 無框架、無後端、無資料庫
- 不需要安裝套件或執行建置指令
- 可直接部署到 GitHub Pages 或其他靜態網站服務

可直接開啟 `index.html`。若電腦已有 Python，也可在此資料夾啟動本機靜態伺服器：

```powershell
python -m http.server 4173
```

再瀏覽：

- `http://127.0.0.1:4173/`
- `http://127.0.0.1:4173/service.html`

## 主要檔案

- `index.html`：暖線拼布工作室完整品牌示範首頁。
- `service.html`：免主機月租工作室網站的方案與成交說明頁。
- `site-config.js`：品牌、網站服務、聯絡方式、課程、作品與兩頁 SEO 的集中設定。
- `script.js`：內容渲染、動態 SEO、手機選單、品牌示範模式與網站服務聯絡行為。
- `styles.css`：v1.1 導覽條、銷售頁與補強樣式；會載入 `styles-base.css`。
- `styles-base.css`：v1.0 品牌網站的原始樣式基底。
- `assets/hero-patchwork.jpg`：本案例的主視覺。
- `assets/works/`：六張新產生並壓縮的 4:3 拼布作品情境圖。
- `成交展示版_v1.1_品質檢查報告.md`：v1.1 本機與公開版本檢查紀錄。
- `網站資料替換指南.md`：轉換成真實客戶網站的步驟。

## 兩種聯絡行為已分離

### 虛構品牌課程聯絡

`site-config.js` 的 `DEMO_MODE: true` 只管理暖線拼布工作室的品牌課程按鈕。所有具有 `data-brand-contact` 的 LINE、預約與社群按鈕會顯示示範提示：

- 不前往假 LINE、電話、社群或表單。
- 不儲存或傳送訪客資料。
- 不聲稱詢問或預約已成功送出。

真實客戶網站要啟用品牌聯絡時，先填妥 `contact` 內的正式資料、完成隱私權告知與功能測試，再將 `DEMO_MODE` 改為 `false`。

### 網站製作服務聯絡

具有 `data-service-contact` 的按鈕只讀取 `service` 內的網站製作聯絡設定，不受品牌 `DEMO_MODE` 攔截。

目前 `service.contactUrl` 與 `service.inquiryFormUrl` 均使用已驗證的 Google 方案詢問表。網站製作服務按鈕會前往該表單，不受品牌 `DEMO_MODE` 攔截。Email 與公開社群目前明確標記為「暫不使用」，不顯示空白按鈕。

## 正式尋找客戶前必填／確認

不要從其他專案搬入私人資料，也不要自行猜測。請由網站擁有者提供並確認：

- [x] 網站製作服務名稱：`免主機月租工作室網站`
- [x] 客戶詢問表單：`service.inquiryFormUrl`
- [x] 網站製作主要聯絡入口：`service.contactUrl`（同一份詢問表）
- [x] 隱私權聯絡窗口：`service.privacyContact`（同一份詢問表；在需求欄填寫「個資／隱私問題」）
- [x] Email：明確標記為「暫不使用」
- [x] 公開社群帳號：明確標記為「暫不使用」
- [ ] LINE 或 LINE 官方帳號：目前未提供，網站不顯示假按鈕

## 集中 SEO

`script.js` 會依 `<body data-page>` 從 `site-config.js > seo.pages` 更新：

- `document.title`
- meta description
- robots
- canonical
- Open Graph
- Twitter Card
- JSON-LD 結構化資料

暖線虛構品牌首頁與本儲存庫內的舊 `service.html` 均維持 `noindex, follow`。正式服務網站 <https://gavin1424.github.io/> 已有可用詢問入口、隱私權頁與服務規則頁，因此獨立站使用 `index, follow`。HTML 內仍保留相同的靜態 SEO 預設值，避免 JavaScript 尚未執行時出現錯誤資訊。

## 圖片與素材

主視覺與六張作品圖皆為本示範案例新產生的情境素材，不是實際學員作品。作品圖統一為 1200 × 900 的壓縮 JPEG，並使用延遲載入；若圖片載入失敗，`script.js` 會顯示原有 CSS 布料圖形備援。

正式客戶網站必須換成客戶自有或已取得合法商用授權的圖片，並保留正確的替代文字。

## 部署

本專案為純靜態檔案，可從 GitHub Pages 的預設分支根目錄部署。正式改網址時請同步更新：

1. `site-config.js` 的 `seo.baseUrl` 與兩頁路徑。
2. `index.html`、`service.html` 的靜態 canonical、Open Graph 與結構化資料預設值。
3. `robots.txt`、`sitemap.xml` 與 `404.html`。
4. 公開後重新驗證首頁與 `service.html` 的 HTTP 狀態、互相返回與 SEO 實際值。

## 正式使用前最低檢查

1. 若未來新增 LINE、Email 或公開社群，先由擁有者提供並實際驗證，再填入設定檔。
2. 若轉成真實品牌站，替換品牌、課程、作品、價格與聯絡資料。
3. 確認圖片授權、尺寸與 alt。
4. 在 390px、768px、1440px 重新測試導覽、CTA、對話框、SEO 與橫向溢位。
5. 確認沒有假評價、假聯絡方式、不實承諾或本機絕對路徑。
