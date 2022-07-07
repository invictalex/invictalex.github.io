var sections = document.querySelectorAll(".section");
var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var navOptions = document.querySelectorAll(".option");
var welcOption = document.querySelector(".welc-opt")
var skillOption = document.querySelector(".skill-opt")
var projOption = document.querySelector(".proj-opt")
var expOption = document.querySelector(".exp-opt")
var slider = document.querySelector(".slide-pointer")
var skillSect1 = document.querySelector(".skills .sect1");
var skillSect2 = document.querySelector(".skills .sect2");
var skillBarLvls = document.querySelectorAll(".bar-level");
var skillBarColors = ["#F0DB4F", "#2965f1", "#f06529", "#78cff5", "#21759b", "#31A8FF", "#DC6920"];


var currentSection = 0;


//                                              FUNCTION DECLARATIONS
shortenBars();
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

    changeBars();

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

    changeBars();

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

    changeBars();

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



// experienceList.forEach(li =>
// {
//     li.onmouseenter = () => 
//     {
//         li.classList.add("lit");
//     }

//     li.onmouseout = () => 
//     {
//         setTimeout(function()
//         {
//             li.classList.remove("lit");
//         }, 2000);
//     }
// })

function changeBars() 
{
    if (currentSection == 1)
    {
        extendBars();
    } else
    {
        shortenBars();
    }
}


function shortenBars()
{
    skillBarLvls.forEach(bar =>
        {
            bar.classList.add("inactive");
        })
}


function extendBars()
{
    skillBarLvls.forEach(bar =>
        {
            bar.classList.remove("inactive");
        })
}

function changeSkillFocus()
{
    skillSect2.onmouseenter = () => skillSect2.classList.add("focus");
    skillSect1.onmouseenter = () => skillSect2.classList.remove("focus");
}

changeSkillFocus();