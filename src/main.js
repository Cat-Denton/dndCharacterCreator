import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DndService from './dnd-service.js';

async function generateStats() {
  const response = await DndService.getAbilities()
  if (response.results) {
    response.results.forEach(function(ability) {
      $('#abilities').append(`<button type="btn" id="${ability.name}">${ability.name}</button></br></br>`)
    });
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

generateStats();