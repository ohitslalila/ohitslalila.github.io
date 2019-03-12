$("#btn").click(function(){

    $.ajax({
        url:'https://162.105.94.242/bdtest.php',
        type:'get',
        dataType:'jsonp',
        data:{post1:$("#name_input").val(), post2:$("#num_input").val()},
        success:function(data){
                // $("#result").text(JSON.stringify(data));
                // $("#result").text("!");
                for (var key in data) {
					if (key.search("error") != -1){
                    $("#grade").text("<li>" + key + ": " + data[key] + "</li>");
                } else { 
                    $("#grade").text("<li>" + "查询结果: " + "</li>");          
	                for (var key in data) {
						if (key.search("第") != -1){
	                    $("#grade").append("<li>" + key + ": " + data[key] + "</li>");
	                };
                };
                };
                // $("#post2").text(data[1]);
        },
        error:function(data){
        	    $("#result").text("error: " + data);
                // console.log(data);

        },
    });
});