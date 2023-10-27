import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

function Teste(nome,endereco){
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    const reportTitle = [
      {
        text: 'italo easystrsdfghjklkjhgfdsdfghjk',
        fontSize:20,
        bold:true,
        margin:[15,20,0,45]
        
      }
    ]
    const infProfissionais = []
    const objetivos = []

    const defCv = {
      pageSize: 'A4',
      pageMargins: [15, 50, 15, 40],

     header:[reportTitle],
     content:[infProfissionais],
     footer:[objetivos]
    }
    pdfMake.createPdf(defCv).open();

  }
export default Teste