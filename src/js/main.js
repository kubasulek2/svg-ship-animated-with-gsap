
$(document).ready(function () {
	const
		smoke = $('.smoke'),
		ship = $('.ship');



	animateSmoke(smoke);
	animateShip(ship)

});

function animateSmoke(smoke) {
	TweenMax.to(smoke.eq(0), 2, { y: -150, opacity: .3, scale: 1.5, repeat: -1, ease: Power0.easeNone });
	TweenMax.to(smoke.eq(1), 0.1, { opacity: .8 }).delay(.9);
	TweenMax.to(smoke.eq(1), 2, { y: -150, opacity: .3, scale: 1.5, repeat: -1, ease: Power0.easeNone }).delay(1);
}
function animateShip(ship) {
	const tlShip = new TimelineMax({ repeat: -1 })
	const tlShipRotation = new TimelineMax({ repeat: -1 })
	tlShipRotation
		.fromTo(ship, 3, { rotation: -4, transformOrigin: '50% 80%' }, { rotation: 4, ease: Power1.easeInOut })
		.fromTo(ship, 3, { rotation: 4 }, { rotation: -4, ease: Power1.easeInOut },'+=0.35')
	tlShip.fromTo(ship, 30, {x:800}, {x:-600, ease: Power0.easeNone})


}
