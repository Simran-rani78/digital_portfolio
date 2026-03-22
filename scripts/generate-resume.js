import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function createResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margin = 50;
  let y = height - margin;

  const addText = (text, size = 12, bold = false) => {
    const f = bold ? fontBold : font;
    page.drawText(text, { x: margin, y, size, font: f });
    y -= size + 4;
  };

  const addSpace = (space = 8) => {
    y -= space;
  };

  // Header
  addText('SIMRAN RANI', 24, true);
  addText('Frontend Developer & AI Enthusiast', 14);
  addSpace(12);

  // Contact
  addText('Contact', 14, true);
  addText('Email: simranrani78295@gmail.com', 11);
  addText('Phone: +91 7015839879', 11);
  addText('LinkedIn: linkedin.com/in/simran-rani78', 11);
  addText('GitHub: github.com/Simran-rani78', 11);
  addSpace(12);

  // Education
  addText('Education', 14, true);
  addText('B.Tech (IT) - Lovely Professional University | CGPA: 7.73', 11);
  addSpace(12);

  // Experience
  addText('Experience', 14, true);
  addText('AI Intern - Microsoft x Edunet Foundation (Apr–May 2025)', 11);
  addText('AI & ML Trainee - Lovely Professional University (Jun–Jul 2025)', 11);
  addSpace(12);

  // Skills
  addText('Skills', 14, true);
  addText('React, Node.js, JavaScript, Python, C++, Java, MongoDB, Git', 11);
  addSpace(12);

  addText('— Add your full resume content here. Replace this file with your actual resume PDF —', 9);

  const pdfBytes = await pdfDoc.save();
  const outputPath = join(__dirname, '..', 'public', 'my_cv.pdf');
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, pdfBytes);
  console.log('Created:', outputPath);
}

createResume().catch(console.error);
