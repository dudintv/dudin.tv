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
