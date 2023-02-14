const html5QrCode = new Html5Qrcode(/* element id */ "reader");

// This method will trigger user permissions
Html5Qrcode.getCameras().then(devices => {
    console.log("getting the cams")
    /**
     * devices would be an array of objects of type:
     * { id: "id", label: "label" }
     */
    if (devices && devices.length) {
      var cameraId = devices[0].id;
      // .. use this to start scanning.
      html5QrCode.start(
        cameraId, 
        {
          fps: 10,    // Optional, frame per seconds for qr code scanning
          qrbox: { width: 250, height: 250 }  // Optional, if you want bounded box UI
        },
        (decodedText, decodedResult) => {
          // do something when code is read
        },
        (errorMessage) => {
          // parse error, ignore it.
        })
      .catch((err) => {
        // Start failed, handle it.
      });
    }
  }).catch(err => {
    // handle err
    console.log("error getting the cams")
    console.log(err)
  });