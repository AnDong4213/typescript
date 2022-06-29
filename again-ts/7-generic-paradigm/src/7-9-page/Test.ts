import Pager from "./pager";
import { FoodDao } from "./dao";

let pager = new Pager(1);
let foodDao = new FoodDao();
let allFoods = foodDao.findAllFoods();
pager.dataList = allFoods;
pager.showCurrentPageData();
