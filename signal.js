import Component from "can-component";
import DefineMap from "can-define/map/";
import stache from "can-stache";


const view = stache(`
{{headline}}
`);


export const ViewModel = DefineMap.extend({
  apiEndpoint: {
    type: "string",
    serialize: false
  },
  headline: "string",
  connectedCallback(el){
    console.log(this.apiEndpoint);
    console.log(this.headline);
    debugger;
  }

});

export default Component.extend({
  tag: "x-chart-signal",
  ViewModel,
  view
});
