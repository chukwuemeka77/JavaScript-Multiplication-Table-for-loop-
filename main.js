window.addEventListener("load", function () {







    /* for (let i = 0; i <= 12; i++) {
           var result = multiplier * i;
           console.log(multiplier + ' * ' + i + ' = ' + result);
       }*/

    for (let multiplier = 0; multiplier <= 12; multiplier++) {

        let ul = document.createElement('ul');


        for (let i = 0; i <= 12; i++) {
            var result = multiplier * i;
            console.log(multiplier + ' * ' + i + ' = ' + result);
            
            let li = document.createElement('li');
            li.textContent = multiplier + ' * ' + i + ' = ' + result;
            ul.appendChild(li)

        }


        let list = document.querySelector('#list')
        list.appendChild(ul)




    }


});

