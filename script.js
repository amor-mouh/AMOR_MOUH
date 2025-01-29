function getValue(id) {
    let value = parseFloat(document.getElementById(id).value);
    return isNaN(value) ? 0 : value; // التأكد من عدم إرجاع NaN
}

function calculateSubjectAverage(td, tp, exam, weight_td, weight_tp, weight_exam) {
    return (td * weight_td) + (tp * weight_tp) + (exam * weight_exam);
}

function updatePhysics() {
    let avg = calculateSubjectAverage(getValue("phy_td"), getValue("phy_tp"), getValue("phy_exam"), 0.2, 0.2, 0.6);
    document.getElementById("phy_result").innerText = "معدل الفيزياء: " + avg.toFixed(2);
    calculateFinalGPA();
}

function updateChemistry() {
    let avg = calculateSubjectAverage(getValue("chem_td"), getValue("chem_tp"), getValue("chem_exam"), 0.2, 0.2, 0.6);
    document.getElementById("chem_result").innerText = "معدل الكيمياء: " + avg.toFixed(2);
    calculateFinalGPA();
}

function updateAlgebra() {
    let avg = calculateSubjectAverage(0, getValue("alg_tp"), getValue("alg_exam"), 0, 0.4, 0.6);
    document.getElementById("alg_result").innerText = "معدل الجبر: " + avg.toFixed(2);
    calculateFinalGPA();
}

function updateAnalysis() {
    let avg = calculateSubjectAverage(getValue("ana_td"), 0, getValue("ana_exam"), 0.4, 0, 0.6);
    document.getElementById("ana_result").innerText = "معدل التحليل: " + avg.toFixed(2);
    calculateFinalGPA();
}

function updateProbability() {
    let avg = calculateSubjectAverage(getValue("prob_td"), 0, getValue("prob_exam"), 0.4, 0, 0.6);
    document.getElementById("prob_result").innerText = "معدل الاحتمالات: " + avg.toFixed(2);
    calculateFinalGPA();
}

function calculateFinalGPA() {
    let phy = calculateSubjectAverage(getValue("phy_td"), getValue("phy_tp"), getValue("phy_exam"), 0.2, 0.2, 0.6) * 4;
    let chem = calculateSubjectAverage(getValue("chem_td"), getValue("chem_tp"), getValue("chem_exam"), 0.2, 0.2, 0.6) * 4;
    let cs = getValue("cs") * 1;
    let alg = calculateSubjectAverage(0, getValue("alg_tp"), getValue("alg_exam"), 0, 0.4, 0.6) * 2;
    let ana = calculateSubjectAverage(getValue("ana_td"), 0, getValue("ana_exam"), 0.4, 0, 0.6) * 3;
    let prob = calculateSubjectAverage(getValue("prob_td"), 0, getValue("prob_exam"), 0.4, 0, 0.6) * 2;
    let eng = getValue("eng") * 1;
    let ethics = getValue("ethics") * 1;

    let total = phy + chem + cs + alg + ana + prob + eng + ethics;
    let final_avg = total / 18; // القسمة على مجموع المعاملات الصحيح (18)

    document.getElementById("final_result").innerText = "📌 معدلك العام: " + final_avg.toFixed(2);
}

// التأكد من تحديث المعدل عند إدخال أي قيمة
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", calculateFinalGPA);
});
