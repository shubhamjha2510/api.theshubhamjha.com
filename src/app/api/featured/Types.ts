export type FeaturedProject = {
  id: number;
  title: string;
  description: string;
  year: string;
  technologies: string[];
  thumbnail: string;
  source: string;
  platform: string;
};

export type FeaturedProjects = FeaturedProject[];
