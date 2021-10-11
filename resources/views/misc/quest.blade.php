@foreach($quests as $quest)
<div class="l-card quest-{{$quest->id}}">
    <div class="l-card-head">Today, 5<small><sup>th</sup> Oct, 2021</small></div>

    <div class="l-card-body">
        <p>{{$quest->quest ?? "Content Unavailable or hidden"}}</p>
    </div>
    <div class="l-card-footer">
        <button class="alrt-btn ok"><i class="fa fa-pen-alt"></i></button>
        <form method="post" id="quest_{{$quest->id}}">@csrf <input type="hidden" name="quest-id" value="{{$quest->id}}"></form>
        <button class="alrt-btn danger delete-quest" quest-id="{{$quest->id}}"><i class="fa fa-trash-alt "></i></button>
    </div>
</div>
@endforeach
<button class='l-btn l-btn-o add-quest'><i class="fa fa-3x fa-plus"></i></button>