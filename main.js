const Qosh_narxlari = {
    "laminad": {
        0: {"tabaqa": "1 tabaqa", "qosh_turi": "oddiy", "narxi": 200},
        1: {"tabaqa": "1 tabaqa", "qosh_turi": "duti", "narxi": 250},
        2: {"tabaqa": "1.5 tabaqa", "qosh_turi": "oddiy", "narxi": 250},
        3: {"tabaqa": "1.5 tabaqa", "qosh_turi": "duti", "narxi": 300},
        4: {"tabaqa": "2 tabaqa", "qosh_turi": "oddiy", "narxi": 400},
        5: {"tabaqa": "2 tabaqa", "qosh_turi": "duti", "narxi": 450},
        6: {"tabaqa": "4 tabaqa", "qosh_turi": "oddiy", "narxi": 500},
        7: {"tabaqa": "4 tabaqa", "qosh_turi": "duti", "narxi": 550}
    },
    "krashni": {
        0: {"tabaqa": "1 tabaqa", "qosh_turi": "oddiy", "narxi": 250},
        1: {"tabaqa": "1 tabaqa", "qosh_turi": "duti", "narxi": 300},
        2: {"tabaqa": "1.5 tabaqa", "qosh_turi": "oddiy", "narxi": 300},
        3: {"tabaqa": "1.5 tabaqa", "qosh_turi": "duti", "narxi": 350},
        4: {"tabaqa": "2 tabaqa", "qosh_turi": "oddiy", "narxi": 500},
        5: {"tabaqa": "2 tabaqa", "qosh_turi": "duti", "narxi": 600},
        6: {"tabaqa": "4 tabaqa", "qosh_turi": "oddiy", "narxi": 600},
        7: {"tabaqa": "4 tabaqa", "qosh_turi": "duti", "narxi": 650}
    },
    "shpon": {
        0: {"tabaqa": "1 tabaqa", "qosh_turi": "oddiy", "narxi": 250},
        1: {"tabaqa": "1 tabaqa", "qosh_turi": "duti", "narxi": 300},
        2: {"tabaqa": "1.5 tabaqa", "qosh_turi": "oddiy", "narxi": 300},
        3: {"tabaqa": "1.5 tabaqa", "qosh_turi": "duti", "narxi": 350},
        4: {"tabaqa": "2 tabaqa", "qosh_turi": "oddiy", "narxi": 500},
        5: {"tabaqa": "2 tabaqa", "qosh_turi": "duti", "narxi": 600},
        6: {"tabaqa": "4 tabaqa", "qosh_turi": "oddiy", "narxi": 700},
        7: {"tabaqa": "4 tabaqa", "qosh_turi": "duti", "narxi": 750}
    }
};
const Dabor_narxlari = {
     "laminad":125,
     "krashni":200,
     "shpon":250
};
const Nalichnik_narxlari = {
     "laminad":{
          "nalichnik 8sm":20,
          "nalichnik 10sm":25
     },
     "krashni":{
          "nalichnik 16mm":50,
          "nalichnik 8sm":30,
          "nalichnik 10sm":35,
     },
     "shpon":{
          "nalichnik 8sm":35,
          "nalichnik 10sm":40
     }
};

const patshelnik_price = {
    "laminad":8,
    "krashni":10,
    "shpon":12
};

var qoshInputs = document.querySelectorAll('input[name="qosh"]');

qoshInputs.forEach(input => {
    input.addEventListener('click', event => {
        if (event.target.value === "bor") {
            document.querySelector('#hidden_div_qosh').style.display = 'block';
            document.querySelector('#hidden_div_qosh_2').style.display = 'block';
        } else {
            document.querySelector('#hidden_div_qosh').style.display = 'none';
            document.querySelector('#hidden_div_qosh_2').style.display = 'none';
        }
    });
});


var daborInputs = document.querySelectorAll('input[name="dabor"]');

daborInputs.forEach(input => {
    input.addEventListener('click', event => {
        if (event.target.value === "bor") {
            document.querySelector('#hidden_div_dabor').style.display = 'block';
        } else {
            document.querySelector('#hidden_div_dabor').style.display = 'none';
        }
    });
});

var padshelnik = document.querySelectorAll('input[name="padshelnik"]');

padshelnik.forEach(input => {
    input.addEventListener('click', event => {
        if (event.target.value === "bor") {
            document.querySelector('#hidden_div_padshelnik').style.display = 'block';
        } else {
            document.querySelector('#hidden_div_padshelnik').style.display = 'none';
        }
    });
});
// var NalichnikInputs = document.querySelectorAll('input[name="Nalichnik"]');

