import txt1 from './test.txt';
import txt2 from 'raw-loader!./test.txt';
import styleTxt from 'raw-loader!./style.css';

document.addEventListener('DOMContentLoaded', function() {
  let styleE = document.createElement('style');
  styleE.textContent = styleTxt;
  document.head.insertBefore(styleE, document.getElementsByTagName('script')[0]);
  let div1 = document.createElement('div');
  div1.innerHTML = txt1;
  document.body.appendChild(div1);
  let div2 = document.createElement('div');
  div2.innerHTML = txt2;
  document.body.appendChild(div2);
});