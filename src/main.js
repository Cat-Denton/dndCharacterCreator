import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DndService from './dnd-service.js';

function getDescription(response) {
  if (response.desc) {
    $(`#${response.full_name}`).text(`${response.desc}`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(ability) {
  const response = await DndService.getAbilityInfo(ability);
  getDescription(response);
}

$('button').hover(function(){
  let ability = this.id;
  makeApiCall(ability);
}, function(){
  let statClass = this.id;
  $(`.${statClass}`).text('');
})