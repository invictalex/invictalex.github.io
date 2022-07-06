var sections = document.querySelectorAll(".section");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var navOptions = document.querySelectorAll(".option");
var welcOption = document.querySelector(".welc-opt")
var skillOption = document.querySelector(".skill-opt")
var projOption = document.querySelector(".proj-opt")
var expOption = document.querySelector(".exp-opt")
var slider = document.querySelector(".slide-pointer")
var experienceList = document.querySelectorAll(".exp-li");
var skillSect2 = document.querySelector(".skills .sect2");


var currentSection = 0;


//                                              FUNCTION DECLARATIONS
toFirstSection();

nextBtn.onclick = () => slideLeft();
document.onkeydown = (e) => 
{ if (e["key"] == "ArrowRight") 
    slideLeft();
 else if (e["key"] == "ArrowLeft")
    slideRight();
};

prevBtn.onclick = () => slideRight();

welcOption.onclick = () => slideTo(0);
skillOption.onclick = () => slideTo(1);
projOption.onclick = () => slideTo(2);
expOption.onclick = () => slideTo(3);


//                                              FUNCTION DEFINITIONS


function toFirstSection()
{
    currentSection = 0;

    sections.forEach((section, i) =>
    {
        section.style.transform = `translateX(${i*100}%)`;
    })
    
    moveSlider(currentSection);
}

function toLastSection()
{
    currentSection = 3;

    sections.forEach((section, i) =>
    {
        section.style.transform = `translateX(${(i-3)*100}%)`;
    }) 
    
    moveSlider(currentSection);
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

    moveSlider(currentSection);
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
    moveSlider(currentSection);

}

function slideTo(secNum)
{
    currentSection = secNum;

    sections.forEach((section, i) =>
    {
        section.style.transform = `translateX(${(i - currentSection)*100}%)`;
    })
    moveSlider(currentSection);

}


function moveSlider(val)
{
    switch(val)
    {
        case 0: 
        {
            slider.style.transform = `translateX(0%)`;
            slider.style.width = "112.7px";
            break;
        } case 1:
        {
            slider.style.transform = `translateX(142.7px)`;
            slider.style.width = "60.69px";
            break;
        }case 2:
        {
            slider.style.transform = `translateX(233.39px)`;
            slider.style.width = "103.63px";
            break;
        }case 3:
        {
            slider.style.transform = `translateX(367.02px)`;
            slider.style.width = "141.75px";
            break;
        }
    }
}



experienceList.forEach(li =>
{
    li.onmouseenter = () => 
    {
        li.classList.add("lit");
    }

    li.onmouseout = () => 
    {
        setTimeout(function()
        {
            li.classList.remove("lit");
        }, 2000);
    }
})

skillSect2.style.width = "0px";