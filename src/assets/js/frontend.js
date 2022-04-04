
// // get exact viewport height on window resize
// window.addEventListener('resize', () => {
// 	let vh = window.innerHeight * 0.01;
// 	document.documentElement.style.setProperty('--vh', `${vh}px`);
// });


// -------------------------------------------


//All Accords
const accord = () =>{
    jQuery('body').on("click",'.accord .accord-btn',function (e){
		e.preventDefault();

		let accordParent = jQuery(this).parents('.accord');

        accordParent.find('.accord-target').not(jQuery(this).next('.accord-target')).slideUp();
        accordParent.find('.accord-btn').not(jQuery(this)).removeClass('actv');

        jQuery(this).toggleClass('actv');
		jQuery(this).next('.accord-target').slideToggle();

    });

	jQuery('body').on("click",'.accordfooter .accordfooter-btn',function (e){
		e.preventDefault();

		let accordParent = jQuery(this).parents('.accordfooter');

        accordParent.find('.accordfooter-target').not(jQuery(this).next('.accordfooter-target')).slideUp();
        accordParent.find('.accordfooter-btn').not(jQuery(this)).removeClass('actv');

        jQuery(this).toggleClass('actv');
		jQuery(this).next('.accordfooter-target').slideToggle();

    });
}


// -------------------------------------------



// ALL FORMS
const forms = () => {
    let allFormField = document.querySelectorAll('.form-field');

    setTimeout(function() {
        for (let i = 0; i < allFormField.length; i++) {
            if (allFormField[i].value) {
                allFormField[i].parentNode.classList.add('has-value');

				if(allFormField[i].tagName == 'TEXTAREA'){
					allFormField[i].style.cssText = 'height: var(--initHeight);'
					allFormField[i].style.cssText = `height: ${this.scrollHeight}px`;
				}
            }
        }
    }, 100);


    for (let i = 0; i < allFormField.length; i++) {
		if(allFormField[i].tagName == 'TEXTAREA'){
			allFormField[i].addEventListener('input', function(){
				this.style.cssText = 'height: var(--initHeight);'
				this.style.cssText = `height: ${this.scrollHeight}px`;
			});
		}
        allFormField[i].addEventListener('focus', function() {
            this.parentNode.classList.add('has-value');
        });
        allFormField[i].addEventListener('blur', function() {
            if (!this.value) {
                this.parentNode.classList.remove('has-value');
            }
        });
    }


    jQuery('.form-elementfile input[type="file"]').on('change', function() {
        var infile = $(this).val();
        var filename = infile.split("\\");
        filename = filename[filename.length - 1];
        jQuery(this).parents('.form-elementfile').find('#filename').text(filename);
        // $(this).parent().addClass('hasValueall');
    });
}

// -------------------------------------------


// All Modals
const openModal = (whichModal) =>{
    // close all open modal at first
    let openModals = document.querySelectorAll('.sds-modal');
    Array.from(openModals).forEach(function(openModal){
        openModal.classList.remove('is-active');
    });

    // target modal
    let targetModal = document.querySelector(`#${whichModal}`);

    // open target modal
    document.body.classList.add('bound');
    targetModal.classList.add('is-active');

    // exit target modal
    let exitModal = document.querySelectorAll('.sds-modal-exit');
    for(let i = 0; i < exitModal.length; i++){
        exitModal[i].addEventListener('click', function(){
            document.body.classList.remove('bound');
            targetModal.classList.remove('is-active');
        });
    }
}

// -------------------------------------------

const setPrevElemClass = (swiper) => {
	let swipeThumb = document.querySelector('.swiper_1_thumbs');
	let prevPrev = swipeThumb ? swipeThumb.querySelector('.swiper-slide--prev-thumb') : '';
	let currentPrev = swipeThumb ? swipeThumb.querySelectorAll('.swiper-slide')[swiper.realIndex - 1] : '';
	prevPrev ? prevPrev.classList.remove('swiper-slide--prev-thumb') : '';
	currentPrev ? currentPrev.classList.add('swiper-slide--prev-thumb') : '';
}


// -------------------------------------------


// // ON SCROLL ACTVITIES
// jQuery( window ).scroll(function() {
// 	let wScroll = jQuery(window).scrollTop();

// 	wScroll > 350 ? jQuery('header').addClass('header-fixed') : jQuery('header').removeClass('header-fixed');

