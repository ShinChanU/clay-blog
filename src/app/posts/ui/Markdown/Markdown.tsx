import { MarkdownComponents, markdownPlugins } from '@/app/posts/ui/Markdown/index';
import ReactMarkdown from 'react-markdown';

type TProps = {
  content: string;
};

export const Markdown = ({ content }: TProps) => {
  return (
    <ReactMarkdown
      className={'break-keep'}
      components={{
        a: MarkdownComponents.a,
        code: MarkdownComponents.code,
        h1: MarkdownComponents.h1,
        h2: MarkdownComponents.h2,
        h3: MarkdownComponents.h3,
        h4: MarkdownComponents.h4,
        h5: MarkdownComponents.h5,
        h6: MarkdownComponents.h6,
        hr: MarkdownComponents.hr,
        img: MarkdownComponents.img,
        ol: MarkdownComponents.ol,
        p: MarkdownComponents.p,
        ul: MarkdownComponents.ul,
      }}
      rehypePlugins={markdownPlugins}
    >
      {content}
    </ReactMarkdown>
  );
};
