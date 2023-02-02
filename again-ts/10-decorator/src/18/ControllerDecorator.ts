import { Inject } from "./injectdecortator";
import { PeopleService } from "./UserService";
import CollectionInstance from "./Collection";
import ControllerDecorator from "./ControllerDecorator";
import MethodDecorator from "./methoddecorator";

class Controller {
  @Inject("PeopleService")
  private peopleService?: PeopleService;

  @MethodDecorator("/login")
  public login(): void {
    let peopleServiceInstace = CollectionInstance.get("userService");
    peopleServiceInstace.login();
  }
}

let controller = new Controller();
controller.login();

export {};
