const $ = (param) => document.querySelectorAll(param);
const setDropDowns = (dropDown, btn) => {
  $(`.${dropDown} .${btn}`).forEach((btn, indexB) => {
    btn.addEventListener('click', e => {
      $(`.${dropDown}`).forEach((menu, indexM) => {
        if (indexM === indexB) {
          menu.classList.toggle('active');
        }
      });
    });
  });
};

setDropDowns('menu', 'btn');
setDropDowns('dropdown', 'btn');

function getSum(x, y) {
  let z = 0;

  z = x + y;

  return z;
}


console.log(getSum(7, 15));
console.log(getSum(71, 354));
console.log(getSum(156, 357));