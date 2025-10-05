# CDN Images CRUD REST API

This project is a **REST API** for managing images in a **CDN** (upload, fetch, delete) with metadata stored in **MongoDB**. The API can be integrated with frontends or other services that need image access.

---

## Technologies

- **Node.js**
- **Express.js**
- **MongoDB**
- **Multer** (for file uploads)
- **Cloudinary** (for image storage)
- **Docker & Docker Compose**
- **dotenv** (for environment variables)

---

## Features

- **Upload image** – `POST /images`
- **Get all images** – `GET /images`
- **Delete image** – `DELETE /images/:id`

Images are stored in **Cloudinary**, while metadata (name, URL, type, createdAt) is stored in **MongoDB**.

---

## Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/cdn-images-crud.git
cd cdn-images-crud
```

### Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://mongo:27017/cdn_images_db
CLOUDINARY_CLOUD_NAME=your name
CLOUDINARY_API_KEY= your api key
CLOUDINARY_API_SECRET=your api secret
```

### Using Docker

Build and run the containers:

```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`.

## API Endpoints

### Upload Image

```bash
POST /images
Content-Type: multipart/form-data
Body: file=<your_image_file>
```

### Get All Images

```bash
GET /images
```

### Delete Image

```bash
DELETE /images/:id
```

---

## Project Structure

```
/cdn-images-crud-BE
│
├─ src
│  ├─ config
│  │  └─ cloudinary.ts
│  │
│  ├─ models
│  │  └─ Image.ts
│  │
│  └─ routes
│     ├─ images.ts
│     └─ index.ts
│
├─ .env
├─ docker-compose.yml
├─ Dockerfile
├─ package-lock.json
├─ package.json
├─ README.md
└─ tsconfig.json
```
