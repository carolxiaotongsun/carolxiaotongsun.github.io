$(document).ready(function (){
    document.getElementById("BUT_INTRODUCTION_PART").onclick = function () {
        var X = $('#INTRODUCTION_PART').offset().top;
        window.scrollTo(0, X - 70); 
    }
    document.getElementById("BUT_PROFEXPERIENCE_PART").onclick = function () {
        var X = $('#PROFEXPERIENCE_PART').offset().top;
        window.scrollTo(0, X - 70); 
    }
    document.getElementById("BUT_RESEARCH_INTERE_PART").onclick = function () {
        var X = $('#RESEARCH_INTERE_PART').offset().top;
        window.scrollTo(0, X - 70); 
    }
    document.getElementById("BUT_SKILL_PART").onclick = function () {
        var X = $('#SKILL_PART').offset().top;
        window.scrollTo(0, X - 70); 
    }
    document.getElementById("BUT_EDUCATION_PART").onclick = function () {
        var X = $('#EDUCATION_PART').offset().top;
        window.scrollTo(0, X - 70); 
    }
})