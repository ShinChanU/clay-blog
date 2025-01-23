import Image from 'next/image';
import { AnchorHTMLAttributes, ClassAttributes, HTMLAttributes, ImgHTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';

export const MarkdownComponents = {
  a: CustomAnchor,
  code: CustomCode,
  h1: HeadingH1,
  h2: HeadingH2,
  h3: HeadingH3,
  h4: HeadingH4,
  h5: HeadingH5,
  h6: HeadingH6,
  hr: CustomHR,
  img: CustomImage,
  ol: CustomOrderedList,
  p: CustomParagraph,
  ul: CustomUnorderedList,
};

function CustomAnchor({
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & ClassAttributes<HTMLAnchorElement>) {
  const isHeaderLink = props.href?.startsWith('#');
  return (
    <a
      className={`${
        isHeaderLink ? '' : 'font-semibold text-primary underline underline-offset-4'
      } transition-opacity hover:opacity-70 ${className || ''}`}
      rel="noopener noreferrer"
      target={isHeaderLink ? '_self' : '_blank'}
      {...props}
    />
  );
}

function CustomCode({ className, ...props }: ClassAttributes<HTMLElement> & ExtraProps & HTMLAttributes<HTMLElement>) {
  const isCodeBlock = className?.includes('language');
  return (
    <code
      className={`${isCodeBlock ? '' : 'rounded-sm bg-muted p-0.5 font-mono text-inherit-sm font-semibold'} ${className || ''}`}
      {...props}
    />
  );
}

function CustomHR({ className, ...props }: ClassAttributes<HTMLHRElement> & HTMLAttributes<HTMLHRElement>) {
  return <hr className={`my-6 ${className || ''}`} {...props} />;
}

function CustomImage({
  className,
  ...props
}: ClassAttributes<HTMLImageElement> & ExtraProps & ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <span className={`relative my-4 flex w-full items-center justify-center ${className || ''}`}>
      <Image
        alt={props.alt ?? 'Image-alt'}
        className={`object-contain ${className || ''}`}
        height={300} // 원하는 최대 높이
        src={props.src ? `/content/${props.src}` : ''} // content 폴더를 기준으로 동적 경로 생성
        width={800} // 원하는 최대 너비
      />
    </span>
  );
}

function CustomOrderedList({
  className,
  ...props
}: ClassAttributes<HTMLOListElement> & HTMLAttributes<HTMLOListElement>) {
  return <ol className={`list-decimal pl-6 ${className || ''}`} {...props} />;
}

function CustomParagraph({
  className,
  ...props
}: ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>) {
  return <p className={`my-2 ${className || ''}`} {...props} />;
}

function CustomUnorderedList({
  className,
  ...props
}: ClassAttributes<HTMLUListElement> & ExtraProps & HTMLAttributes<HTMLUListElement>) {
  return <ul className={`list-disc pl-6 ${className || ''}`} {...props} />;
}

function HeadingH1({ className, ...props }: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className={`my-7 ${className || ''}`} {...props} />;
}

function HeadingH2({ className, ...props }: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className={`my-6 ${className || ''}`} {...props} />;
}

function HeadingH3({ className, ...props }: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`my-5 ${className || ''}`} {...props} />;
}

function HeadingH4({ className, ...props }: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) {
  return <h4 className={`my-4 ${className || ''}`} {...props} />;
}

function HeadingH5({ className, ...props }: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) {
  return <h5 className={`my-3 ${className || ''}`} {...props} />;
}

function HeadingH6({ className, ...props }: ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) {
  return <h6 className={`my-2 ${className || ''}`} {...props} />;
}