// 	wScroll >= jQuery('footer').offset().top - 100 ? jQuery('header').removeClass('header-in') : jQuery('header').addClass('header-in');
// });


// -------------------------------------------


window.addEventListener('DOMContentLoaded', (event) => {
	accord();
	forms();
	others();
	userInfo();

    // wishlist
	let wishlists = document.querySelectorAll('.ui-wishlist');
	[...wishlists].forEach( (wishlist, index) => {
		wishlist.addEventListener('click', () =>{
			wishlist.classList.toggle('scale');
			wishlist.classList.toggle('filled');
			setTimeout(() => {
				wishlist.classList.remove('scale');
			}, 200);
		});
	});


	// -------------------------------------------


	// Scroll to Top
	jQuery("a.back2top").click(function() {
		jQuery("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});


	// -------------------------------------------


	//Dropdowns
	jQuery('body').on("click",'.ui-dropdown .ui-dropdown--selected',function (e){
		jQuery('.ui-dropdown.is-open').removeClass("is-open");
		jQuery(this).parent('.ui-dropdown').toggleClass("is-open");
	});


	jQuery('body').on("click",'.ui-dropdown .ui-dropdown--items > a',function (e){
		jQuery(this).parents('.ui-dropdown').removeClass("is-open");
		jQuery(this).parents('.ui-dropdown').find('.ui-dropdown--selected').text(jQuery(this).attr('data-val'));
		jQuery(this).parents('.ui-dropdown').addClass("value-selected");
	});


	jQuery('body').on("click",'.ui-dropdown .ui-dropdown--reset',function (e){
		jQuery(this).parent('.ui-dropdown').removeClass("value-selected");
		let labl = jQuery(this).attr('data-text') ? jQuery(this).attr('data-text') : '';
		jQuery(this).parents('.ui-dropdown').find('.ui-dropdown--selected').text(labl);
	});

	// -------------------------------------------


	// 	// ALL SWIPES
	const swiper_1_thumbs = new Swiper('.swiper_1_thumbs', {
		slidesPerView: 'auto',
		slideToClickedSlide: true
	});


	const swiper_1 = new Swiper('.swiper_1', {
		navigation: {
			nextEl: '.swiper_1--next',
			prevEl: '.swiper_1--prev',
		},
	});

	const swiper_1_withThumb =  new Swiper('.swiper_1_withThumb', {
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},

		navigation: {
			nextEl: '.swiper_1_withThumb--next',
			prevEl: '.swiper_1_withThumb--prev',
		},

		thumbs: {
			swiper: swiper_1_thumbs
		},

		on: {
			init: function (swiper) {
				setPrevElemClass(swiper);
			},
			slideChange: function (swiper) {
				setPrevElemClass(swiper);
			},
		},
	});


	const swiper_2 = new Swiper('.swiper_2', {
		slidesPerView: 1,
		spaceBetween: 30,
		simulateTouch: false,

		// Responsive breakpoints
		breakpoints: {
			640: {
				slidesPerView: 2,
			},

			1000: {
				slidesPerView: 2,
			}
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper_2--next',
			prevEl: '.swiper_2--prev',
		},

	});

	const swiper_3 = new Swiper('.swiper_3', {
		slidesPerView: 1,
		spaceBetween: 30,
		simulateTouch: false,

		// Responsive breakpoints
		breakpoints: {
			640: {
				slidesPerView: 2,
			},

			1000: {
				slidesPerView: 3,
			}
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper_3--next',
			prevEl: '.swiper_3--prev',
		},

	});

	const swiper_4 = new Swiper('.swiper_4', {
		slidesPerView: 1,
		spaceBetween: 30,
		// simulateTouch: false,

		// Responsive breakpoints
		breakpoints: {
			640: {
				slidesPerView: 2,
			},

			1000: {
				slidesPerView: 3,
			},

			1300: {
				slidesPerView: 3,
			}
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper_4--next',
			prevEl: '.swiper_4--prev',
		},

	});

	const swiper_5 = new Swiper('.swiper_5', {
		slidesPerView: 1,
		spaceBetween: 0,

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper_5--next',
		  prevEl: '.swiper_5--prev',
		},

	});

	const swiper_6 = new Swiper('.swiper_6', {
		slidesPerView: 1,
		spaceBetween: 0,

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper_6--next',
		  prevEl: '.swiper_6--prev',
		},

	});

	const swiper_7 = new Swiper('.swiper_7', {
		slidesPerView: 1,
		spaceBetween: 30,
		// simulateTouch: false,

		// Responsive breakpoints
		breakpoints: {
			468: {
				slidesPerView: 2,
				spaceBetween: 20,
			},

			1000: {
				slidesPerView: 3,
				spaceBetween: 25,
			},

			1300: {
				slidesPerView: 3,
			}
		},

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper_7--next',
		  prevEl: '.swiper_7--prev',
		},

	});


	const swiper_8 = new Swiper('.swiper_8', {
		slidesPerView: 1,
		spaceBetween: 30,
		breakpoints: {
			1024: {
			slidesPerView: 3,
				grid: {
					rows: 2
				}
			}
		},

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper_8--next',
		  prevEl: '.swiper_8--prev',
		},

	});

	const swiper_9 = new Swiper('.swiper_9', {
		slidesPerView: "auto",
		loop: false,
        spaceBetween: 50,
		breakpoints: {
			0: {
				spaceBetween: 30,
			},
			575: {
				spaceBetween: 50,
			}
		},

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper_9--next',
		  prevEl: '.swiper_9--prev',
		},
	});

	const swiper_insta = new Swiper('.swiper_insta', {
		slidesPerView: 5,
		// simulateTouch: false,

		// Responsive breakpoints
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			420: {
				slidesPerView: 2,
			},
			675: {
				slidesPerView: 3,
			},

			1000: {
				slidesPerView: 4,
			},

			1300: {
				slidesPerView: 5,
			}
		},

		// Navigation arrows
		navigation: {
		  nextEl: '.swiper_insta--next',
		  prevEl: '.swiper_insta--prev',
		},

	});
});



