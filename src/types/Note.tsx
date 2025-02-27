export interface Note {
  id: number;
  title: string;
  content: string;
  labels?: string[];
  urls?: string[];
  color?: string;
}