export interface Project {
  name: string;
  image: string;
  description: string;
  skills: string[];
  links?: {
    name: string;
    url: string;
  }[];
  types: string[];
}
