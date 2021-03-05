import { LightningElement } from "lwc";
import { NavigationMixin } from "lightning/navigation";
export default class NavigateToLwc extends NavigationMixin(LightningElement) {
  navigateToLwcPage() {
    let definition = {
      componentDef: "c:navigationLwcTarget",
      attributes: {
        recordId: "987654321"
      }
    };
    this[NavigationMixin.Navigate]({
      type: "standard__webPage",
      attributes: {
        url: "/one/one.app#" + btoa(JSON.stringify(definition))
      }
    });
  }
}
