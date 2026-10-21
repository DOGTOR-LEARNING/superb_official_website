import type { MDXComponents } from "mdx/types";

/** 文章內文樣式：最大寬度約 720px、足夠行距與段落間距（spec §8.4） */
export const articleComponents: MDXComponents = {
  h2: (props) => <h2 className="text-h3 mt-14 mb-4 scroll-mt-28" {...props} />,
  h3: (props) => <h3 className="mt-10 mb-3 text-[1.1875rem] font-semibold" {...props} />,
  p: (props) => <p className="my-6 text-[1.0625rem] leading-[1.85] text-navy/90" {...props} />,
  ul: (props) => <ul className="my-6 list-disc space-y-2 pl-6 marker:text-brand" {...props} />,
  ol: (props) => <ol className="my-6 list-decimal space-y-2 pl-6 marker:text-brand" {...props} />,
  li: (props) => <li className="pl-1 leading-[1.8]" {...props} />,
  strong: (props) => <strong className="font-semibold text-navy" {...props} />,
  a: (props) => <a className="font-medium text-brand underline underline-offset-4 hover:text-brand-hover" {...props} />,
  blockquote: (props) => (
    <blockquote className="my-10 border-l-4 border-gold bg-soft-gold/60 py-1 pr-6 pl-6 text-[1.125rem] font-medium text-navy [&>p]:my-4" {...props} />
  ),
  table: (props) => (
    <div className="my-8 overflow-x-auto rounded-[var(--radius-card-sm)] border border-line">
      <table className="w-full min-w-[520px] border-collapse text-left text-[0.9375rem]" {...props} />
    </div>
  ),
  thead: (props) => <thead className="bg-soft-blue" {...props} />,
  th: (props) => <th className="border-b border-line px-4 py-3 font-semibold" {...props} />,
  td: (props) => <td className="border-b border-line px-4 py-3 align-top text-navy/85" {...props} />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    <img className="my-8 h-auto w-full rounded-[var(--radius-card-sm)] border border-line" loading="lazy" {...props} />
  ),
  hr: () => <hr className="my-12 border-line" />,
};
