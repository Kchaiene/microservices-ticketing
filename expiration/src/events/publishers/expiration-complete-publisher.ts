import {BasePublisher, ExpirationCompleteEvent, Subjects} from "@kchaiene-corp/common";




export class ExpirationCompletePublisher extends BasePublisher<ExpirationCompleteEvent> {
  subject: ExpirationCompleteEvent["subject"] = Subjects.EXPIRATION_COMPLETE;
}


