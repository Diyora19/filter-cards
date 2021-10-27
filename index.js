function func() {
    let inp = document.querySelector('input').value.toLowerCase();
    let titles = document.querySelectorAll('.card-title'); // all
    let card = document.querySelectorAll('.card');

    for (let i = 0; i < titles.length; i++) {
        titleValue = titles[i].innerHTML.toLowerCase();

        if (titleValue.includes(inp)) {
            card[i].style.display = "";
        } else {
            card[i].style.display = "none";
        }
    }

}