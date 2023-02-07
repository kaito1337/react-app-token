import Web3 from "web3";
import ABI from "./ABI.json"

class Service {
    web3 = new Web3("http://localhost:8545");
    contract = new this.web3.eth.Contract(ABI as any, "0x610178dA211FEF7D417bC0e6FeD39F05609AD788");
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

    async buyToken(value: number, tokenPrice:number, address: string) {
        const ethValue = BigInt(value*tokenPrice).toString();
        try {
            return await this.contract.methods.buyToken(value).send({ from: address, value: ethValue });
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

    async getTokenPrice(address:string){
        try{
            return await this.contract.methods.getTokenPrice().call({from: address});
        }catch(e){
            console.log(e)
        }
    }

    async getRequests(address:string){
        try{
            return await this.contract.methods.getRequests().call({from: address});
        }catch(e){
            console.log(e)
        }
    }

    async takeRequest(idx: number, solution: boolean, address: string){
        try{
            return await this.contract.methods.takeRequest(idx,solution).send({from: address});
        }catch(e){
            console.log(e);
        }
    }

    async minusMinute(address:string){
        try{
            return await this.contract.methods.minusMinute().send({from: address});
        }catch(e){
            console.log(e);
            
        }
    }

    async getWhitelist(address:string){
        try{
            return await this.contract.methods.getWhitelist().call({from: address});
        }catch(e){
            console.log(e);
        }
    }

    async sendRequest(address:string){
        try{
            return await this.contract.methods.sendRequest().send({from: address});
        }catch(e){
            console.log(e);
        }
    }
}

export default new Service();