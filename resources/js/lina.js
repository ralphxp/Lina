'use strict';
import __ from './quick-actions';
import Linert from './linaAlerts';
import axios from 'axios';


const Lina = () =>{
	// const check = ()=>{
	// 	let bool = __ ? true : false;
	// 	if (bool)
	// 		alert("ok");
	// 	else
	// 		alert("This App won't run correct, require quick-actions.js");
	// }

	// check()

	// if('serviceWorker' in navigator){

	// 	__.on(window, 'load', (e)=>{

	// 	navigator.serviceWorker.register('./js/sw.js')
	// 			.then(e=>{
					
	// 			})
	// 			.catch(err =>{
	// 				console.log(err)
	// 			})

	// 	});



	// }
	// else console.info("Your Browser Does Not Support Offline Mode");




	// window.Notification.requestPermission()
	// .then(e=>{
	//         if(e == 'granted'){
	//         	// navigator.vibrate([500, 244, 560, 90, 34])
	//           new window.Notification("Lina Friends", 
	//             {
	//                 "body":"Welcome to Lina Dates, Connect and Find a realtime date here on lina dates. A place of natural-in loving affections ..", 
	//                 "icon":"./drawables/lina-logo.png", 
	//                 "tag":"Welcome Message"
	//            });
	//         }
	//     });

	// document.requestFullscreen()


	
	var isDown = false,
		startX,
		scrollLeft,
		userInfo = {};

	const moreSettings = __.get('.more-settings'),
		userid = $("meta[name=userid]").attr("data-user"),
		moreToggle = __.get('.more-toggle'),
		bottomNav = __.get(".bottom-nav"),
		openViewer = __.gets(".open-viewer"),
		camera = __.get('.camera'),
		openCam = __.gets('.toggle-cam'),
		v_close = __.gets('.close-viewer'),
		inputs = __.gets('input'),
		slider = __.get('.main');


	v_close.forEach(opt=>{
		
		opt.addEventListener('click', e=>{
			
			opt.parentElement.parentElement.classList.remove('open')
			
		})
	})

	inputs.forEach((elem)=>{
		__.on(elem, 'focus', (e) =>{
			__.addClass(elem.parentElement.childNodes[0], 'focus')
			__.removeClass(elem.parentElement.childNodes[0], 'unfocus')
		})

		__.on(elem, 'blur', (e)=>{
			if(elem.value != '')
			return true
			else
			{
				__.removeClass(elem.parentElement.childNodes[0], 'focus')
				__.addClass(elem.parentElement.childNodes[0], 'unfocus') 	
			}
		})
	});


	(openViewer.length > 0)? 

	openViewer.forEach(elem=>{
		let target = elem.getAttribute('toggle-item');
		__.on(elem, 'click', e =>{
			const el = __.get(target)
			el.classList.add('open')
		})
	})

	:0;

	$(slider).on("pointerdown", (e) => {

		isDown = true;
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});

	$(slider).on("mouseleave", () => {
		isDown = false;
	});

	$(slider).on("pointerup", () => {
		isDown = false;
	});

	$(slider).on("pointermove", (e) => {
		if (!isDown) return;console.log
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 1;
		slider.scrollLeft = scrollLeft - walk;
	});
	(async function(){
		const res = await axios.get('/me/info/'+userid);
		// console.log(res)
		if(res.data.status === 200){
			userInfo = res.data.user;
		}else{
			console.log(res)
		}
		const forms = [
			`<div class="l-card">
				<div class="l-card-body">
				<form onsubmit='return false'>
					<b>Your potential Dates may like to know your name</b>
					<input class='form-control' value='${userInfo.FullName?userInfo.FullName:""}' type='text' name='FullName'>
					<br>
					<b>What is your income rate per week</b>
					<select class='form-control' name='income'>
						<option value='100' ${(userInfo.income == 100)?"selected":""}> 0 to $100</option>
						<option value='1000' ${(userInfo.income == 1000)?"selected":""}> $100 to $1000 </option>
						<option value='10000' ${(userInfo.income == 10000)?"selected":""}> $1000 to $10000 </option>
						<option value='100000' ${(userInfo.income == 100000)?"selected":""}> $10000 to $100000 </option>
					</select>
					<br>
					<b>How much do you spend per day</b>
					<select class='form-control' name='daily_spend'>
					<option value='100' ${(userInfo.daily_spend == 100)?"selected":""}> 0 to $100</option>
					<option value='1000' ${(userInfo.daily_spend == 1000)?"selected":""}> $100 to $1000 </option>
					<option value='10000' ${(userInfo.daily_spend == 10000)?"selected":""}> $1000 to $10000 </option>
					<option value='100000' ${(userInfo.daily_spend == 100000)?"selected":""}> $10000 to $100000 </option>
					</select>
					<br>
					<b>What type of job/work you do</b>
					<input class='form-control' type='text' value='${userInfo.job?userInfo.job:""}' name='job'>
				</form>
				</div>
			</div>`,
	
			`<div class="l-card">
				<div class="l-card-body">
				<form onsubmit='return false'>
					<b>Your potential Dates may like to know your race</b>
					<input class='form-control' type='text' name='race' disabled value='hidden'>
					<br>
					<b>What is your hair color</b>
					<select class='form-control' name='hair_color'>
						<option value='black' ${(userInfo.hair_Color == 'black')?"selected":""}>Black</option>
						<option value='blue' ${(userInfo.hair_Color == 'blue')?"selected":""}>Blue</option>
						<option value='brown' ${(userInfo.hair_Color == 'brown')?"selected":""}>Brown</option>
					</select>
					<br>
					<b>What is your eye color</b>
					<select class='form-control' name='eye_color'>
					<option value='black' ${(userInfo.eye_color == 'black')?"selected":""}>Black</option>
					<option value='blue' ${(userInfo.eye_color == 'blue')?"selected":""}>Blue</option>
					<option value='brown' ${(userInfo.eye_color == 'brown')?"selected":""}>Brown</option>
					<option value='white' ${(userInfo.eye_color == 'white')?"selected":""}>White</option>
					</select>
					<br>
					<b>What is your gender</b>
					<select class='form-control' name='gender'>
						<option>Gender</option>
						<option value='male' ${(userInfo.gender == 'male')?"selected":""}>Male</option>
						<option value='female' ${(userInfo.gender == 'female')?"selected":""}>Female</option>
					</select>
					<br>
					<b>What is your marital status</b>
					<select class='form-control' name='marital_status'>
						<option value='single' ${(userInfo.marital_status == 'single')?"selected":""}>Single</option>
						<option value='married' ${(userInfo.marital_status == 'married')?"selected":""}>Married</option>
						<option value='widowed' ${(userInfo.marital_status == 'widowed')?"selected":""}>Widowed</option>
						<option value='complicated' ${(userInfo.marital_status == 'complicated')?"selected":""}>Complicated</option>
						<option value='hidden' ${(userInfo.marital_status == 'hidden')?"selected":""}>Hidden</option>
					</select>
				</form>
				</div>
			</div>`,
			`<div class="l-card">
				<div class="l-card-body">
				<form onsubmit='return false'>
					<b>Country</b>
					<input class='form-control' type='text' value='${userInfo.country?userInfo.country:""}' name='country'>
					<br>
					<b>State/Province</b>
					<input class='form-control' type='text' value='${userInfo.state?userInfo.state:""}' name='state'>
					<br>
					<b>City</b>
					<input class='form-control' type='text' value='${userInfo.city?userInfo.city:""}' name='city'>
					<br>
					<b>Home address</b>
					<textarea rowspan='1' class='form-control' type='text' name='address'>${userInfo.address?userInfo.address:""}</textarea>
				</form>
				</div>
			</div>`,
			`<div class="l-card">
				<div class="l-card-body">
				<form onsubmit='return false'>
					<b>What type of relationship are looking for on Lina</b>
					<input class='form-control' value='${userInfo.relationship?userInfo.relationship:""}' type='text' name='relationship'>
					<br>
					<b>What kind of partner are you looking for</b>
					<input class='form-control' type='text' value='${userInfo.woman?userInfo.woman:""}' name='woman'>
					<br>
					<b>What is your date of birth</b>
					<input class='form-control' type='date' value='${userInfo.dob?userInfo.dob:""}' name='dob'>
					<br>
					<b>What is your qualification</b>
					<input class='form-control' type='text' value='${userInfo.education?userInfo.education:""}' name='education'>
				</form>
				</div>
			</div>`
	
		];
	
		var fid = 0;
	
		const createForm = () =>{
			var id = (fid < forms.length )? fid : forms.length;
			fid++
			const pop = new Linert;
			pop.make({
				msg : forms[id],
				button : [
					{type:'ok', text : "Next", fn : async e=>{
						const formElem = e.target.parentElement.parentElement.childNodes[0].childNodes[0].childNodes[1].childNodes[1];
						const fields = formElem.elements;
						const data = new Object()
						for (let i = 0; i < fields.length; i++) {
							var element = fields[i];
							data[element.name] = (element.value)
						}
						const resp = await axios.post('/me/'+userid, data);
						forms.slice(0,1)
						createForm()
					}},
					{type:'warning', text : "Skip", fn : e=>{
						createForm()
					}},
					{type:'danger', text : "Cancel", fn : e=>{
						fid = 0;
						Lina()
					}}
				]
			});
			if(id === forms.length){
				fid = 0;
				pop.kill()
			}
		}
	
		const processForm = e=>{
			e.preventDefault()
		}
	
		$('.enhance-profile').on('click',e=>{
			createForm(0)
		});
	
		__.get('.refresh-btn')? __.on(__.get('.refresh-btn'),e=>{
			const route = window.location.href
			console.log(route)
		}):0;

	})();

	const addQuestBtn = __.get('.add-quest');

	addQuestBtn ? $(addQuestBtn).on('click', e=>{
		const fm = `
		<div class="l-card">
			<div class="l-card-head">Add a Daily Quest</div>
			<div class="l-card-body">
			<form onsubmit='return false'>
				
				<b>What is your quest for the day. <small>this help dates to find you</small></b>
				<textarea rowspan='1' class='form-control' name='quest' placeholder='Write your quest here'></textarea>
			</form>
			</div>
		</div>`;

		const lt = new Linert
		lt.make({
			msg:fm,
			buttons : [
				{
					text : "Publish",
					type : 'ok',
					fn : async e=>{
						const formE = e.target.parentElement.parentElement.childNodes[0].childNodes[1].childNodes[3].childNodes[1];
						const data = {quest : formE.elements.quest.value };
						axios({
							method: "post",
							url : "/quest/create/"+userid, 
							data : data
						})
						.then(resp=>{
							if(resp.data.status == 200){
								axios({
									method : 'post',
									url : '/quest/view/'+userid
								}).then(resp=>{
									$('#quest').html(resp.data);
									Lina()
								});
							}else{
								const l = new Linert;
								l.l_alert(resp.data.message)
							}
						})
						.catch(err=>{
							console.log(err)
						})
					}
				},
				{
					text : "Close",
					type : 'no',
					fn : e=>{

					}
				}
			]
		});


	}):0;

	// delete a quest

	const delQuestBtns = $.find('.delete-quest');
	(delQuestBtns.length > 0) ? delQuestBtns.forEach(btn=>{
		$(btn).on('click', e=>{
			const qId = $(btn).attr("quest-id")
			const conf = new Linert;
			conf.make({msg:"Are you sure you want to delete this quest..?",
			buttons : [
				{type :"danger", text : "Delete ", fn : e=>{
					const loader = new Linert;
					loader.loader()
					axios({
						method : "post",
						url : '/quest/delete/'+qId
					}).then(resp=>{
						loader.kill()
						__.get('.quest-'+qId).style.display = "none"
							let t = new Linert;
							t.l_alert("Quest deleted successfully");
						
					})
				}},
				{type : "info", text : "Cancel"}
			]});
		});
	}) :0;

	

	// GET NAV LINKS

	let links = __.gets('.link')
	// PROCESS CLICKS EVENTS ON EACH NAV LINK
	links ? 

	links.forEach(link=>{
		__.on(link, 'pointerup', e=>{
			if(link.classList.contains('active')){
				// link.classList.remove('active')
			}
			else{
				let href = link.getAttribute('action').split('#')[1]
				links.forEach(l=>{
					__.removeClass(l, 'active');
				});
				__.addClass(link, 'active');
			}
		});
	})

	: 0;

	// SWITCH BETWEEN PROFILE TABS

	const tabToggles = __.gets('.tab');

	(tabToggles.length > 0) ? tabToggles.forEach(
		toggle => {
			const target = __.get($(toggle).attr('toggle'));
			const pTabs = __.gets('.p-tab');
			$(toggle).on('click', e=>{
				if(!(toggle.classList.contains('active')))
				{
					__.setElemActive(toggle, tabToggles);
					__.setElemActive(target, pTabs);
					
				}else{
					return 0;
				}
			});
		}
	) :0;

	
	// OPEN CAMERA

	camera ?
	openCam.forEach(opc=>{
		__.on(opc, 'click', e=>{
			camera.classList.toggle('active');
			camera.classList.contains('active') ?snapp():StopStreaming();
		})
	}):0;


	// METHOD FOR RECORDING SCREEN
	function screenCast()
	{
		let videoElem = document.querySelector('video');

		navigator.mediaDevices.getDisplayMedia({video:true, audio:false})
		.then(data=>{
			videoElem.srcObject = data; 
			videoElem.play(); 
			data.getVideoTracks()[0].addEventListener('ended', ()=>{
				videoData = data
				videoElem.srcObject = videoData; 
			});
			
		})
	}

	// METHOD FOR CAMCODER

	function snapp()
	{
		let videoElem = document.querySelector('video');

		var record = [];

		navigator.mediaDevices.getUserMedia({video:true, audio:false})
		.then(data=>{
			videoElem.srcObject = data; 
			videoElem.play(); 
			data.getVideoTracks()[0].addEventListener('ended', ()=>{
				videoData = data
				videoElem.srcObject = videoData;
			});
		})
		.catch(er=>{
			alert("Not Allow")
		})
	}

	// STOP ACCESSINF SCREEN OR CAMERA

	function StopStreaming(){
		let videoElem = document.querySelector('video');

		const stream = videoElem.srcObject;
		const tracks = stream.getTracks();

		tracks.forEach(track=>{
			track.stop()

		})

		videoElem.srcObject = null
	}

	const secs = __.gets('.sec');

	secs.forEach(sec=>{
		$(sec).on("click", e=>{
			const attr = sec.getAttribute('class').split(' ')[1]
			const al = new Linert
			switch (attr) {
				case 'affinity':
					al.make({
						msg : "People that have shown interest in you ",
						button : [{text : "Go It", type:"ok",}]
					});
					break;
				case 'visits':
					al.make({
						msg : "People that have viewed your profile",
						button : [{text : "Go It", type:"ok",}]
					});
					break;

				case 'earning':
					al.make({
						msg : "Earnigs due to imact of views and Affinty on your profile",
						button : [{text : "Go It", type:"ok",}]
					});
					break;
			
				default:
					break;
			}
			
			// console.log(attr)
		})
	})

}

export default Lina;