$(document).ready(function() {
    // Función para reclutar
    $('#reclutarForm').submit(function(event) {
        event.preventDefault();
        var formData = $(this).serialize();
        $.post('/reclutar', formData, function(response) {
            $('#mensaje').text(response);
        });
    });

    // Otras funciones para eliminar, ascender, etc.
});
