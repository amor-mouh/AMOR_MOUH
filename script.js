function calculateGPA() {
    // استرجاع القيم المدخلة
    let phy_td = parseFloat(document.getElementById("phy_td").value) || 0;
    let phy_tp = parseFloat(document.getElementById("phy_tp").value) || 0;
    let phy_exam = parseFloat(document.getElementById("phy_exam").value) || 0;
    
    let chem_td = parseFloat(document.getElementById("chem_td").value) || 0;
    let chem_tp = parseFloat(document.getElementById("chem_tp").value) || 0;
    let chem_exam = parseFloat(document.getElementById("chem_exam").value) || 0;
    
    let cs = parseFloat(document.getElementById("cs").value) || 0;
    let alg_tp = parseFloat(document.getElementById("alg_tp").value) || 0;
    let alg_exam = parseFloat(document.getElementById("alg_exam").value) || 0;
    
    let ana_td = parseFloat(document.getElementById("ana_td").value) || 0;
    let ana_exam = parseFloat(document.getElementById("ana_exam").value) || 0;
    
    let prob_td = parseFloat(document.getElementById("prob_td").value) || 0;
    let prob_exam = parseFloat(document.getElementById("prob_exam").value) || 0;
    
    let eng = parseFloat(document.getElementById("eng").value) || 0;
    let ethics = parseFloat(document.getElementById("ethics").value) || 0;

    // حساب معدل كل مادة
    let phy_avg = (phy_td * 0.2) + (phy_tp * 0.2) + (phy_exam * 0.6);
    let chem_avg = (chem_td * 0.2) + (chem_tp * 0.2) + (chem_exam * 0.6);
    let alg_avg = (alg_tp * 0.4) + (alg_exam * 0.6);
    let ana_avg = (ana_td * 0.4) + (ana_exam * 0.6);
    let prob_avg = (prob_td * 0.4) + (prob_exam * 0.6);

    // المعاملات
    let weighted_sum = (phy_avg * 4) + (chem_avg * 4) + (cs * 1) + (alg_avg * 2) + (ana_avg * 3) + (prob_avg * 2) + (eng * 1) + (ethics * 1);
    let total_coefficients = 4 + 4 + 1 + 2 + 3 + 2 + 1 + 1;
    
    let final_avg = weighted_sum / total_coefficients;
    
    document.getElementById("result").innerText = "معدلك: " + final_avg.toFixed(2);
}
