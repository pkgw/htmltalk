#! /bin/sh

# You can recover the ID of the pdfjs Git commit from which these files were
# built by looking at the `PDFJS.build` variable at the top of the downloaded
# pdf.js.

fetch="curl -s"
root='http://mozilla.github.io/pdf.js'
set -e

$fetch "$root/build/pdf.js" >pdfjs/pdf.js
$fetch "$root/build/pdf.worker.js" >pdfjs/pdf.worker.js
$fetch "$root/web/compatibility.js" >pdfjs/compatibility.js
