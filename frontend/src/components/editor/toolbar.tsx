import { cn } from '@/lib/utils';
import {
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconBlockquote,
  IconBold,
  IconBracketsAngle,
  IconCode,
  IconItalic,
  IconList,
  IconListCheck,
  IconListNumbers,
  IconMenu2,
  IconStrikethrough,
  IconUnderline,
} from '@tabler/icons-react';
import { Editor } from '@tiptap/core';
import { Level } from '@tiptap/extension-heading';
import React, { Key, useCallback } from 'react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';

type ToggleButtonProps = {
  icon: React.ReactNode;
  onClick: () => void;
  active: boolean;
};
function ToggleButton({ icon, onClick, active }: ToggleButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={onClick}
      className={cn(
        'cursor-pointer !rounded-sm hover:bg-ring/50 hover:text-accent-foreground size-auto p-2',
        active && '!bg-primary !text-primary-foreground'
      )}
    >
      {icon}
    </Button>
  );
}

type SelectorButtonProps<T> = {
  options: Array<{ label: string; value: T }>;
  onSelect: (value: string) => void;
  selected: string;
};
function SelectorButton<T = string>({ options, onSelect, selected }: SelectorButtonProps<T>) {
  return (
    <Select value={selected} onValueChange={onSelect}>
      <SelectTrigger className="!rounded-sm size-auto cursor-pointer bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map((option) => (
            <SelectItem key={option.value as Key} value={String(option.value)}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

type EditorToolBarProps = {
  editor: Editor;
};
export default function EditorToolBar({ editor }: EditorToolBarProps) {
  const toggleHeading = useCallback(
    (level: Level) => {
      editor.chain().focus().toggleHeading({ level }).run();
    },
    [editor]
  );

  const toggleBold = useCallback(() => {
    editor.chain().focus().toggleBold().run();
  }, [editor]);

  const toggleUnderline = useCallback(() => {
    editor.chain().focus().toggleUnderline().run();
  }, [editor]);

  const toggleItalic = useCallback(() => {
    editor.chain().focus().toggleItalic().run();
  }, [editor]);

  const toggleTextAlign = useCallback(
    (align = 'left') => {
      editor.chain().focus().setTextAlign(align).run();
    },
    [editor]
  );

  const toggleBlockquote = useCallback(() => {
    editor.chain().focus().toggleBlockquote().run();
  }, [editor]);

  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);

  const toggleCode = useCallback(() => {
    editor.chain().focus().focus().toggleCode().run();
  }, [editor]);

  const toggleCodeBlock = useCallback(() => {
    editor.chain().toggleCodeBlock().run();
  }, [editor]);

  const toggleListBullet = useCallback(() => {
    editor.chain().focus().toggleBulletList().run();
  }, [editor]);

  const toggleOrderedList = useCallback(() => {
    editor.chain().focus().toggleOrderedList().run();
  }, [editor]);

  const toggleTaskList = useCallback(() => {
    editor.chain().focus().toggleTaskList().run();
  }, [editor]);

  return (
    <div className="relative z-10 flex items-center bg-background gap-2 p-2 border border-border rounded-ss-md rounded-se-md">
      <SelectorButton
        selected={String((editor.getAttributes('heading') as { level: Level }).level || 0)}
        options={[
          { label: 'Paragraph', value: 0 },
          { label: 'Heading 1', value: 1 },
          { label: 'Heading 2', value: 2 },
          { label: 'Heading 3', value: 3 },
          { label: 'Heading 4', value: 4 },
          { label: 'Heading 5', value: 5 },
        ]}
        onSelect={(value) => toggleHeading(Number(value) as Level)}
      />

      <div className="flex items-center gap-1">
        <ToggleButton icon={<IconBold stroke={2.5} />} active={editor.isActive('bold')} onClick={toggleBold} />
        <ToggleButton icon={<IconItalic stroke={2.5} />} active={editor.isActive('italic')} onClick={toggleItalic} />
        <ToggleButton
          icon={<IconUnderline stroke={2.5} />}
          active={editor.isActive('underline')}
          onClick={toggleUnderline}
        />
        <ToggleButton
          icon={<IconStrikethrough stroke={2.5} />}
          active={editor.isActive('strike')}
          onClick={toggleStrike}
        />
      </div>
      <Separator orientation="vertical" className={cn('bg-border w-px !h-6')} />
      <div className="flex items-center gap-1">
        <ToggleButton
          icon={<IconList stroke={2.5} />}
          active={editor.isActive('bulletList')}
          onClick={toggleListBullet}
        />
        <ToggleButton
          icon={<IconListNumbers stroke={2.5} />}
          active={editor.isActive('orderedList')}
          onClick={toggleOrderedList}
        />

        <ToggleButton
          icon={<IconListCheck stroke={2.5} />}
          active={editor.isActive('taskList')}
          onClick={toggleTaskList}
        />
      </div>
      <Separator orientation="vertical" className={cn('bg-border w-px !h-6')} />
      <div className="flex items-center gap-1">
        <ToggleButton
          icon={<IconAlignLeft stroke={2.5} />}
          active={editor.isActive({ textAlign: 'left' })}
          onClick={() => toggleTextAlign('left')}
        />
        <ToggleButton
          icon={<IconAlignCenter stroke={2.5} />}
          active={editor.isActive({ textAlign: 'center' })}
          onClick={() => toggleTextAlign('center')}
        />
        <ToggleButton
          icon={<IconAlignRight stroke={2.5} />}
          active={editor.isActive({ textAlign: 'right' })}
          onClick={() => toggleTextAlign('right')}
        />
        <ToggleButton
          icon={<IconMenu2 stroke={2.5} />}
          active={editor.isActive({ textAlign: 'justify ' })}
          onClick={() => toggleTextAlign('justify ')}
        />
      </div>
      <Separator orientation="vertical" className={cn('bg-border w-px !h-6')} />
      <div className="flex items-center gap-1">
        <ToggleButton
          icon={<IconBlockquote stroke={2.5} />}
          active={editor.isActive('blockquote')}
          onClick={toggleBlockquote}
        />
        <ToggleButton icon={<IconBracketsAngle stroke={2.5} />} active={editor.isActive('code')} onClick={toggleCode} />
        <ToggleButton
          icon={<IconCode stroke={2.5} />}
          active={editor.isActive('codeBlock')}
          onClick={toggleCodeBlock}
        />
      </div>
    </div>
  );
}
