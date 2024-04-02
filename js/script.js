import { portfolio_en, portfolio_fr } from './data/projects.js';


////////////////////////////////////////////////////////////////////////
//////////////////// RESIZE ELEMENTS HOME //////////////////////////////
////////////////////////////////////////////////////////////////////////
function resize() {
  var heights = window.innerHeight;
  document.getElementById("main").style.height = heights - 114 + "px";
  document.getElementById("main2").style.height = heights - 114 + "px";
  document.getElementById("contentSkills").style.height = heights - 90 + "px";
  //document.querySelector("footer").style.height = heights + "px";
  //document.querySelector("footer").style.lineHeight = heights + "px";
  document.getElementById("site-nav-list").style.top = heights / 2 - 130 + "px";
  // document.getElementById("contacts2").style.marginTop = -heights/2 + 20 + "px";
  //document.getElementById("linkedin2").style.marginTop = heights/3 - 20 + "px";
}

resize();
window.onresize = resize();



////////////////////////////////////////////////////////////////////////
//////////////////// DOT WHEN TEXT IS TOO LONG /////////////////////////
////////////////////////////////////////////////////////////////////////
var elementToDot = document.getElementsByClassName('infoResumeProjects');
for (var i = 0; i < elementToDot.length; ++i) {
  var item = elementToDot[i];
  $clamp(item, { clamp: 9, useNativeClamp: false });
}


///////////////////////////////////////////////
///////////////////// LOADER //////////////////
///////////////////////////////////////////////
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
    document.getElementById('contents').style.visibility = "hidden";

    $("#fond").mgGlitch({
      destroy: false, // set 'true' to stop the plugin
      glitch: true, // set 'false' to stop glitching
      scale: true, // set 'false' to stop scaling
      blend: false, // set 'false' to stop glitch blending
      blendModeType: 'hue', // select blend mode type
      glitch1TimeMin: 3000, // set min time for glitch 1 elem
      glitch1TimeMax: 4500, // set max time for glitch 1 elem
      glitch2TimeMin: 50, // set min time for glitch 2 elem
      glitch2TimeMax: 500, // set max time for glitch 2 elem
      zIndexStart: 4, // because of absolute position, set z-index base value
    });

    $("#main").mgGlitch({
      destroy: false, // set 'true' to stop the plugin
      glitch: true, // set 'false' to stop glitching
      scale: false, // set 'false' to stop scaling
      blend: false, // set 'false' to stop glitch blending
      blendModeType: 'hue', // select blend mode type
      glitch1TimeMin: 6000, // set min time for glitch 1 elem
      glitch1TimeMax: 9000, // set max time for glitch 1 elem
      glitch2TimeMin: 100, // set min time for glitch 2 elem
      glitch2TimeMax: 1000, // set max time for glitch 2 elem
      zIndexStart: 1, // because of absolute position, set z-index base value
    });

    $("#loader-loading").mgGlitch({
      destroy: false, // set 'true' to stop the plugin
      glitch: true, // set 'false' to stop glitching
      scale: true, // set 'false' to stop scaling
      blend: false, // set 'false' to stop glitch blending
      blendModeType: 'overlay', // select blend mode type
      glitch1TimeMin: 3000, // set min time for glitch 1 elem
      glitch1TimeMax: 4500, // set max time for glitch 1 elem
      glitch2TimeMin: 50, // set min time for glitch 2 elem
      glitch2TimeMax: 500, // set max time for glitch 2 elem
      zIndexStart: 9, // because of absolute position, set z-index base value
    });

    $(".hover-flex-item").mgGlitch({
      destroy: false, // set 'true' to stop the plugin
      glitch: true, // set 'false' to stop glitching
      scale: true, // set 'false' to stop scaling
      blend: false, // set 'false' to stop glitch blending
      blendModeType: 'overlay', // select blend mode type
      glitch1TimeMin: 6000, // set min time for glitch 1 elem
      glitch1TimeMax: 9000, // set max time for glitch 1 elem
      glitch2TimeMin: 100, // set min time for glitch 2 elem
      glitch2TimeMax: 100, // set max time for glitch 2 elem
      zIndexStart: 9, // because of absolute position, set z-index base value
    });



  } else if (state == 'complete') {
    setTimeout(function () {

      document.getElementById('interactive');
      document.getElementById('loader').style.visibility = "hidden";
      document.getElementById('contents').style.visibility = "visible";
      $(window).scrollTop(5);
      $("#fond2").css("margin-left", "40%");
      $("#digitalToolbox").css("margin-left", "-1000px");

      $("#projects").css("display", "none");

      $("#skillsSkills").css("margin-top", "200px");


      animeHomeIn();


      setTimeout(function () {
        $("#fond2").mgGlitch({
          destroy: false, // set 'true' to stop the plugin
          glitch: true, // set 'false' to stop glitching
          scale: false, // set 'false' to stop scaling
          blend: false, // set 'false' to stop glitch blending
          blendModeType: 'hue', // select blend mode type
          glitch1TimeMin: 6000, // set min time for glitch 1 elem
          glitch1TimeMax: 9000, // set max time for glitch 1 elem
          glitch2TimeMin: 100, // set min time for glitch 2 elem
          glitch2TimeMax: 1000, // set max time for glitch 2 elem
          zIndexStart: 1, // because of absolute position, set z-index base value
        });
      }, 1000);



      $("#main2").mgGlitch({
        destroy: false, // set 'true' to stop the plugin
        glitch: true, // set 'false' to stop glitching
        scale: false, // set 'false' to stop scaling
        blend: false, // set 'false' to stop glitch blending
        blendModeType: 'hue', // select blend mode type
        glitch1TimeMin: 6000, // set min time for glitch 1 elem
        glitch1TimeMax: 9000, // set max time for glitch 1 elem
        glitch2TimeMin: 100, // set min time for glitch 2 elem
        glitch2TimeMax: 1000, // set max time for glitch 2 elem
        zIndexStart: 0, // because of absolute position, set z-index base value
      });



    }, 1000);


  }
}



