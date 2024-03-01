export class TamGiac {
    private ma: number;
    private mb: number;
    private mc: number;

    // Constructor mặc định
    // constructor() {
    //     this.ma = 0;
    //     this.mb = 0;
    //     this.mc = 0;
    // }

    // Constructor đủ tham số
    constructor(ma: number, mb: number, mc: number) {
        if (ma <= 0 || mb <= 0 || mc <= 0 || ma + mb <= mc || ma + mc <= mb || mb + mc <= ma) {
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        } else {
            this.ma = ma;
            this.mb = mb;
            this.mc = mc;
        }
    }

    // Getter và setter
    getMa(): number {
        return this.ma;
    }

    setMa(ma: number): void {
        if (ma > 0 && this.mb + this.mc > ma) {
            this.ma = ma;
        }
    }

    getMb(): number {
        return this.mb;
    }

    setMb(mb: number): void {
        if (mb > 0 && this.ma + this.mc > mb) {
            this.mb = mb;
        }
    }

    getMc(): number {
        return this.mc;
    }

    setMc(mc: number): void {
        if (mc > 0 && this.ma + this.mb > mc) {
            this.mc = mc;
        }
    }

    // Phương thức tính chu vi
    tinhChuVi(): number {
        return this.ma + this.mb + this.mc;
    }

    // Phương thức tính diện tích
    tinhDienTich(): number {
        const p: number = this.tinhChuVi() / 2;
        return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
    }

    // Phương thức trả về thông tin kiểu tam giác
    kieuTamGiac(): string {
        if (this.ma === this.mb && this.mb === this.mc) {
            return "Đều";
        } else if (this.ma === this.mb || this.mb === this.mc || this.ma === this.mc) {
            return "Cân";
        } else {
            return "Thường";
        }
    }

    // Phương thức toString
    toString(): string {
        return `Tam giac [a=${this.ma}, b=${this.mb}, c=${this.mc}, Loai: ${this.kieuTamGiac()}, Chu vi=${this.tinhChuVi()}, Dien tich=${this.tinhDienTich()}]`;
    }
}

// Hàm main
 function main() {
    const tg1 = new TamGiac(3, 4, 5);
    const tg2 = new TamGiac(2, 3, 1); // Vi pham rang buoc
    const tg3 = new TamGiac(5, 5, 5);
    const tg4 = new TamGiac(4, 4, 3);
    const tg5 = new TamGiac(6, 8, 10);

    console.log("Thông tin các hình tam giác:");
    console.log(tg1.toString());
    console.log(tg2.toString());
    console.log(tg3.toString());
    console.log(tg4.toString());
    console.log(tg5.toString());
}

// Gọi hàm main
main();