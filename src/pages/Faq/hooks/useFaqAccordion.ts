import { useFaqQuery } from '../hooks/query';

export const useFaqAccordion = () => {
  /** TODO: 성공, 에러 처리 추가 필요 */
  const { data } = useFaqQuery();

  return data
    .sort(({ created_time: prev }, { created_time: next }) => +new Date(prev) - +new Date(next))
    .filter(({ visible }) => visible)
    .map(({ id, question, answer }) => ({ id, question, answer }))
    .map(({ id, question, answer }) => ({ id, title: question, content: answer }));
};
