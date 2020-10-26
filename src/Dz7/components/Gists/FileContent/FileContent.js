import React from 'react';
import { useSelector } from 'react-redux';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getFilesLoading, getSelectedFile } from '../../../redux/selectors/files';
import Spinner from '../../common/Spinner/Spinner';
import './FileContent.css';

export default function FileContent() {
  const fileLoading = useSelector(getFilesLoading);
  const selectedFile = useSelector(getSelectedFile);

  if (!selectedFile && !fileLoading) return '';
  
  return (
    <div className="user-file">
      {
        fileLoading
        ? <Spinner isActive={true}/>
        : (
          <>
            <div className="title">File Content</div>
            <div className="file-content">
              <SyntaxHighlighter language={selectedFile.language && selectedFile.language.toLowerCase()} style={dark}>
                {selectedFile.content}
              </SyntaxHighlighter>
            </div>
          </>
        )
      }
    </div>
  )
}
