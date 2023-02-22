import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.css';

export function Editor({ value, onChange }: ReactQuillProps) {
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        [{ font: [] }],
        [{ align: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ],
    },
  };

  return <ReactQuill value={value} theme="snow" modules={modules} onChange={onChange} />;
}
