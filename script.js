document.querySelectorAll('.work-card').forEach((card) => {
  // find the image inside this div
  const img = card.querySelector('.work-title img');

  // show the image when hovering over the card
  card.addEventListener('mouseenter', () => {
    if (img) img.style.display = 'flex';
  });

  // hide the image when leaving the card
  card.addEventListener('mouseleave', () => {
    if (img) img.style.display = 'none';
  });
});

document.querySelectorAll('.educ-card').forEach((card) => {
  const img = card.querySelector('.educ-title img');

  card.addEventListener('mouseenter', () => {
    if (img) img.style.display = 'flex';
  });

  card.addEventListener('mouseleave', () => {
    if (img) img.style.display = 'none';
  });
});
