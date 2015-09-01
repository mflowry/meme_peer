
$(document).ready(function(){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/meme',
        complete: function(data) {
            console.log("ajax")

        },
        success: function(data){
            console.log("entered    " , data);
            //var $button = $('<button>');
            //for(var i = 0; i<5;i++){
            //    var $img = $('<img>');
            //    $img.attr('src', data[i].src);
            //    $results.append($img);

        //    },error: function(errType) {
        //    console.log("There is an error", errType);
        }
    });


    var $body = $('<body>');

    $body.on('click', '#submit', function(){
        var id = $(this).attr('id');
        $.ajax({
            type: "POST",
            url: '/meme',
            data: {
                id: id,
                text:$(this).parent().firstChild()
            },
            contentType: "application/JSON",



        })

    });


    router.post('/:id?', function(req, res, next) {

        var id = req.params.id;

        var file = path.join(__dirname, '../models/cuteimg.json');
        fs.writeFile(file, 'utf8', function(err, data){
            if(err){
                next(err);
            } else {
                var obj = JSON.parse(data);
                var dawg = obj;

                res.json(dawg);
            }
        })
    });


});
