document.addEventListener("DOMContentLoaded", function() {
    const textInput = document.getElementById("text-input");
    const generateBtn = document.getElementById("generate-btn");
    const qrCanvas = document.getElementById("qr-code");

    generateBtn.addEventListener("click",function(){
        const text = textInput.value.trim();

        if(text === "") {
            alert("Please enter some text or URL to generate the QR code.");
            return;
        }

        qrCanvas.getContext("2d").clearRect(0, 0, qrCanvas.Width, qrCanvas.height);

        QRCode.toCanvas(qrCanvas, text, function(error){
            if(error) console.error(error);
        });
    });
});