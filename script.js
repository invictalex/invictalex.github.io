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
var skillBarTexts = document.querySelectorAll(".bar-title");
var skillBarColors = ["#F0DB4F", "#2965f1", "#f06529", "#78cff5", "#21759b", "#31A8FF", "#DC6920"];
var skillBarList = ["js", "css", "html", "jq", "wp", "ps", "ai"];
var skillBarPercentages = [73, 65, 80, 55, 60, 85, 82];
var defaultWidth = 31;
var experienceList = document.querySelectorAll(".experience");
var projectBoxes = document.querySelectorAll(".box");
var projectSlide1s = document.querySelectorAll(".project-slide1");
var projectSlide2s = document.querySelectorAll(".project-slide2");
var projectBoxColours = ["#00AE6B", "#F0DB4F", "#2965f1", "#21759b", "#78cff5", "#f06529"];
var experienceBars = document.querySelectorAll(".bar");


var currentSection = 0;


//                                              FUNCTION DECLARATIONS
setSkillBarsDefault();
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



experienceList.forEach(li =>
{
    li.onmouseenter = () => 
    {
        li.style.color = `${skillBarColors[Math.floor(Math.random()*skillBarColors.length)]}`;
    }

    li.onmouseout = () => 
    {
        
            li.style.color = "white";
        
    }
})

function shortenBars()
{
    skillBarLvls.forEach(skillBar =>
        {
            skillBar.style.width = `0%`;
        })
}


function extendBars()
{
    skillBarLvls.forEach((skillBar, i) => 
        skillBar.style.width = `${skillBarPercentages[i] - defaultWidth}%`);
        
}

function changeBars() 
{

    if (currentSection == 1)
    {
        extendBars();
        setTimeout(pulseBars, 2000);
    } else
    {
        shortenBars();
    }
}

function pulseBars()
{

    skillBarLvls.forEach((skillBar, i) =>
    {
        

        skillBar.onmouseenter = () => 
        {
            skillBar.style.animation = `${skillBarList[i]}-pulse 1s`;
        }
        skillBar.addEventListener("animationend", () => 
        {
            skillBar.style.animation = "";
        }) 
    })
}


function setSkillBarsDefault()
{
    skillBarLvls.forEach((skillBar, i) =>
    {
        skillBar.style.width = `0%`;
        skillBar.style.background = `${skillBarColors[i]}`;
    })

    skillBarTexts.forEach((text, i) =>
    {
        text.style.background = `${skillBarColors[i]}`;
    })
}

projectBoxes.forEach(box =>
    {
        
        box.onmouseenter = (e) => 
        {
            var slideOne = e.path[0].children[0];
            slideOne.classList.add("left");
        }
        box.onmouseleave = (e) => 
        {
            var slideOne = e.path[0].children[0];
            slideOne.classList.remove("left");
        }
    })

projectSlide1s.forEach((slide, i) =>
    {
        slide.style.background = projectBoxColours[i];
    })

    projectSlide2s.forEach((slide, i) =>
    {
        slide.style.background = projectBoxColours[i];
    })

experienceBars.forEach(bar =>
{
    var barClass = bar.classList;
    var titleClass = bar.children[0].classList;
    var contentClass = bar.children[1].classList;

    bar.onclick = () =>
    {
        if (barClass.contains("expanded"))
        {
            barClass.toggle("expanded");
            setTimeout(() =>
            {
                contentClass.toggle("hidden");
                titleClass.toggle("hidden");
            }, 500);
        } else if (!barClass.contains("expanded"))
        {
            resetExpBars();
            
            contentClass.toggle("hidden");
            titleClass.toggle("hidden");
            setTimeout(barClass.toggle("expanded"), 500);
        }
    }
})


function resetExpBars()
{
    experienceBars.forEach(bar =>
        {
            bar.classList.remove("expanded");
            bar.children[0].classList.remove("hidden");
            bar.children[1].classList.add("hidden");
        })
}

