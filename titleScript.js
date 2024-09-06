document.addEventListener('DOMContentLoaded', function () {
	new TypeIt('.title', {
		speed: 50,
		loop: true
	})
		.type(
			'Oi, eu sou o <strong>Mario</strong>, um <strong>desenvolvedor web full-stack</strong>.',
			{ delay: 2000 }
		)
		.move(-1)
		.delete()
		.type(
			'Hi, i am <strong>Mario</strong>, a <strong>full-stack web developer</strong>',
			{ delay: 2000 }
		)
		.delete()
		.type(
			'Hola, soy <strong>Mario</strong>, un <strong>dev web full-stack</strong>',
			{ delay: 2000 }
		)
		.move(1)
		.go()
})
