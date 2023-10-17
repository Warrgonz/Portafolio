'use strict';

document.addEventListener("DOMContentLoaded", function () {
    function textTyped() {
        var typed = new Typed(".auto-type", {
            strings: ["front end developer", "backend developer", "lead", "web designer", "UX/UI developer", "web tester", "freelancer"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });
    }

    function analytics() {


        try {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());

            gtag('config', 'G-YJC0LM555D');

            console.log('Obteniendo Google Analytics' + "\n" +  Date());
        } catch (error) {
            console.error("Erroe al compilar Google Analyrics " + error.message);
        }
    }

    analytics();
    textTyped();
});




