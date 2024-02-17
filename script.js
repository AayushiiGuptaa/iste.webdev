document.addEventListener('DOMContentLoaded', function () {
  const artworks = document.querySelectorAll('.artwork');

  artworks.forEach((artwork, index) => {
    artwork.addEventListener('click', () => {
      alert(`You clicked on Artwork ${index + 1}`);
    });
  });
});
