window.onload = function() {
    
    var pad = document.getElementById('pad');
    
    sharejs.open(document.location.pathname, 'text', function(error, doc) {
        
        doc.attach_textarea(pad);
    });

    
};