document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".read-more").forEach((button) => {
    button.addEventListener("click", (event) => {
      const article = event.target.closest("article");
      const shortDescription = article.querySelector(".short-description");
      const fullDescription = article.querySelector(".full-description");
      const readMore = article.querySelector(".read-more");
      const readLess = article.querySelector(".read-less");

      shortDescription.style.display = "none";
      fullDescription.style.display = "block";
      readMore.style.display = "none";
      readLess.style.display = "inline";
    });
  });

  document.querySelectorAll(".read-less").forEach((button) => {
    button.addEventListener("click", (event) => {
      const article = event.target.closest("article");
      const shortDescription = article.querySelector(".short-description");
      const fullDescription = article.querySelector(".full-description");
      const readMore = article.querySelector(".read-more");
      const readLess = article.querySelector(".read-less");

      shortDescription.style.display = "block";
      fullDescription.style.display = "none";
      readMore.style.display = "inline";
      readLess.style.display = "none";
    });
  });
});
