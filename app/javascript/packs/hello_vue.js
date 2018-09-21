/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from "vue/dist/vue.esm"
import TurbolinksAdapter from "vue-turbolinks"
import VueResource from "vue-resource"

Vue.use(VueResource);
Vue.use(TurbolinksAdapter);

document.addEventListener("turbolinks:load", () => {
  Vue.http.headers.common["X-CSRF-Token"] = document.querySelector("meta[name='csrf-token']").getAttribute("content")

  const element = document.getElementById("team-form");
  if (element != null) {
    let team = JSON.parse(element.dataset.team);
    let players_attributes = JSON.parse(element.dataset.playersAttributes);
    players_attributes.forEach(player => player._destroy = null);
    team.players_attributes = players_attributes;

    const app = new Vue({
        el: element,
        data: function() {
          return { team }
        },
        methods: {
          addPlayer() {
            team.players_attributes.push({
              id: null,
              name: "",
              position: "",
              _destroy: null
            })
          },
          removePlayer(index) {
            this.team.players_attributes.splice(index, 1);
          }
        }
    })
  }
})


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the using turbolinks, install 'vue-turbolinks':
//
// yarn add 'vue-turbolinks'
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
