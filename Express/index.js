"use strict";
exports.__esModule = true;
var express_1 = require("express");
var http_status_codes_1 = require("http-status-codes");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
var PORT = 8000;
app.get('/', function (req, res) {
    res.status(http_status_codes_1.StatusCodes.OK).send('Express + TypeScript');
});
app.listen(PORT, function () {
    console.log("Server is running at http://localhost:".concat(PORT));
});
