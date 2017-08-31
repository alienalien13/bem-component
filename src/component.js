import './component.sass'

$('.component').ready(function(){

	const productMaxAmount = 10;
	var amount = 0;

	// init
	$('.component__adding__amount').val(amount);
	$('.component__adding__amount').attr('max', productMaxAmount)
	
	// +1 to basket
	$('.component__adding__button_plus').on('click', function(){

		amount = $('.component__adding__amount').val();
		amount++

		amountChange(amount);

	})

	// -1 to basket
	$('.component__adding__button_minus').on('click', function(){

		let amount = $('.component__adding__amount').val();
		amount--

		amountChange(amount)

	})

	$('.component__adding__amount').change(function(){
		if ($('.component__adding__amount').val() >= productMaxAmount) {

			$('.component__adding__alt').text(`Maximálně možní počet zboží je ${productMaxAmount}`)
			tooltip('visible', '1')

		} else tooltip('hidden', '0')
	})

	//show or hide tooltip function
	function tooltip(visible, opacity){
		
		$('.component__adding__alt').css({
			'visibility': visible,
			'opacity': opacity
		})
	
	}

	//amount change handler
	function amountChange(amount){

		if (amount > productMaxAmount) {
			//max limit
			amount = productMaxAmount 

			$('.component__adding__alt').text(`Maximálně možní počet zboží je ${productMaxAmount}`)
			
			//show alt tooltip
			tooltip('visible', '1')

		} else if (amount < 1) {

			//min limit
			amount = 0
			tooltip('hidden', '0')

		} else tooltip('hidden', '0')

		$('.component__adding__amount').val(amount);

	}

})