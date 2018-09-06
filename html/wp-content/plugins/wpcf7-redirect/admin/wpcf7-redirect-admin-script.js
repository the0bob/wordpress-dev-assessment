jQuery(document).ready(function($) {
	jQuery( '#wpcf7-redirect-open-in-new-tab' ).change(function() {
        if ( jQuery( this ).is( ":checked" ) ) {
            jQuery( '.field-notice-alert' ).removeClass( 'field-notice-hidden' );
        } else {
        	jQuery( '.field-notice-alert' ).addClass( 'field-notice-hidden' );
        }
    });

    if ( jQuery( '[name="wpcf7-redirect-open-in-new-tab"]' ).is( ":checked" ) ) {
    	jQuery( '.field-notice-alert' ).removeClass( 'field-notice-hidden' );
    }

    jQuery( '#wpcf7-redirect-after-sent-script' ).keyup(function(event) {
        if ( ! jQuery(this).val().length == 0 ) {
            jQuery( '.field-warning-alert' ).removeClass( 'field-notice-hidden' );
        } else {
            jQuery( '.field-warning-alert' ).addClass( 'field-notice-hidden' );
        }
    });
});
