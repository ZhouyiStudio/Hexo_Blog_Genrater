function hexobloggenrater (target) {
// 引入readline模块
var readline = require('readline');
var install = require("child_process");

// 创建接口实例
let select = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// 方法方法setPromat(promat) ，就是给每一行设置一个提示符，
select.setPrompt("Hexo_Blog_Genrater> ");
// prompt()是最重要的方法，因为它体现了readline的核心作用，
// 以行为单位读取数据，prompt方法就是在等待用户输入数据
select.prompt();
//TIPS
console.log("\n usage [option]\n           install == INSTALL HEXO \n           new == NEW BLOG PROJECT \n            instheme == INSTALL THEME \n            run == RUN SERVER \n           CTRL+C or close == CLOSE \n Hexo_Blog_Genrater> ENTER YOUR SELECT : ")
// 调用接口方法
// 监听了'line' 事件，因为prompt方法调用一次就只会读取一次数据
// 所以，在这个方法又调用了一次prompt方法，这样就可以继续读取用户输入
// 从而达到一种命令行的效果
select.on("line", function (line) {
    switch (line.trim()) {
        case "install":
            console.log("==========INSTALL HEXO==========");
            console.log("==========Please Wait !!!!==========");
            install.exec("npm install hexo-cli -g",function(err,stdout,stderr){
                if(err){
                    console.error(err);
                }
                console.log(stdout);
                console.log(stderr);
            console.log("==========Type ENTER To Continue Type CTRL+C To Exit==========");
            });
            break;
        case "new":
            console.log("==========NEW BLOG PROJECT==========");
            break;
        case "instheme":
            console.log("==========INSTALL THEME==========");
            break;
        case "run":
            console.log("==========RUN SERVER==========");
            break;
        case "close":
            select.close();
            break;
        default:
            console.log( "You are not entering the correct command");
            break;
    }
    select.prompt();
});

// close事件监听
select.on("close", function () {
    console.log("Bye!");
    process.exit(0);
})
}
export default hexobloggenrater
