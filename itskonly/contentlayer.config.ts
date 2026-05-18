import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

export const Writeup = defineDocumentType(() => ({
  name: "Writeup",
  filePathPattern: "writeups/**/*.mdx",
  contentType: "mdx",
  fields: {
    title:       { type: "string",  required: true },
    date:        { type: "date",    required: true },
    category:    { type: "enum", options: ["htb", "ctf", "web", "note"], required: true },
    difficulty:  { type: "enum", options: ["easy", "medium", "hard", "info"], required: false },
    tags:        { type: "list", of: { type: "string" }, required: false },
    summary:     { type: "string",  required: true },
    published:   { type: "boolean", default: true },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("writeups/", ""),
    },
    url: {
      type: "string",
      resolve: (doc) => `/writeups/${doc._raw.flattenedPath.replace("writeups/", "")}`,
    },
  },
}));

export const DailyLog = defineDocumentType(() => ({
  name: "DailyLog",
  filePathPattern: "log/**/*.md",
  contentType: "markdown",
  fields: {
    date:  { type: "date",   required: true },
    mood:  { type: "string", required: false },
    hours: { type: "number", required: false },
    entries: {
      type: "list",
      of: {
        type: "nested",
        def: () => ({
          fields: {
            type:    { type: "enum", options: ["lab", "study", "build", "read"] },
            content: { type: "string" },
          },
        }),
      },
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.replace("log/", ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Writeup, DailyLog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
        },
      ],
    ],
  },
});
