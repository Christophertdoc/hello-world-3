import _ from 'lodash';

function component () {
  var element = document.createElement('div');



 element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

function component2 () {
  var element = document.createElement('div');


  element.innerHTML = _.join(['Hello','webpack2'], ' ');

  return element;
}

document.body.appendChild(component());
document.body.appendChild(component2());
