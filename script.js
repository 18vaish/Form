document.addEventListener("DOMContentLoaded", function () {
  var orderDetails = [
    {
      quantity: 2,
      product:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi deserunt eos voluptatum unde quia in suscipit iste aut tenetur maiores amet reprehenderit harum, deleniti impedit, ullam ad aperiam ipsam!",
      unitPrice: "$10",
      orderTotal: "$20",
    },
  
  ];

  var amazonDeclaration = [
    { quantity: 2, product: "Product 1" },
    
  ];

  function populateTable(data, tbody) {
    data.forEach(function (item) {
      var row = `<tr>
                <td>${item.quantity}</td>
                <td>${item.product}</td>`;

      // Check if the properties exist before trying to access them
      if (item.unitPrice !== undefined && item.orderTotal !== undefined) {
        row += `<td>${item.unitPrice}</td>
                        <td>${item.orderTotal}</td>`;
      } else {
        row += ``;
      }

      row += `</tr>`;
      tbody.insertAdjacentHTML("beforeend", row);
    });
  }

  populateTable(orderDetails, document.getElementById("orderDetailsBody"));

  var totalAmount = orderDetails.reduce(function (acc, item) {
    return acc + parseFloat(item.orderTotal.replace("$", ""));
  }, 0);
  document.getElementById("totalAmount").textContent =
    "$" + totalAmount.toFixed(2);

  populateTable(
    amazonDeclaration,
    document.getElementById("amazonDeclarationBody")
  );
});
