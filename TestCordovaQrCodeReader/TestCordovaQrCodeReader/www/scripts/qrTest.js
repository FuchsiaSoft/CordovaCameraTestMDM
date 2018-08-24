function scanMyQrCode() {

    



};

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btnScan').addEventListener('click', clickHandler);
    main();
});

function clickHandler(element) {
    // On click Code

    cordova.plugins.barcodeScanner.scan(
        function (result) {
            if (!result.cancelled) {
                $("#resultFormat").text("Barcode type is: " + result.format)
                $("#resultText").text("Decoded text is: " + result.text);
            }
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );

    $("#btnScan").text("RE-SCAN ANOTHER QR CODE");
}

function main() {
    // Initialization work goes here.
}
