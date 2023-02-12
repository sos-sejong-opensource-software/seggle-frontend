import { Button, Input, Label } from '@/components';
import { Textarea } from '@/components/atom/Textarea';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type ProposalCreateEditFormProps = {
  data?: {
    title: string;
    context: string;
  };
  onProposalMutate?: (data: CreateEditProposalRequest) => void;
};

export function ProposalCreateEditForm({ data, onProposalMutate }: ProposalCreateEditFormProps) {
  const navigate = useNavigate();
  const [title, _context] = data ? [data.title, data.context] : ['', ''];
  const [context, setContext] = useState(_context);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    const data = {
      title: String(formData.get('title')) ?? '',
      context,
    };
    if (onProposalMutate !== undefined) onProposalMutate(data);
  };

  return (
    <form onSubmit={handleFormSubmit} className="w-full">
      <>
        <Label>제목</Label>
        <Input className="w-full" defaultValue={title} name="title" />
      </>
      <>
        <Label>내용</Label>
        <Textarea className="w-full" />
      </>
      <div className="flex float-right gap-2">
        <Button type="button" onClick={() => navigate(-1)}>
          취소
        </Button>
        <Button>저장</Button>
      </div>
    </form>
  );
}
