import {PAGE_SIZE, MAX_PAGE_COUNT} from '../constants'

const getPageCount = (val) => {
    console.log("page num is ", MAX_PAGE_COUNT, val,PAGE_SIZE)
    return Math.ceil(Math.min(MAX_PAGE_COUNT, val)/PAGE_SIZE);
}

export default getPageCount;