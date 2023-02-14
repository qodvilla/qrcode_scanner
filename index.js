const get = async () => {
    const response = await fetch("https://swapi.dev/api/people/1/");
    const data = await response.json();
    alert(data);
}

function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    get();
    alert(`Code matched = ${decodedText}`, decodedResult);
  }
  
  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    // alert(`Code scan error = ${error}`);
  }
  
  let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ true);
  html5QrcodeScanner.render(onScanSuccess, onScanFailure);