////////////////////////////////////////////////////////////////////////
//////////////////// ANIME ELEMENTS HOME ///////////////////////////////
////////////////////////////////////////////////////////////////////////

function animeHomeIn() {

  $("#fond2").animate({
    "margin-left": "0%",
  }, 1000, 'easeInOutExpo');
  $("#digitalToolbox").animate({
    "margin-left": "0%",
  }, 1000, 'easeInOutExpo');
  if (screen.width > 699) {
    $("#projects").fadeIn(1000, 'easeInOutExpo');
  }
  $("#skillsSkills").animate({
    "margin-top": "20px"
  }, 1000, 'easeInOutExpo');


  setTimeout(function () {
    // check if created elements exists and remove them (elements for glitch)
    if ($("#fond2").siblings().hasClass('front-1') || $("#fond2").siblings().hasClass('front-3') || $("#fond2").siblings().hasClass('front-2')) {
      $('.front-1, .front-2, .front-3').remove();
      $("#fond2").siblings('.front-1, .front-2, .front-3').remove();
    }
    $('.back').removeClass('back');

    $("#fond2").mgGlitch({
      destroy: false, // set 'true' to stop the plugin
      glitch: true, // set 'false' to stop glitching
      scale: false, // set 'false' to stop scaling
      blend: false, // set 'false' to stop glitch blending
      blendModeType: 'hue', // select blend mode type
      glitch1TimeMin: 6000, // set min time for glitch 1 elem
      glitch1TimeMax: 9000, // set max time for glitch 1 elem
      glitch2TimeMin: 100, // set min time for glitch 2 elem
      glitch2TimeMax: 1000, // set max time for glitch 2 elem
      zIndexStart: 2, // because of absolute position, set z-index base value
    });
  }, 1000);

  // check if created elements exists and remove them (elements for glitch)
  if ($("#main2").siblings().hasClass('front-1') || $("#main2").siblings().hasClass('front-3') || $("#main2").siblings().hasClass('front-2')) {
    $('.front-1, .front-2, .front-3').remove();
    $("#main2").siblings('.front-1, .front-2, .front-3').remove();
  }
  $('.back').removeClass('back');

  $("#main2").mgGlitch({
    destroy: false, // set 'true' to stop the plugin
    glitch: true, // set 'false' to stop glitching
    scale: false, // set 'false' to stop scaling
    blend: false, // set 'false' to stop glitch blending
    blendModeType: 'hue', // select blend mode type
    glitch1TimeMin: 6000, // set min time for glitch 1 elem
    glitch1TimeMax: 9000, // set max time for glitch 1 elem
    glitch2TimeMin: 100, // set min time for glitch 2 elem
    glitch2TimeMax: 1000, // set max time for glitch 2 elem
    zIndexStart: 0, // because of absolute position, set z-index base value
  });
}
/*
$( "#skills" ).click(function() {
  animeHomeIn();
});
*/

