export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  stats: {
    left: { icon: string; value: string };
    right: { icon: string; value: string };
  };
  liveDemo: string | null;
  sourceCode: string;
  appStore?: string;
  playStore?: string;
}
