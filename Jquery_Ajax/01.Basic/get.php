
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<a href="" onclick="click_here()">click here</a>

<input type="text" >
<button type="submit">submit</button>

<?php

echo "Hello" ;
echo "Hello2" ;


?>
<script>
    function click_here(){
        $.ajax({
            url:"index.php",
            type:"post",
            success:function(result, xhr ){
                document.write(result)
                document.appendChild(result)
                document.getElementById("pri").innerHTML = "result";
                console.log(xhr)
            }
        });
    }
</script>