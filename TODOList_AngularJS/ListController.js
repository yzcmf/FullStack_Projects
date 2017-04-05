(function(){
	  var listController = angular.module('listControllerApp', []);
	  
	  listController.controller('allListsController',function(){
		  var listsContainer = this;
		  
		  listsContainer.allState = [];
		  listsContainer.activeState = [];
		  listsContainer.complState = [];
		  
		  var input_itemId = document.getElementById("item_id");
		  var input_content = document.getElementById("item_content");
		  
		  listsContainer.deleteItemFromActive =function(itemToDelete){
			  	var listItemJson = listsContainer.activeState[itemToDelete.idx];
			  	
				listItemJson.state = "Completed";
	
			  	listsContainer.complState.push(listItemJson);
		  };
			  
		  listsContainer.addOneItem = function(){
			  //initial values for the new list-item
			  var itemId = parseInt(input_itemId.value);
			  var itemContent = input_content.value.toString();
			  
			  var listItem = {"idx":itemId,"itemContent":itemContent, "state":"active"};
			  
			  //add a new list-item into all and active list
			  listsContainer.allState.push(listItem);
			  listsContainer.activeState.push(listItem);

			  //reset the value of inputs: increase id and clear the conetent
			  input_itemId.value = (itemId+1);
			  input_content.value = "";
			  };
		  
		  });//end-listController
	  
	})();//end-function