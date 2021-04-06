const  getFormattedDate = (date)=>{
    const monthList = ['Jan','Feb','March','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
    const formatedDate = new Date(date);
    const selectedDate = formatedDate.getDate();
    const monthName = monthList[formatedDate.getMonth()];
    const year = formatedDate.getFullYear();
    return `${selectedDate} ${monthName} ${year}`
}

export default getFormattedDate;