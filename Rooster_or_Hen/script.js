var img =  ["img/20230422_105607.jpg", "img/arms.jpg", "img/girl.png"]

var img_num = 0

function over() {
    console.log(chicken_switcher.src)
    if (img_num == 0) {
        chicken_switcher.src = img[1]
        img_num = 1
    }else if(img_num == 1){
        chicken_switcher.src = img[2]
        img_num = 2
    }else {
        chicken_switcher.src = img[0]
        img_num = 0
    }
}
