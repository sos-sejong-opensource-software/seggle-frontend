import { Heading } from '@/components';
import { PAGE } from '@/constants';
import { useParams } from 'react-router-dom';
import { AdminCreateEditForm } from './components';
import { useAdminFaqQuery, useEditFaqMutation } from './hooks/query';

export function AdminEditFaq() {
  const { id: faqId } = useParams() as { id: string };
  const { mutate: editFaq } = useEditFaqMutation();

  const onFaqMutate = (data: CreateEditFaqRequest) => {
    editFaq({ faqId, payload: data });
  };

  const { data: queryData } = useAdminFaqQuery(faqId);

  const { question, answer, ...res } = queryData;
  const data = {
    title: question,
    context: answer,
    ...res,
  };

  return (
    <div className="container">
      <Heading as="h3" className="pageTitle">
        {PAGE.EDIT_Faq}
      </Heading>
      <AdminCreateEditForm mode="faq" data={data} onFaqMutate={onFaqMutate} />
    </div>
  );
}
