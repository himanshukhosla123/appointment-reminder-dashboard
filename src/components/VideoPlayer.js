import React from 'react';
import $ from 'jquery';
// import 'bootstrap/dist/js/bootstrap';
import ModalSee from './modalSee';
 

class VideoPlayer extends React.Component{
    constructor(props){
        super(props);
        
    }

    componentDidMount()
    {   $("#video").addClass("active");
        $("video")[0].onended = function() {
            // $("#myModal").modal();
            alert("Video has ended");
            $("ul li a.active , #video").removeClass("active");
            $($("ul li a")[1]).addClass("active");
            $("#add_numbers").addClass("active");
        };
        $("ul li a").click(function(){
            if($("video")[0].ended){
                if(this.id=="video"){
                $("ul li a.active").removeClass("active");
                $($("ul li a")[1]).addClass("active");
            }
            }
            else 
            alert("Video has not ended , first watch it to proceed");
            // $("ul li a.active").removeClass("active");
            // $().addClass("active");
        });
    }
    render() {
      return (
      <div>
          <video width="400" controls>
            <source src="https://r4---sn-qxa7sn7l.googlevideo.com/videoplayback?mime=video%2Fmp4&sparams=clen%2Cdur%2Cei%2Cgir%2Cid%2Cinitcwndbps%2Cip%2Cipbits%2Citag%2Clmt%2Cmime%2Cmm%2Cmn%2Cms%2Cmv%2Cpl%2Cratebypass%2Crequiressl%2Csource%2Cexpire&initcwndbps=388750&ratebypass=yes&ipbits=0&expire=1508936944&ip=61.16.138.102&lmt=1500780463781085&itag=18&requiressl=yes&id=o-ALE3X35ww9wujnbSeo-3vTGEogln2x54k-VUihvNCElP&source=youtube&dur=1707.131&key=yt6&mm=31&mn=sn-qxa7sn7l&mt=1508915240&pl=24&mv=m&ei=kDjwWcbUBNjk4AKTuY3gAQ&ms=au&signature=17B722C6C8B742B05F1D99243A28FF9321AC755E.47C163E11E8249DF0BDB111B54C4F358545B9524&clen=56095760&gir=yes&cmbypass=yes" type="video/mp4"/>
             <source src="mov_bbb.ogg" type="video/ogg"/>
            Your browser does not support HTML5 video.
            </video>
            <ModalSee/>
   </div>);
    }

  }

  export default VideoPlayer;
