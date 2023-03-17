async function createProduct() {
	const name = document.getElementById("name").value;
	const manufacturer = document.getElementById("quantity").value; 
	const accounts = await ethereum.request({
		method: "eth_requestAccounts",
		});
contract.setProvider(ethereum)
	contract.methods.createProduct(name, manufacturer).send({ from: accounts[0] }).on("transactionHash", (hash) => {
	  console.log(hash);
	})
  }
  
// async function addHistory() {
// 	if (typeof window.ethereum !== "undefined") {
// 		ethereum.request({method : "eth_requestAccounts"});
// 	} 
// }


// async function addHistory() {
// 	const accounts = await ethereum.request({
// 		method: "eth_requestAccounts",
// 		});
// 	contract.methods.addHistory("testProductId","History").send({ from: accounts[0] }).on("transactionHash", (hash) => {
// 	  console.log(hash);
// 	})
//   }  



async function addHistory() {
	const accounts = await ethereum.request({
		method: "eth_requestAccounts",
	});
 
	contract.setProvider(ethereum)
	const productId = document.getElementById("productId").value;
	const history = document.getElementById("history").value;
 
	await contract.methods.addHistory(productId, history).send({ from: accounts[0] }).on("transactionHash", (hash) => {
	  console.log(hash);
	}).on("receipt", (receipt) => {
		console.log(receipt);;
	});
}


	
 
 



// async function addHistory(productId, history) {
// 	try {
// 	  // Get the user's Ethereum accounts
// 	  const accounts = await ethereum.request({
// 		method: "eth_requestAccounts",
// 	  });
  
// 	  // Check if the productId argument is a valid number
// 	  if (typeof productId !== "number") {
// 		throw new Error("Invalid productId argument. Expected a number.");
// 	  }
  
// 	  // Convert the productId argument to a BigNumber object
// 	  const productIdBN = web3.utils.toBN(productId);
  
// 	  // Call the addHistory function on the smart contract
// 	  await contract.methods.addHistory(productIdBN, history).send({ from: accounts[0] });
  
// 	  console.log("History entry added successfully.");
// 	} catch (error) {
// 	  console.error(error);
// 	}
//   }
  
  

  
  


  
  async function getAllProducts() {
	const accounts = await ethereum.request({
		method: "eth_requestAccounts",
		});
		contract.setProvider(ethereum)

		const result = await contract.methods.getAllProducts().call({ from: accounts[0] });
   console.log(result);

   let html = "<table><thead><tr><th>ID</th><th>Name</th><th>Manufacturer</th></tr></thead><tbody>";

   for (let i = 0; i < result[0].length; i++) {
      html += "<tr><td>" + result[0][i] + "</td><td>" + result[1][i] + "</td><td>" + result[2][i] + "</td></tr>";
   }

   html += "</tbody></table>";

   document.getElementById("productTable").innerHTML = html;
}



async function getProductCount() {
	const accounts = await ethereum.request({
		method: "eth_requestAccounts",
	});
	contract.setProvider(ethereum)

	const count = await contract.methods.productCount().call({ from: accounts[0] });
	console.log(count);
	// display the count on the webpage
	document.getElementById("productCount").innerHTML = `Product Count: ${count}`;
}
 


// async function getProduct() {
// 	const productId = document.getElementById("product-id2").value;
// 	const accounts = await ethereum.request({
// 		method: "eth_requestAccounts",
// 	});
// 	contract.methods.getProduct(productId).call({ from: accounts[0] }).then(result => {
// 		console.log(result);
// 		const productInfoDiv = document.getElementById("product-info");
// 		productInfoDiv.innerHTML = `Product Name: ${result[0]}<br>Manufacturer: ${result[1]}<br>History: ${result[2].join(", ")}`;
// 	});
// 	productInfoDiv.innerHTML = `Product Name: ${result[0]}<br>Manufacturer: ${result[1]}<br>History: ${result[2].join(", ")}<br>Creator: ${result[3]}`;
// }



async function getProduct() {
	const productId = document.getElementById("product-id2").value;
	const accounts = await ethereum.request({
		method: "eth_requestAccounts",
	});
	contract.methods.getProduct(productId).call({ from: accounts[0] }).then(async result => {
		const hist = await getHistory(productId)
		console.log(result);
		console.log(hist)
		const productInfoDiv = document.getElementById("product-info");
		if (result[2].length === 0) {
			productInfoDiv.innerHTML = `Product Name: ${result[0]}<br>Manufacturer: ${result[1]}<br>History: No history found.`;
		} else {
			productInfoDiv.innerHTML = `Product Name: ${result[0]}<br>Manufacturer: ${result[1]}<br>History: ${result[2].join(", ")}`;
		}
	});
 }

async function getHistory(productId)
{
	return await contract.methods.getHistory(productId).call();
}

 function displayProductHistory(product_id) {
	
	let product = getProduct(product_id);
	if (product) {
	  let history = product.history;
	  if (history) {
		console.log(`Transaction history for product ${product.id}:`);
		history.forEach(transaction => {
		  console.log(`Transaction ID: ${transaction.transaction_id}, Date: ${transaction.date}, Quantity: ${transaction.quantity}, Price: ${transaction.price}`);
		});
	  } else {
		console.log(`No transaction history found for product ${product.id}.`);
	  }
	} else {
	  console.log(`Product ${product_id} not found.`);
	}
  }
  
 



// async function getProduct() {
// 	const productId = document.getElementById("product-id2").value;
// 	const accounts = await ethereum.request({
// 		method: "eth_requestAccounts",
// 	});
// 	contract.methods.getProduct(productId).call({ from: accounts[0] }).then(result => {
// 		console.log(result);
// 		const productInfoDiv = document.getElementById("product-info");
// 		productInfoDiv.innerHTML = `Product Name: ${result[0]}<br>Manufacturer: ${result[1]}<br>History: ${result[2].join(", ")}`;
// 	});
//  }

const web3 = new Web3(window.ethereum);
const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "NewProduct",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "history",
				"type": "string"
			}
		],
		"name": "ProductHistory",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_history",
				"type": "string"
			}
		],
		"name": "addHistory",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_manufacturer",
				"type": "string"
			}
		],
		"name": "createProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllProducts",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getHistory",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "history",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getProduct",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "history",
				"type": "string[]"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "productCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const contract = new web3.eth.Contract(
	abi,
	"0xd1aa63fEA14928D3FbF84F21841f90DDC2EdAce3"
);
