export interface SectionItem {
  id: string;
  title: string;
  sectionNumber: string;
  pageNumber: number;
  content: string[];
  callouts?: {
    type: 'warning' | 'note' | 'tip' | 'important';
    title?: string;
    text: string;
  }[];
  tables?: {
    id: string;
    caption?: string;
    headers: string[];
    rows: string[][];
    footnotes?: string[];
  }[];
  figures?: {
    id: string;
    figureNumber?: string;
    caption: string;
    src: string;
    alt: string;
    pageRef?: number;
    details?: string;
  }[];
  steps?: {
    stepNumber: number;
    title: string;
    instruction: string;
    figureSrc?: string;
    figureCaption?: string;
    notes?: string[];
  }[];
  subsections?: SectionItem[];
}

export interface ChapterItem {
  id: string;
  chapterNumber: number;
  title: string;
  startPage: number;
  endPage: number;
  description: string;
  iconName: string;
  sections: SectionItem[];
}

export interface ManualMetadata {
  documentTitle: string;
  documentRef: string;
  revision: string;
  date: string;
  publisher: string;
  totalPages: number;
  supportEmail: string;
  supportPhone: string;
  supportHelpdesk: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'RF & Hardware' | 'Navigation & GNSS' | 'Standards & Safety' | 'General';
}

export interface SearchResult {
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  sectionId: string;
  sectionNumber: string;
  sectionTitle: string;
  pageNumber: number;
  snippet: string;
  matchType: 'title' | 'content' | 'table' | 'callout' | 'step';
}
