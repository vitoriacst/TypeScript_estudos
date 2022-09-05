"use strict";
//Aplique a técnica de injeção de dependência para que a classe CepService diminua seu nível de acoplamento com a sua dependência atual
Object.defineProperty(exports, "__esModule", { value: true });
class CepService {
    constructor(cepApi) {
        this.cepApi = cepApi;
    }
    addressByCep(cep, num) {
        return this.cepApi.getAddressByCEP(cep, num);
    }
    cepByAddress(address, num) {
        return this.cepApi.getCepByAddress(address, num);
    }
}
exports.default = CepService;
