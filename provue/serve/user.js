// module.exports={
//   username:'qianyu',
//   sayHello:function() {
//     console.log(this.username+'say:"can speak Janpenese"')
//   }
// }

exports.username="chenyu";
exports.sayHello=function(){
 return 'hello'
}

const http= require('http');
const util=require('util');
const url=require('url');
const serve=http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader("Content-Type","text/plain;charset=utf-8");
  

  res.end(util.inspect(url.parse(req.url)));
})
serve.listen(3000,'127.0.0.1',()=>{
  console.log('运行成功了')
})