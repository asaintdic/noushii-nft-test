async function main() {
    const NoushiiNFT = await ethers.getContractFactory("NoushiiNFT");
    
    // Start deployment, returning a promise that resolves to a contract object
    const noushiiNFT = await NoushiiNFT.deploy();
    console.log("Contract deployed to address:", noushiiNFT.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });