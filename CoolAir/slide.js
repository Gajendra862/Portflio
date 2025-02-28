document.querySelectorAll('.slide').forEach((slide, index) => {

    slide.addEventListener('click', () => {

    document.getElementById(slide${index + 1}).checked = true; });

    });

    document.querySelectorAll('.nav_button').forEach((button, index) => {

    button.addEventListener('click', () => {

    document.getElementById(slide${index + 1}).checked = true; });

    });