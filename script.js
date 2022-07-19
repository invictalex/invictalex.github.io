var sections = document.querySelectorAll(".section");
var nextBtn = document.querySelector(".next-box");
var prevBtn = document.querySelector(".prev-box");
var navOptions = document.querySelectorAll(".option");
var welcOption = document.querySelector(".welc-opt")
var skillOption = document.querySelector(".skill-opt")
var projOption = document.querySelector(".proj-opt")
var expOption = document.querySelector(".exp-opt")
var slidePointer = document.querySelector(".slide-pointer")
var slidePointerSmall = document.querySelector(".slide-pointer-small");
var skillSect1 = document.querySelector(".skills .sect1");
var skillSect2 = document.querySelector(".skills .sect2");
var skillBarLvls = document.querySelectorAll(".bar-level");
var skillBarTexts = document.querySelectorAll(".bar-title");
var skillBarColors = ["#F0DB4F", "#2965f1", "#f06529", "#78cff5", "#21759b", "#31A8FF", "#DC6920"];
var skillBarList = ["js", "css", "html", "jq", "wp", "ps", "ai"];
var skillBarPercentages = [73, 65, 80, 55, 60, 85, 82];
var defaultWidth = 31;
var experienceList = document.querySelectorAll(".experience-li");
var projectBoxes = document.querySelectorAll(".box");
var projectSlide1s = document.querySelectorAll(".project-slide1");
var projectSlide2s = document.querySelectorAll(".project-slide2");
var projectBoxColours = ["#00AE6B", "#F0DB4F", "#2965f1", "#21759b", "#78cff5", "#f06529"];
var experienceBars = document.querySelectorAll(".bar");
var sectionTitle = document.querySelector(".mobile-section-title");
var skillsButton = document.querySelector(".skills-button");
var contactIcons = document.querySelectorAll(".icon-box");
var copied = document.querySelector(".copied-text");





var currentSection = 0;


//                                              FUNCTION DECLARATIONS
setSkillBarsDefault();
toFirstSection();
animateProjectPage()
animateExperiencePage();

nextBtn.onclick = () => slideLeft();
document.onkeydown = (e) => 
{ if (e["key"] == "ArrowRight") 
    slideLeft();
 else if (e["key"] == "ArrowLeft")
    slidePointeright();
};

prevBtn.onclick = () => slidePointeright();

welcOption.onclick = () => slideTo(0);
skillOption.onclick = () => slideTo(1);
projOption.onclick = () => slideTo(2);
expOption.onclick = () => slideTo(3);


//                                              FUNCTION DEFINITIONS



contactIcons.forEach((icon, i) =>
{
    icon.onclick = () =>
    {
        if (i == 0)
        {
            copied.classList.toggle("phone");
            navigator.clipboard.writeText("+447472636985");
            setTimeout(() => {copied.classList.toggle("phone")}, 500);
        }
        if (i == 1)
        {
            copied.classList.toggle("mail");
            navigator.clipboard.writeText("alexchristodoulou@ymail.com");
            setTimeout(() => {copied.classList.toggle("mail")}, 500);
        }
        if (i == 2)
        {
            window.open("https://www.linkedin.com/in/alex-christodoulou-a94564b9/", "_blank");
        }
    }
    icon.onmouseenter = () => icon.classList.add("focus");
    icon.onmouseleave = () => icon.classList.remove("focus");

})

function copy(val) 
{
   
    navigator.clipboard.writeText(val);
}


function toFirstSection()
{
    currentSection = 0;

    changeSectionTitle(currentSection);


    sections.forEach((section, i) =>
    {
        section.style.transform = `translateX(${i*100}%)`;
    })
    
    moveslidePointer(currentSection);
}

function toLastSection()
{
    currentSection = 3;

    changeSectionTitle(currentSection);


    sections.forEach((section, i) =>
    {
        section.style.transform = `translateX(${(i-3)*100}%)`;
    }) 
    
    moveslidePointer(currentSection);
}

function slideLeft()
{
    currentSection++;

    changeSectionTitle(currentSection);


    activateSkillBars();


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

    moveslidePointer(currentSection);
}

function slidePointeright()
{
    currentSection--;

    changeSectionTitle(currentSection);


    activateSkillBars();

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
    moveslidePointer(currentSection);

}

function slideTo(secNum)
{
    currentSection = secNum;
    
    changeSectionTitle(currentSection);

    activateSkillBars();

    sections.forEach((section, i) =>
    {
        section.style.transform = `translateX(${(i - currentSection)*100}%)`;
    })
    moveslidePointer(currentSection);

}


