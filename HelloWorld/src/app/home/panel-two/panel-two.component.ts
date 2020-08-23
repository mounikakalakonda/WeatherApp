import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home.service";
import { ItemEventData } from "tns-core-modules/ui/list-view"
import { TitleCasePipe } from '@angular/common';
@Component({
  selector: 'ns-panel-two',
  templateUrl: './panel-two.component.html',
  styleUrls: ['./panel-two.component.css']
})
export class PanelTwoComponent implements OnInit {
  onItemTap(args: ItemEventData): void {
    console.log('Item with index: ' + args.index + ' tapped');
}
msg: string = "";
textFieldValue: string = "";
currentWeather: any = <any>{};
currentWeatherText: string = "";
pressure:string="";
humidity:string="";
des: string = "";
display: boolean = false;
displayWeather: boolean = false;
edit: boolean = false;
image="";
color="";
desOut="";
onValueChange($event) {
    this.textFieldValue = $event.value;
}
onButtonTap(): void {
    console.log("Button was pressed " + this.textFieldValue);
    this.displayWeather = true;
    this.display = false;
    this.edit = true;
    this.searchWeather();
    this.color="white";
}
onPanelTap(resetTextField?): void {
    this.display = true;
    this.displayWeather = false;
    this.edit = false;
    this.currentWeatherText = "";
        this.textFieldValue = "";
    this.desOut= "";
    this.image="";
    this.color="#adadad";
    this.humidity="";
    this.pressure="";
    this.des="";
}
searchWeather() {
    this.msg = '';
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(this.textFieldValue)
        .subscribe(res => {
            this.currentWeather = res;
            console.log(this.currentWeather);
            this.textFieldValue ="\t\t"+this.textFieldValue+"\t\t\t\t";
            this.currentWeatherText = "Temp - " +this.currentWeather.main.temp +"°C \t";
            this.des=this.currentWeather.weather[0].main;
            this.desOut= "The skies will be mostly "+this.des+ "\t";
            this.humidity="Humidity - "+this.currentWeather.main.humidity;
            this.pressure="Pressure - "+this.currentWeather.main.pressure+"\t\t";
            if(this.des ==="clear sky")
                this.image="https://image.freepik.com/free-photo/beautiful-day-with-clear-sky-clouds_108128-78.jpg";
            
            else
                if(this.des==="Clouds")
                this.image="https://million-wallpapers.com/wallpapers/6/27/342216173017934.jpg";
            else
                if(this.des==="scattered clouds")
            this.image="https://www.4freephotos.com/medium/batch/Scattered-clouds276.jpg";
            else if(this.des==="broken clouds")
            this.image="https://live.staticflickr.com/1828/28636482297_bd428f26e8_b.jpg";
            else if(this.des==="Rain")
            this.image="https://external-preview.redd.it/tY6EhgODtnJ3Wo7kDJCtaKRPI88oHDs8owxYPu2NA-4.jpg?auto=webp&s=1836b4ec8ee611dac8a6ac3c18cbb61aa1bf0429";
            else if(this.des==="rain")
            this.image="https://s7d2.scene7.com/is/image/TWCNews/rain_showers_jpg";
            else if(this.des==="thunderstorm")
            this.image="https://patch.com/img/cdn20/shutterstock/98363/20200818/044728/styles/patch_image/public/shutterstock-1366436723___18164538265.jpg?width=695";
            else if(this.des==="snow")
            this.image="https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/fdcx/doc7ad55t3k4r91eqeuem9a.jpg/r2_280_5469_3369_w1200_h678_fmax.jpg";
            else if(this.des==="mist")
            this.image="https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80";
            else if(this.des==="drizzle")
            this.image="https://aminus3.s3.amazonaws.com/image/g0013/u00012644/i01544659/3ce73c6130376fb1a159beba5b61e980_large.jpg";
            else if(this.des==="Dust")
            this.image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRCDNc-T3LTvfrdJ3OuvBP-sx0WNS-Dr7diA&usqp=CAU";
            else if(this.des==="Haze")
            this.image="data:image/jpeg;base64,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";
            else if(this.des==="fog")
            this.image="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/fog-on-a-country-road.jpg";
            else
            this.image="https://dv-website.s3.amazonaws.com/uploads/2019/05/jz_csweather_060619.jpg";
          
        }, err => {
            if (err.error && err.error.message) {
                alert(err.error.message);
                this.msg = err.error.message;
                console.log(this.msg);
                return;
            }
            alert('Failed to get weather.');
        }, () => { })
}
  constructor(private weatherService: HomeService) { }

  ngOnInit(): void {
  }

}
