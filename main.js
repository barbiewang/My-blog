// var app = new Vue({
//     el:'#count',
//     data:{
//         num:ZanNum
//     }
// });
 var ViewModel = {
    zanNum : function(){
        var count = $("#count"),
            num = 0,
            heart = $("#heart");
        heart.click(function(){
            num += 1;
            if(num % 2 === 1){
                count.text(num % 2);
                heart.attr("src","icon/heart.png");
            }
            else{
                count.text("");
                heart.attr("src","icon/heart2.png");
            }

        });
    },
    showDropdown : function(){
        var dropdowns = $(".dropdown"),
            dropdownMenus = $(".dropdown-menu"),
            len = dropdowns.length;
        for(var i=0;i<len;i++){
            $(dropdowns[i]).attr("index",i);
            $(dropdowns[i]).click(function(){
                var j = $(this).attr("index");
                $(dropdownMenus[j]).toggle();
            });
        }
    },
    showTextArea : function(){
       var comment = $("#comment");
        comment.click(function(){
            $(".commentArea").toggle();

        })
    },
    submitEnable: function() {
        $(".textArea").keyup(function () {
            var value = $(this).val();
            if (value.length > 50 || value.length <= 0) {
                $(".submit").attr("disabled", "true");
            }
            else {
                $(".submit").removeAttr("disabled");
            }
        })
    },
    init : function(){
        this.zanNum();
        this.submitEnable();
        this.showTextArea();
        this.showDropdown()
    }

};
ViewModel.init();