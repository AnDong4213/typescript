import Pager from "./pager";
import { FoodDao } from "./dao";

let pager = new Pager(3);
let foodDao = new FoodDao();
let allFoods = foodDao.findAllFoods();
pager.dataList = allFoods;
console.log(pager.showCurrentPageData())
