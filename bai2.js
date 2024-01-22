"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    //constructor mac dinh
    // constructor(
    //     name: string, 
    //     loaixe: string, 
    //     dungtich: number, 
    //     trigia: number, 
    //     thue: number
    // ) {
    //     this.name = name
    //     this.loaixe = loaixe
    //     this.dungtich = dungtich
    //     this.trigia = trigia
    //     this.thue = thue
    // }   
    //constructor du tham so
    function Vehicle(name, loaixe, dungtich, trigia) {
        if (dungtich <= 0 || trigia <= 0) {
            this.name = "";
            this.loaixe = "";
            this.dungtich = 0;
            this.trigia = 0;
        }
        else {
            this.name = name;
            this.loaixe = loaixe;
            this.dungtich = dungtich;
            this.trigia = trigia;
        }
    }
    //get&set
    Vehicle.prototype.getName = function () {
        return this.name;
    };
    Vehicle.prototype.setName = function (name) {
        this.name = name;
    };
    Vehicle.prototype.getLoaiXe = function () {
        return this.loaixe;
    };
    Vehicle.prototype.setLoaixe = function (loaixe) {
        this.loaixe = loaixe;
    };
    Vehicle.prototype.getDungTich = function () {
        return this.dungtich;
    };
    Vehicle.prototype.setDungTich = function (dungtich) {
        if (dungtich >= 0) {
            this.dungtich = dungtich;
        }
    };
    Vehicle.prototype.getTriGia = function () {
        return this.trigia;
    };
    Vehicle.prototype.setTriGia = function (trigia) {
        if (trigia >= 0) {
            this.trigia = trigia;
        }
    };
    // Phương thức tính Thue phai nop
    Vehicle.prototype.tinhThue = function () {
        if (this.dungtich < 100) {
            return this.dungtich * (this.trigia * 0.1);
        }
        else if (this.dungtich >= 100 && this.dungtich <= 200) {
            return this.dungtich * (this.trigia * 0.3);
        }
        else {
            return this.dungtich * (this.trigia * 0.5);
        }
    };
    // Phương thức toString
    Vehicle.prototype.toString = function () {
        return 'Vehicle [ this.name ,this.loaixe, this.dungtich, this.trigia, this.tinhThue() ]';
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
// Hàm main
function main() {
    var xe1 = new Vehicle("Nguyen Thu Loan", "Future Neo", 100, 35000000);
    var xe2 = new Vehicle("Le Minh Tri", "Ford Ranger", 3000, 250000000);
    var xe3 = new Vehicle("Nguyen Minh Triet", "Landscape", 1500, 1000000000);
    console.log("Thong tin cac loai xe: ");
    console.log(xe1.toString());
    console.log(xe2.toString());
    console.log(xe3.toString());
}
// Gọi hàm main
main();
