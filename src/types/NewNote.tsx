export interface NewNote {
  title: string;
  content: string;
  labels?: string[];
  urls?: string[];
  color?: string;
}