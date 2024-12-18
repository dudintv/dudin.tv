import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export type Script = {
  file?: string;
  path: string;
  title: string;
  category: string;
  description: string;
  viz4?: boolean;
};

export type ParsedScript = Script & ParsedContent;

export type Article = {
  _path: string;
  title: string;
  description: string;
  tags: string;
  date?: string;
};

export type Shader = {
  type: string;
  label: string;
  parameters: Record<string, string | number>;
};

export type Container = {
  name: string;
  plugins?: string[];
  children?: Container[];
};

export type EnrichedContainer = Container & {
  container: Container;
  order: number;
  parent?: Container;
  next?: Container;
  previous?: Container;
  nesting: number;
  // highlighted?: boolean;
};

export type Scene = {
  name: string;
  rootContainers: Container[];
};
