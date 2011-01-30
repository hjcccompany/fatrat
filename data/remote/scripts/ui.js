$(document).ready(function() {
	$('#toolbar-add').button({ text: false, icons: { primary: 'fatrat-icon-add' } });
	$('#toolbar-delete').button({ text: false, icons: { primary: 'fatrat-icon-delete' } });
	$('#toolbar-delete-with-data').button({ text: false, icons: { primary: 'fatrat-icon-delete-with-data' } });
	$('#toolbar-delete-completed').button({ text: false, icons: { primary: 'fatrat-icon-delete-completed' } });
	$('#toolbar-set1').buttonset();
	
	$('#toolbar-resume').button({ text: false, icons: { primary: 'fatrat-icon-resume' } });
	$('#toolbar-force-resume').button({ text: false, icons: { primary: 'fatrat-icon-force-resume' } });
	$('#toolbar-pause').button({ text: false, icons: { primary: 'fatrat-icon-pause' } });
	$('#toolbar-set2').buttonset();
	
	$('#toolbar-move-top').button({ text: false, icons: { primary: 'fatrat-icon-move-top' } });
	$('#toolbar-move-up').button({ text: false, icons: { primary: 'fatrat-icon-move-up' } });
	$('#toolbar-move-down').button({ text: false, icons: { primary: 'fatrat-icon-move-down' } });
	$('#toolbar-move-bottom').button({ text: false, icons: { primary: 'fatrat-icon-move-bottom' } });
	$('#toolbar-set3').buttonset();
	
	$('#toolbar-queue-add').button({ text: false, icons: { primary: 'fatrat-icon-queue-add' } });
	$('#toolbar-queue-delete').button({ text: false, icons: { primary: 'fatrat-icon-queue-delete' } });
	$('#toolbar-set4').buttonset();
	
	$('#toolbar-settings').button({ text: false, icons: { primary: 'fatrat-icon-settings' } });
	$('#toolbar-set5').buttonset();
	
	$('#toolbar-help').button({ text: false, icons: { primary: 'fatrat-icon-help' } });
	$('#toolbar-set6').buttonset();
	
	$('#toolbar-help').click(function() { window.open("http://fatrat.dolezel.info/documentation"); } );
	
	$('#tabs').tabs({ show: function() { updateSizes(); tabSwitched(true); } });
	$("#tabs-tsg-img").load(function() { $("#tabs-tsg-img").attr('style','visibility: visible'); });
	$("#tabs-qsg-img").load(function() { $("#tabs-qsg-img").attr('style','visibility: visible'); });
	
	$("#queues .ui-selectee").click(function(e){
		$(this).toggleClass("ui-selected").siblings().removeClass("ui-selected");
		queueClicked(e.target);
	});
	
	$(".progressbar").progressbar({ value: 30 });
	$("#transfers tbody").selectable({ filter: 'tr', selected: transfersSelectionChanged, unselected: transfersSelectionChanged, cancel: 'img' });
	
	$("#credits-link").click(function() {
		$.get('/copyrights', function(data) {
			$("#credits-text").text(data);
			window.location = '#logo'; // workaround for fucked-up Firefox
			$("#credits").dialog({
				width: 600,
				height: 300,
				modal: true
			});
		});
	});
	
	$("#queue-properties-transfer-limits").click(function() {
		checked = $(this).is(':checked');
		$("#queue-properties-count-down, #queue-properties-count-up, #queue-propeties-upasdown").attr("disabled", (checked)?"":"disabled");
	});
	$("#queue-properties-move").click(function() {
		checked = $(this).is(':checked');
		$("#queue-properties-move-directory").attr("disabled", (checked)?"":"disabled");
	});
	
	$(window).resize(updateSizes);
	window.setTimeout(updateSizes, 250);
	
	if (window.webkitNotifications && window.webkitNotifications.checkPermission() != 0) {
		$('#popup-permissions-request').click(function() {
			window.webkitNotifications.requestPermission(function() {
				var perm = window.webkitNotifications.checkPermission();
				if (perm == 0)
					$('#popup-permissions').hide('slow');
				else if (perm == 2)
					alert("The permission was denied. If you ever decide to allow popups, you'll probably have to enable them manually in browser settings.");
			});
		});
		$('#popup-permissions').show();
	}
	
	clientInit();
});

function updateSizes() {
	ids = ['transfers-pane' /*, 'tabs-details', 'tabs-log'*/];
	curid = null;
	for (ee=0;ee<ids.length;ee++) {
		if ($('#'+ids[ee]).is(':visible')) {
			curid = ids[ee];
			break;
		}
	}

	if (!curid)
		return;
	
	pos = $('#footer').offset().top;
	bot = pos + $('#footer').height();
	newh = $('#'+curid).height() - (bot - $(window).height());
	if (newh < 100)
		newh = 100;
	$('#'+curid).height(newh);
}
