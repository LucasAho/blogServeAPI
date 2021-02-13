var x = 0; //initlal text box count
var p1 = $("#paragraph").val();
var blogPost = {
    title,
    blurb,
    paragraphs: []
}
contentArrayCombine = (n) => {
    if (n == 0) {
        blogPost.paragraphs.push($("#paragraph").val());
        return;
    };
    if (n > 0) {
        let px = $("#paragraph" + n).val();
        blogPost.paragraphs.push(px);
        n--;
        contentArrayCombine(n);
    }
}
fillBlogObj = () => {
    blogPost.title = $("#title").val()
    blogPost.blurb = $("#blurb").val()
}
$('#submitForm').on("click", (e) => {
    e.preventDefault();
    var thisId = $(this).attr("data-id");
    contentArrayCombine(x);
    fillBlogObj();
    console.log(blogPost.paragraphs);
    $.ajax({
        method: "POST",
        url: "/api/blogPost/" + thisId,
        data: blogPost
    }).then(res => {
        location.reload();
        $("#title").val("");
        $("#blurb").empty();
        $("#paragraph").empty();
    });
});
var wrapper = $(".input_fields_wrap"); //Fields wrapper
var add_button = $("#addParagraph");
$(add_button).click(function (e) { //on add input button click
    e.preventDefault();
    x++; //text box increment
    $(wrapper).append('<div><label for="paragraph' + x + '">Content' + x + ':</label><br><textarea cols="100%" type="text" id="paragraph' + x + '" name="mytext' + x + '"></textarea><a href="#" class="remove_field">Remove</a></div>'); //add input box

    $.ajax({
        method: "GET",
        url: "/api/blogPost",
    }).then(res => {
        console.log(res);
    });
});
$(wrapper).on("click", ".remove_field", function (e) { //user click on remove text
    e.preventDefault(); $(this).parent('div').remove();
    x--;
});

$(document).ready(()=>{



})