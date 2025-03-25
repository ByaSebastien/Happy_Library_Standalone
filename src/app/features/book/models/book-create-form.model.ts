export interface BookCreateFormModel {
  isbn: string;
  title: string;
  author: string;
  description?: string;
  releaseDate: Date;
}
