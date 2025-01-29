function getValue(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

function updatePhysics() {
    let td = getValue("phy_td");
    let tp = getValue("phy_tp");
    let exam = getValue("phy_exam");
    let avg = (td * 0.2) + (tp * 0.2) + (exam * 0.6);
    document.getElementById("phy_result").innerText = "معدل الفيزياء: " + avg.toFixed(2);
    calculateFinalGPA();
}

function updateChemistry() {
    let td = getValue("chem_td");
    let tp = getValue("chem_tp");
    let exam = getValue("chem_exam");
    let avg = (td * 0.2) + (tp * 0.2) + (exam * 0.6);
    document.getElementById("chem_result").innerText = "معدل الكيمياء: " + avg.toFixed(2);
    calculateFinalGPA();
}

function updateAlgebra() {
    let tp = getValue("alg_tp");
    let exam = getValue("alg_exam");
    let avg = (tp * 0.4) + (exam * 0.6);
    document.getElementById("alg_result").innerText = "معدل الجبر: " + avg.toFixed(2);
    calculateFinalGPA();
}

function updateAnalysis() {
    let td = getValue("ana_td");
    let exam = getValue("ana_exam");
    let avg = (td * 0.4) + (exam * 0.6);
    document.getElementById("ana_result").innerText = "معدل التحليل: " + avg.toFixed(2);
    calculateFinalGPA();
}

function updateProbability() {
    let td = getValue("prob_td");
    let exam = getValue("prob_exam");
    let avg = (td * 0.4) + (exam * 0.6);
    document.getElementById("prob_result").innerText = "معدل الاحتمالات: " + avg.toFixed(2);
    calculateFinalGPA();
}

function calculateFinalGPA() {
    let phy = ((getValue("phy_td") * 0.2) + (getValue("phy_tp") * 0.2) + (getValue("phy_exam") * 0.6)) * 4;
    let chem = ((getValue("chem_td") * 0.2) + (getValue("chem_tp") * 0.2) + (getValue("chem_exam") * 0.6)) * 4;
    let cs = getValue("cs") * 1;
    let alg = ((getValue("alg_tp") * 0.4) + (getValue("alg_exam") * 0.6)) * 2;
    let ana = ((getValue("ana_td") * 0.4) + (getValue("ana_exam") * 0.6)) * 3;
    let prob = ((getValue("prob_td") * 0.4) + (getValue("prob_exam") * 0.6)) * 2;
    let eng = getValue("eng") * 1;
    let ethics = getValue("ethics") * 1;

    let total = phy + chem + cs + alg + ana + prob + eng + ethics;
    let final_avg = total / 15; // مجموع المعاملات = 15

    document.getElementById("final_result").innerText = "معدلك العام: " + final_avg.toFixed(2);
}
