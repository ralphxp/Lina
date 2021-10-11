import $ from 'jquery';
import __ from './quick-actions';
import Linert from './linaAlerts';
import Lina from './lina';
import axios from 'axios';

const sidebar = __.get('.sidebar'),
	tog = __.get('.side-nav-toggle'),
	close = __.get('.close'),
    userId = $("meta[name=userid]").attr("data-user");

// TOGGLE SIDEBAR

tog && sidebar ?
	__.on(tog, 'click', e=>{sidebar.classList.toggle('active')})
: 0;

// CLOSE SIDEBAR

(close !=null) ? __.on(close, 'click',e=>{sidebar.classList.toggle('active')}):0;


let links = __.gets('.link')

// const BASE_URL = 'http://127.0.0.1:8000/';




$('html').on('contextmenu', e=>{
    // e.preventDefault(); 
    console.log(e)
})

var surf = $('.main');

window.addEventListener('load', e=>{
    Lina();
})

links.forEach(link=>{
	__.on(link, 'click', e=>{
		
        let href = link.getAttribute('action').replace('#', '')
        var clk = true;
        if((link.classList.contains('active'))){
            if(clk){
                pager(href)
                clk = false
            }
            
        
        }
		
	});
})

const pager = (e)=>{
    // Lina()
    switch(e){
        case 'home':
            homeHandler(e)
            break;
        case 'me':
            profileHandler(e)
            break
        
        case 'messenger':
            // do
            break

        case 'match':
            matchHandler(e)
            break
        
        
        default:
            break;
    }
    // console.log(`http://127.0.0.1:8000/${e}`)
}

const requestHandler = async (url)=>{
    const loader = new Linert({})
    loader.loader()
    const request = $.ajax({
        method: "GET",
        url: url,
        cache:false
    });
    request.done(function( data ) {
        surf.html(data)
        Lina()
        loader.kill()
    });
    request.fail(function(err){
        surf.html(`<div class="l-alert info">
            <div class="l-alert-body">
                <p>Check your internet connection it seems your are offline or refresh this page<p>
            </div>
        </div>`);
        Lina()
        loader.kill()
    });
}

const homeHandler = (e) =>{
    requestHandler('/home');
}

const getQuest = ()=>{
    return axios.post('/quest/view/'+userId);
}

const getUserInfo = ()=>{
    return axios.post('/quest/view/'+userId);
}

const profileHandler = (e) =>{
    requestHandler('/me');
    Promise.all([getQuest(), getUserInfo()])
    .then(result=>{
        $('#quest').html(result[0].data);
        // $('#info').html(result[1].data);

        Lina()
    })
}

const matchHandler = (e)=>{
    const ln = new Linert();
    const bool = ln.make({
        msg : "Make example of lina alert alert-class",
        buttons : [
            {
                type : "ok", 
                text : "Done", 
                fn : function(e){}
            },
            {
                type: 'no',
            }
        ]
    });
}

$(".logout").on('click', (e)=>{

    const alt = new Linert({})
    
    alt.l_confirm(
        "Do you wish to logout .? <br /><small class='text-warning'>this will end your session on lina</small>",
        e => {
            $('#logoutForm').submit()
    });

    // if(bool){
    //     console.log("Yes you'll be logged out")
    // }else{
    //     console.log("Yes you won't be logged out")
    // }
    //    $('#logoutForm').submit()

});