const value = calculator(10);

function calculator(operand) {

    return {
        add: function add(value) {
            return operand + value;
        },
        divide: function divide(value) {
            return operand / value;
        },
        sub: function sub(value) {
            return operand - value;
        },
        mult: function mult(value) {
            return operand * value;
        },
        set: function set(value) {
            return operand = value;
        },
        get: function get() {
            return operand;
        }
    }
}


console.log(value.add(45)) // возвращает 55
console.log(value.sub(45)) // возвращает -35
console.log(value.divide(5)) // возвращает 2
console.log(value.mult(5)) // возвращает 50
console.log(value.set(100)) // устанавливает базовое значение в 100
console.log(value.get()) // возвращает базовое значение (в данный момент 100)

console.log(value.mult(5)) // возвращает 500
