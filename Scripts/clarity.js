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
var url = $request.url;
var obj = JSON.parse(body);

const userinfo = '/userInfo';
const main_setfree = '/special/queryByCatalogAll'; // 首屏壁纸 & 搜索页头像
const search_setfree = '/picture/search';  // 搜索页壁纸
const avatar_setfree = '/catalog/listAll';  // 搜索页头像
const top_setfree = '/top/list';  // 搜索页轮播图
const date_setfree = '/picture/date';  // 横屏壁纸

if (url.indexOf(main_setfree) != -1 || url.indexOf(avatar_setfree) != -1) {
   for (var i = 0; i < obj.data.length; i++) {
       obj.data[i].isFree = true;
       obj.data[i].random = "Kqp5/Z35ga5WBeNcLue+dBwZW4ZWRoDFMAqqU48d06Y=";
   }
   body = JSON.stringify(obj);
}
if (url.indexOf(userinfo) != -1) {
   obj.data.level = 8;
   obj.data.expireTime = 4070965662;
   body = JSON.stringify(obj);
}
if (url.indexOf(search_setfree) != -1) {
   for (var i = 0; i < obj.data.list.length; i++) {
       obj.data.list[i].isFree = true;
   }
   body = JSON.stringify(obj);
}
if (url.indexOf(top_setfree) != -1) {
   for (var i = 0; i < obj.data.length; i++) {
      if (obj.data[i].special != null) {
         obj.data[i].special.isFree = true;
         obj.data[i].special.random = "Kqp5/Z35ga5WBeNcLue+dBwZW4ZWRoDFMAqqU48d06Y=";
      }
   }
   body = JSON.stringify(obj);
}
if (url.indexOf(date_setfree) != -1) {
   for (var i = 0; i < obj.data.list.length; i++) {
      obj.data.list[i].isFree = true;
   }
   body = JSON.stringify(obj);
}

$done({body});
