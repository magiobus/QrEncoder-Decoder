var window = Ti.UI.createWindow({
    backgroundColor: 'white'
});

var button = Ti.UI.createButton({
    title: 'Escanear Codigo',
    width: 150, height: 40,
    top: 20
});
window.add(button);











window.open();




Titanium.Barcode = Ti.Barcode = require('ti.barcode');
Ti.Barcode.allowRotation = true;

button.addEventListener('click', function() {
    Ti.Barcode.capture({
        success: function(event) {
            var msg = '';
            
             var window2 = Titanium.UI.createWindow({  
            title:'URL',
            backgroundColor:'8DC000'
});

           
           
           
            switch (event.contentType) {
                case Ti.Barcode.URL:
       
   //si es url :  
     
            alert(msg + '\n' + event.result);
            var webview = Titanium.UI.createWebView({url:event.result});
            
            
             window2.add(webview);



       /*   // create close button for our window
	var closebutton = Ti.UI.createButton({title:'Volver',width:200,height:40,top:400});
	closebutton.addEventListener('click',function()
	{   Titanium.UI.iPhone.showStatusBar();
		window2.close({transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN}); // se le puede poner flip from left
	});
	window2.add(closebutton);*/
	
            
 window2.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});

                   // msg = 'URL = ' + event.result;
                    break;
                case Ti.Barcode.SMS:
                    msg = 'SMS = ' + event.data.phonenumber;
                    break;
                case Ti.Barcode.TELEPHONE:
                    msg = 'Telephone = ' + event.data.phonenumber;
                    break;
                case Ti.Barcode.TEXT:
                
                // Create a vertical layout view to hold all the info labels and images for each tweet
				var textview = Ti.UI.createView({
					height:'auto',
					layout:'vertical',
					left:5,
					top:5,
					bottom:5,
					right:5
				});
				
				
			 var textlabel = Ti.UI.createLabel({
					text:event.result,
					left:'auto',
					width:'auto',
					top:'auto',
					bottom:'auto',
					height:'auto',
					textAlign:'center',
					color:'#444444',
					font:{fontFamily:'Trebuchet MS',fontSize:14,fontWeight:'bold'}
				});
				// Add the username to the view
				textview.add(textlabel);
				window2.add(textview);
				
				window2.open({transition:Ti.UI.iPhone.AnimationStyle.CURL_UP});
				
                
                 //  msg = 'Text = ' + event.result;
                  // alert(msg + '\n' + event.result);
                   
                   
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
        // alert(msg + '\n' + event.result);
        },
       // cancel: function(event) {
         //   alert('cancel');
        //},
        error: function(event) {
            alert('Error. ' + event.message);
        }
        
        
   });
});
