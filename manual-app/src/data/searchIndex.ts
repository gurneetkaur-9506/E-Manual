import { chaptersData } from './manualContent';
import { SearchResult } from '../types/manual';

export interface IndexedItem {
  chapterId: string;
  chapterNumber: number;
  chapterTitle: string;
  sectionId: string;
  sectionNumber: string;
  sectionTitle: string;
  pageNumber: number;
  text: string;
  matchType: 'title' | 'content' | 'table' | 'callout' | 'step';
}

export function buildSearchIndex(): IndexedItem[] {
  const index: IndexedItem[] = [];

  chaptersData.forEach((ch) => {
    ch.sections.forEach((sec) => {
      // 1. Index Section Title
      index.push({
        chapterId: ch.id,
        chapterNumber: ch.chapterNumber,
        chapterTitle: ch.title,
        sectionId: sec.id,
        sectionNumber: sec.sectionNumber,
        sectionTitle: sec.title,
        pageNumber: sec.pageNumber,
        text: `${sec.sectionNumber} ${sec.title}`,
        matchType: 'title'
      });

      // 2. Index Paragraphs
      sec.content.forEach((p) => {
        index.push({
          chapterId: ch.id,
          chapterNumber: ch.chapterNumber,
          chapterTitle: ch.title,
          sectionId: sec.id,
          sectionNumber: sec.sectionNumber,
          sectionTitle: sec.title,
          pageNumber: sec.pageNumber,
          text: p,
          matchType: 'content'
        });
      });

      // 3. Index Callouts
      if (sec.callouts) {
        sec.callouts.forEach((c) => {
          index.push({
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            sectionId: sec.id,
            sectionNumber: sec.sectionNumber,
            sectionTitle: sec.title,
            pageNumber: sec.pageNumber,
            text: `${c.type.toUpperCase()}: ${c.title ? c.title + ' - ' : ''}${c.text}`,
            matchType: 'callout'
          });
        });
      }

      // 4. Index Tables
      if (sec.tables) {
        sec.tables.forEach((t) => {
          const rowText = t.rows.map((r) => r.join(' ')).join('. ');
          index.push({
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            sectionId: sec.id,
            sectionNumber: sec.sectionNumber,
            sectionTitle: sec.title,
            pageNumber: sec.pageNumber,
            text: `${t.caption || ''} ${t.headers.join(' ')} ${rowText}`,
            matchType: 'table'
          });
        });
      }

      // 5. Index Figures
      if (sec.figures) {
        sec.figures.forEach((f) => {
          index.push({
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            sectionId: sec.id,
            sectionNumber: sec.sectionNumber,
            sectionTitle: sec.title,
            pageNumber: f.pageRef || sec.pageNumber,
            text: `${f.figureNumber || ''} ${f.caption} ${f.details || ''}`,
            matchType: 'content'
          });
        });
      }

      // 6. Index Steps
      if (sec.steps) {
        sec.steps.forEach((s) => {
          index.push({
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            sectionId: sec.id,
            sectionNumber: sec.sectionNumber,
            sectionTitle: sec.title,
            pageNumber: sec.pageNumber,
            text: `Step ${s.stepNumber}: ${s.title} - ${s.instruction}`,
            matchType: 'step'
          });
        });
      }

      // 7. Index Subsections
      if (sec.subsections) {
        sec.subsections.forEach((sub) => {
          index.push({
            chapterId: ch.id,
            chapterNumber: ch.chapterNumber,
            chapterTitle: ch.title,
            sectionId: sub.id,
            sectionNumber: sub.sectionNumber,
            sectionTitle: sub.title,
            pageNumber: sub.pageNumber,
            text: `${sub.sectionNumber} ${sub.title}`,
            matchType: 'title'
          });

          sub.content.forEach((p) => {
            index.push({
              chapterId: ch.id,
              chapterNumber: ch.chapterNumber,
              chapterTitle: ch.title,
              sectionId: sub.id,
              sectionNumber: sub.sectionNumber,
              sectionTitle: sub.title,
              pageNumber: sub.pageNumber,
              text: p,
              matchType: 'content'
            });
          });

          if (sub.callouts) {
            sub.callouts.forEach((c) => {
              index.push({
                chapterId: ch.id,
                chapterNumber: ch.chapterNumber,
                chapterTitle: ch.title,
                sectionId: sub.id,
                sectionNumber: sub.sectionNumber,
                sectionTitle: sub.title,
                pageNumber: sub.pageNumber,
                text: `${c.type.toUpperCase()}: ${c.title ? c.title + ' - ' : ''}${c.text}`,
                matchType: 'callout'
              });
            });
          }

          if (sub.tables) {
            sub.tables.forEach((t) => {
              const rowText = t.rows.map((r) => r.join(' ')).join('. ');
              index.push({
                chapterId: ch.id,
                chapterNumber: ch.chapterNumber,
                chapterTitle: ch.title,
                sectionId: sub.id,
                sectionNumber: sub.sectionNumber,
                sectionTitle: sub.title,
                pageNumber: sub.pageNumber,
                text: `${t.caption || ''} ${t.headers.join(' ')} ${rowText}`,
                matchType: 'table'
              });
            });
          }

          if (sub.figures) {
            sub.figures.forEach((f) => {
              index.push({
                chapterId: ch.id,
                chapterNumber: ch.chapterNumber,
                chapterTitle: ch.title,
                sectionId: sub.id,
                sectionNumber: sub.sectionNumber,
                sectionTitle: sub.title,
                pageNumber: f.pageRef || sub.pageNumber,
                text: `${f.figureNumber || ''} ${f.caption} ${f.details || ''}`,
                matchType: 'content'
              });
            });
          }

          if (sub.steps) {
            sub.steps.forEach((s) => {
              index.push({
                chapterId: ch.id,
                chapterNumber: ch.chapterNumber,
                chapterTitle: ch.title,
                sectionId: sub.id,
                sectionNumber: sub.sectionNumber,
                sectionTitle: sub.title,
                pageNumber: sub.pageNumber,
                text: `Step ${s.stepNumber}: ${s.title} - ${s.instruction}`,
                matchType: 'step'
              });
            });
          }
        });
      }
    });
  });

  return index;
}

