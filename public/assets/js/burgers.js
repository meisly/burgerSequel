$(function() {
$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let newBurger = {
      name: $("#nom").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Added a burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".devour-burger").on("click", function(){
    const id = $(this).data("id");
    const devoured = true;

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: {devoured: devoured}
      }).then(
        function() {
          console.log("changed devoured to", devoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
  })
});