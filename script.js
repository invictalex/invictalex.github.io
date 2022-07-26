//                                              SELECTORS & VARIABLES: FIXED ELEMENTS

var sections = document.querySelectorAll(".section");
var nextBtn = document.querySelector(".next-box");
var prevBtn = document.querySelector(".prev-box");
var navOptions = document.querySelectorAll(".option");
var welcomePage = document.querySelector(".welc-opt")
var skillPage = document.querySelector(".skill-opt")
var projectsPage = document.querySelector(".proj-opt")
var experiencePage = document.querySelector(".exp-opt")
var slidePointer = document.querySelector(".slide-pointer")
var slidePointerSmall = document.querySelector(".slide-pointer-small");
var sectionTitleMobile = document.querySelector(".mobile-section-title");
var contactIcons = document.querySelectorAll(".icon-box");
var copied = document.querySelector(".copied-text");
var currentSection = 0;

//                                              SELECTORS & VARIABLES: SKILLS PAGE

var skillBarColors = ["#F0DB4F", "#2965f1", "#f06529", "#78cff5", "#21759b", "#31A8FF", "#DC6920"];
var skillBarList = ["js", "css", "html", "jq", "wp", "ps", "ai"];
var skillBarPercentages = [73, 65, 80, 55, 60, 85, 82];
var defaultSkillBarWidth = 31;
var skillSect1 = document.querySelector(".skills .sect1");
var skillSect2 = document.querySelector(".skills .sect2");
var skillBarLvls = document.querySelectorAll(".bar-level");
var skillBarTexts = document.querySelectorAll(".bar-title");
var skillsButton = document.querySelector(".skills-button");
var expandBtn = document.querySelector(".expand-btn");
var closeBtn = document.querySelector(".close-btn-box");
var skillsList = document.querySelector(".skills-list");

//                                              SELECTORS & VARIABLES: PROJECT PAGE

var projectBoxColours = ["#00AE6B", "#F0DB4F", "#2965f1", "#21759b", "#78cff5", "#f06529"];
var projectBoxes = document.querySelectorAll(".box");
var projectSlide1s = document.querySelectorAll(".project-slide1");
var projectSlide2s = document.querySelectorAll(".project-slide2");

//                                              SELECTORS & VARIABLES: EXPERIENCE PAGE

var experienceBars = document.querySelectorAll(".bar");




//                                              FUNCTION DECLARATIONS

jumpToFirstSection();

nextBtn.onclick = () => slideLeft();
prevBtn.onclick = () => slideRight();

document.onkeydown = (e) => e["key"] == "ArrowRight" ? slideLeft() : e["key"] == "ArrowLeft" ? slideRight() : "";

welcomePage.onclick = () => slideTo(0);
skillPage.onclick = () => slideTo(1);
projectsPage.onclick = () => slideTo(2);
experiencePage.onclick = () => slideTo(3);

activateContactIcons();
setSkillBarsDefault();
animateSkillsButton();
animateProjectPage()
animateExperiencePage();


//                                              FUNCTION DEFINITIONS: FIXED ELEMENTS

function activateContactIcons()
{
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
}

function copyText(val) 
{
    navigator.clipboard.writeText(val);
}

function pulseArrows(direction)
{
    if (direction == "next")
    {
        nextBtn.style.animation = "pulse 1s";
        nextBtn.onanimationend = () => nextBtn.style.animation = "";
    } 
    else if (direction == "prev")
    {
        prevBtn.style.animation = "pulse 1s"
        prevBtn.onanimationend = () => prevBtn.style.animation = "";
    }
}


function jumpToFirstSection()
{
    currentSection = 0;

    changeSectionTitleMobile(currentSection);

    sections.forEach((section, i) => section.style.transform = `translateX(${i*100}%)`);
    
    moveslidePointer(currentSection);
}

function jumpToLastSection()
{
    currentSection = 3;

    changeSectionTitleMobile(currentSection);

    sections.forEach((section, i) => section.style.transform = `translateX(${(i-3)*100}%)`); 
    
    moveslidePointer(currentSection);
}

function slideLeft()
{
    pulseArrows("next");

    currentSection++;

    changeSectionTitleMobile(currentSection);

    activateSkillBars();

    if (currentSection <= 3)
    {
        sections.forEach((section, i) => section.style.transform = `translateX(${(i - currentSection)*100}%)`);
    }
    else currentSection == 4 ? jumpToFirstSection() : "";

    moveslidePointer(currentSection);
}