function animeHomeOut() {

  $("#fond2").animate({
    "margin-left": "40%",
  }, 1000, 'easeInOutExpo');
  // check if created elements exists and remove them (elements for glitch)
  if ($("#fond2").siblings().hasClass('front-1') || $("#fond2").siblings().hasClass('front-3') || $("#fond2").siblings().hasClass('front-2')) {
    $('.front-1, .front-2, .front-3').remove();
    $("#fond2").siblings('.front-1, .front-2, .front-3').remove();
  }
  $('.back').removeClass('back');
  $("#digitalToolbox").animate({
    "margin-left": "-1000px",
  }, 1000, 'easeInOutExpo');
  $("#projects").fadeOut(800, 'easeInOutExpo');

  $("#skillsSkills").animate({
    "margin-top": "200px"
  }, 1000, 'easeInOutExpo');
}
/*
$( "#portfolio" ).click(function() {
  animeHomeOut();
});
*/


const target2 = document.querySelector('#content-home');

function handleIntersection2(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      animeHomeIn();
    } else {
      animeHomeOut();
    }
  });
}

const observer2 = new IntersectionObserver(handleIntersection2);
observer2.observe(target2);






////////////////////////////////////////////////////////////////////////
//////////////////// DEFILEMENET PROGRESSIF ////////////////////////////
////////////////////////////////////////////////////////////////////////
$('a[href^="#"]').click(function () {
  var the_id = $(this).attr("href");
  $('html, body').animate({
    scrollTop: $(the_id).offset().top - 100
  }, 'slow');
  return false;
});



////////////////////////////////////////////////////////////////////////
//////////////////////////////// BURGER ////////////////////////////////
////////////////////////////////////////////////////////////////////////
class KS_Modal {

  constructor(selectorName, modalContentsSelector, clickRegionElement = null) {

    this.self = document.querySelector(selectorName);
    this.modalContents = document.querySelector(modalContentsSelector);
    this.clickRegionElement = document.querySelector(clickRegionElement);
    this.isOpen = false;
    this.openDelay = 500;
    this.openDelayTimer = null;

    // Initialize modal
    this._init();
  }

  _init() {
    // Create node ID to hold the markup for this modal instance
    var modalNodeInstance = document.createElement('div');
    modalNodeInstance.id = 'ks-modal-instance-' + Math.floor(Math.random() * 100000);

    // Create modal container element
    this.modalEle = document.createElement('div');
    this.modalEle.classList.add('ks-modal');

    // Create modal inner container
    var modalInnerEle = document.createElement('div');
    modalInnerEle.classList.add('ks-modal-inner');

    // Clone modal contents into inner modal container
    var modalContents = this.modalContents.cloneNode(true);
    modalInnerEle.appendChild(modalContents);

    // Add modal node instance to the DOM
    document.body.appendChild(modalNodeInstance);

    // Add inner container as a child to the modal element
    this.modalEle.appendChild(modalInnerEle);

    // Add modal element to the instance container
    modalNodeInstance.appendChild(this.modalEle);

    // Get click region element
    var clickRegionElement;
    if (this.clickRegionElement === null) {
      clickRegionElement = this.self;
    }
    else {
      clickRegionElement = this.clickRegionElement;
    }

    // Add event listeners for modal
    clickRegionElement.addEventListener('click', () => {

      if (this.isOpen) {
        this.close();
      }
      else {
        this.open();
      }
    });

    modalContents.addEventListener('click', () => {

      if (this.isOpen) {
        this.close();
      }
      else {
        this.open();
      }
    });

  }

  open() {

    // Only open the modal if delay timer expired
    if (this.openDelayTimer === null) {
      this.isOpen = true;


      this.self.classList.add('is-open');
      this.modalEle.classList.add('open');

      if (this.clickRegionElement !== null) {
        this.clickRegionElement.classList.add('active');
      }

      this.openDelayTimer = setTimeout(() => {
        clearTimeout(this.openDelayTimer);
        this.openDelayTimer = null;
      }, this.openDelay);
    }
  }

