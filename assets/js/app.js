// TYNYMCE
/*
tinymce.init({
    selector:'.tinymce'
});
*/
tinymce.init({
    selector : ".tinymce",
    plugins: [
        "advlist autolink lists link charmap print preview anchor textcolor",
        "searchreplace visualblocks code fullscreen",
        "insertdatetime table contextmenu paste textcolor",
        "autoresize"
    ],
    autoresize_bottom_margin: 20,
    toolbar: "insertfile undo redo | styleselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | forecolor backcolor",
    formats: {
        alignleft: {
            inline: 'span',
            styles: {
                display: 'block',
                textAlign: 'left'
            }
        },
        aligncenter: {
            inline: 'span',
            styles: {
                display: 'block',
                textAlign: 'center'
            }
        },
        alignright: {
            inline: 'span',
            styles: {
                display: 'block',
                textAlign: 'right'
            }
        },
        alignjustify: {
            inline: 'span',
            styles: {
                display: 'block',
                textAlign: 'justify'
            }
        },
    }
});

// SHOW OR HIDE PASSWORD
$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        const input = $('#show_hide_password input');
        const i = $('#show_hide_password i');
        if(input.attr("type") === "text"){
            input.attr('type', 'password');
            i.removeClass( "fa-eye" );
            i.addClass( "fa-eye-slash" );
        }else if(input.attr("type") === "password"){
            input.attr('type', 'text');
            i.removeClass( "fa-eye-slash" );
            i.addClass( "fa-eye" );
        }
    });
});

// FOR THE UPLOAD BUTTON
'use strict';
( function ( document, window, index )
{
    const inputs = document.querySelectorAll('.upload');
    Array.prototype.forEach.call( inputs, function( input )
    {
        const label	 = input.previousElementSibling,
            labelVal = label.innerHTML;

        input.addEventListener( 'change', function( e )
        {
            let fileName = '';
            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                label.querySelector( 'span' ).innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });

        // Firefox bug fix
        input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
        input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    });
}( document, window, 0 ));

// CLASS TO CONFIRM A DANGEROUS ACTION ON A LINK
$(function() {
    $('.js-confirm-link').click(function(e) {
        e.preventDefault();
        if (window.confirm("Etes-vous sûr d'effectuer cette action ? Les données supprimées ne pourront être récupérées !")) {
            location.href = this.href;
        }
    });
});
// or with a beautiful modal
$(function() {
    $('.js-confirm-modal').click(function(e) {
        e.preventDefault();
        const href = $(e.currentTarget).attr("href");
        $("#js-confirm-modal").find("a").first().attr("href", href);
    });
});

// CLASS TO CONFIRM A DANGEROUS ACTION ON A FORM
$(function() {
    $('.js-confirm-form').submit(function(e) {
        e.preventDefault();
        if (window.confirm("Etes-vous sûr d'effectuer cette action ? Les données supprimées ne pourront être récupérées !")) {
            this.submit();
        }
    });
});

// SCROLLPSY / ANCHOR / GO TO ID
$('.js-scrollTo').click(function() {
    const page = $(this).attr('href');
    const speed = 1250;
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
});