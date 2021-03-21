import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DndService from './dnd-service.js';

function getElements(response) {
  if (response.desc) {
    //descriptive text
  } else {
    //error
  }
}

async function makeApiCall(ability) {
  const response = await DndService.getAbilityInfo(ability);
  getElements(response);
}

$('btn')