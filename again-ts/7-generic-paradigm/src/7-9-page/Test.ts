
import { FoodDao } from "./dao";
import {Food} from './entity'

let pager = new Pager<Food>(3);
import Pager from "./pager";
let foodDao = new FoodDao();
let allFoods = foodDao.findAllFoods();
pager.dataList = allFoods;

// let dd = pager.showCurrentPageData()
pager.showCurrentPageData().forEach(food => {
    console.log(food.shop)
})
