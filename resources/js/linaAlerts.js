import Lina from "./lina";

const styleElem = document.createElement('link');

styleElem.setAttribute('href', '/css/lineAlert.css');
styleElem.setAttribute('rel', 'stylesheet');

$('head').append(styleElem)

function Linert (e ={}) {

    this.bool = false,

    this.pEle = document.createElement('div'),
    this.grand = document.createElement('div'),

    this.make = window.alert = (opt={})=>{
        this.createParent()
        const parent = this.pEle
        const button = opt.button || opt.buttons

        const child = document.createElement('div')
        child.setAttribute('class', 'alrt-body')
        child.innerHTML = opt.msg || "Button";

        
        const foot = document.createElement('div')
        foot.setAttribute('class', 'alrt-foot')

        const fn = (e )=>{}

        button.forEach(btn=>{
            this.createBtn(btn.type || 'default', foot, btn.text || 'Button', btn.fn || fn)
        });

        parent.insertBefore(child, parent.childNodes[0])
        parent.append(foot)

        return this.bool
        
    }

    this.createParent = function(){
        
        this.grand.setAttribute('class', 'lnalt open')

        this.pEle.setAttribute('class', 'alrt-content')

        this.grand.append(this.pEle)
        document.body.append(this.grand)
    },

    this.createBtn = function(type, parent, text = null, callback=null){
        const btn = document.createElement('button');
        switch(type){
            case 'ok':
                btn.setAttribute('class', 'alrt-btn '+type)
                btn.innerText = text? text:"OK";
                parent.append(btn)
                break;
            default:
                btn.setAttribute('class', 'alrt-btn '+type)
                btn.innerText = text? text:"Button";
                parent.append(btn)
                break;
        }
        
        btn.addEventListener('click', e=>{
            callback ? callback(e):0;
            switch(type){
                case 'ok':
                    this.bool = true;
                    break;
                case 'no':
                    this.bool = false;
                    break;
                
                default:
                    this.bool = false;
            }
            this.kill()
            // setTimeout(Lina, 200);
        })
    },

    this.kill = ()=>{
        this.grand.childNodes
        
        document.body.removeChild(this.grand)
        
    },

    this.l_alert = alert.__proto__ = (text) =>{
        this.createParent()
        const parent = this.pEle

        const child = document.createElement('div')
        child.setAttribute('class', 'alrt-body')
        child.innerHTML = text;

        const foot = document.createElement('div')
        foot.setAttribute('class', 'alrt-foot')

        this.createBtn('ok', foot, "Ok")

        parent.insertBefore(child, parent.childNodes[0])
        parent.append(foot)
    },

    this.l_confirm = (text, callback) =>{
        this.createParent()
        const parent = this.pEle

        const child = document.createElement('div')
        child.setAttribute('class', 'alrt-body')
        child.innerHTML = text;

        
        const foot = document.createElement('div')
        foot.setAttribute('class', 'alrt-foot')

        this.createBtn('no', foot, 'No', e=>{})
        this.createBtn('ok', foot, 'Yes', callback)

        parent.insertBefore(child, parent.childNodes[0])
        parent.append(foot)

        return this.bool;
    },

    this.loader = ()=>{
        this.createParent()
        this.grand.innerHTML = '<div class="loading" ></div>';
        // document.removeChild
    }

}


export default Linert;