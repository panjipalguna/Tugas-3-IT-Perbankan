let MyTemperatureConversion=class MyTemperatureConversion{
    inputCheck(from, to, temperature){
        let isSuccess=true;
        let errMessage=null;
        let arrUnit=['C', 'F', 'R', 'K'];
        if(typeof from=="undefined" || typeof from!="string"){
            isSuccess=false;
            errMessage="Please pass origin temperature unit such as (C, R, K, F)";
        }
        else{
            if(!from.replace(/\s/g, '')){
                isSuccess=false;
                errMessage="Please pass origin temperature unit such as (C, R, K, F)";
            }
            else if(arrUnit.indexOf(from.replace(/\s/g, ''))===-1){
                isSuccess=false;
                errMessage="Please pass origin temperature unit such as (C, R, K, F)";
            }
        }

        if((typeof to=="undefined" || typeof to!="string") && isSuccess){
            isSuccess=false;
            errMessage="Please pass destination temperature unit such as (C, R, K, F)";
        }
        else if(isSuccess){
            if(!to.replace(/\s/g, '')){
                isSuccess=false;
                errMessage="Please pass destination temperature unit such as (C, R, K, F)";
            }
            else if(arrUnit.indexOf(to.replace(/\s/g, ''))===-1){
                isSuccess=false;
                errMessage="Please pass destination temperature unit such as (C, R, K, F)";
            }
        }

        if((typeof temperature=="undefined" || typeof temperature!="number" || isNaN(temperature)) && isSuccess){
            isSuccess=false;
            errMessage="Please pass origin temperature as number";
        }

        return {ret: isSuccess, err: errMessage};
    }

    temperatureConversion(from, to, temperature){
        let numerator;
        let denumerator;

        let responseCheck=this.inputCheck(from, to, temperature);
        if(responseCheck.ret){
            if(from=="C"){
                denumerator=5.0;
            }
            else if(from=="R"){
                denumerator=4.0;
            }
            else if(from=="F"){
                temperature=temperature-32;
                denumerator=9.0;
            }
            else if(from=="K"){
                temperature=temperature-273.15;
                denumerator=5.0;
            }
        
            if(to=="C"){
                numerator=5.0;
            }
            else if(to=="R"){
                numerator=4.0;
            }
            else if(to=="F"){
                numerator=9.0;
                temperature=temperature+(denumerator/numerator)*32.0;
            }
            else if(to=="K"){
                numerator=5.0;
                temperature=temperature+(denumerator/numerator)*273.15;
            }

            temperature=(numerator/denumerator)*parseFloat(temperature);
        }

        return {temperature: temperature, ret: responseCheck.ret, err: responseCheck.err};
    }
}

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = MyTemperatureConversion;
    }
    exports._ = MyTemperatureConversion;
}