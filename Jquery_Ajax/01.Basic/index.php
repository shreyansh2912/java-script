<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<a href="" onclick="click_here()">click here</a>
<span id="pri"></span>

<script>
   document.getElementById("pri").innerHTML = "result";
    function click_here(){
        $.ajax({
            url:"get.php",
            type:"post",
            success:function(result, xhr ){
                document.write(result)
                document.appendChild(result)
            }
        });
    }
</script>