// Photo data for each tab
const photoData = {
  japan: [
    "j1.jpg",
    "j2.jpg",
    "j3.jpg",
    "j4.jpg",
    "j5.jpg",
    "j6.jpg",
    "j7.jpg",
    "j8.jpg",
    "j9.jpg",
    "j10.jpg",
    "j11.jpg",
    "j12.jpg",
    "j13.jpg",
    "j14.jpg",
    "j15.jpg",
    "j16.jpg",
    "j17.jpg",
    "j18.jpg",
    "j19.jpg",
    "j20.jpg",
    "j21.jpg",
    "j22.jpg",
    "j23.jpg",
    "j24.jpg",
    "j25.jpg",
    "j26.jpg",
    "j27.jpg",
    "j28.jpg",
    "j29.jpg",
    "j30.jpg",
    "j31.jpg",
    "j32.jpg",
    "j33.jpg",
    "j34.jpg",
    "j35.jpg",
    "j36.jpg",
    "j37.jpg",
    "j38.jpg",
    "j39.jpg",
    "j40.jpg",
    "j41.jpg",
    "j42.jpg",
    "j43.jpg",
    "j44.jpg",
    "j45.jpg",
    "j46.jpg"
  ],
  savannah: [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg"
  ],
  china: [
      "china1.jpeg",
      "china2.jpeg",
      "china3.jpeg",
      "china4.jpeg",
      "china5.jpeg",
      "china6.jpeg",
      "china7.jpeg",
      "china8.jpeg",
      "china9.jpeg",
      "china10.jpeg",
      "china11.jpeg",
      "china12.jpeg",
      "china13.jpeg",
      "china14.jpeg",
      "china15.jpeg",
      "china16.jpeg",
      "china17.jpeg",
      "china18.jpeg",
      "china19.jpeg",
      "china20.jpeg",
      "china21.JPG",
      "china22.JPG",
      "china23.JPG",
      "china24.JPG",
      "china25.JPG",
      "china26.JPG",
      "china27.JPG",
      "china28.JPG",
      "china29.JPG",
      "china30.JPG",
      "china31.JPG",
      "china32.JPG",
      "china33.JPG",
      "china34.JPG",
      "china35.JPG"
  ],
    motorcycles: [
        "bb1.JPG",
        "bb2.jpg",
        "bb3.jpg",
        "bb4.JPG",
        "bb5.jpg",
        "bb6.jpg",
        "bb7.jpeg",
        "bb8.JPG",
        "bb9.jpg",
        "bb10.jpg",
        "bb11.JPG",
        "bb12.JPG"
    ],
    portraits: [
        "p1.JPG",
        "p2.jpg",
        "p3.JPG",
        "p4.jpg",
        "p5.JPG",
        "p6.jpeg",
        "p7.jpeg",
        "p8.JPG",
        "p9.JPG",
        "p10.JPG",
        "p11.JPG",
        "p12.JPG",
        "p13.JPG",
        "p14.JPG",
        "p15.JPG",
        "p16.JPG",
        "p17.JPG",
        "p18.JPG",
        "p19.JPG",
        "p20.JPG",
        "p21.JPG",
        "p22.jpg",
        "p23.jpg",
        "p24.JPG",
        "p26.JPG",
        "p27.JPG",
        "p28.JPG",
        "p30.JPG"
    ],
    soundshore: [
        "s1.jpg",
        "s2.jpg",
        "s3.jpg",
        "s4.jpg",
        "s5.jpg",
        "s6.jpg",
        "s7.jpg",
        "s8.jpg",
        "s9.jpg",
        "s10.jpg",
        "s11.jpg",
        "s12.jpg",
        "s13.jpg",
        "s14.jpg",
        "s15.jpg"
    ],
    nys: [
      "nys1.jpeg",
      "nys2.JPG",
      "nys3.JPG",
      "nys4.jpg",
      "nys5.jpg",
      "nys6.JPG",
      "nys7.jpeg",
      "nys8.jpeg",
      "nys9.jpeg",
      "nys10.jpeg",
      "nys11.JPG",
      "nys12.JPG",
      "nys13.jpg",
      "nys14.JPG",
      "nys15.JPG",
      "nys16.JPG",
      "nys17.JPG",
      "nys18.JPG",
      "nys19.JPG",
      "nys20.jpg",
      "nys21.jpg",
      "nys22.jpg",
      "nys23.JPG",
      "nys24.jpg",
      "nys25.jpg",
      "nys26.JPG",
      "nys27.JPG",
      "nys28.JPG"
    ],
    savdslr: [
      "s1.JPG",
      "s2.JPG",
      "s3.JPG",
      "s4.JPG",
      "s5.JPG",
      "s6.JPG",
      "s7.JPG",
      "s8.JPG",
      "s9.JPG",
      "s10.JPG",
      "s11.JPG",
      "s12.JPG"
    ],
  "new-york": [
    "newyork1.jpg",
    "newyork2.jpg",
    "newyork3.jpg"
  ]
};

