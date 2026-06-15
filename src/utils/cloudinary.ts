import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
});


export const createUploader = (folder: string) => {
  const storage = new CloudinaryStorage({
    cloudinary,
    params: async () => ({
      folder,
      resource_type: "auto",
      allowed_formats: [
        "jpg",
        "jpeg",
        "png",
        "webp",
        "pdf",
        "doc",
        "docx",
        "mp4",
        "mov",
        "avi",
        "mkv",
        "webm",
      ],
    }),
  });

  return multer({
    storage,
    limits: {
      fileSize: 50 * 1024 * 1024, // 50MB
    },
  });
};



