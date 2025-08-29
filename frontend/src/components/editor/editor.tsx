import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import Extensions from './extensions';
import EditorToolBar from './toolbar';
import { EditorContentType } from './types';

type TipTapEditorProps = {
  content: EditorContentType | undefined;
  onChange: (content: EditorContentType) => void;
  placeholder?: string;
};
function TipTapEditor({ content, onChange, placeholder }: TipTapEditorProps) {
  const editor = useEditor({
    content,
    autofocus: false,
    immediatelyRender: false,
    onUpdate: ({ editor }) => onChange(editor.getJSON()),
    extensions: [...Extensions, Placeholder.configure({ placeholder: placeholder || '' })],
  });
  return (
    <div className="flex flex-col">
      {editor && <EditorToolBar editor={editor} />}
      <EditorContent editor={editor} translate="yes" />
    </div>
  );
}

export default TipTapEditor;
