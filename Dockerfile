# ใช้ Node.js เวอร์ชัน 20
FROM node:20

# ตั้งค่าโฟลเดอร์ทำงานใน container
WORKDIR /usr/src/app

# คัดลอก package.json และ package-lock.json ไปยัง container
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์โค้ดทั้งหมดไปยัง container
COPY . .

# สร้างไฟล์ dist จาก TypeScript
RUN npm run build

# เปิดพอร์ต 8080 ที่จะใช้ใน Cloud Run
EXPOSE 8080

# รันแอปในโหมด production
CMD ["node", "dist/main"]
