
const items = document.getElementsByClassName('item');
const points = document.getElementsByClassName('point');
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

// 需要轮播的图片数量
const itemsLen = items.length;
// 当前展示的图片索引
let index = 0;


// 右移
leftBtn.onclick = () => {

    // 重置所有轮播的元素 class
    for (let i = 0; i < itemsLen; ++i) {
        items[i].className = 'item';
        points[i].className = 'point';
    }

    index = (itemsLen + index - 1) % itemsLen;
    items[index].className = "item active";
    points[index].className = "point active";
}

// 右移
rightBtn.onclick = () => {

    // 重置所有轮播的元素 class
    for (let i = 0; i < itemsLen; ++i) {
        items[i].className = 'item';
        points[i].className = 'point';
    }

    index = (index + 1) % itemsLen;
    items[index].className = "item active";
    points[index].className = "point active";

}

// 原点按钮点击
for (let i = 0; i < itemsLen; ++i) {
    points[i].onclick = function () {
        // 重置所有轮播的元素 class
        for (let i = 0; i < itemsLen; ++i) {
            items[i].className = 'item';
            points[i].className = 'point';
        }

        index = this.getAttribute('data-index');
        items[index].className = "item active";
        points[index].className = "point active";
    };
}
