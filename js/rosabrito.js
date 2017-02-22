var RosaBrito = function() {

}
window.onload = function() {
	var conteudo = document.getElementById("conteudo");
	var btnAlunos = document.getElementById("alunos");
	if (document.addEventListener) {
		btnAlunos.addEventListener("click", function() {
			conteudo.innerHTML = "";
			for (var i in turmas) {
				var turma = turmas[i];
				var tabela = document.createElement("table");
				var linha = document.createElement("tr");
				var titulo = document.createElement("th");
				tabela.setAttribute("border", "1");
				titulo.setAttribute("colspan", "2");
				linha.appendChild(titulo);
				tabela.appendChild(linha);
				titulo.innerHTML = turma.nome;
				for (var j in turma.alunos) {
					var aluno = turma.alunos[j];

					var linha = document.createElement("tr");
					var cabecalho = document.createElement("th");
					cabecalho.innerHTML = "Nome";
					linha.appendChild(cabecalho);
					var cabecalho = document.createElement("th");
					cabecalho.innerHTML = "Nascimento";
					linha.appendChild(cabecalho);
					tabela.appendChild(linha);
			
					var linha = document.createElement("tr"); 
					var nome = document.createElement("td");
					var nascimento = document.createElement("td");
					nome.innerHTML = aluno.nome;
					nascimento.innerHTML = aluno.nascimento;
					linha.appendChild(nome);
					linha.appendChild(nascimento);
					tabela.appendChild(linha);
				}
				conteudo.appendChild(tabela);
			}
		});
	}
}
