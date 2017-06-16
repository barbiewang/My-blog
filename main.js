// var app = new Vue({
//     el:'#count',
//     data:{
//         num:ZanNum
//     }
// });
 var ViewModel = {
     init:function(){
         zanNum();
         showDropdown();
     },
    zanNum : function(){
        var count = $("#count"),
            num = 0,
            heart = $("#heart");
        heart.click(function(){
            num += 1;
            count.text(num);
            heart.attr("src","icon/heart.png");

        });
    },
    showDropdown : function(){
        var dropdowns = $(".dropdown"),
            dropdownMenus = $(".dropdown-menu"),
            len = dropdowns.length;
        for(var i=0;i<len;i++){
            $(dropdowns[i]).attr("index",i);
            $(dropdowns[i]).click(function(){
                console.log("a");
                var j = $(this).attr("index");
                $(dropdownMenus[j]).toggle();
        })
        }


    }

};
ViewModel.zanNum();
ViewModel.showDropdown();

