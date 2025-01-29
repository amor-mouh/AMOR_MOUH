function getValue(id) {
    let value = parseFloat(document.getElementById(id).value);
    return isNaN(value) || value < 0 ? 0 : value; // التأكد من أن القيم ليست NaN أو سالبة
}

function calculateSubjectAverage(td, tp, exam, weight_td, weight_tp, weight_exam) {
    return (td * weight_td) + (tp * weight_tp) + (exam * weight_exam);
}

function updateSubject(subject, td, tp, exam, weight_td, weight_tp, weight_exam) {
    let avg = calculateSubjectAverage(
        td ? getValue(td) : 0,
        tp ? getValue(tp) : 0,
        getValue(exam),
        weight_td, weight_tp, weight_exam
    );
    document.getElementById(`${subject}_result`).innerText = `معدل ${getSubjectName(subject)}: ${avg.toFixed(2)}`;
    return avg;
}

function getSubjectName(subject) {
    let names = {
        phy: "الفيزياء", chem: "الكيمياء", cs: "الإعلام الآلي",
        alg: "الجبر", ana: "التحليل", prob: "الاحتمالات",
        eng: "الإنجليزية", ethics: "الأخلاقيات"
    };
    return names[subject] || subject;
}

function updatePhysics() {
    return updateSubject("phy", "phy_td", "phy_tp", "phy_exam", 0.2, 0.2, 0.6);
}

function updateChemistry() {
    return updateSubject("chem", "chem_td", "chem_tp", "chem_exam", 0.2, 0.2, 0.6);
}

function updateAlgebra() {
    return updateSubject("alg", null, "alg_tp", "alg_exam", 0, 0.4, 0.6);
}

function updateAnalysis() {
    return updateSubject("ana", "ana_td", null, "ana_exam", 0.4, 0, 0.6);
}

function updateProbability() {
    return updateSubject("prob", "prob_td", null, "prob_exam", 0.4, 0, 0.6);
}

function updateFinalGPA() {
    let phy = updatePhysics() * 4;
    let chem = updateChemistry() * 4;
    let cs = getValue("cs") * 1;
    let alg = updateAlgebra() * 2;
    let ana = updateAnalysis() * 3;
    let prob = updateProbability() * 2;
    let eng = getValue("eng") * 1;
    let ethics = getValue("ethics") * 1;

    let total = phy + chem + cs + alg + ana + prob + eng + ethics;
    let final_avg = total / 18;

    document.getElementById("final_result").innerText = `📌 معدلك العام: ${final_avg.toFixed(2)}`;
}

// تحديث المعدل عند إدخال أي قيمة
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", updateFinalGPA);
});
