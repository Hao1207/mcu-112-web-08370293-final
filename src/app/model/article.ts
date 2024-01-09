export class Article {
  id?: number;
  title: string;
  author: string;
  date: Date;
  content: string;
  tags: string[];

  constructor(
    title: string,
    author: string,
    date: Date,
    content: string,
    tags: string[],
    id?: number
  ) {
    this.title = title;
    this.author = author;
    this.date = date;
    this.content = content;
    this.tags = tags;
    this.id = id;
  }

  getSummary(): string {
    return this.content.slice(0, 100) + '...';
  }
}
