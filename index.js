// if ($("body").data("title") === "home") {
//   var top1 = $("#about").offset().top;
//   var top2 = $("#wid").offset().top;
//   var top3 = $("#blog").offset().top;

//   $(document).scroll(function () {
//     var scrollPos = $(document).scrollTop();
//     if (scrollPos >= top1 && scrollPos < top2) {
//       $(".nav-link").css("color", "white");
//     } else if (scrollPos >= top2 && scrollPos < top3) {
//       $(".nav-link").css("color", "black");
//     } else if (scrollPos >= top3) {
//       $(".nav-link").css("color", "white");
//     }
//   });
// }
document.addEventListener('DOMContentLoaded', () => {
  let currentSectionIndex = 0 // Track the current section index
  const sections = document.querySelectorAll('section') // Select all sections
  const totalSections = sections.length // Get the total number of sections

  // Function to scroll to the specified section index
  function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' })
  }

  // Handle scroll event to determine the scroll direction
  function handleScroll(event) {
    if (event.deltaY > 0) {
      // Scrolling down
      if (currentSectionIndex < totalSections - 1) {
        currentSectionIndex++
        scrollToSection(currentSectionIndex)
      }
    } else {
      // Scrolling up
      if (currentSectionIndex > 0) {
        currentSectionIndex--
        scrollToSection(currentSectionIndex)
      }
    }
  }

  // Attach the scroll event listener to the window
  window.addEventListener('wheel', handleScroll)
})

if ($('body').data('title') === 'projects') {
  $('.btn').click(function () {
    var id = $(this).attr('id')
    $('#modal-' + id).css('visibility', 'visible')
    $('.close').click(function () {
      $('#modal-' + id).css('visibility', 'hidden')
    })
  })
}