  close() {

    // Only close the modal if delay timer expired
    if (this.openDelayTimer === null) {
      this.isOpen = false;


      this.self.classList.remove('is-open');
      this.modalEle.classList.remove('open');

      if (this.clickRegionElement !== null) {
        this.clickRegionElement.classList.remove('active');
        this.clickRegionElement.classList.add('closing');
      }

      this.openDelayTimer = setTimeout(() => {
        if (this.clickRegionElement !== null) {
          this.clickRegionElement.classList.remove('closing');
        }
        clearTimeout(this.openDelayTimer);
        this.openDelayTimer = null;
      }, this.openDelay);
    }
  }
}

// Create modal instance...
var menuModal = new KS_Modal('#burger-menu', '#site-menu-contents', '#burger-click-region');



///////////////////////////////////////////////
//////// GENERATE LAST PROJECTS SECTION ///////
///////////////////////////////////////////////

//////////// CHECK LANGUAGE IN URL ////////////

function detectLanguageFromURL() {
  const url = window.location.href;

  if (url.includes("/fr")) {
    return "fr";
  } else {
    return "en";
  }
}

const currentLanguage = detectLanguageFromURL();
const portfolio = currentLanguage === "fr" ? portfolio_fr : portfolio_en;


const projectsContainer = document.getElementById("projects");

const lastProjectTitle = `<p id="latestProjects">LATEST PROJECTS</p>`
projectsContainer.innerHTML += lastProjectTitle

portfolio.slice(0, 5).forEach((project) => {
  const projectHtml = `
        <div class="project1">
            <div class="imgProject">
                <img src="${project.picture}" alt="${project.title}" style="width: 65px">
            </div>
            <div class="textProject">
                <p>${project.title}</p>
                <p>${project.description}</p>
                <p>${project.hashtags}</p>
            </div>
        </div>
    `;
  projectsContainer.innerHTML += projectHtml;
});

const moreProjectsLink = `
    <a href="#anchor-portfolio">
        <p id="moreProjects">more projects...</p>
    </a>
`;
projectsContainer.innerHTML += moreProjectsLink;



///////////////////////////////////////////////
////////// GENERATE PORTFOLIO SECTION /////////
///////////////////////////////////////////////

const flexContainer = document.getElementById("flex-container");

