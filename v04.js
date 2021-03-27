    function hideshow(id,divid,text) {
	console.log('hideshow button clicked ' + id);
	if ($(divid).is(":hidden") ) {
	    console.log(id + " " + divid + " hidden");
	    $(id).prop("innerHTML","Hide " + text + " &#x1431;");
	    $(divid).show();
	} else {
	    console.log(id + " " + divid + " visible");
	    $(id).prop("innerHTML","Show " + text + " &#x142f;");
	    $(divid).hide()
	}
    }
    $(document).ready(function() {
	console.log('v04');
        $('#changes').hide();
        $('#vert').hide();
        $('#horiz').hide();
        $('#key').hide();
        $('#regions').hide();
        $('#info').show();
        $('#notes').hide();
	$("#hs_changes").click(function(event) {
	    hideshow('#hs_changes','#changes','Recent changes');
	});
	$("#hs_vert").click(function(event) {
	    hideshow('#hs_vert','#vert','Key to vertical lines');
	});
	$("#hs_horiz").click(function(event) {
	    hideshow('#hs_horiz','#horiz','Key to horizontal lines');
	});
	$("#hs_notes").click(function(event) {
	    hideshow('#hs_notes','#notes','Notes');
	});
	$("#hs_info").click(function(event) {
	    hideshow('#hs_info','#info','Information');
	});
	$("#hs_regions").click(function(event) {
	    hideshow('#hs_regions','#regions','Regions');
	});
	$("#hs_key").click(function(event) {
	    hideshow('#hs_key','#key','Key to colours');
	});
	$(".rdisp").change(function(event) {
	    console.log('rdisp checkbox changed ' + $(this).prop('id') );
            if ($(this).prop('checked')) {
		console.log('rdisp checkbox changed ' + $(this).prop('id') + " checked");
		if ($(this).prop('id') == 'all') {
		    $('tr.a').show();
		    $('.rdisp').prop('checked',true);
		} else {
		    thisid = $(this).prop('id');
		    $('tr.' + thisid).show();
		}
	    } else {
		if ($(this).prop('id') == 'all') {
		    $('tr.a').hide();
		    $('.rdisp').prop('checked',false);
		} else {
		    thisid = $(this).prop('id');
		    $('tr.' + thisid).hide();

		}
	    }
	});
	$(".aldisp").change(function(event) {
	    //console.log('aldisp checkbox changed ' + $(this).prop('id') );
            if ($(this).prop('checked')) {
		//console.log('aldisp checkbox changed ' + $(this).prop('id') + " checked");
		if ($(this).prop('id') == 'all') {
		    $('td.nld').css(  "border-bottom" ,  "3px solid purple"  );
		    $('td.sah').css(  "border-bottom" ,  "3px solid blue"  );
		    $('td.vh').css(  "border-bottom" ,  "3px solid dodgerblue"  );
		    $('td.h').css(  "border-bottom" ,  "3px solid cyan"  );
		    $('td.m').css(  "border-bottom" ,  "3px solid yellow"  );
		    $('td.lld').css(  "border-bottom" ,  "3px solid aquamarine"  );
		    $('.aldisp').prop('checked',true);
		} else if ($(this).prop('id') == 'nld') {
		    $('td.nld').css(  "border-bottom" ,  "3px solid purple"  );
		} else if ($(this).prop('id') == 'sah') {
		    $('td.sah').css(  "border-bottom" ,  "3px solid blue"  );
		} else if ($(this).prop('id') == 'vh') {
		    $('td.vh').css(  "border-bottom" ,  "3px solid dodgerblue"  );
		} else if ($(this).prop('id') == 'h') {
		    $('td.h').css(  "border-bottom" ,  "3px solid cyan"  );
		} else if ($(this).prop('id') == 'm') {
		    $('td.m').css(  "border-bottom" ,  "3px solid yellow"  );
		} else if ($(this).prop('id') == 'lld') {
		    $('td.lld').css(  "border-bottom" ,  "3px solid aquamarine"  );
		}
	    } else {
		//console.log('aldisp checkbox changed ' + $(this).prop('id') + " not checked");
		if ($(this).prop('id') == 'all') {
		    $('td.nld').css(  "border-bottom" ,  "1px solid black"  );
		    $('td.sah').css(  "border-bottom" ,  "1px solid black"  );
		    $('td.vh').css(  "border-bottom" ,  "1px solid black"  );
		    $('td.h').css(  "border-bottom" ,  "1px solid black"  );
		    $('td.m').css(  "border-bottom" ,  "1px solid black"  );
		    $('td.lld').css(  "border-bottom" ,  "1px solid black"  );
		    $('.aldisp').prop('checked',false);
		} else if ($(this).prop('id') == 'nld') {
		    $('td.nld').css(  "border-bottom" ,  "1px solid black"  );
		} else if ($(this).prop('id') == 'sah') {
		    $('td.sah').css(  "border-bottom" ,  "1px solid black"  );
		} else if ($(this).prop('id') == 'vh') {
		    $('td.vh').css(  "border-bottom" ,  "1px solid black"  );
		} else if ($(this).prop('id') == 'h') {
		    $('td.h').css(  "border-bottom" ,  "1px solid black"  );
		} else if ($(this).prop('id') == 'm') {
		    $('td.m').css(  "border-bottom" ,  "1px solid black"  );
		} else if ($(this).prop('id') == 'lld') {
		    $('td.lld').css(  "border-bottom" ,  "1px solid black"  );
		}
	    }
	});
	$("#search").keyup(function(event) {
	    //console.log('search changed ' + $(this).prop('id') + ', text=' + $(this).val() );
	    var str1 = 'tr.a[id*="' + $(this).val().toLowerCase() + '"]';
	    var str2 = 'tr.a:not([id*="' + $(this).val().toLowerCase() + '"])';
	    //console.log("select str1='" + str1 +"'");
	    //console.log("select str2='" + str2 +"'");
	    $(str1).show();
	    $(str2).hide();
	});
    });
