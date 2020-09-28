import nats, {Stan} from "node-nats-streaming";





const NAME = "Expiration";


class NatsWrapper {
  private _client?: Stan;

  get client(){
    if(!this._client) {throw new Error("Not connected"); }
    return this._client;
  }

  connect(clusterId:string, clientId:string, url:string): Promise<void> {
    return new Promise((resolve,reject)=>{
      this._client = nats.connect(clusterId, clientId, {url});

      this.client.on("connect", ()=>{
        console.log(NAME + "Nats Connected");
        resolve();
      });
      this.client.on("error", (err)=>{
        reject(err);
      });

    });
  }

}


export const natsWrapper = new NatsWrapper();

