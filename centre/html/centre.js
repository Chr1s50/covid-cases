function listAttributes(obj) {
     // First, let's verify that the obj has some attributes
     if (obj.hasAttributes()) {
       var attrs = obj.attributes;
       var output = "";
       for(var i = attrs.length - 1; i >= 0; i--) {
         output += " " + attrs[i].name + "->" + attrs[i].value;
       }
	 console.log(output);
     } else {
	 console.log("No attributes to show");
     }
   }


function hideshow(id,divid,text) {
	console.log('hideshow button clicked ' + id);
	if ($(divid).is(":hidden") ) {
	    console.log(id + " " + divid + " hidden");
	    $(id).prop("innerHTML",text.replace('\u142f','\u1431'));
	    $(divid).show();
	} else {
	    console.log(id + " " + divid + " visible");
	    $(id).prop("innerHTML",text.replace('\u1431', '\u142f'));
	    $(divid).hide()
	}
    }
    $(document).ready(function() {
	console.log('v01');
        $('.r2').hide();
        $('.r3').hide();
	$(".sbutton").click(function(event) {
	    id = $(this).attr('id');
	    text = $(this).prop("innerHTML");
            //listAttributes(this);
	    //id = this.getAttribute('id');
	    console.log("r1 button click, id=" + id + ", text=" + text );
	    hideshow('#' + id, '.' + id, text);
            $('.r3').hide();
	});
	$(".nbutton").click(function(event) {
	    id = $(this).attr('id');
	    text = $(this).prop("innerHTML");
            //listAttributes(this);
	    //id = this.getAttribute('id');
	    console.log("r2 button click, id=" + id + ", text=" + text );
	    hideshow('#' + id, '.' + id, text);
	});
    });
