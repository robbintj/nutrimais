// Atualiza ano automaticamente
var anoSpan = document.getElementById('anoAtual');
if (anoSpan) anoSpan.textContent = new Date().getFullYear().toString();

// Formulário e feedback
var form = document.getElementById('consultaForm');
var feedback = document.getElementById('formFeedback');

// Função para exibir mensagens Bootstrap
function showMessage(msg, type) {
    if (!feedback) return;
    var alertType = type === 'success' ? 'alert-success' : 'alert-danger';
    feedback.innerHTML = `
        <div class="alert ${alertType} alert-dismissible fade show" role="alert">
            ${msg}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    setTimeout(() => { if(feedback.firstChild) feedback.firstChild.remove(); }, 6000);
}

// Evento de envio do formulário
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        var formData = new FormData(form);

        fetch('enviar.php', { method: 'POST', body: formData })
            .then(res => res.json())
            .then(result => {
                showMessage(result.message, result.status);
                if (result.status === 'success') {
                    form.reset();
                    form.classList.remove('was-validated');
                }
            })
            .catch(err => {
                console.error(err);
                showMessage('⚠️ Erro de rede. Tente novamente mais tarde.', 'error');
            });
    });
}


// // app.js
// // Atualizado para mensagens amigáveis com Bootstrap

// // Atualiza ano automaticamente
// var anoSpan = document.getElementById('anoAtual');
// if (anoSpan)
//     anoSpan.textContent = new Date().getFullYear().toString();

// // Referências do formulário e feedback
// var form = document.getElementById('consultaForm');
// var feedback = document.getElementById('formFeedback');

// // Função para exibir mensagens Bootstrap
// function showMessage(msg, type) {
//     if (!feedback) return;

//     var alertType = type === 'success' ? 'alert-success' : 'alert-danger';
//     feedback.innerHTML = `
//         <div class="alert ${alertType} alert-dismissible fade show" role="alert">
//             ${msg}
//             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//         </div>
//     `;

//     // Remove automaticamente após 6 segundos
//     setTimeout(function () {
//         if (feedback.firstChild) feedback.firstChild.remove();
//     }, 6000);
// }

// // Evento de envio do formulário
// if (form) {
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         // Validação do formulário
//         if (!form.checkValidity()) {
//             form.classList.add('was-validated');
//             return;
//         }

//         // Coleta os dados do formulário
//         var data = {
//             nome: document.getElementById('nome').value,
//             email: document.getElementById('email').value,
//             telefone: document.getElementById('telefone').value,
//             servico: document.getElementById('servico').value,
//             mensagem: document.getElementById('mensagem').value,
//             origem: 'landing-site'
//         };

//         // Envia via fetch
//         fetch('/api/consulta', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(data)
//         })
//         .then(function (res) {
//             if (res.ok) {
//                 showMessage('🎉 Obrigado! Sua solicitação foi enviada com sucesso. Em breve entraremos em contato.', 'success');
//                 form.reset();
//                 form.classList.remove('was-validated');
//             } else {
//                 return res.text().then(function(txt){
//                     showMessage('⚠️ Ops! Não conseguimos enviar sua solicitação. Detalhes: ' + txt, 'error');
//                 });
//             }
//         })
//         .catch(function (err) {
//             console.error(err);
//             showMessage('⚠️ Erro de rede. Tente novamente mais tarde.', 'error');
//         });
//     });
// }


// // app.js (transpilado de TS)
// var anoSpan = document.getElementById('anoAtual');
// if (anoSpan)
//     anoSpan.textContent = new Date().getFullYear().toString();
// var form = document.getElementById('consultaForm');
// var feedback = document.getElementById('formFeedback');
// function showMessage(msg, type) {
//     if (!feedback)
//         return;
//     feedback.innerHTML = "<div class=\"alert " + (type === 'success' ? 'alert-success' : 'alert-danger') + "\">" + msg + "</div>";
//     setTimeout(function () { feedback.innerHTML = ''; }, 6000);
// }
// if (form) {
//     form.addEventListener('submit', function (e) { return __awaiter(void 0, void 0, void 0, function () {
//         var data, res_1, txt_1, err_1;
//         return __generator(this, function (_a) {
//             switch (_a.label) {
//                 case 0:
//                     e.preventDefault();
//                     if (!form.checkValidity()) {
//                         form.classList.add('was-validated');
//                         return [2 /*return*/];
//                     }
//                     data = {
//                         nome: document.getElementById('nome').value,
//                         email: document.getElementById('email').value,
//                         telefone: document.getElementById('telefone').value,
//                         servico: document.getElementById('servico').value,
//                         mensagem: document.getElementById('mensagem').value,
//                         origem: 'landing-site'
//                     };
//                     _a.label = 1;
//                 case 1:
//                     _a.trys.push([1, 3, , 4]);
//                     return [4 /*yield*/, fetch('/api/consulta', {
//                             method: 'POST',
//                             headers: { 'Content-Type': 'application/json' },
//                             body: JSON.stringify(data)
//                         })];
//                 case 2:
//                     res_1 = _a.sent();
//                     if (res_1.ok) {
//                         showMessage('Solicitação enviada com sucesso. Em breve entraremos em contato.', 'success');
//                         form.reset();
//                         form.classList.remove('was-validated');
//                     }
//                     else {
//                         return [4 /*yield*/, res_1.text()];
//                     }
//                 case 3:
//                     txt_1 = _a.sent();
//                     if (res_1.ok) { }
//                     else {
//                         showMessage('Erro ao enviar: ' + txt_1, 'error');
//                     }
//                     return [3 /*break*/, 4];
//                 case 4:
//                     return [3 /*break*/, 6];
//                 case 5:
//                     err_1 = _a.sent();
//                     console.error(err_1);
//                     showMessage('Erro de rede. Tente novamente mais tarde.', 'error');
//                     return [3 /*break*/, 6];
//                 case 6: return [2 /*return*/];
//             }
//         });
//     }); });
// }
