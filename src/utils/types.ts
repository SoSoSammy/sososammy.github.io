export interface Project {
  title: string;
  imageName: string;
  technologies: string[];
  description: string;
  links?: Link[];
}

export interface Education {
  school: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
  imageName: string;
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface Link {
  type: string;
  url: string;
}