// NalichnikInputs.forEach(input => {
//     input.addEventListener('click', event => {
//         if (event.target.value === "bor") {
//             document.querySelector('#hidden_div_nalichnik').style.display = 'block';
//         } else {
//             document.querySelector('#hidden_div_nalichnik').style.display = 'none';
//         }
//     });
// });

var addOynaInputs = document.querySelectorAll('input[name="oyna"]');

addOynaInputs.forEach(input => {
    input.addEventListener('click', event => {
        if (event.target.value === "bor") {
            document.querySelector('#hidden_div_oyna').style.display = 'block';
        } else {
            document.querySelector('#hidden_div_oyna').style.display = 'none';
        }
    });
});

var ustanovkaInputs = document.querySelectorAll('input[name="ustanovka"]');

ustanovkaInputs.forEach(input => {
    input.addEventListener('click', event => {
        if (event.target.value === "bor") {
            document.querySelector('#hidden_div_ustanovka').style.display = 'block';
        } else {
            document.querySelector('#hidden_div_ustanovka').style.display = 'none';
        }
    });
});

var dastavkaInputs = document.querySelectorAll('input[name="dastavka"]');

dastavkaInputs.forEach(input => {
    input.addEventListener('click', event => {
        if (event.target.value === "bor") {
            document.querySelector('#hidden_div_dastavka').style.display = 'block';
        } else {
            document.querySelector('#hidden_div_dastavka').style.display = 'none';
        }
    });
});

