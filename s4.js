function calculate() {
    // الحساب العددي 2
    let tdph = Number(document.getElementById('tdph').value) || 0;
    let exph = Number(document.getElementById('exph').value) || 0;
    let tpph = Number(document.getElementById('tpph').value) || 0;
    document.getElementById('fph').value = (tdph*0.2 + exph*0.6 + tpph*0.2).toFixed(2);

    // الكهرباء
    let tdcal = Number(document.getElementById('tdcal').value) || 0;
    let excal = Number(document.getElementById('excal').value) || 0;
    document.getElementById('fcal').value = ((tdcal*4 + excal*6)/10).toFixed(2);

    // RDM
    let tdchime = Number(document.getElementById('tdchime').value) || 0;
    let exchime = Number(document.getElementById('exchime').value) || 0;
    let tpchime = Number(document.getElementById('tpchime').value) || 0;
    document.getElementById('fchime').value = (tdchime*0.2 + exchime*0.6 + tpchime*0.2).toFixed(2);

    // الإلكترونيات
    let tdalgebra = Number(document.getElementById('tdalgebra').value) || 0;
    let exalgebra = Number(document.getElementById('exalgebra').value) || 0;
    document.getElementById('falgebra').value = ((tdalgebra*4 + exalgebra*6)/10).toFixed(2);

    // القياسات
    let tdm = Number(document.getElementById('tdm').value) || 0;
    let exm = Number(document.getElementById('exm').value) || 0;
    document.getElementById('fm').value = ((tdm*4 + exm*6)/10).toFixed(2);

    // نظرية الإشارات
    let tdst = Number(document.getElementById('tdst').value) || 0;
    let exst = Number(document.getElementById('exst').value) || 0;
    document.getElementById('fst').value = ((tdst*4 + exst*6)/10).toFixed(2);

    // المواد الأخرى
    let fds = Number(document.getElementById('fds').value) || 0;
    let eng = Number(document.getElementById('eng').value) || 0;
    let tdinfo = Number(document.getElementById('tdinfo').value) || 0;
    let exinfo = Number(document.getElementById('exinfo').value) || 0;
    document.getElementById('finfo').value = ((tdinfo*4 + exinfo*6)/10).toFixed(2);

    // الحساب النهائي
    let total = (
        (3 * document.getElementById('fph').value) +
        (3 * document.getElementById('fchime').value) +
        (2 * document.getElementById('finfo').value) +
        (2 * document.getElementById('falgebra').value) +
        (2 * document.getElementById('fcal').value) +
        (2 * document.getElementById('fm').value) +
        (2 * fds) +
        (2 * document.getElementById('fst').value) +
        eng
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