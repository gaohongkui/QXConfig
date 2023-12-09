/*
 * @Date: 2022-12-08 17:02:06
 * @LastEditors: GodK
 * @Desc:
 *    新增解锁 首屏壁纸（第一次进入首图可能未解锁，刷新一下列表即可）
 *    新增解锁 搜索页壁纸
 *    新增解锁 搜索页头像
 *    新增解锁 搜索页轮播图
 *    新增解锁 横屏壁纸
 */

var body = $response.body;

body = body.replace(/isFree":\w+/g, "isFree\":true")
body = body.replace(/random":".*?"/g, "random\":\"wjLjmdAKBoTDuB2nuyeOTZBO88mYauF59Q2NoQs7ENgEzRiZiQgWF8epm1xlWyYZ\"")

if (/nickName":/.test(body)){
    body = body.replace(/level":\w+/g, "level\":5")
    body = body.replace(/expireTime":\w+/g, "expireTime\":1800000000")
}

$done({body});
