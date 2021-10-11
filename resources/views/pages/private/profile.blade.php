<div class="l-container">
    @if(!$info)
    <div class="l-alert info">
        <div class="l-alert-body">
            <p>Your profile is not yet completed, we strongly recommend you to complete it. This help your dates to 
            trust and have confident in you and get connected to you more.<p>
            <button class='alrt-btn ok enhance-profile'>Enhance Profile</button>
        </div>
        <div class="l-alert-close">
            <button class="alrt-btn info" onclick="this.parentElement.parentElement.style.display = 'none'">&times;</button>
        </div>
    </div>
    @endif
    <div class="profile-head">
        <div class="avatar">
            <div class="avatar-img"></div>
        </div>
    </div>
    <div class="profile-trafic">
        <div class="sec visits">5k <i class="fa fa-eye"></i></div>
        <div class="sec affinity">2k <i class="fa fa-heart"></i></div>
        <div class="sec earning">$20.24 <i class="fa fa-money-bill"></i></div>
    </div>
    <div class="profile-nav">
        <div class="nav-item tab active" toggle='#quest'>Daily quest</div>
        <div class="nav-item tab" toggle='#tm'>Timeline</div>
        <div class="nav-item tab " toggle='#info'>Info</div>
        <div class="nav-item tab" toggle='#st'>Settings</div>
        
    </div>
    <div class="profile-timeline">
        <div class="p-tab active" id="quest">
                        
            
        </div>
        <div class="p-tab" id="tm">gtht</div>
        <div class="p-tab" id="info">
            
        </div>
        <div class="p-tab" id="st">yuooo</div>
    </div>
    
</div>