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
	
	//$('#tabs-transfers').layout({ slidable: true, resizable: true });
	//$('body').layout({ slidable: false, resizable: false; closable: false });
	$('#tabs').tabs();
	
	$("#queues .ui-selectee").click(function(e){
		$(this).toggleClass("ui-selected").siblings().removeClass("ui-selected");
		queueClicked(e.target);
	});
	
	$(".progressbar").progressbar({ value: 30 });
	$("#transfers tbody").selectable({ filter: 'tr' });
	//$('body').layout({ resizable: false, slidable: false, closable: false, spacing_open: 0 });
	
	clientInit();
});
