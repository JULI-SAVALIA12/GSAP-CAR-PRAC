// Select the car and wheels
const car = document.querySelector('.car');
const frontWheel = document.querySelector('.wheel.front');
const backWheel = document.querySelector('.wheel.back');

// Animate the car moving from left to right
gsap.to(car, {

  x: window.innerWidth + 200, // Move car off-screen to the right
//   The x: window.innerWidth + 200 line in the GSAP animation code means:

// x property:
// The x property controls the horizontal position (left-to-right movement) of the element being animated. It adjusts the translateX CSS property, which shifts the element along the X-axis.

// window.innerWidth:
// This represents the width of the browser window in pixels (the visible area). It gives the distance from the left edge of the viewport (0) to the right edge.

// + 200:
// This adds 200 pixels to the width of the browser window. By doing so, we are telling GSAP to move the element 200 pixels beyond the right edge of the screen. This ensures the car moves completely off-screen.
  duration: 5, // Animation lasts 5 seconds i.e speed of the element 
  ease: "power1.inOut", // Smooth start and stop
  repeat: -1, // Repeat infinitely
  delay: 1, // Start after 1 second
});

// Animate the wheels rotating
gsap.to([frontWheel, backWheel], {
  rotation: 360, // Full circle rotation
  duration: 0.5, // Each rotation takes 0.5 seconds
  ease: "none", // Constant rotation speed
  repeat: -1, // Repeat infinitely
});
