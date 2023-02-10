import { tw } from '@/utils/tailwindMerge';
import { Heading } from '@/components';

type ArticleProps<T extends React.ElementType> = Component<T> & {
  detail: {
    id: number;
    title: string;
    context: string;
    created_user: string;
    created_time: string;
  };
};

export function Article({ detail }: ArticleProps<'article'>) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border text-center">
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    <Heading as="h5" className="font-semibold">
                      제목
                    </Heading>
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                    colSpan={3}
                  >
                    {detail.title}
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    <Heading as="h5" className="font-semibold">
                      작성자
                    </Heading>
                  </td>
                  <td>{detail.created_user}</td>
                  <td>
                    <Heading as="h5" className="font-semibold">
                      작성일
                    </Heading>
                  </td>
                  <td>{detail.created_time}</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                    <Heading as="h5" className="font-semibold">
                      내용
                    </Heading>
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                    colSpan={3}
                  >
                    <pre>{detail.context}</pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
