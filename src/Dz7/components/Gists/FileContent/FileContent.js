import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Spinner from '../../common/Spinner/Spinner';
import './FileContent.css';

export default function FileContent() {
  const files = useSelector(state => state.files.data);
  const fileLoading = useSelector(state => state.files.loading);
  const selectedFile = files.find(x => x.selected);
  useEffect(() => {
  }, [files]);

  if (!selectedFile && !fileLoading) return '';
  
  return (
    <div className="user-file">
      {fileLoading && <Spinner isActive={fileLoading}/>}
      {!fileLoading &&
      <>
        <div className="title">File Content</div>
        <div className="file-content">
          <SyntaxHighlighter language={selectedFile.language && selectedFile.language.toLowerCase()} style={dark}>
            {selectedFile.content}
          </SyntaxHighlighter>
        </div>
      </>
      }
    </div>
  )
}
