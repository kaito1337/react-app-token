import Web3 from "web3";
import ABI from "./ABI.json"

class Service {
    web3 = new Web3("http://localhost:8545");
    contract = new this.web3.eth.Contract(ABI as any, "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e");
    admin = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';

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

    async approve(wallet: string){
        try{
            return await this.contract.methods.approve(wallet, 9999999).send({from: this.admin});
        }catch(e){
            console.log(e)
        }
    }

    async buyToken(value: number, address: string) {
        try {
            return await this.contract.methods.buyToken().send({ from: address, value: value });
        } catch (e) {
            console.log(e)
        }
    }

    async register(login: string, password: string, address: string) {
        try {
            return await this.contract.methods.register(login, password).send({ from: address });
        } catch (e) {
            console.log(e);
        }
    }

    async takeToken(address: string) {
        try {
            return await this.contract.methods.takeTokens().send({ from: address });
        } catch (e) {
            console.log(e)
        }
    }
}

export default new Service();