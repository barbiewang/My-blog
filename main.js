// var app = new Vue({
//     el:'#count',
//     data:{
//         num:ZanNum
//     }
// });
 var Model = {
    href : ["Reshape_the_Matrix.html","Fizz_Buzz.html"],
    title: ["Reshape the Matrix","Fizz Buzz"],
     time:["June 19,2017","June 20,2017"]
 };
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
     jsBlogList:function(){
         var liArr = Model.title;
         for(var i = 0;i<liArr.length;i++){
             // var a = document.createElement("a");
             // a.setAttribute("class","blog-header-title-brief JS-blogs-title");
             // a.setAttribute("href",Model.href[i]);
             // a.innerText = ""
             $(".JS-blogs-list").append("<li><a class='blog-header-title-brief JS-blogs-title' href="
                 + Model.href[i] + ">" + Model.title[i]+"</a><span class='blog-post-meta JS-blogs-signature'><time>"
                 + Model.time[i]+"</time> by <a href='#'>JaneWang</a></span></li>");
         }
     },
    init : function(){
        this.zanNum();
        this.submitEnable();
        this.showTextArea();
        this.showDropdown()
        this.jsBlogList();
    }

};
ViewModel.init();