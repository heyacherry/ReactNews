export default function DateFormat(dateString){
    let time = ''
    if(dateString){
     let date = new Date(dateString)
     let year = date.getFullYear();
     let month = date.getMonth()>10?date.getMonth():'0'+date.getMonth();
     let day = date.getDay()>10?date.getDay():'0'+date.getDay();
     let hour = date.getHours()>10?date.getHours():'0'+date.getHours();
     let min = date.getMinutes()>10?date.getMinutes():'0'+date.getMinutes();
 
     time = year+'-'+month+'-'+day + ' '+hour +':'+min
    }
    
    return time;
} 

