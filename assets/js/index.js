let isNo = false;
let step = 0;
function changeCat() {
    isNo = true;
    const messages = [
        'Are you absolutely positive?',
        'Seriously? Like, for real?',
        'Nah, try again.',
        'Oops, wrong answer!',
        'Umm... that would be a nope.',
        'Oh, sweetie, that is so not the right answer!',
        ];
    
    const catImages = ['angry_cat_1.jpg', 'angry_cat_2.jpg', 'angry_cat_3.gif', 'angry_cat_4.gif', 'angry_cat_5.gif', 'angry_cat_6.gif'];
    let message = messages[step];
    document.getElementById('catImage').src = `assets/images/${catImages[step]}`;
    step++;
    if(!isNo) {
        document.getElementById('message').innerText = "";   
    } else {
        if(step > 5) {
            message = messages[5];
            document.getElementById('catImage').src = `assets/images/${catImages[5]}`;
        }
        document.getElementById('message').innerText = message;
    }
}

function sayYes() {
    document.getElementById('message').innerText = "Great see you the 14th  Babe!";
    document.getElementById('catImage').src = `assets/images/happy_cat.gif`;
    // Add additional actions here if needed
}