function moveslidePointer(val)
{
    switch(val)
    {
        case 0: 
        {
            slidePointer.style.transform = `translateX(0%)`;
            slidePointer.style.width = "112.7px";
            break;
        } case 1:
        {
            slidePointer.style.transform = `translateX(142.7px)`;
            slidePointer.style.width = "60.69px";
            break;
        }case 2:
        {
            slidePointer.style.transform = `translateX(233.39px)`;
            slidePointer.style.width = "103.63px";
            break;
        }case 3:
        {
            slidePointer.style.transform = `translateX(367.02px)`;
            slidePointer.style.width = "141.75px";
            break;
        }
    }
    switch(val)
    {
        case 0: 
        {
            slidePointerSmall.style.transform = `translateX(0%)`;
            slidePointerSmall.style.width = "84.13px";
            break;
        } case 1:
        {
            slidePointerSmall.style.transform = `translateX(99.43px)`;
            slidePointerSmall.style.width = "45.52px";
            break;
        }case 2:
        {
            slidePointerSmall.style.transform = `translateX(159.95px)`;
            slidePointerSmall.style.width = "77.72px";
            break;
        }case 3:
        {
            slidePointerSmall.style.transform = `translateX(252.67px)`;
            slidePointerSmall.style.width = "106.33px";
            break;
        }
    }
}


function activateSkillBars() 
{

    if (currentSection == 1)
    {
        extendSkillBars();
        setTimeout(pulseSkillBars, 2000);
        setTimeout(() => {skillsButton.classList.add("grow")}, 3000);
    } else
    {
        shortenSkillBars();
        skillsButton.classList.remove("grow");
    }
}

function shortenSkillBars()
{
    skillBarLvls.forEach(skillBar =>
        {
            skillBar.style.width = `0%`;
        })
}


function extendSkillBars()
{
    skillBarLvls.forEach((skillBar, i) => 
        skillBar.style.width = `${skillBarPercentages[i] - defaultWidth}%`);
        
}

function pulseSkillBars()
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

function animateProjectPage()
{
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
}

function animateExperiencePage()
{
    experienceBars.forEach(bar =>
    {
        var barClass = bar.classList;
        var titleClass = bar.children[0].classList;
        var contentClass = bar.children[1].classList;
    
        bar.onclick = () =>
        {
            bar.classList.remove("hovered");
    
            if (barClass.contains("expanded"))
            {
                barClass.toggle("expanded");
                setTimeout(() =>
                {
                    contentClass.toggle("hidden");
                    titleClass.toggle("hidden");
                }, 350);
            } else if (!barClass.contains("expanded"))
            {
                resetExpBars();
                
                contentClass.toggle("hidden");
                titleClass.toggle("hidden");
                barClass.toggle("expanded");
            }
        }
    })

    pulseExpBars();
}

function resetExpBars()
{
    experienceBars.forEach(bar =>
        {
            bar.classList.remove("expanded");
            bar.children[0].classList.remove("hidden");
            bar.children[1].classList.add("hidden");
        })
}

function pulseExpBars()
{
    experienceBars.forEach(bar =>
    {
        bar.onmouseenter = () => 
        {
            if (!bar.classList.contains("expanded"))
                bar.classList.add("hovered");
        }
    })
    experienceBars.forEach(bar => {bar.onmouseleave = () => bar.classList.remove("hovered");})
}


function changeSectionTitle(currentSection)
{
    var sections = ["welcome", "skills", "projects", "experience"];

    sectionTitle.textContent = sections[currentSection];
}

skillsButton.onmouseenter = () => 
{
    skillsButton.classList.toggle("pulseBtn");

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
    {
        skillsButton.classList.add("open");
        var plus = skillsButton.children[0];
        var content = skillsButton.children[1];
    
        plus.classList.add("hide");
        content.classList.remove("hide");
    }
}
skillsButton.onmouseleave = () => 
{
    skillsButton.classList.toggle("pulseBtn");
    skillsButton.classList.remove("open");
    
    var plus = skillsButton.children[0];
    var content = skillsButton.children[1];

    plus.classList.remove("hide");
    content.classList.add("hide");
}

skillsButton.onclick = () => 
{
    skillsButton.classList.add("open");
    var plus = skillsButton.children[0];
    var content = skillsButton.children[1];

    plus.classList.add("hide");
    content.classList.remove("hide");

}

function activateSkillsButton()
{
    skillsButton.classList.add("grow");
}