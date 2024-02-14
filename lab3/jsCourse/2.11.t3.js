// -1, truthy
if (-1 || 0) alert( 'first' );

// 0, falsy
if (-1 && 0) alert( 'second' );


// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );