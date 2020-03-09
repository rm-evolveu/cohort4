// const cardsList = document.getElementById("cardsList");

const functions = {
           
        showChildren: () => {
            const c = document.querySelector("ol").children
            const text = "";
            for (let i=0; i < c.length; i++) {
                text += c[i].textContent + " ";
            }
            textOutput.textContent = text
        }, 

        addClick: () => {
            if (input.value.length > 0) {
                functions.createListItem();
            }
        }, 
        
        addEnter: () => {
            if (input.value.length > 0 && event.keyCode === 13) {
                functions.createListItem();
            }
        }, 

        createListItem: () => {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(input.value)); 
            ol.appendChild(li);
            input.value = "";
        },
        
        deleteListItem: (delItem) => {
            ol.removeChild(delItem);
        }, 

        strikeOutListItem: (strikeItem) => {
            strikeItem.classList.toggle("strike");
        },

        // ----------

        deleteCard: (delItem) => {
            const card = delItem.parentNode;
            const cardsList = delItem.parentNode.parentNode;

            console.log(card)
            cardsList.removeChild(card);
        }, 

};


export default functions;
