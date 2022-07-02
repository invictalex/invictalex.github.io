var sections = document.querySelectorAll(".section");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var currentSection = 0;


//                                              FUNCTION DECLARATIONS
toFirstSection();

nextBtn.onclick = () => slideLeft();

prevBtn.onclick = () => slideRight();


//                                              FUNCTION DEFINITIONS


function toFirstSection()
{
    currentSection = 0;

    sections.forEach((section, i) =>
    {
        section.style.transform = `translateX(${i*100}%)`;
    }) 
}

function toLastSection()
{
    currentSection = 3;

    sections.forEach((section, i) =>
    {
        section.style.transform = `translateX(${(i-3)*100}%)`;
    }) 
    
}

function slideLeft()
{
    currentSection++;

    if (currentSection <= 3)
    {
        sections.forEach((section, i) =>
        {
            section.style.transform = `translateX(${(i - currentSection)*100}%)`;
        })
    
    }
    else if (currentSection == 4)
    {
        toFirstSection();
    }
}

function slideRight()
{
    currentSection--;

    if (currentSection >=0)
    {
        sections.forEach((section, i) =>
        {
            section.style.transform = `translateX(${(i - currentSection)*100}%)`;
        })
    }
    else if (currentSection == -1)
    {
        toLastSection();
    } 
}