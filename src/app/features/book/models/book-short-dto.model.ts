export interface BookShortDtoModel {
  id: number;
  isbn: string;
  title: string;
  author: string;
  description?: string;
  releaseDate: Date;
}
