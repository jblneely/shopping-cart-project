document.addEventListener("DOMContentLoaded", function() {
            // is "DOMContentLoaded" an updated "document.onload"?
            //document.onload = function () {myScript}

            //document.createElement to add items to UL shoppinglist.

            // var cereal = ['cheerios', 'crunch', 'fruit-loops', 'puffs', 'raisin-bran']
            // var juice = ['apple-juice', 'carrot-juice', 'grape-juice', 'orange-juice', 'tomato-juice']
            // var candy = ['kit-kat', 'm&ms', 'skittles', 'snickers', 'twix']

            // var products = ['cereal', 'juice', 'candy']

            //var cereal = getItemById
            // var element = document.
            // element.addEventListener('nameOfEvent', functionToRun);


            var lis = document.querySelectorAll("#category-nav li");
            lis[2].addEventListener("click", function() {
                console.log("click")
                console.log(this.innerText)
            });

            //change .hidden for #cereal-products, #candy-products, #juice-products) on click.
            for (i = 0; i <= lis.length; i++);
            //default cereal, candy.hidden, juice.hidden
            //function, when candy clicked: cereal.hidden(change display), candy(change display), juice.hidden
            //function, when juice clicked: cereal.hidden(change display), candy.hidden, juice(change display)



            //function to append .item  onclick shoppingcart.ul> on 'click' using this.item
            //could div item be pushed from an array rather than divs?  (e.g. arrayToList)

            var item = document.querySelectorAll(".item");
            var ul = document.querySelectorAll(".shoppingcart-list");
            var li = document.createElement("li");



            item.addEventListener("click", function() {
                item.onclick = addItem;
                //test for click
                console.log("click")
                console.log(this.innerText)




                for (i = 0; i <= this.item.length; i++);
                li.setAttribute("id", "shoppingcart-item");
                ul.appendChild(li);
                alert(li.id);



                //function to remove #shoppingcart-item from li
                var shoppingcartItem = docuemnt.querySelectorAll(".#shoppingcart-item li");
                shoppingcarItem[i].onclick = function() {
                    //this.parentNode.removeChild(this);
                    this.remove();
                }

                //addEventListen 2px border around each div .item on mouseover

                function displayItemBorder() {
                    document.querySelector('div').style.border = 'blue';
                }

                function hideItemBorder() {
                    document.querySelector('div').style.border = 'lightgrey';
                }
                var div = document.querySelector('div');
                div.addEventListener('mouseover', displayItemBorder);
                div.addEventListener('mouseout', hideItemBorder);





            });














            //object.addEventListener("click", script)**********************


            //ADD EVENT LISTENER ON MOUSE OVER FOR ITEM DETAILS******************************
            // function displayItemDetails() {
            //     document.querySelector('body').style.backgroundColor = 'blue';
            // }
            // function hideItemDetails() {
            //     document.querySelector('body').style.backgroundColor = 'white';
            // }
            // var div = document.querySelector('div');
            // div.addEventListener('mouseover', displayItemDetails);
            // div.addEventListener('mouseout', hideItemDetails);



            // UPPERCASE
            // console.log(_____ toUpperCase);


            //SHOPPINGCART**********************************************

            // TOTAL
            // var subtotals = [1, 2, 3, POPULATE ARRAY WITH PRICE * QUANTITY];
            // var sum = subtotals.reduce(function(a, b) { return a + b; });
            // console.log("TOTAL = " + sum);





            //remove items from shoppingcart ul: http://stackoverflow.com/questions/14418451/click-event-on-dynamically-generated-list-items-using-jquery


            // ENQUIRY FORM *********************************************

            // var emailInputField = document.getElementById('email');
            // emailInputField.addEventListener('blur', checkEmailInput);
            // function checkEmailInput () {
            // 	if (emailInputField.value.length === 0) {
            // 		document.getElementById('message').innerText = 'Please enter an email address.'
            // 		emailInputField.className = 'error';	
            // 	} else {
            // 		document.getElementById('message').innerText = '';
            // 		emailInputField.className = '';
            // 	}
            // }


            //EVENT BUTTON CREATES CLICK DATA *******************
            //div id="button">click me</div>
            // var btn = document.getElementById('button')
            // btn.addEventListener("click", function(event) {
            //     console.log(this)
            // })
