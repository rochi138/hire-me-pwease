import { savePDF } from '../../../node_modules/@progress/kendo-react-pdf';

class DocService {
  createPdf = (html) => {
    savePDF(html, { 
      paperSize: 'Letter',
      fileName: 'my_uwu_wesume.pdf',
      margin: 3
    })
  }
}

const Doc = new DocService();
export default Doc;