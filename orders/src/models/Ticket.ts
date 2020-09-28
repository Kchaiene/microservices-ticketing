import mongoose from "mongoose";
import {OrderStatus} from "@kchaiene-corp/common";
import {Order} from "./Order";





interface TicketAttrs {
  id: string;
  title: string;
  price: number;
}
export interface TicketDoc extends mongoose.Document {
  title: string;
  price: number;
  version: number;
  isReserved(): Promise<boolean>;
}
interface TicketModel extends mongoose.Model<TicketDoc> {
  build(attrs:TicketAttrs): TicketDoc;
  findByEvent(event:{id:string, version:number}): Promise<TicketDoc | null>;
}


const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  }
}, {
  toJSON:{
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
    }
  }
});
// ticketSchema.set("optimisticConcurrency", true);
ticketSchema.set("versionKey", "version");

ticketSchema.pre("save", function(done) {
  // @ts-ignore
  this.$where = {version: {$lt: this.get("version") }};
  done();
});

ticketSchema.statics.build = (attrs: TicketAttrs) => {
  return new Ticket({_id:attrs.id, title:attrs.title, price:attrs.price})
};
ticketSchema.statics.findByEvent = ({id,version}:{id:string, version:number}) => {
  return Ticket.findOne({_id:id, version});
};


ticketSchema.methods.isReserved = async function () {
  const existingOrder = await Order.findOne({
    ticket: this,
    status: {$ne: OrderStatus.Cancelled}
  });
  return Boolean(existingOrder);
};





export const Ticket = mongoose.model<TicketDoc, TicketModel>("Ticket", ticketSchema);
