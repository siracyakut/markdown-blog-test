import { useParams } from "react-router-dom";
import blogs from "../../data/blogs";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import QR from "../../components/qr";

export default function Blog() {
  const { slug } = useParams();
  const currentBlog = blogs.find((b) => b.blog_slug === slug);

  return (
    <>
      <Helmet>
        <title>{currentBlog.blog_title}</title>
      </Helmet>
      <div className="flex flex-col flex-1">
        <Markdown
          className="markdown"
          children={currentBlog.blog_content}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={atomDark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
          remarkPlugins={[remarkGfm]}
        />
        <div className="mt-auto mb-4">
          <div className="mt-8 flex flex-col gap-4 items-center justify-center p-4 bg-blue-500/10 border border-blue-500/30 rounded-md">
            <h2 className="text-2xl font-bold text-blue-200">
              Bu Blogu Paylaş
            </h2>
            <QR size={128} text={window.location.href} />
          </div>
        </div>
      </div>
    </>
  );
}
