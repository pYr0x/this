import { ViewModel } from "./signal";
import stache from "can-stache";

const vm = new ViewModel({
  apiEndpoint: "oip",
  headline: "foo"
});


const frag = stache("<x-chart-signal this:from='.'></x-chart-signal>")(vm);

document.querySelector("body").appendChild(frag);