export function searchManual(query: string, searchIndex: IndexedItem[]): SearchResult[] {
  if (!query || query.trim().length < 2) return [];

  const cleanQuery = query.toLowerCase().trim();
  const terms = cleanQuery.split(/\s+/).filter(Boolean);

  const results: SearchResult[] = [];
  const seenKeys = new Set<string>();

  for (const item of searchIndex) {
    const textLower = item.text.toLowerCase();
    const matchesAll = terms.every((t) => textLower.includes(t));

    if (matchesAll) {
      const key = `${item.sectionId}-${item.text.slice(0, 40)}`;
      if (!seenKeys.has(key)) {
        seenKeys.add(key);

        // Highlight or extract snippet
        let snippet = item.text;
        const matchIdx = textLower.indexOf(terms[0]);
        if (matchIdx > 40 && snippet.length > 120) {
          const start = Math.max(0, matchIdx - 30);
          const end = Math.min(snippet.length, matchIdx + 90);
          snippet = `...${snippet.substring(start, end)}...`;
        } else if (snippet.length > 150) {
          snippet = snippet.substring(0, 140) + '...';
        }

        results.push({
          chapterId: item.chapterId,
          chapterNumber: item.chapterNumber,
          chapterTitle: item.chapterTitle,
          sectionId: item.sectionId,
          sectionNumber: item.sectionNumber,
          sectionTitle: item.sectionTitle,
          pageNumber: item.pageNumber,
          snippet,
          matchType: item.matchType
        });
      }
    }

    if (results.length >= 25) break;
  }

  return results;
}
