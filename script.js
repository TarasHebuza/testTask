	const buttomShowMore = document.querySelector('.buttomShowMore');
    const moreTours = document.querySelectorAll('.showMore');

function currentSlide(n) {
    const getSlideMargin = parseInt(getComputedStyle(document.querySelector('.slides')).marginLeft);
    const widthSlide = document.querySelector('.slide').offsetWidth;

    document.querySelector('.slides').style.marginLeft = -(widthSlide * n) + 'px';
}

buttomShowMore.onclick = function() {
    const showOrHide = getComputedStyle(moreTours[0]).display;

    if (showOrHide === "block") {
        for (i = 0; i < moreTours.length; i++) {
            moreTours[i].style.display = "none";
        }

        buttomShowMore.innerHTML = "Показати більше пропозицій"
    } else {
        for (i = 0; i < moreTours.length; i++) {
            moreTours[i].style.display = "block";
        }

        buttomShowMore.innerHTML = "Показати менше пропозицій"
    }
}