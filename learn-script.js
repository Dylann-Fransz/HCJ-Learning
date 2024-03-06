// LEARN MENU

const learn_menu = document.querySelector(".chapter-menu");
const learn_title = document.querySelector(".chapter-title");
const learn_chapter = document.querySelector(".chapter-info");
const learn_chapters = document.querySelector(".select-chapters");

const learn_arrow = document.querySelector(".hide-learn-menu");

// SHOWCASE

const showcase_color_button = document.querySelector(".showcase-color-button");

const change_value_button = document.querySelector(".change-value-button");
const change_value_output = document.querySelector(".change-value-output");
const change_value_variable = document.querySelector(".change-value-variable");

// FUNCTIONS

function toggleLearnMenu() {

  if (learn_menu.classList.contains("hideLearnMenu")) {
    learn_title.classList.remove("hide");
    learn_arrow.classList.remove("flipArrow");
    learn_menu.classList.remove("hideLearnMenu");
    learn_chapters.classList.remove("hide");
    learn_chapter.classList.remove("expandChapter");
  } else {
    learn_title.classList.add("hide");
    learn_arrow.classList.add("flipArrow");
    learn_chapters.classList.add("hide");
    learn_menu.classList.add("hideLearnMenu");
    learn_chapter.classList.add("expandChapter");
  }

}

function change_random_color_function(){

  showcase_color_button.style = "background-color: rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ");";
  
}

function change_value_function(){

  change_value_output.innerHTML = "Hotdogs";
  change_value_variable.innerHTML = 'var Variable_Name = "Hotdogs";<br></br>'
  
}

// CONNECTIONS

learn_arrow.addEventListener("click", toggleLearnMenu);

showcase_color_button.addEventListener("click", change_random_color_function);
change_value_button.addEventListener("click", change_value_function);