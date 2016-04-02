window.onload = function() {
    
    var pad = document.getElementById('pad');

    sharejs.open('home', 'text', function(error, doc) {
        
        doc.attach_textarea(pad);
    });

    
};