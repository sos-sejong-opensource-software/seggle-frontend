import { Button, Input, Label } from '@/components';
import { Editor } from '@/components/atom/Editor';
import { Switch } from '@/components/atom/Switch';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ANNOUNCEMENT_LABEL, FAQ_LABEL } from '../constants';

type AdminCreateEditFormProps = {
  mode: 'announcement' | 'faq';
  data?: {
    title: string;
    context: string;
    visible: boolean;
    important?: boolean;
  };
  onAnnouncementMutate?: (data: CreateEditAnnouncementRequest) => void;
  onFaqMutate?: (data: CreateEditFaqRequest) => void;
};

export function AdminCreateEditForm({
  mode,
  data,
  onFaqMutate,
  onAnnouncementMutate,
}: AdminCreateEditFormProps) {
  const LABEL = mode === 'announcement' ? ANNOUNCEMENT_LABEL : FAQ_LABEL;
  const navigate = useNavigate();
  const [title, _context, visible, important] = data
    ? [data.title, data.context, data.visible, data.important ?? false]
    : ['', '', false, false];
  const [context, setContext] = useState(_context);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    if (mode === 'announcement') {
      const data = {
        title: String(formData.get('title')) ?? '',
        context,
        visible: Boolean(formData.get('visible')) ?? false,
        important: Boolean(formData.get('important')) ?? false,
      };
      if (onAnnouncementMutate !== undefined) onAnnouncementMutate(data);
    }
    if (mode === 'faq') {
      const data = {
        question: String(formData.get('title')) ?? '',
        answer: context,
        visible: Boolean(formData.get('visible')) ?? false,
      };
      if (onFaqMutate !== undefined) onFaqMutate(data);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full">
      <>
        <Label>{LABEL.TITLE}</Label>
        <Input className="w-full" defaultValue={title} name="title" />
      </>
      <>
        <Label>{LABEL.CONTEXT}</Label>
        <Editor
          value={context}
          onChange={(value) => {
            setContext(value);
          }}
        />
      </>
      <div className="flex gap-4">
        <div className="flex gap-2">
          <Label>{LABEL.VISIBLE}</Label>
          <Switch
            key={`${mode}_${title}_visible_${String(visible)}`}
            enabled={visible}
            name="visible"
          />
        </div>
        {mode === 'announcement' && (
          <div className="flex gap-2">
            <Label>??????</Label>
            <Switch
              key={`${mode}_${title}_important_${String(important)}`}
              enabled={important}
              name="important"
            />
          </div>
        )}
      </div>
      <div className="flex float-right gap-2">
        <Button type="button" onClick={() => navigate(-1)}>
          ??????
        </Button>
        <Button>??????</Button>
      </div>
    </form>
  );
}
