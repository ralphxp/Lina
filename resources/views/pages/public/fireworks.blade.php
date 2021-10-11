@foreach($users as $user)
        <div class="fetch-user " >
            <div class="thumbnail open-viewer" toggle-item=".viewer-{{$user->id}}" style ="background-image : url('/drawables/img{{$user->id}}.jpg')" >
                <div class="view-user">
                    <a href="#"><i class="fa fa-heart"></i><br /><small style="color: var(--lina-c1)">10k</small></a>
                    <a href="#"><i class="fa fa-eye"></i><br /><small style="color: var(--lina-c1)">5k</small></a>
                </div>
            </div>
            <div class="view-modal viewer-{{$user->id}} ">
                <div class="viewer">
                    <button class="close-viewer btn"><i class="fa fa-times"></i></button>
                    <div class="view-image" style ="background-image : url('/drawables/img{{$user->id}}.jpg')"></div>
                    <div class="btn-group">
                        <button class="btn"><i class="fa fa-heart"></i></button>
                        <button class="btn"><i class="fa fa-eye"></i></button>
                        <button class="btn"><i class="fa fa-envelope"></i></button>
                    </div>
                </div>
            </div>
        </div>
    @endforeach