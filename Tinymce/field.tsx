import React, { useRef } from 'react';
import { useField } from 'payload/components/forms';
import { Editor } from '@tinymce/tinymce-react';

const Field: React.FC<{ path: string; label: string }> = ({ path, label }) => {
	const editorRef = useRef(null) as any;

	const { value, setValue } = useField<string>({ path });

	const handleEditorChange = () => {
		if(!editorRef.current) {
			return;
		}
		setValue((editorRef.current).getContent());
	};

	return (
		<div
			style={{
				marginBottom: '1rem',
			}}
		>
			<div
				style={{
					fontSize: '1.8rem',
					fontWeight: 500,
                    marginBottom: '0.5rem'
				}}
			>
				{label}
			</div>
			<Editor
				apiKey="h2fql42ncnvi0795pm53or0zodz9gn6jdo3ekspb37dfpprf" // Replace with own string
				init={{
					skin: 'oxide-dark',
					content_css: 'dark',
					menubar: false,
					statusbar: false,
					plugins: 'autoresize',
					min_height: 300,
				}}
				initialValue={value}
				onInit={(evt, editor) => (editorRef.current = editor)}
				onBlur={handleEditorChange}
			/>
		</div>
	);
};

export default Field;
