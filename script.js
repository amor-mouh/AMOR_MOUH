function updatePhysics() {
    let td = parseFloat(document.getElementById("phy_td").value) || 0;
    let tp = parseFloat(document.getElementById("phy_tp").value) || 0;
    let exam = parseFloat(document.getElementById("phy_exam").value) || 0;
    let avg = (td * 0.2) + (tp * 0.2) + (exam * 0.6);
    document.getElementById("phy_result").innerText = "معدل الفيزياء: " + avg.toFixed(2);
}

function updateChemistry() {
    let td = parseFloat(document.getElementById("chem_td").value) || 0;
    let tp = parseFloat(document.getElementById("chem_tp").value) || 0;
    let exam = parseFloat(document.getElementById("chem_exam").value) || 0;
    let avg = (td * 0.2) + (tp * 0.2) + (exam * 0.6);
    document.getElementById("chem_result").innerText = "معدل الكيمياء: " + avg.toFixed(2);
}

function updateAlgebra() {
    let tp = parseFloat(document.getElementById("alg_tp").value) || 0;
    let exam = parseFloat(document.getElementById("alg_exam").value) || 0;
    let avg = (tp * 0.4) + (exam * 0.6);
    document.getElementById("alg_result").innerText = "معدل الجبر: " + avg.toFixed(2);
}

function updateAnalysis() {
    let td = parseFloat(document.getElementById("ana_td").value) || 0;
    let exam = parseFloat(document.getElementById("ana_exam").value) || 0;
    let avg = (td * 0.4) + (exam * 0.6);
    document.getElementById("ana_result").innerText = "معدل التحليل: " + avg.toFixed(2);
}

function updateProbability() {
    let td = parseFloat(document.getElementById("prob_td").value) || 0;
    let exam = parseFloat(document.getElementById("prob_exam").value) || 0;
    let avg = (td * 0.4) + (exam * 0.6);
    document.getElementById("prob_result").innerText = "معدل الاحتمالات: " + avg.toFixed(2);
}

function calculateFinalGPA() {
    let total = 0;
    let coefficients = 4 + 4 + 1 + 2 + 3 + 2 + 1 + 1;
    let final_avg = total / coefficients;
    document.getElementById("final_result").innerText = "معدلك العام: " + final_avg.toFixed(2);
}
