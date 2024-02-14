//simple but wrong

function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
}
  
alert( randomInteger(1, 3) );


// values from 1    ... to 1.4999999999  become 1
// values from 1.5  ... to 2.4999999999  become 2
// values from 2.5  ... to 2.9999999999  become 3


//correct

function random(min, max) {
    return min + Math.random() * (max - min);
}
  
alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

// values from 1  ... to 1.9999999999  become 1
// values from 2  ... to 2.9999999999  become 2
// values from 3  ... to 3.9999999999  become 3