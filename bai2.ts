export class Vehicle{
    private name: string
    private loaixe: string
    private dungtich: number
    private trigia: number
    
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
    constructor(name: string, loaixe: string, dungtich: number, trigia: number){
        if(dungtich <= 0 || trigia <= 0 ){
            this.name = "";
            this.loaixe = "";
            this.dungtich = 0;
            this.trigia = 0;
        }
        else{
            this.name = name;
            this.loaixe = loaixe;
            this.dungtich = dungtich;
            this.trigia = trigia;
        }
    }

    //get&set
        getName():string{
            return this.name;
        }

        setName(name: string): void{
            this.name = name;
        }

        getLoaiXe():string{
            return this.loaixe;
        }

        setLoaixe(loaixe: string):void{
            this.loaixe = loaixe;
        }

        getDungTich():number{
            return this.dungtich;
        }

        setDungTich(dungtich: number):void{
            if(dungtich >= 0){
                this.dungtich = dungtich;
            }
        }

        getTriGia(): number{
            return this.trigia;
        }

        setTriGia(trigia: number):void{
            if(trigia >= 0){
                this.trigia = trigia;
            }
        }
 
      // Phương thức tính Thue phai nop
        tinhThue(): number{
            if(this.dungtich < 100){
                return this.dungtich*(this.trigia*0.1);

            }
            else if(this.dungtich >= 100 && this.dungtich <= 200){
                return this.dungtich*(this.trigia*0.3);
            }
            else{
                return this.dungtich*(this.trigia*0.5);
            }

        }

    // Phương thức toString
    toString(): string {
        return 'Vehicle [ this.name ,this.loaixe, this.dungtich, this.trigia, this.tinhThue() ]';
    }

}

// Hàm main
 function main() {
    const xe1 = new Vehicle("Nguyen Thu Loan", "Future Neo", 100, 35000000);
    const xe2 = new Vehicle("Le Minh Tri", "Ford Ranger", 3000, 250000000);
    const xe3 = new Vehicle("Nguyen Minh Triet", "Landscape", 1500, 1000000000);

    console.log("Thong tin cac loai xe: ");
    console.log(xe1.toString());
    console.log(xe2.toString());
    console.log(xe3.toString());
}

// Gọi hàm main
main();