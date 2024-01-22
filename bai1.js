"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TamGiac = void 0;
var TamGiac = /** @class */ (function () {
    // Constructor mặc định
    // constructor() {
    //     this.ma = 0;
    //     this.mb = 0;
    //     this.mc = 0;
    // }
    // Constructor đủ tham số
    function TamGiac(ma, mb, mc) {
        if (ma <= 0 || mb <= 0 || mc <= 0 || ma + mb <= mc || ma + mc <= mb || mb + mc <= ma) {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
        else {
            this.ma = ma;
            this.mb = mb;
            this.mc = mc;
        }
    }
    // Getter và setter
    TamGiac.prototype.getMa = function () {
        return this.ma;
    };
    TamGiac.prototype.setMa = function (ma) {
        if (ma > 0 && this.mb + this.mc > ma) {
            this.ma = ma;
        }
    };
    TamGiac.prototype.getMb = function () {
        return this.mb;
    };
    TamGiac.prototype.setMb = function (mb) {
        if (mb > 0 && this.ma + this.mc > mb) {
            this.mb = mb;
        }
    };
    TamGiac.prototype.getMc = function () {
        return this.mc;
    };
    TamGiac.prototype.setMc = function (mc) {
        if (mc > 0 && this.ma + this.mb > mc) {
            this.mc = mc;
        }
    };
    // Phương thức tính chu vi
    TamGiac.prototype.tinhChuVi = function () {
        return this.ma + this.mb + this.mc;
    };
    // Phương thức tính diện tích
    TamGiac.prototype.tinhDienTich = function () {
        var p = this.tinhChuVi() / 2;
        return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
    };
    // Phương thức trả về thông tin kiểu tam giác
    TamGiac.prototype.kieuTamGiac = function () {
        if (this.ma === this.mb && this.mb === this.mc) {
            return "Đều";
        }
        else if (this.ma === this.mb || this.mb === this.mc || this.ma === this.mc) {
            return "Cân";
        }
        else {
            return "Thường";
        }
    };
    // Phương thức toString
    TamGiac.prototype.toString = function () {
        return "Tam giac [a=".concat(this.ma, ", b=").concat(this.mb, ", c=").concat(this.mc, ", Loai: ").concat(this.kieuTamGiac(), ", Chu vi=").concat(this.tinhChuVi(), ", Dien tich=").concat(this.tinhDienTich(), "]");
    };
    return TamGiac;
}());
exports.TamGiac = TamGiac;
// Hàm main
function main() {
    var tg1 = new TamGiac(3, 4, 5);
    var tg2 = new TamGiac(2, 3, 1); // Vi pham rang buoc
    var tg3 = new TamGiac(5, 5, 5);
    var tg4 = new TamGiac(4, 4, 3);
    var tg5 = new TamGiac(6, 8, 10);
    console.log("Thông tin các hình tam giác:");
    console.log(tg1.toString());
    console.log(tg2.toString());
    console.log(tg3.toString());
    console.log(tg4.toString());
    console.log(tg5.toString());
}
// Gọi hàm main
main();