function slideRight()
{
    pulseArrows("prev");

    currentSection--;

    changeSectionTitleMobile(currentSection);

    activateSkillBars();

    if (currentSection >=0)
    {
        sections.forEach((section, i) => section.style.transform = `translateX(${(i - currentSection)*100}%)`);
    }
    else currentSection == -1 ? jumpToLastSection() : "";

    moveslidePointer(currentSection);
}

function slideTo(secNum)
{
    currentSection = secNum;
    
    changeSectionTitleMobile(currentSection);

    activateSkillBars();

    sections.forEach((section, i) => section.style.transform = `translateX(${(i - currentSection)*100}%)`);

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

function changeSectionTitleMobile(currentSection)
{
    var sections = ["welcome", "skills", "projects", "experience"];
    sectionTitleMobile.textContent = sections[currentSection];
}

//                                              FUNCTION DEFINITIONS: SKILLS PAGE


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
    skillBarLvls.forEach(skillBar =>  skillBar.style.width = `0%`)
}


function extendSkillBars()
{
    skillBarLvls.forEach((skillBar, i) => skillBar.style.width = `${skillBarPercentages[i] - defaultSkillBarWidth}%`)
}

function pulseSkillBars()
{
    skillBarLvls.forEach((skillBar, i) =>
    {
        skillBar.onmouseenter = () => skillBar.style.animation = `${skillBarList[i]}-pulse 1s`;

        skillBar.addEventListener("animationend", () => skillBar.style.animation = ""); 
    })
}

function setSkillBarsDefault()
{
    skillBarLvls.forEach((skillBar, i) =>
    {
        skillBar.style.width = `0%`;
        skillBar.style.background = `${skillBarColors[i]}`;
    })

    skillBarTexts.forEach((text, i) => text.style.background = `${skillBarColors[i]}`);
}
function animateSkillsButton()
{
    skillsButton.onmouseenter = () =>  skillsButton.classList.contains("open") ? "" : skillsButton.classList.add("pulseBtn");
    
    skillsButton.onmouseleave = () => skillsButton.classList.remove("pulseBtn");
    
    skillsButton.onmousedown = () => 
    {
        
        skillsButton.classList.add("open");
        skillsButton.classList.remove("pulseBtn");
        expandBtn.classList.add("hide");
        skillsList.classList.remove("hide");
        closeBtn.classList.remove("hide");
    }
    skillsButton.onmouseup = () =>
    {
        closeBtn.onmouseup = () =>
        {
            skillsButton.classList.remove("open");
            expandBtn.classList.remove("hide");
            skillsList.classList.add("hide");
            closeBtn.classList.add("hide");
        }
    }
    

    
}

//                                              FUNCTION DEFINITIONS: PROJECT PAGE


function animateProjectPage()
{
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    {
        projectBoxes.forEach(box =>
        {
            box.onclick = (e) => 
            {
                alert("working");
                var slideOne = e.path[0];
                projectBoxes.forEach(box => box.firstChild !== slideOne ? box.children[0].classList.remove("left") : "")
                
                slideOne.classList.add("left");
            }
        })
    }
     else
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
    }
   
        
    projectSlide1s.forEach((slide, i) =>  slide.style.background = projectBoxColours[i]);
    projectSlide2s.forEach((slide, i) =>  slide.style.background = projectBoxColours[i]);
}

//                                              FUNCTION DEFINITIONS: EXPERIENCE PAGE


function animateExperiencePage()
{
    experienceBars.forEach((bar, i) =>
    {
        var titleClass = bar.children[0].classList;
        var contentClass = bar.children[1].classList;
        var lightbox = document.querySelector(`#lightbox-${i}`);
        var closeIcon = document.querySelector(`#closebox${i}`);

        bar.onclick = () => 
        {
            bar.classList.remove("hovered");

            if (window.innerWidth <=900)
            {
                lightbox.classList.toggle("hidden");
                lightbox.classList.toggle("animate");
            }
            else if (bar.classList.contains("expanded"))
            {
                bar.classList.toggle("expanded");
                setTimeout(() =>
                {
                    contentClass.toggle("hidden");
                    titleClass.toggle("hidden");
                    
                }, 350);
            }
            else 
            {
                resetExpBars();
                contentClass.toggle("hidden");
                titleClass.toggle("hidden");
                bar.classList.toggle("expanded");
            }
        }
        closeIcon.onclick = () =>
        {
            lightbox.classList.toggle("hidden");
            lightbox.classList.toggle("animate");
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
    experienceBars.forEach(bar => bar.onmouseenter = () => !bar.classList.contains("expanded") ? bar.classList.add("hovered") : "")
    experienceBars.forEach(bar => bar.onmouseleave = () => bar.classList.remove("hovered"));
}






/*function showSkillsButton()
{
    skillsButton.classList.add("grow");
}*/

