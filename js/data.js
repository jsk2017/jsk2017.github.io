var data = [];
var dataStr = "1、小猪找肉@\
<br><br>\
开心的像只猪， <br>\
闻见芬芳的气息，<br>\
慢慢烧了很久的烧肉，<br>\
初夏夜雨之后的土腥味儿。<br>\
<br><br>\
$2、厦门大学@\
<br><br><br>\
提一本书，<br>\
在校园里，<br>\
慢慢的，游啊、游啊。<br>\
<br><br>\
$3、明珠塔上@\
<br><br>\
登上高处，<br>\
俯瞰世界，听，<br>\
那是什么声音，<br>\
哦~是你的呼吸。<br>\
<br><br>\
$4、花城花影@\
<br><br><br>\
一座城、一段事，<br>\
花城的美丽你我共同感受，<br>\
将此记录。<br>\
<br><br>\
$5、早茶@\
<br>\
很多时候怀念过去，并不是因为<br>\
过去的日子比现在好多少，而是<br>\
至少当时的自己，并不知道现在<br>\
依然会过得不好，还有青春，还<br>\
有期盼，还有不切实际的白日梦<br>\
。<br>\
<br>\
$6、小松鼠@\
<br>\
游玩的路边<br>\
蹦出一只小松鼠<br>\
你是要将我带向何处<br>\
忽的你窜上了树<br>\
探头的模样真是可爱<br>\
。<br>\
<br>\
$7、大雁塔@\
<br><br>\
西安的夏日十分的火热。<br>\
难抵我的热情。<br>\
四处走走看看。<br>\
心该往何处安放。<br>\
<br><br>\
$8、在那里@\
<br><br>\
如果我能少喜欢你一点，<br>\
你会发现我是个特别好的人。<br>\
有时候，<br>\
爱会让人面目可憎。<br>\
<br><br>\
$9、蜿蜒@\
<br><br><br>\
我去旅行，<br>\
是因为我决定了要去，<br>\
并不是因为对风景的兴趣。<br>\
<br><br>\
$10、迎客松@\
<br>\
这一场旅行，<br>\
辛苦却很开心，<br>\
迎客来送客去，<br>\
登上光明顶，<br>\
日出、日落<br>\
要问此时我在想什么，<br>\
但愿有人依偎在身边。<br>\
$11、宏村@\
<br>\
江南小镇，<br>\
多么希望一切都如初。<br>\
可是时间已经过去很久，<br>\
虽心中抱怨，<br>\
但富裕起来的生活。<br>\
使你无法停止。<br>\
<br>\
$12、前路漫漫@\
<br><br><br>\
一年、两年、三年...<br>\
静看，路口越来越小，<br>\
走近看，其实有很多选择。<br>\
<br><br>\
";
var d = dataStr.split('$');
console.log(d);
for (var i = 0; i < d.length; i++) {
    var c = d[i].split('@');
    data.push({
        img: c[0].replace('、', ' ') + '.jpg',
        caption: c[0].split('、')[1],
        desc: c[1]
    });
};

// $13、 现实与理想 @\
//     <
//     br > \
//     不开心的时候吧， < br > \
//     总想做点什么事， < br > \
//     比如剪短发， < br > \
//     跑十公里， < br > \
//     删掉所有朋友圈和微博， < br > \
//     而事实上， < br > \
//     你只能好好过。 < br > \
//     $14、 进城的公车 @\ <
//     br > \
//     一生中总会遇到这样的时候， < br > \
//     你的内心已经兵荒马乱天翻地 < br > \
//     覆了， 可是在别人看来你只是 < br > \
//     比平时沉默了一点， 没人会觉 < br > \
//     得奇怪。 这种战争， 注定单枪 < br > \
//     匹马。 < br > \
//     <
//     br > \
//     $15、 杭州夜景 @\ <
//     br > < br > < br > \
//     我们之所以战斗， < br > \
//     并不是为了改变世界， < br > \
//     而是为了不让世界改变我们。 < br > \
//     <
//     br > < br > \
//     $16、 老友记 @\ <
//     br > \
//     我劝大家口味不要太窄， < br > \
//     什么都要尝尝， 不管是古 < br > \
//     代的还是异地的食物， 比 < br > \
//     如葵和薤， 都吃一点。 一 < br > \
//     个一年到头吃大白菜的人 < br > \
//     是没有口福的。 < br > \
//     <
//     br > \
//     $17、 涂鸦墙 @\ <
//     br > \
//     大概是小学写作文的时候， < br > \
//     把“ 最开心的一天” < br > \
//     和“ 最难过的一天” < br > \
//     份额都用光了， < br > \
//     后来的人生才会显得如此 < br > \
//     平淡而无趣吧。 < br > \
//     <
//     br > \
//     $18、 角落 @\ <
//     br > < br > \
//     长大的一个坏处是， < br > \
//     深信不疑的东西越来越少， < br > \
//     好处是， < br > \
//     越来越不需要对一些东西深信不疑了。 < br > \
//     <
//     br > < br > \
//     $19、 汕大图书馆 @\ <
//     br > \
//     人生在世， < br > \
//     你只要知道两件事。 < br > \
//     一， 这世上绝对存在 < br > \
//     不需要读书也很聪明， < br > \
//     不需要努力也过得很好， < br > \
//     甚至不需要钱就能快乐的人。 < br > \
//     二， 那个人绝对不是你。\
// $20、 小酒馆 @\
//     <
//     br > < br > \
//     以前觉得， < br > \
//     勇敢就是， < br > \
//     粗暴地面对恐惧。 < br > \
//     后来发现， < br > \
//     温柔也是勇敢。 < br > \
//     <
//     br > \