import axios from "axios";



export const servTicketing = axios.create({
  baseURL: "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
});


