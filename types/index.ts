import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface Script {
  file?: string;
  path: string;
  title: string;
  category: string;
  description: string;
  viz4?: boolean;
}

export type ParsedScript = Script & ParsedContent;
