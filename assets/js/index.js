{
    let step = 0;
    // variable initializations
    const negative_messages = [
    'Are you absolutely positive?',
    'Seriously? Like, for real?',
    'Nah, try again.',
    'Oops, wrong answer!',
    'Umm... that would be a nope.',
    'Oh, sweetie, that is so not the right answer!',
    'Come on, you can do better than that.',
    'Let\'s give it another shot.',
    ];
    
    const negative_cat_images = ['angry_cat_1.jpg', 'angry_cat_2.jpg', 'angry_cat_3.gif', 'angry_cat_4.gif', 'angry_cat_5.gif', 'angry_cat_6.gif'];

    // DOM elements
    const message_element = document.getElementById('message');
    const image_element = document.getElementById('catImage');

    // method definitions
    const answer_click_handler = (event) => {
        event.currentTarget.dataset.answer === 'yes'?
            positive_answer():
            negative_answer();
    }
    const get_random_message = () => {
        return negative_messages[negative_messages.length * Math.random() | 0]
    }

    const get_random_image = () => {
        return negative_cat_images[negative_cat_images.length * Math.random() | 0]
    }

    const change_cat_image = (cat_image_url) => {
        image_element.src = cat_image_url;
    }

    const change_text = (message) => {
        message_element.innerText = message;
    }
    const positive_answer = () => {
        change_text('Great see you the 14th  Babe!');
        change_cat_image(`assets/images/happy_cat.gif`)
    }

    const negative_answer = () => {
        let message = get_random_message();
        const image = get_random_image();
        if (step === 9) {
            message = "Last chance...";
        }
        if(step >= 10) {
            remove_no_button();
        }
        change_text(message);
        change_cat_image(`assets/images/${image}`)
        step++;
    }

    const remove_no_button = () => {
        const noButton = document.querySelector('[data-answer="no"]');
        if (noButton) {
            noButton.remove();
        }
    }

    const main = () => {
        const answer_buttons = document.querySelectorAll('[data-answer]');
        for (const answer_button of answer_buttons)
            answer_button.addEventListener('click', answer_click_handler);

    }

    // this created a new context
    document.onload = main();
}