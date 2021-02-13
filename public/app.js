$('#submitForm').on("click", (event) => {
    var thisId = $(this).attr("data-id");
    var p1 = $("#paragraph").val();
    var blogPost = {
        title: $("#title").val(),
        blurb: $("#blurb").val(),
        paragraphs: [p1]
    }
    if (x > 0) {
        let px = $("#paragraph" + x).val();
        blogPost.paragraphs.push(px);
        x--;
    }
    //console.log(blogPost);
    $.ajax({
        method: "POST",
        url: "/api/blogPost/" + thisId,
        data: blogPost
    }).then(res => {
        $("#title").empty();
        $("#blurb").empty();
        $("#paragraph").empty();
    })
});
var wrapper = $(".input_fields_wrap"); //Fields wrapper
var add_button = $("#addParagraph");
var x = 1; //initlal text box count
$(add_button).click(function (e) { //on add input button click
    e.preventDefault();
    x++; //text box increment
    $(wrapper).append('<div><input type="text" id="paragraph' + x + '" name="mytext' + x + '"/><a href="#" class="remove_field">Remove</a></div>'); //add input box
});
$(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
    e.preventDefault(); $(this).parent('div').remove();
    x--;
});