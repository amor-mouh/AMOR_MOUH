function calculate() {
    // الحساب العددي 1
    let tdph = Number(document.getElementById('tdph').value) || 0;
    let exph = Number(document.getElementById('exph').value) || 0;
    let tpph = Number(document.getElementById('tpph').value) || 0;
    document.getElementById('fph').value = (tdph*0.2 + exph*0.6 + tpph*0.2).toFixed(2);

    // الاهتزازات
    let tdchime = Number(document.getElementById('tdchime').value) || 0;
    let exchime = Number(document.getElementById('exchime').value) || 0;
    let tpchime = Number(document.getElementById('tpchime').value) || 0;
    document.getElementById('fchime').value = (tdchime*0.2 + exchime*0.6 + tpchime*0.2).toFixed(2);

    // ميكانيك الموائع
    let tdmdf = Number(document.getElementById('tdmdf').value) || 0;
    let exmdf = Number(document.getElementById('exmdf').value) || 0;
    let tpmdf = Number(document.getElementById('tpmdf').value) || 0;
    document.getElementById('fmdf').value = (tdmdf*0.2 + exmdf*0.6 + tpmdf*0.2).toFixed(2);

    // حساب التفاضل 3
    let tdcal = Number(document.getElementById('tdcal').value) || 0;
    let excal = Number(document.getElementById('excal').value) || 0;
    document.getElementById('fcal').value = ((tdcal*4 + excal*6)/10).toFixed(2);

    // الميكانيك العقلاني
    let tdalgebra = Number(document.getElementById('tdalgebra').value) || 0;
    let exalgebra = Number(document.getElementById('exalgebra').value) || 0;
    document.getElementById('falgebra').value = ((tdalgebra*4 + exalgebra*6)/10).toFixed(2);

    // الإعلام الآلي
    let tdinfo = Number(document.getElementById('tdinfo').value) || 0;
    let exinfo = Number(document.getElementById('exinfo').value) || 0;
    document.getElementById('finfo').value = ((tdinfo*4 + exinfo*6)/10).toFixed(2);

    // المواد الأخرى
    let fds = Number(document.getElementById('fds').value) || 0;
    let eng = Number(document.getElementById('eng').value) || 0;

    // الحساب النهائي
    let total = (
        (3 * document.getElementById('fph').value) +
        (3 * document.getElementById('fchime').value) +
        (2 * document.getElementById('finfo').value) +
        (2 * document.getElementById('falgebra').value) +
        (3 * document.getElementById('fcal').value) +
        (2 * eng) +
        (3 * document.getElementById('fmdf').value) +
        fds
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