const rows = document.querySelectorAll('.main-row');

// replace function ---------------------------------
const replaceElementsFunction = (element,parentDesktop,parentMobile,breakpoint, firstRule, lastRule) => {
  let containerWidth = document.documentElement.clientWidth;

  if(element) {
    if (containerWidth <= `${breakpoint}`) {
      parentMobile.insertAdjacentElement(`${firstRule}`, element);
    };
    if (containerWidth > `${breakpoint}`) {
      parentDesktop.insertAdjacentElement(`${lastRule}`, element);
    }
  }
}

rows.forEach(function(row){
  const title = row.querySelector('.title');
  const rowBox = row.querySelector('.main-row__box');
  
 window.addEventListener('resize', () => {
    replaceElementsFunction(title,rowBox,row, 768,'afterbegin','afterbegin'); // replace title on mobile version
  });
  window.addEventListener('DOMContentLoaded', () => {
    replaceElementsFunction(title,rowBox,row, 768,'afterbegin','afterbegin'); // replace title on mobile version
  });
})






