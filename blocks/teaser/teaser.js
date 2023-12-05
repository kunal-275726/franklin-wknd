export default function decorate(block) {
  block.firstElementChild.classList.add('teaser-wrapper')
  const cols = [...block.firstElementChild.children];
  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('teaser__image-wrapper');
          if(picWrapper.nextElementSibling) {
            picWrapper.nextElementSibling.classList.add('teaser__text-wrapper');
          } else if(picWrapper.previousElementSibling) {
            picWrapper.previousElementSibling.classList.add('teaser__text-wrapper');
          }
        }
      }
    });
  });
}