document.getElementById('subjectType').addEventListener('change', function() {
    var type = this.value;
    if (type === "withLab") {
        document.getElementById('withLabFields').style.display = 'block';
        document.getElementById('withoutLabFields').style.display = 'none';
    } else {
        document.getElementById('withLabFields').style.display = 'none';
        document.getElementById('withoutLabFields').style.display = 'block';
    }
});

function calculateGrade() {
    var type = document.getElementById('subjectType').value;
    var finalGrade;

    if (type === "withLab") {
        var td = parseFloat(document.getElementById('td').value) || 0;
        var tp = parseFloat(document.getElementById('tp').value) || 0;
        var exam = parseFloat(document.getElementById('exam').value) || 0;

        finalGrade = (td * 0.2) + (tp * 0.2) + (exam * 0.6);
    } else {
        var tdOnly = parseFloat(document.getElementById('tdOnly').value) || 0;
        var examOnly = parseFloat(document.getElementById('examOnly').value) || 0;

        finalGrade = (tdOnly * 0.4) + (examOnly * 0.6);
    }

    document.getElementById('result').innerText = "المعدل النهائي: " + finalGrade.toFixed(2);
}
