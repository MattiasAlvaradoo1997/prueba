import React from "react";
import './styles/Base.css';

function handleClean(){
    var checkboxes = document.getElementsByName("checkbox");
    var selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked==true);
    console.log(selectedCboxes)
    for (var i = 0; i < selectedCboxes.length; i++) {
        if (selectedCboxes[i].id == '1') {
            selectedCboxes.splice(i, 1);
          break;
        }
      }
}



var today = new Date();
var date = +today.getDate()+'/' + (today.getMonth()+1) + '/'+today.getFullYear();

const Base = (props) => (
    <div className="container">
        <div className="User-Info">
            <h1>Cosas por hacer</h1>
            <h2>{date}</h2>
        </div>
        <div className="User-Info">
            
            <button onClick={handleClean}>Liberar seleccionados</button>
        </div>
    </div>
) 

export default Base 