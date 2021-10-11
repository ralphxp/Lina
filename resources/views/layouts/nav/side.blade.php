
<aside class="sidebar">
      
      <div class="upper-nav profile">
          <a href="#" title="close" class="close">&times;</a>
          <div class="avatar">
              <div class="avatar-img"></div>
              <div class="avatar-info">
                  <div class="avatar-name text-lowercase">{{__('@')}}{{Auth::user()->username}}</div>
                  <div class="avatar-mobile"><a href="tel:+234{{Auth::user()->mobile}}">+234{{Auth::user()->mobile}}</a></div>
              </div>
          </div>
      </div>
      <hr />
      <div class="nav-menu">
          <div class="item col"><i class="fa fa-sm fa-users"></i> Contacts</div>
          <div class="item col"><i class="fa fa-sm fa-phone"></i> Calls</div>
          <div class="item col"><i class="fa fa-sm fa-map-marked"></i> People Nearby</div>
          <div class="item col"><i class="fa fa-sm fa-archive"></i> Saved Messages</div>
          <div class="item col"><i class="fa fa-cogs"></i> Settings</div>
          <hr>
          <div class="item col"><i class="fa fa-sm fa-user-plus"></i> Invite Friends</div>
          <div class="item col"><i class="fa fa-sm fa-book"></i> Help</div>

          <div class="item col logout"><i class="fa fa-sm fa-lock text-danger"></i> Logout </div>

          <form method='post' action='{{ route("logout") }}' name="logout" id="logoutForm">
            @csrf
          </form>
      </div>
      <hr />
      <div class="sidebar-footer">
          <div class="item col"><i class="fa fa-sm fa-money-bill"></i> Donate to Lina</div>
      </div>

  </aside>