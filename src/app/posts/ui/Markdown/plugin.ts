import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';

export const markdownPlugins: Parameters<typeof ReactMarkdown>[0]['rehypePlugins'] = [
  rehypeSanitize,
  rehypeHighlight,
  rehypeSlug,
  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
];
