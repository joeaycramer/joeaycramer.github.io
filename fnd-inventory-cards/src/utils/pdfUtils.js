import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export const generateZipFromCards = async (refs, cards) => {
  const zip = new JSZip();

  for (let i = 0; i < refs.length; i++) {
    const ref = refs[i];
    const canvas = await html2canvas(ref);
    const imgData = canvas.toDataURL('image/jpeg', 1.0);

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [105, 148]
    });

    pdf.addImage(imgData, 'JPEG', 0, 0, 105, 148);
    const pdfBlob = pdf.output('blob');
    zip.file(`card_${i + 1}.pdf`, pdfBlob);
  }

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  saveAs(zipBlob, 'inventory_cards.zip');
};
