let date= new Date()
console.log(date.toDateString())
console.log('the year is :',date.getFullYear())
console.log('month :',date.getMonth()+1)
console.log('date :',date.getDate())
console.log('day :',date.getDay())
console.log('hours :',date.getHours())
console.log('minutes :',date.getMinutes())
console.log('seconds :',date.getSeconds())
let k = date.getMonth()+1
console.log(date.getDate()+"-"+k+"-"+date.getFullYear()+" "+date.getHours()+":"+
                                                  date.getMinutes()+":"+date.getSeconds())