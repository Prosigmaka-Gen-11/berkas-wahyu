//Function return hasil perkalian 2 parameter
function kali(a,b){
    return a*b;
}
let a=4; let b=2;
console.log(kali(a,b));

const objectNih={
    stringNih:'ini string',
    numberNih : 1,

    nestedObjectNih : {
        string2Nih :"ini string 2"
    },

    Functionvoid: function() {
        return this.kali + ", " + this.stringNih + ", " + this.numberNih + " dan " + this.nestedObjectNih.string2Nih;
    },
    
    kalites : kali(a,b)
}

console.log(objectNih.kalites);