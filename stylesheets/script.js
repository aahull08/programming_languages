document.addEventListener("DOMContentLoaded", (e) => {
  let rubyButton = document.querySelectorAll("a")[0];
  let rubyParagraph = document.querySelectorAll('p')[0];

  let jsButton = document.querySelectorAll("a")[1];
  let jsParagraph = document.querySelectorAll('p')[1];

  let lispButton = document.querySelectorAll("a")[2];
  let lispParagraph = document.querySelectorAll('p')[2];
  
  function flip_button(button){
    if (button.classList.contains("show_more")){
      button.textContent = "Show Less"
    } else {
      button.textContent = "Show More"
    }
    button.classList.toggle("show_more")
  }

  function flip_paragraphs(paragraph, short, long){
    if (paragraph.classList.contains("short")){
      paragraph.textContent = long;
    } else {
      paragraph.textContent = short;
    }
    paragraph.classList.toggle("short")
  }

  rubyButton.addEventListener("click", (e) => {
    e.preventDefault()
    flip_button(rubyButton)
    flip_paragraphs(rubyParagraph, languages["ruby"]["short"], languages["ruby"]["long"])
  });
  
  jsButton.addEventListener("click", (e) => {
    e.preventDefault()
    flip_button(jsButton)
    flip_paragraphs(jsParagraph, languages["javascript"]["short"], languages["javascript"]["long"])
  });
  
  lispButton.addEventListener("click", (e) => {
    e.preventDefault()
    flip_button(lispButton)
    flip_paragraphs(lispParagraph, languages["lisp"]["short"], languages["lisp"]["long"])
  });
})

let languages = {
  ruby: {
    short: "Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. \
    It was designed and developed in the mid-1990s by Yukihiro Matsumoto in Japan. According \
    to its creator, Ruby was...",
    long: "Ruby is a dynamic, reflective, object-oriented, general-purpose programming language. \
     It was designed and developed in the mid-1990s by Yukihiro Matsumoto in Japan. According \
     to its creator, Ruby was influenced by Perl, Smalltalk, Eiffel, Ada, and Lisp. \
     It supports multiple programming paradigms, including functional, object-oriented, \
     and imperative. It also has a dynamic type system and automatic memory management."
  },
  javascript: {
    short: "JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS...",
    long: "JavaScript is a high-level, dynamic, untyped, and interpreted programming language. It has been standardized in the ECMAScript language specification. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production; the majority of websites employ it, and all modern Web browsers support it without the need for plug-ins. JavaScript is prototype-based with first-class functions, making it a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.",
  },
  lisp: {
    short: "Lisp (historically, LISP) is a family of computer programming languages with a long history and a distinctive, fully parenthesized prefix notation. Originally specified in 1958, Lisp is the second-oldest high-level programming...",
    long: "Lisp (historically, LISP) is a family of computer programming languages with a long history and a distinctive, fully parenthesized prefix notation. Originally specified in 1958, Lisp is the second-oldest high-level programming language in widespread use today. Only Fortran is older, by one year. Lisp has changed since its early days, and many dialects have existed over its history. Today, the best known general-purpose Lisp dialects are Common Lisp and Scheme.",
  }
}