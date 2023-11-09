# 我的餐廳清單

## 專案畫面

![image](./public/image/restaurant_list_image.jpg)

## 專案介紹

紀錄屬於自己的餐廳清單，可以瀏覽餐廳、查看詳細資訊、甚至連結到地圖。

### 功能

- 查看所有餐廳
- 瀏覽餐廳的詳細資訊
- 連結餐廳的地址到 Google 地圖
- 搜尋特定餐廳
- 新增餐廳
- 編輯餐廳
- 刪除餐廳

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
   ```bash
   git clone https://github.com/wutungtung/restaurant_listCRUD.git
   ```
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install express@4.16.4 express-handlebars@4.0.2
   ```

4. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install express@4.16.4 express-handlebars@4.0.2
   ```

5. 在專案資料夾內新增一個.env 檔案，並輸入 MongoDB 你的連線字串

   ```bash
   MONGODB_URI=mongodb+srv://[your_username]:[your_password]@cluster0.b6rdnov.mongodb.net/[database_name]?retryWrites=true&w=majority
   ```

6. 製作種子資料

   ```bash
   npm run seed
   ```

7. 安裝完畢後，繼續輸入：

   ```bash
   npm run start
   ```

8. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3000
   ```

9. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 18.18.0
- Express 4.17.1
- Express-Handlebars 4.0.2
- Bootstrap 5.1.3
- MongoDB 6.2.0
- Mongoose 5.9.7
- Dotenv 16.3.1
