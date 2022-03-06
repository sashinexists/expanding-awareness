const QUOTES = [
  {
    text:
      "We have a choice. We have two options as human beings. We have a choice between conversation and war. That's it. Conversation and violence.",
    author: "Sam Harris",
  },
  {
    text:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    author: "Aristotle",
  },
  {
    text: "He who knows only his side of the case knows little of that.",
    author: "John Stuart-Mill",
  },
  {
    text:
      "I may be wrong and you may be right, and by an effort, we may get nearer to the truth.",
    author: "Karl Popper",
  },
  {
    text: "It is the very nature of argument to stake a claim to being right",
    author: "Steven Pinker",
  },
];

let QUOTE_CAROUSEL = document.querySelector(".quote-carousel");
let QUOTE_CAROUSEL_TEXT = document.querySelector(".quote-carousel-text");
let QUOTE_CAROUSEL_AUTHOR = document.querySelector(".quote-carousel-author");
let QUOTE_CAROUSEL_NAV = document.querySelector(".quote-carousel-nav");

let quotesCarouselNavContent = () => {
  let content = "";
  QUOTES.forEach(
    (val, i) =>
      (content += `<span style="cursor:pointer;" id="quote-carousel-nav-link---{i}" class="quote-carousel-nav-link quote-carousel-nav-link-inactive">•</span>`)
  );
  return content;
};

QUOTE_CAROUSEL_NAV.innerHTML = quotesCarouselNavContent();
let QUOTE_CAROUSEL_NAV_LINKS = document.querySelectorAll(
  ".quote-carousel-nav-link"
);

let carousel = {
  position: -1,
  timer: 10000,
  fnHandle: null,
  spin: () => {
    const nextQuote = (carousel.position + 1) % QUOTES.length;
    carousel.set(nextQuote);
  },
  set: (pos) => {
    carousel.position = pos;
    setCarousel(carousel.position);

    if (carousel.fnHandle) clearTimeout(carousel.fnHandle);
    carousel.fnHandle = setTimeout(carousel.spin, carousel.timer);
  },
};
carousel.spin();

QUOTE_CAROUSEL_NAV_LINKS[0].classList.remove(
  "quote-carousel-nav-link-inactive"
);
QUOTE_CAROUSEL_NAV_LINKS[0].classList.add("quote-carousel-nav-link-active");

function setCarousel(position) {
  QUOTE_CAROUSEL_TEXT.innerHTML = QUOTES[position].text;
  QUOTE_CAROUSEL_AUTHOR.innerHTML = QUOTES[position].author;

  QUOTE_CAROUSEL_NAV_LINKS.forEach((val, i) => {
    if (val.id[val.id.length - 1] === position.toString()) {
      val.classList.remove("quote-carousel-nav-link-inactive");
      val.classList.add("quote-carousel-nav-link-active");
    } else {
      val.classList.add("quote-carousel-nav-link-inactive");
      val.classList.remove("quote-carousel-nav-link-active");
    }
  });
}

QUOTE_CAROUSEL_NAV_LINKS.forEach((val, i) =>
  val.addEventListener("click", () => carousel.set(i))
);

/////////for adjective carousel
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 100 + Math.random() * 50;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