portfolio_en.forEach((project) => {
  const html =
    (project.type === 'web' || project.type === 'doc') ?
      `
    <div class="flex-item">
        <div class="hover-flex-item">
            <div class="text-flex-item">
                <p class="infoTitleProjects">${project.title}</p>
                <p class="client">${project.client}</p>
                <p class="description"><span>${project.description}</span></p>
                <p class="hashtag"><span>${project.hashtags}</span></p>
                ${project.type === 'web' ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer">
                    <div class="plus">
                        <p">${project.cta}</p>
                    </div>
                </a>` : ''}
            </div>
        </div>
        <img src="${project.picture}">
    </div>
    ` :
      `
    <div class="flex-item" id="see-you">
        <div class="hover-flex-item">
            <div class="text-flex-item">
                <p class="infoTitleProjects">${project.title}</p>
                <p class="client">${project.client}</p>
                <p class="description"><span>${project.description}</span></p>
                <p class="hashtag"><span>${project.hashtags}</span></p>
                <div class="plus"
                    onclick="document.getElementById('popup8').className = 'popup-video popup-anime'; document.getElementById('popup-bg8').className = 'popup-bg popup-bg-anime'">
                    <p>${project.cta}</p>
                </div>
            </div>
        </div>
        <video controls muted="muted" autoplay loop>
            <source src="${project.link}" type="video/mp4">
        </video>
    </div>
    `

  flexContainer.innerHTML += html;
});


/*
var projectAmount = portfolio_en.length


for (let unity = 1; unity < projectAmount + 1; unity++) {

  var titles = document.getElementsByClassName("title" + unity);
  console.log(unity)
  Array.prototype.forEach.call(titles, function (x) {
    x.innerHTML = portfolio_en[unity - 1]["title"];
  });

  var clients = document.getElementsByClassName("client" + unity);
  Array.prototype.forEach.call(clients, function (x) {
    x.innerHTML = portfolio_en[unity - 1]["client"];
  });

  var descriptions = document.getElementsByClassName("description" + unity);
  Array.prototype.forEach.call(descriptions, function (x) {
    x.innerHTML = portfolio_en[unity - 1]["description"];
  });

  var hashtags = document.getElementsByClassName("hashtag" + unity);
  Array.prototype.forEach.call(hashtags, function (x) {
    x.innerHTML = portfolio_en[unity - 1]["hashtags"];
  });

  var pluss = document.getElementsByClassName("plus" + unity);
  Array.prototype.forEach.call(pluss, function (x) {
    x.innerHTML = portfolio_en[unity - 1]["plus"];
  });

  var pictures = document.getElementsByClassName("picture" + unity);
  Array.prototype.forEach.call(pictures, function (x) {
    x.src = portfolio_en[unity - 1]["picture"];
  });

}


///////////////////////////////////////////////
//////////// DATA PORTFOLIO FRENCH ////////////
///////////////////////////////////////////////

var projectAmount = portfolio_fr.length


for (let unity = 1; unity < projectAmount + 1; unity++) {

  var titles = document.getElementsByClassName("title_vf" + unity);
  console.log(unity)
  Array.prototype.forEach.call(titles, function (x) {
    x.innerHTML = portfolio_fr[unity - 1]["title"];
  });

  var clients = document.getElementsByClassName("client_vf" + unity);
  Array.prototype.forEach.call(clients, function (x) {
    x.innerHTML = portfolio_fr[unity - 1]["client"];
  });

  var descriptions = document.getElementsByClassName("description_vf" + unity);
  Array.prototype.forEach.call(descriptions, function (x) {
    x.innerHTML = portfolio_fr[unity - 1]["description"];
  });

  var hashtags = document.getElementsByClassName("hashtag_vf" + unity);
  Array.prototype.forEach.call(hashtags, function (x) {
    x.innerHTML = portfolio_fr[unity - 1]["hashtags"];
  });

  var pluss = document.getElementsByClassName("plus_vf" + unity);
  Array.prototype.forEach.call(pluss, function (x) {
    x.innerHTML = portfolio_fr[unity - 1]["plus"];
  });

  var pictures = document.getElementsByClassName("picture_vf" + unity);
  Array.prototype.forEach.call(pictures, function (x) {
    x.src = portfolio_fr[unity - 1]["picture"];
  });

}
*/
///////////////////////////////////////////////
////////// HOVER ON PORTFOLIO ITEMS ///////////
///////////////////////////////////////////////

document.querySelectorAll('.flex-item').forEach(item => {
  item.addEventListener('touchstart', function () {
    this.classList.add('active');
  });
  item.addEventListener('touchend', function () {
    this.classList.remove('active');
  });
});



/*

///////////////////////////////////////////////
//// GLITCH DE TRANSITION DE SECTION //////////
///////////////////////////////////////////////

  // First we select the element we want to target
const target = document.querySelector('#spacer');

// Next we want to create a function that will be called when that element is intersected
function handleIntersection(entries) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.map((entry) => {
    if (entry.boundingClientRect.top > 0) {
    if (entry.isIntersecting) {
      document.getElementById('glitch').style.visibility="visible";
      console.log("IntersectionObserver is working");
      //document.getElementById('title-portfolio').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

      var h = window.innerHeight
      var x=window.scrollX;
      var y=window.scrollY + h + 20;
      window.onscroll=function(){window.scrollTo(x, y);};
      setTimeout(function(){
        document.getElementById('glitch').style.visibility="hidden";
      },150);
      setTimeout(function(){
        window.onscroll=function(){};
      },1000);
    } else {
      entry.target.classList.remove('visible')
    }
  }
  });
}

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
const observer = new IntersectionObserver(handleIntersection);

// Finally start observing the target element
observer.observe(target);





$( ".popup-bg" ).mgGlitch({
  destroy : false, // set 'true' to stop the plugin
                    glitch: true, // set 'false' to stop glitching
                    scale: false, // set 'false' to stop scaling
                    blend : false, // set 'false' to stop glitch blending
                    blendModeType : 'overlay', // select blend mode type
                    glitch1TimeMin : 3000, // set min time for glitch 1 elem
                    glitch1TimeMax : 4500, // set max time for glitch 1 elem
                    glitch2TimeMin : 50, // set min time for glitch 2 elem
                    glitch2TimeMax : 50, // set max time for glitch 2 elem
                    zIndexStart : 51, // because of absolute position, set z-index base value
});

*/


/*
///////////////////////////////////////////////
///////////////// INFINITE SCROLL /////////////
///////////////////////////////////////////////

//////////// INFINITE SCROLL DOWN ////////////

const target6 = document.querySelector('#end-sections')

const thresholdArray = steps => Array(steps + 1)
 .fill(0)
 .map((_, index) => index / steps || 0)

let previousY = 0
let previousRatio = 0

const handleIntersect = entries => {
  entries.forEach(entry => {
    const currentY = entry.boundingClientRect.y
    const currentRatio = entry.intersectionRatio
    const isIntersecting = entry.isIntersecting

    // Scrolling down/up
    if (currentY < previousY) {
      if (currentRatio > previousRatio && isIntersecting) {
        //console.log("Scrolling down enter");
        $("#contents section:last").after( $("#contents section:first") );
      } else {
        //console.log("Scrolling down leave");
      }
    } else if (currentY > previousY && isIntersecting) {
      if (currentRatio < previousRatio) {
        //console.log("Scrolling up leave");
      } else {
        //console.log("Scrolling up enter");
      }
    }

    previousY = currentY
    previousRatio = currentRatio
  })
}

const observer6 = new IntersectionObserver(handleIntersect, {
  threshold: thresholdArray(20), 
})

observer6.observe(target6)



//////////// INFINITE SCROLL UP //////////////

const target7 = document.querySelector('#beginning-sections')

const thresholdArray7 = steps => Array(steps + 1)
 .fill(0)
 .map((_, index) => index / steps || 0)

let previousY7 = 0
let previousRatio7 = 0

const handleIntersect2 = entries => {
  entries.forEach(entry => {
    const currentY = entry.boundingClientRect.y
    const currentRatio = entry.intersectionRatio
    const isIntersecting = entry.isIntersecting

    // Scrolling down/up
    if (currentY < previousY7) {
      if (currentRatio > previousRatio7 && isIntersecting) {
        //console.log("Scrolling down enter");
      } else {
        //console.log("Scrolling down leave");
      }
    } else if (currentY > previousY7 && isIntersecting) {
      if (currentRatio < previousRatio7) {
        //console.log("Scrolling up leave");
      } else {
        //console.log("Scrolling up enter");
        var heightLastSection = $("#contents section:last").outerHeight(); // recupere la hauteur de la derniere section
        $("#contents section:first").before( $("#contents section:last") ); // positionne la derniere section en premiere position mais positionne la vue au debut de cette section cassant la transition 
        $(window).scrollTop(heightLastSection); // redescend la vue de la hauteur de la (ex) derniere section
      }
    }

    previousY7 = currentY
    previousRatio7 = currentRatio
  })
}

const observer7 = new IntersectionObserver(handleIntersect2, {
  threshold: thresholdArray7(20),
})

observer7.observe(target7)

 */


/*
///////////////////////////////////////////////
////////////////// ANIMATION 3D ///////////////
///////////////////////////////////////////////


let layout1 = document.getElementsByClassName("main");
let layout2 = document.getElementsByClassName("fond");
let layout3 = document.getElementsByClassName("digitalToolbox");
let layout4 = document.getElementsByClassName("layout4");

document.onmousemove = function () {

////////////////// ANIME CADRE ////////////////
  let x1 = (event.clientX * 100 / window.innerWidth)/300 + "%";
  let y1= (event.clientY * 100 / window.innerHeight)/300 + "%";

  for(let i = 0; i < layout1.length; i++)
  {
    layout1[i].style.transform = "translate(-" + x1 + ",-" + y1 + ")";
  }

////////////////// ANIME PHOTO ////////////////
  let x2 = (event.clientX * 100 / window.innerWidth)/150 + "%";
  let y2 = (event.clientY * 100 / window.innerHeight)/150 + "%";

  for(let i = 0; i < layout2.length; i++)
  {
    layout2[i].style.transform = "translate(-" + x2 + ",-" + y2 + ")";
  }

///////////// ANIME DIGITAL TOOLBOX////////////
  let x3 = (event.clientX * 100 / window.innerWidth)/70 + "%";
  let y3 = (event.clientY * 100 / window.innerHeight)/70 + "%";

  for(let i = 0; i < layout3.length; i++)
  {
    layout3[i].style.transform = "translate(-" + x3 + ",-" + y3 + ")";
  }

///////////// ANIME SKILLS/PROJECTS ///////////
  let x4 = (event.clientX * 100 / window.innerWidth)/20 + "%";
  let y4 = (event.clientY * 100 / window.innerHeight)/20 + "%";

  for(let i = 0; i < layout4.length; i++)
  {
    layout4[i].style.transform = "translate(-" + x4 + ",-" + y4 + ")";
  }
  
}
 */

