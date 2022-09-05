"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = __importStar(require("chai"));
const userMock = {
    id: 1,
    name: 'teste',
    createdAt: new Date(),
    updatedAt: new Date(),
    email: 'teste@gmail.com'
};
// I will implement an interface for userMock
describe('Users', () => {
    describe('List', () => {
        beforeEach(() => {
            sinon.stup(User, 'findAll').resolves([userMock]);
        });
        afterEach(() => {
            sinon.restore();
        });
        it('Should return status 200', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app)
                .get('/users');
            (0, chai_1.expect)(response.status).to.equal(200);
        }));
        it('should return users', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield chai_1.default.request(app)
                .get('/users');
            (0, chai_1.expect)(response.body).to.members.depp.equal([]);
        }));
        describe('Create', () => {
            it('should return status 201', () => {
                const response = yield chai_1.default.request(app)
                    .post('/users');
            });
        });
    });
});
