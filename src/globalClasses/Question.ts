export type QuestionType = {
  id: string;
  userId: number;
  datePosted: string;
  categories: string[];
  title: string;
  description: string;
  answers: string[];
};
export function Question({
  id,
  userId,
  datePosted,
  categories,
  title,
  description,
  answers,
}: QuestionType): void {
  this.id = id;
  this.userId = userId;
  this.datePosted = datePosted;
  this.categories = !categories ? [] : categories;
  this.title = title;
  this.description = description;
  this.answers = !answers ? [] : answers;
}
