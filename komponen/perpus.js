// Perpus SMK RADEN PAKU
    // Fungsi untuk menampilkan PDF
    function showPDF(pdfURL, canvasID) {
      // Ambil elemen canvas
      const canvas = document.getElementById(canvasID);
      // Muat PDF
      pdfjsLib.getDocument(pdfURL).promise.then(function(pdfDoc) {
        // Muat halaman pertama dari PDF
        pdfDoc.getPage(1).then(function(page) {
          const viewport = page.getViewport({ scale: 1 });
          // Set ukuran canvas sesuai dengan halaman PDF
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const ctx = canvas.getContext('2d');
          // Render halaman PDF ke dalam canvas
          page.render({ canvasContext: ctx, viewport: viewport });
        });
      });
    }

    // Panggil fungsi showPDF untuk setiap PDF yang ingin ditampilkan
    showPDF('pdf/buku1.pdf', 'pdfViewer1');
    showPDF('pdf/buku2.pdf', 'pdfViewer2');
    showPDF('pdf/buku3.pdf', 'pdfViewer3');
  </script>