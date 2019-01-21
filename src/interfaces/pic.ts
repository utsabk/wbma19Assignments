export interface Media {
  file_id: string;
  filename: string;
  filesize: number;
  title: string;
  description: string;
  user_id: string;
  media_type: string;
  mime_type: string;
  time_added: string;
  screenshot?: string;
  thumbnails?: Thumbnail;
}

export interface Thumbnail {
  160: string;
  320?: string;
  640?: string;
}

