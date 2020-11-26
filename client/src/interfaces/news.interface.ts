export interface INews {
  id: number;
  title: string;
  url: string;
  comments_count?: number;
  points?: number;
}

export interface IComment {
  id: number;
  level: number;
  user: string;
  time_ago: string;
  content: string;
  comments: IComment[];
}
