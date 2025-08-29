import Blockquote from '@tiptap/extension-blockquote';
import Bold from '@tiptap/extension-bold';
import BulletList from '@tiptap/extension-bullet-list';
import Code from '@tiptap/extension-code';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Document from '@tiptap/extension-document';
import HardBreak from '@tiptap/extension-hard-break';
import Heading from '@tiptap/extension-heading';
import Italic from '@tiptap/extension-italic';
import { TaskItem, TaskList } from '@tiptap/extension-list';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import Paragraph from '@tiptap/extension-paragraph';
import Strike from '@tiptap/extension-strike';
import Text from '@tiptap/extension-text';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { UndoRedo } from '@tiptap/extensions';

import { all, createLowlight } from 'lowlight';
const lowlight = createLowlight(all);

export default [
  UndoRedo,
  HardBreak,
  Code,
  Blockquote,
  Document,
  Paragraph,
  Text,
  Bold,
  Underline,
  Italic,
  Strike,
  ListItem,
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
  Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
  TextAlign.configure({ defaultAlignment: 'left', types: ['heading', 'paragraph'] }),
  CodeBlockLowlight.configure({
    languageClassPrefix: '',
    lowlight,
  }),
  BulletList,
  OrderedList,
];