function calculateCost() {
    // Material va o'lchamlarni olish
    var materialSelect = document.getElementById("eshikMaterial").value;
    let result = {};    
    result["material"] = materialSelect;
    
    if (result["material"] === "0") {
        result["material"] = "laminad";
    } else if (result["material"] === "1") {
        result["material"] = "krashni";
    } else if (result["material"] === "2") {
        result["material"] = "shpon";
    }  


    let razmer = document.getElementById('eshikRazmer').value;
    let razmer_list = razmer.split(" ");
    let razmer_kvadrat = 0;
    let tabaqalar = [];

    for (let x of razmer_list) {
        let razmer_num = x.split("x");
        let kvardat_razmer = parseFloat(razmer_num[0]) * parseFloat(razmer_num[1]);
        razmer_kvadrat += kvardat_razmer;
        if (0.6 < parseFloat(razmer_num[0]) && parseFloat(razmer_num[0]) < 1) {
            tabaqalar.push("1 tabaqa");
        } else if (1.07 < parseFloat(razmer_num[0]) && parseFloat(razmer_num[0]) < 1.40) {
            tabaqalar.push("1.5 tabaqa");
        } else if (1.40 < parseFloat(razmer_num[0]) && parseFloat(razmer_num[0]) < 1.70) {
            tabaqalar.push("2 tabaqa");
        } else {
            tabaqalar.push("4 tabaqa");
        }
    }

    result["kvardat_razmer"] = razmer_kvadrat;
    result["Tabaqalar"] = tabaqalar;

    let eshik_kv = document.getElementById('eshikKvadratPrice').value;
    result["eshik_kvadrati_narxi"] = eshik_kv;
    let eshik_kv_price = result["eshik_kvadrati_narxi"] * result["kvardat_razmer"];
    result["eshik_kv_price"] = eshik_kv_price;

    
    let zamok = document.getElementById('eshikZamok').value;
    let zamok_summa = zamok * razmer_list.length;
    result["zamok"] = zamok_summa;
    
    let petle_narx = document.getElementById('eshikPetle').value;
    let petle = document.getElementById('petleJami').value;
    let petle_summa = petle * petle_narx;
    result["petle"] = petle_summa;
    
    let material = result["material"];
    
    let qosh_bor_yoki_yuq = document.querySelector('input[name="qosh"]:checked').value.toLowerCase();
    if (qosh_bor_yoki_yuq.toLowerCase() === "bor") {
        let qosh_oddiy_yoki_duti = document.querySelector('input[name="qosh_2"]:checked').value.toLowerCase();
        let qosh_soni = document.getElementById('eshikQoshNumber').value;
        let qosh_split = qosh_soni.split(' ');
        // console.log(qosh_split)
        let new_material = Qosh_narxlari[material];
        let qosh_narxi_all = 0;
        for (let i = 0; i < result["Tabaqalar"].length; i++) {
            let x = result["Tabaqalar"][i];
            let y = parseFloat(qosh_split[i]);
            for (let key in new_material) {
                if (new_material.hasOwnProperty(key)) {
                    let value = new_material[key];
                    if (value["tabaqa"] === x && value["qosh_turi"] === qosh_oddiy_yoki_duti) {
                        let qosh_narxi = value["narxi"] * y;
                        qosh_narxi_all += qosh_narxi;
                    }
                }
            }
        }
        result["qosh_narxi"] = qosh_narxi_all;
    } else {
        result["qosh_narxi"] = 0;
    }

    let kukla = document.getElementById('eshikDoll').value;

    let kukla_narx = kukla * 40;
    result["kukla_narx"] = kukla_narx;

    let dabor_bor_yoki_yuq =  document.querySelector('input[name="dabor"]:checked').value.toLowerCase();

    if (dabor_bor_yoki_yuq.toLowerCase() === "bor") {
        let dabor_narx = 0;
        let dabor_razmer = document.getElementById('DaborRazmer').value;
        let dabor_split = dabor_razmer.split(' ');
        for (let i = 0; i < razmer_list.length; i++) {
            let x = razmer_list[i];
            let y = parseFloat(dabor_split[i]);
            let razmer_num = x.split("x");
            let dabor_m2_1 = parseFloat(razmer_num[1]) * 2;
            let dabor_m2_2 = dabor_m2_1 + parseFloat(razmer_num[0]);
            let dabor_m2 = dabor_m2_2 * y;
            let dabor_summa = dabor_m2 * Dabor_narxlari[material];
            dabor_narx += dabor_summa;
        }
        result["dabor_narx"] = dabor_narx;
    } else {
        result["dabor_narx"] = 0;
    }

    let padshelnik_bor_yoki_yuq = document.querySelector('input[name="padshelnik"]:checked').value.toLowerCase()
    if (padshelnik_bor_yoki_yuq.toLowerCase() === "bor") {
        let patshelnik = document.getElementById('PadshelnikeshikRazmer').value;
        let narxi = patshelnik_price[material] * patshelnik;
        result["patshelnik_narx"] = narxi;
    } else {
        result["patshelnik_narx"] = 0;
    }


    let nalichnik_8_yoki_10 = document.getElementById('eshiknalichni').value
    let nalichnik = document.getElementById('NalichnikeshikRazmer').value
    let nalichni_summa = nalichnik_8_yoki_10 * nalichnik;
    result["nalichnik_narx"] = nalichni_summa;
    

    let oyna_bor_yoki_yuq = document.querySelector('input[name="oyna"]:checked').value.toLowerCase();
    if (oyna_bor_yoki_yuq.toLowerCase() === "bor") {
        let oyna_narxi = 150;
        let oyna_soni = document.getElementById('oynaNumber').value
        let oyna_summa = oyna_narxi * oyna_soni;
        result["oyna_summa"] = oyna_summa;
    } else {
        result["oyna_summa"] = 0;
    }
        
    let ustanovka_bor_yoki_yuq = document.querySelector('input[name="ustanovka"]:checked').value.toLowerCase()
    if (ustanovka_bor_yoki_yuq.toLowerCase() === "bor") {
        let ustanovka_narxi = document.getElementById('eshikustanovka').value
        result["ustanovka_narx"] = parseFloat(ustanovka_narxi);
    } else {
        result["ustanovka_narx"] = 0;
    }
    
    let dastavka_bor_yoki_yuq = document.querySelector('input[name="dastavka"]:checked').value.toLowerCase()
    if (dastavka_bor_yoki_yuq.toLowerCase() === "bor") {
        let dastavka_narxi = document.getElementById('eshikdastavka').value
        result["dastavka_narx"] = parseFloat(dastavka_narxi);
    } else {
        result["dastavka_narx"] = 0;
    }
    
    let summa = 0;
    
    summa += result["kvardat_razmer"] * result["eshik_kvadrati_narxi"];
    summa = Math.round(summa);
    summa += parseInt(result["zamok"]) + result["petle"] + result["nalichnik_narx"] + result["kukla_narx"];
    if (result["qosh_narxi"]) {
        summa += result["qosh_narxi"];
    }
    if (result["dabor_narx"]) {
        summa += result["dabor_narx"];
    }
    if (result["patshelnik_narx"]) {
        summa += result["patshelnik_narx"];
    }
    if (result["oyna_summa"]) {
        summa += result["oyna_summa"];
    }
    if (result["dastavka_narx"]) {
        summa += result["dastavka_narx"];
    }
    if (result["ustanovka_narx"]) {
        summa += result["ustanovka_narx"];
    }
    // console.log(result)

    var resultElement = document.getElementById("result");
    var totalCostElement = document.getElementById("totalCost");
    totalCostElement.textContent = "Hisoblangan Narx: " + (summa*1000)
    resultElement.style.display = 'block';
    // console.log(summa);
    // console.log(result);
    
    //######################################################################//

    
}
