function calculate() {
    // الكهرباء
    let tdph = Number(document.getElementById('tdph').value) || 0;
    let exph = Number(document.getElementById('exph').value) || 0;
    let tpph = Number(document.getElementById('tpph').value) || 0;
    document.getElementById('fph').value = (tdph*0.2 + exph*0.6 + tpph*0.2).toFixed(2);

    // الديناميكا الحرارية
    let tdchime = Number(document.getElementById('tdchime').value) || 0;
    let exchime = Number(document.getElementById('exchime').value) || 0;
    let tpchime = Number(document.getElementById('tpchime').value) || 0;
    document.getElementById('fchime').value = (tdchime*0.2 + exchime*0.6 + tpchime*0.2).toFixed(2);

    // الجبر 2
    let tdalgebra = Number(document.getElementById('tdalgebra').value) || 0;
    let exalgebra = Number(document.getElementById('exalgebra').value) || 0;
    document.getElementById('falgebra').value = ((tdalgebra*4 + exalgebra*6)/10).toFixed(2);

    // التحليل 2
    let tdcal = Number(document.getElementById('tdcal').value) || 0;
    let excal = Number(document.getElementById('excal').value) || 0;
    document.getElementById('fcal').value = ((tdcal*4 + excal*6)/10).toFixed(2);

    // بقية المواد
    let info = Number(document.getElementById('info').value) || 0;
    let fds = Number(document.getElementById('fds').value) || 0;
    let eng = Number(document.getElementById('eng').value) || 0;
    let eth = Number(document.getElementById('eth').value) || 0;

    // الحساب النهائي
    let total = (
        (4 * document.getElementById('fph').value) +
        (4 * document.getElementById('fchime').value) +
        (2 * info) +
        (2 * document.getElementById('falgebra').value) +
        (3 * document.getElementById('fcal').value) +
        (2 * fds) +
        eng +
        eth
    ) / 19;

    // عرض النتيجة
    let resultElement = document.getElementById("total");
    let messageElement = document.getElementById("message");
    
    resultElement.textContent = total.toFixed(2);
    
    if (total >= 10) {
        resultElement.style.color = "#2ecc71";
        messageElement.textContent = "مبروك! ناجح ✔️";
        messageElement.style.color = "#2ecc71";
    } else {
        resultElement.style.color = "#e74c3c";
        messageElement.textContent = "راسب، يجب إعادة التسجيل ❌";
        messageElement.style.color = "#e74c3c";
    }
}