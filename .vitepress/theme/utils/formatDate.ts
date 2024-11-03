export default function ( date: string ) {
    return new Date( date ).toLocaleString( 'EN', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    } );
}