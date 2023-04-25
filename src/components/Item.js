import React from "react";

function Item({ item, onUpdateItem,onDeleteItem }) {

  // function to handle button add to cart
  function handleAddToCart(){
    // add fetct request to update
    fetch(`http://localhost:4000/items/${item.id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json",
      },
      body: JSON.stringify({
        isInCart:!item.isInCart,
      }),

    })
    .then((resp)=>resp.json())
    .then((updatedItem)=>onUpdateItem(updatedItem))
  }
  function handleDeleteClick(){
    fetch(`http://localhost:4000/items/${item.id}`,{
      method:"DELETE",
      
    })
    .then((resp)=>resp.json())
    .then(()=>onDeleteItem(item))
  }
  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>

      {/* the click listener is added to the button */}
      <button className={item.isInCart ? "remove" : "add"}
      onClick={handleAddToCart}
      >
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}

export default Item;
