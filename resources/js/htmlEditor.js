import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { List } from '@ckeditor/ckeditor5-list';

class Editor extends ClassicEditor {
    constructor(element, config) {
        super(element, config);
    }
}

Editor.builtinPlugins = [
    List,
];

Editor.defaultConfig = {
    toolbar: {
        items: [
            'alignment',
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'imageUpload',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'undo',
            'redo'
        ]
    },
};

export default Editor;
