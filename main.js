let d = parseInt(Math.random() * 5000)


  console.log(d);
if (d % 5 == 0) {
    console.log('d soni 5ga bolinadi');
} else {
    console.log('d soni 5ga bolinmaydi');
}
if (d % 3 == 0) {
    console.log('d soni 3ga bolinadi');
} else {
    console.log('d soni 3ga bolinmaydi');
}
if (d % 3 == 0) {
    if (d % 5 == 0) {
    } else {
        console.log('d soni 3ga bolinadi 5ga bolinmaydi');
    }
} else {
    console.log('d soni 3ga va 5ga bolinmaydi');
}
if (d % 5 == 0) {
    if (d % 3 == 0) {
        console.log('d soni 3ga va 5ga bolinadi');
    } else {
        console.log('d soni 5ga bolinadi 3ga bolinmaydi');
    }
}