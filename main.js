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

var NalichnikInputs = document.querySelectorAll('input[name="Nalichnik"]');

NalichnikInputs.forEach(input => {
    input.addEventListener('click', event => {
        if (event.target.value === "bor") {
            document.querySelector('#hidden_div_nalichnik').style.display = 'block';
        } else {
            document.querySelector('#hidden_div_nalichnik').style.display = 'none';
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
        alert(qosh_soni)
        let qosh_split = qosh_soni.split(' ');
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

    let padshelnik_bor_yoki_yuq = prompt("XA yoki Yuq: Padshelnik hisoblansinmi? ");
    if (padshelnik_bor_yoki_yuq.toLowerCase() === "xa") {
        let patshelnik = parseFloat(prompt("podshelnik necha metr(umumiy)?"));
        let narxi = patshelnik_price[material] * patshelnik;
        result["patshelnik_narx"] = narxi;
    } else {
        result["patshelnik_narx"] = 0;
    }

    console.log(result)
    
    //######################################################################//

    
}