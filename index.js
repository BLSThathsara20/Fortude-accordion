const panels = document.querySelectorAll('.panel');
const slide = document.querySelectorAll('.slide');
const panel1 = document.getElementsByClassName('.panel-1');
panels.forEach((panel) => {
  panel.addEventListener('mouseover', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});
panels.forEach((panel) => {
    panel.addEventListener('mouseleave', () => {
      removeActiveClasses();
      panel.classList.remove('active');
    });
  });
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

function expand(target) {
  for (let slide of target.parentNode.children) {
      slide.classList.remove("slide--expanded");
  }
  target.classList.add("slide--expanded");
}

// mouseover
// click