// Define descriptions for each location
const descriptions = {
  japan: "Fall 2024 - Kodak Gold 200, Kodak ColorPlus 200, Fujifilm 400 - I spent two weeks in Japan travelling with friends between Osaka, Kyoto, and Tokyo. " +
      "Japan was one of the most life changing places I've ever been because I saw what life could be like " +
      "when everyone has a profound care for their fellow human. The culture here was remarkable, and the food " +
      "was absolutely incredible. I fell in love with the countryside, the bowing deer in Nara and the tea fields " +
      "in Uji where matcha was invented. From the city lights to the mountains and valleys, this land is a " +
      "movie scene in every frame.",
  savannah: "Spring 2024 - Fujifilm 400 - A film walk through the spanish moss lined Savannah streets.",
  "new-york": "Experience the energy and iconic landmarks of New York City in these images.",
  china: "Summer 2024 - iPhone 15 Pro Max - I spent almost a month in China for work. I travelled between many cities in eastern china" +
      " and was deeply moved by the ancient cities, tea ceremonies, and remarkable people. Come on a tour" +
      " with me of my experiences in the People's Republic.",
    motorcycles: "When I was 18 years old I bought my first motorcycle. For $900 from a childhood friend I got my 1989 " +
        "Yamaha Radian 600, which I became obsessed with and rode every chance I got. Throughout college it became a weekly tradition " +
        "to go out with no plan at all, no maps, and just decide which way to turn randomly at each intersection. Each time " +
        "I would end up somewhere new, taking my time and finding all sorts of cool things off the beaten path. This became " +
        "a very therapeutic weekly reset for me. I would bring my DSLR and pull off somewhere, walk into the woods or along a river " +
        "and find little scenes to capture. It was just me, my music, my camera, and my bike. I honestly dont know how I would've gotten " +
        "through the grueling finals as a computer science major without it. \n \n The more I rode the more I found " +
        "things I could modify on the bike. I started with simple cosmetic things like paint and then doing very in depth work " +
        "almost to the point of rebuilding the whole motorcycle. I would attend bike nights in coney island and made so many great " +
        "friends who shared this passion. As the years went on and my skills grew, I've had the amazing fortune of riding some of " +
        "the best roads in the country and even the world. From the pacific coast highway in southern and northern california " +
        "to the tail of the dragon, I now know that the absolute best means for an adventure is in the saddle of a motorcycle. " +
        "Since then I've owned three, and am always itching to get back out on the road the next chance I get. \n \n" +
        "Here are some shots of my first bike from years ago taken during those cherished weekend adventures. \nMy old friend, Buckbeak.",
    portraits: "Here are some portraits of friends over the years.",
    soundshore: "Fall 2024 - Kodak gold - A chilly November walk through Greenwich point.",
    nys: "This collection is a few highlights from my weekend rides during freshman year of college. See the motorcycles tab for more background.",
    savdslr: "Spring 2024 - Photo walks through downtown Savannah on my Canon EOS Rebel T7 with a 18-55mm lens"
};

window.onload = function() {
  showAbout();
  highlightTab(document.querySelector('.tab')); // Highlights the first tab
};

