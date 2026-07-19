import { diskStorage } from 'multer';
import { extname } from 'path';
import { randomUUID } from 'crypto';

export const multerConfig = {
  storage: diskStorage({
    destination: './uploads/cvs',

    filename: (_, file, callback) => {
      callback(
        null,
        `${randomUUID()}${extname(file.originalname)}`,
      );
    },
  }),

  fileFilter: (_, file, callback) => {
    const allowed = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    callback(
      null,
      allowed.includes(file.mimetype),
    );
  },
};