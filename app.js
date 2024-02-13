 // Get references to the menu button and the footer
 const menuBtn = document.getElementById('menu-btn');
 const footer = document.getElementById('footer');

 // Variable to track the state (whether the footer is currently visible)
 let isFooterVisible = false;

 // Add a click event listener to the menu button
 menuBtn.addEventListener('click', function () {
     // Toggle the state
     isFooterVisible = !isFooterVisible;

     // Scroll to the footer if it's visible, otherwise scroll to the top
     const scrollOptions = {
         behavior: 'smooth',
         block: 'start',
     };

     if (isFooterVisible) {
         footer.scrollIntoView(scrollOptions);
     } else {
         window.scrollTo({ top: 0, ...scrollOptions });
     }
 });