//By Hyijun. 如有问题请联系作者：https://github.com/Hyijun/wikipedia_cover/issues

//将你需要屏蔽的用户写在这个数组中，以逗号（半角）分隔，名字用双引号（半角）包围起来，不需要User:前缀
//例子：var users = new Array("User1", "User2", "User3");
var users = new Array("Any_user");

//如果您不熟悉js语言，请不要修改以下代码
var url = window.location.href;
var matre = /.*?zh.wikipedia.org\/wiki\/(Wikipedia.*?|User_talk:.*?|User:.*?|.*?Talk.*?:.*?|Talk:.*?)/img;
if (!matre.test(url)){
    console.log("因为处于条目空间，屏蔽工具未运行。");
}else{
    var res_1 = new Array();
    console.log("屏蔽工具正在运行。");
    var users_name = "";
    for (var each in users){
        if (each != (users.length - 1)){
            users_name = users_name + users[each] + "|";
        }else{
            users_name = users_name + users[each];
        }
    }
    var s1 = document.getElementById("mw-content-text").innerHTML;
    var re1 = new RegExp("<(p|dd|li)>.*?User:(" + users_name +")[\\s\\S]*?</(p|dd|li)>", "igm");
    s1 = document.getElementById("mw-content-text").innerHTML = s1.replace(re1, "<small><div>[已删除一段留言]</div></small>");
}
