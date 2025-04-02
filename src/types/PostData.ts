// Para listado de posts (sin contenido completo)
export interface PostMetaData {
  slug: string;
  title: string;
  date: string;
}

// Para post completo (con contenido)
export interface PostData extends PostMetaData {
  contentHtml: string;
}