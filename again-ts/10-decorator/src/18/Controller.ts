import { Inject } from "./InjectDecortator";
import { UserService } from "./UserService";
import CollectionInstance from "./Collection";
import Controller from "./ControllerDecorator";
import get from "./MethodDecorator";

// 装饰器执行顺序，1.属性装饰器==>2.方法参数装饰器==>3.方法装饰器===>4.类装饰器

@Controller("/")
class UserController {
  @Inject("UserService")
  private userService?: UserService;

  // 把路径保存到元数据里面
  @get("/login")
  public login(): void {
    // let peopleServiceInstace = CollectionInstance.get("userService");
    // peopleServiceInstace.login();
    console.log("login方法---");
  }
}

let controller = new UserController();
controller.login();

export {};
