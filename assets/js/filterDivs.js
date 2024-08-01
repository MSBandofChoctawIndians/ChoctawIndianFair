function filterDivs(event) {
  const filter = event.target.dataset.filter;
  const cols = document.querySelectorAll('#myTabContent .col');

  if (filter === 'all') {
    cols.forEach(col => {
      col.style.display = 'block';
    });
  } else {
    cols.forEach(col => {
      if (col.classList.contains(filter)) {
        col.style.display = 'block';
      } else {
        col.style.display = 'none';
      }
    });
  }

  const filterButtons = document.querySelectorAll('.btn');
  filterButtons.forEach(button => {
    button.classList.remove('active');
  });

  event.target.classList.add('active');
}

const filterButtons = document.querySelectorAll('.btn');
filterButtons.forEach(button => {
  button.addEventListener('click', filterDivs);
});

// Initially show all columns
const allButton = document.querySelector('button[data-filter="all"]');
allButton.classList.add('active');
filterDivs({ target: allButton });
