import { ElementFinder, by, element } from 'protractor';

export default class AlertPage {
  successAlert: ElementFinder = element(by.css('div[role=alert].alert.alert-success'));
  infoAlert: ElementFinder = element(by.css('div[role=alert].alert.alert-info'));
  dangerAlert: ElementFinder = element(by.css('div[role=alert].alert.alert-danger'));
}