document.addEventListener("click", (event) => {
	// close drop down
	if(event.target.matches(".ui-dropdown") || !event.target.closest(".ui-dropdown")) {
		// $('.ui-dropdown').each(function (){
		// 	$(this).removeClass('is-open');
		// });
	}

});


const others = () => {
    jQuery("body").on("click", ".btn__hammenu", function () {
        jQuery("body").find(".fullmenu").toggleClass("is-showing");
        jQuery(".btn__hammenu").toggleClass("is-working");
        jQuery("body").toggleClass("posiFix");
    });
};


//User Dropdown
function userInfo(){
    $('.userinfoLink p').on('click', function(){
        $('.drpdwn').fadeToggle();
    });
    $(document).on('click',function(e){
        var parentarea = $('.userinfoLink');
        var elm = $('.drpdwn');
        if(parentarea.has(e.target).length === 0) {
            elm.slideUp();
        }
    });
}

function readURL(input) {
	if (input.files && input.files[0]) {

	  var reader = new FileReader();

	  reader.onload = function(e) {
		$('.image-upload-wrap').hide();

		$('.file-upload-image').attr('src', e.target.result);
		$('.file-upload-content').show();

		/* $('.image-title').html(input.files[0].name); */
	  };

	  reader.readAsDataURL(input.files[0]);

	} else {
	  removeUpload();
	}
  }

  /* File Upload */

  function removeUpload() {
	$('.file-upload-input').replaceWith($('.file-upload-input').clone());
	$('.file-upload-content').hide();
	$('.image-upload-wrap').show();
  }
  // $('.image-upload-wrap').bind('dragover', function () {
	// 	  $('.image-upload-wrap').addClass('image-dropping');
	//   });
	//   $('.image-upload-wrap').bind('dragleave', function () {
	// 	  $('.image-upload-wrap').removeClass('image-dropping');
  // });


//   $(window).scroll(function() {
//     if ($(this).scrollTop()>1510)
//      {
//         $('.special--links').slideUp(200);
//      }
//     else
//      {
//       $('.special--links').slideDown(200);
//      }
//  });

  /* Experience Gallery */

//   (function() {
// 	jQuery('body').fadeIn(200);
// 	let $gallery = new SimpleLightbox('.small-demo ul li a', {});
// 	interval = window.setInterval(function(){
// 		jQuery('.scrollwheel').animate({
// 			top: 14
// 		},400, function(){
// 			jQuery('.scrollwheel').animate({
// 				top: 10
// 			},400);
// 		})
// 	},1000);
// })();
