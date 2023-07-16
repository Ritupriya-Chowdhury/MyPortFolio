import { Viewer } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library
import pdfFile from './pdf/Ritu.pdf'
import {  useState,createRef } from 'react';


const Resume = () => {
    const [viewPdf] = useState(pdfFile);
    // const pagesContainerRef = createRef();
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    const pagesContainerRef = createRef();
    return (
      <div>
        {viewPdf && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
            <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]} containerRef={pagesContainerRef}/>
            
          </Worker>
        )}
      </div>
    );
  };
  export default Resume;