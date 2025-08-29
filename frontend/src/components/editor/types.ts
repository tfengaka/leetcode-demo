import { DocumentType, NodeType, TextType } from '@tiptap/core';

export type EditorContentType = DocumentType<
  Record<string, any> | undefined,
  NodeType<string, undefined | Record<string, any>, any, (NodeType | TextType)[]>[]
>;
