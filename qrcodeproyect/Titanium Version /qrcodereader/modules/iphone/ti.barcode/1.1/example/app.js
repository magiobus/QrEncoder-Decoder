var window = Ti.UI.createWindow({
    backgroundColor: 'white'
});

var button = Ti.UI.createButton({
    title: 'Scan Code',
    width: 150, height: 40,
    top: 20
});
window.add(button);

window.add(Ti.UI.createLabel({
    text: 'You may need to rotate the device',
    top: 70,
    height: 'auto', width: 'auto',
    font: { fontSize: 12 }
}));

window.open();

Titanium.Barcode = Ti.Barcode = require('ti.barcode');
Ti.Barcode.allowRotation = true;

button.addEventListener('click', function() {
    Ti.Barcode.capture({
        success: function(event) {
            var msg = '';
            switch (event.contentType) {
                case Ti.Barcode.URL:
                    msg = 'URL = ' + event.result;
                    break;
                case Ti.Barcode.SMS:
                    msg = 'SMS = ' + event.data.phonenumber;
                    break;
                case Ti.Barcode.TELEPHONE:
                    msg = 'Telephone = ' + event.data.phonenumber;
                    break;
                case Ti.Barcode.TEXT:
                    msg = 'Text = ' + event.result;
                    break;
                case Ti.Barcode.CALENDAR:
                    msg = 'Calendar = ' + JSON.stringify(event.data);
                    break;
                case Ti.Barcode.GEOLOCATION:
                    msg = 'Latitude = ' + event.data.latitude + '\nLongitude = ' + event.data.longitude;
                    break;
                case Ti.Barcode.EMAIL:
                    msg = 'EMail = ' + event.data.email + '\nSubject = ' + event.data.subject + '\nMessage = ' + event.data.message;
                    break;
                case Ti.Barcode.CONTACT:
                    msg = 'Contact = ' + JSON.stringify(event.data);
                    break;
                case Ti.Barcode.BOOKMARK:
                    msg = 'Bookmark = ' + JSON.stringify(event.data);
                    break;
                default:
                    msg = 'unknown content type';
                    break;
            }
            alert(msg + '\n' + event.result);
        },
        cancel: function(event) {
            alert('cancel');
        },
        error: function(event) {
            alert('Error. ' + event.message);
        }
    });
});
