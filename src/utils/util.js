import jsonp from 'jsonp'

function getDate(){
   let newDate = new Date();
   let year = newDate.getFullYear(), month = newDate.getMonth() + 1, date = newDate.getDate();
   return year + '-' + month + '-' + date;
}
// 封装jsonp成为promise方法
function jsonpProm(option){
   return new Promise((resolve, reject)=>{
      jsonp(option.url, {
         param: 'callback'
      },(err, data)=>{
         console.log(err)
         if(!err){
            resolve(data)
         }else{
            reject(err)
         }
      })
   })
}
export {getDate, jsonpProm}