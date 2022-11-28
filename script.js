function main() {
	aula_9()
	aula_10()
	aula_11()
	aula_12()
	aula_13()
}

function aula_9() {
	estudante = {
		nome: "Marcos Antônio",
		linguagem: "Python"
	};
	let estudante_json = JSON.stringify(estudante);
	localStorage.setItem("EstudanteSalvo", estudante_json);
	let estudanteRecuperado = localStorage.getItem("EstudanteSalvo");
	let novo_estudante = JSON.parse(estudanteRecuperado);
	alert(`Estudante: ${novo_estudante.nome} \nLinguagem favorita: ${novo_estudante.linguagem}`);
}

function aula_10() {
	let control = 1;
	$(document).ready(function() {
		$('#javascript').hide();
		$('#java').hide();
		$('#javascript').mouseenter(function() {
			console.log("Entrou");
			$(this).css('background', 'yellow');
		});
		$('#javascript').mouseleave(function() {
			console.log("Entrou");
			$(this).css('background', 'black');
		});
		$('#java').mouseenter(function() {
			console.log("Entrou");
			$(this).css('background', 'yellow');
		});
		$('#java').mouseleave(function() {
			console.log("Entrou");
			$(this).css('background', 'black');
		});
		if (control === 1) {
			control = !control;
			$("#linguagens").click(function() {
				$('#javascript').show();
				$('#java').show();
			});
		}
	});
}

function aula_11() {
	$(document).ready(function() {
		$('#button').click(function() {
			$('#profissao').load('profissao.txt');
		});
	});
}

function aula_12() {
	let app = angular.module("minhaApp", []);
	app.controller("meuControl", function($scope) {
		$scope.cidade = "";
		$scope.estado = "";

		$scope.disciplinas = [
			{ disciplina: "Design Interface Web", professor: "WALTER" },
			{ disciplina: "Programacao Orientada a Objetos", professor: "WALTER" },
			{ disciplina: "Programacao Web", professor: "PEDRO" },
			{ disciplina: "Banco de Dados", professor: "ALVARO" }]

	});
}

function aula_13() {
	let app = angular.module("meuApp", []);
	app.controller("meuControl", function($scope, $interval) {
		$scope.hora = new Date().toLocaleTimeString();
		$interval(function() {
			$scope.hora = new Date().toLocaleTimeString();
		}, 1000);
	});
}

main()