function showAbout() {
  const photoGrid = document.querySelector(".photo-grid");
  const galleryDescription = document.getElementById("gallery-description");

    // Clear existing photos
    photoGrid.innerHTML = "";
    galleryDescription.textContent = "Welcome to the tomaso fotos experience";
    galleryDescription.margin = 0;

    // const imgElement = document.createElement("img");
    // imgElement.src = `public/about-me/me.jpeg`;
    // photoGrid.appendChild(imgElement);


  // Add content for "About Me"
  photoGrid.innerHTML = `
    <div class="about-section">
      <img src="public/about-me/portrait.jpeg" alt="About Me Portrait" class="about-photo-portrait">
      <p>My name is Tom and I'm a software engineer from NYC who loves motorcycles and taking pictures. <br><br>For me the two go hand in hand, and have
      brought me around the globe to experiences that have shaped me as a person. I've owned and rebuilt three motorcycles, currently riding a 2019 
      Yamaha XSR 700.<br><br>
      I've been into photography since I could hold a camera but started taking it seriously around fall 2018 when I bought my first DSLR. A simple
      Canon rebel t7 came with me on all my rides and adventures, from rooftop photoshoots in college to mountain road pulloffs looking at the viewfinder
      through my helmet visor, that camera became an essential extension of me. <br><br>
      Recently I've discovered a love for shooting on film that has really transformed the way I approach photography. I love how it slows me down but 
      in a way also feels more mobile. The philosophy of having finite exposures forces you to consider and value each shot, and having to wait for it
      to develop to see the results means you have no choice but to keep moving. Digital may have the crisp percision of the eye,
      but film captures the warmth and depth of the heart. Picutres on film feel full and rich and timeless, and I can't get enough. <br><br>
      I decided to finally upgrade from the point and shoots to a 1979 Canon A-1 I bought in Tokyo, and am on a mission to shoot only film. <br><br>
      <img src="public/about-me/hudsonvalley.JPG" alt="Gallery 2" class="about-photo"> <br>
      <img src="public/about-me/pointreyes.jpeg" alt="Gallery 2" class="about-photo"> <br>
      <img src="public/about-me/zorotail.jpeg" alt="Gallery 2" class="about-photo"> <br>
      <img src="public/about-me/sallysc.JPG" alt="Gallery 2" class="about-photo">
      <p>Thank you for visiting my site. I hope these photos inspire you to explore the beauty around you!</p>
    </div>
  `;
}

function highlightTab(tabElement) {
    // Remove 'active' class from all tabs
    document.querySelectorAll('.tab').forEach((tab) => tab.classList.remove('active'));

    // Add 'active' class to the clicked tab
    tabElement.classList.add('active');
}

let currentFolderName = ""; //Current folder name used for next/previous image
let currentPhotoList = []; // List of currently displayed photos
let currentPhotoIndex = 0; // Current index in the photo list

// Update the displayed photos and description
function showPhotos(location) {
  const photoGrid = document.querySelector(".photo-grid");
  const galleryDescription = document.getElementById("gallery-description");

  // Update description
  galleryDescription.textContent = descriptions[location];
  galleryDescription.innerHTML = descriptions[location].replace(/\n/g, "<br>");

  // Clear existing photos
  photoGrid.innerHTML = "";

  // Populate the current photo list and grid
  currentFolderName = location;
  currentPhotoList = photoData[location] || [];
  currentPhotoList.forEach((photo) => {
    const imgElement = document.createElement("img");
    imgElement.src = `public/${location}/${photo}`;
    imgElement.alt = `${location} photo`;
    photoGrid.appendChild(imgElement);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("photo-overlay");
  const enlargedPhoto = document.getElementById("enlarged-photo");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const closeOverlayButton = document.getElementById("close-overlay");

  // Show overlay with enlarged photo
  document.querySelector(".photo-grid").addEventListener("dblclick", (event) => {
    if (event.target.tagName === "IMG") {
      const photoSrc = event.target.src;

      // Determine the index of the clicked photo in the current list
      currentPhotoIndex = currentPhotoList.findIndex((photo) => photoSrc.endsWith(photo));

      // Set the enlarged photo's source
      if (currentPhotoIndex !== -1) {
        enlargedPhoto.src = photoSrc;
        overlay.style.display = "flex"; // Show the overlay
      }
    }
  });

  // Close overlay when clicking "X"
  closeOverlayButton.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  // Close overlay when clicking outside the image
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.style.display = "none";
    }
  });

  // Navigate to the previous photo
  function showPreviousPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + currentPhotoList.length) % currentPhotoList.length;
    enlargedPhoto.src = `public/${currentFolderName}/${currentPhotoList[currentPhotoIndex]}`;
  }

  // Navigate to the next photo
  function showNextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % currentPhotoList.length;
    enlargedPhoto.src = `public/${currentFolderName}/${currentPhotoList[currentPhotoIndex]}`;
  }

  // Add event listeners for navigation buttons
  leftArrow.addEventListener("click", showPreviousPhoto);
  rightArrow.addEventListener("click", showNextPhoto);

  // Handle keyboard navigation for overlay
  document.addEventListener("keydown", (event) => {
    if (overlay.style.display === "flex") { // Only respond if the overlay is visible
      if (event.key === "ArrowRight") {
        showNextPhoto();
      } else if (event.key === "ArrowLeft") {
        showPreviousPhoto();
      } else if (event.key === "Escape") {
        overlay.style.display = "none"; // Close overlay on Escape key
      }
    }
  });
});