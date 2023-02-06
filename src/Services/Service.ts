import Web3 from "web3";
import ABI from "./ABI.json"

class Service {
    web3 = new Web3("http://localhost:8545");
    contract = new this.web3.eth.Contract(ABI as any, "0xc39F07be5a687a90a0BF5a3881cecd4B9509801e");

    async register(login: string, password: string, address: string) {
        try {
            return await this.contract.methods.register(login, password).send({ from: address });
        } catch (e) {
            console.log(e);
            
        }
    }

    async auth(login: string, password: string, address: string) {
        try {
            return await this.contract.methods.auth(login, password).call({ from: address });
        } catch (e) {
            console.log(e);
        }
    }

    async balanceOf(address: string) {
        try {
            return await this.contract.methods.balanceOf(address).call({ from: address });
        } catch (e) {
            console.log(e)
        }
    }

    async approve(wallet: string, address: string) {
        try {
            return await this.contract.methods.approve(wallet, wallet).send({ from: address });
        } catch (e) {
            console.log(e)
        }
    }

    async buyToken(value: number, address: string) {
        try {
            return await this.contract.methods.buyToken().send({ from: address, value: value * 10**18 });
        } catch (e) {
            console.log(e)
        }
    }

    async takeToken(address: string) {
        try {
            return await this.contract.methods.takeTokens().send({ from: address });
        } catch (e) {
            console.log(e)
        }
    }

    async viewDevTokens(address: string){
        try{
            return await this.contract.methods.viewDevTokens().call({from: address});
        }catch(e){
            console.log(e);
        }
    }

    async getBalance(address:string){
        try{
            return await this.contract.methods.getBalance().call({from: address});
        }catch(e){
            console.log(e);
        }
    }
}

export default new Service();