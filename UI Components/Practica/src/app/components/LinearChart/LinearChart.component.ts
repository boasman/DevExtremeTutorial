import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';
import { CountryInfo, EnergyDescription, LinearService } from './LinearChart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-LinearChart',
  standalone: true,
  imports:[
    CommonModule,
    DxChartModule,
    DxSelectBoxModule,
  ],
  templateUrl: './LinearChart.component.html',
  styleUrls: ['./LinearChart.component.css']
})
export class LinearChartComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

  networks = [
    { field: 'asfalto', name: 'Asfalto' },
    { field: 'hormigon', name: 'Hormigón' },
    { field: 'asfHorm', name: 'Asfalto + Hormigón' },
    { field: 'caminosBasicos', name: 'Caminos Básicos' },
    { field: 'capaProteccion', name: 'Capa de Protección' },
    { field: 'granularEstabilizado', name: 'Granular Estabilizado' },
    { field: 'ripio', name: 'Ripio' },
    { field: 'tierra', name: 'Tierra' }
  ];
  
 chartInfo = [
    { 
      year: 2009, 
      asfalto: 500, 
      hormigon: 300, 
      asfHorm: 250, 
      caminosBasicos: 150, 
      capaProteccion: 100, 
      granularEstabilizado: 200, 
      ripio: 120, 
      tierra: 90
    },
    { 
      year: 2010, 
      asfalto: 520, 
      hormigon: 330, 
      asfHorm: 240, 
      caminosBasicos: 160, 
      capaProteccion: 110, 
      granularEstabilizado: 210, 
      ripio: 140, 
      tierra: 100 
    },
    { 
      year: 2011, 
      asfalto: 540, 
      hormigon: 350, 
      asfHorm: 260, 
      caminosBasicos: 170, 
      capaProteccion: 120, 
      granularEstabilizado: 220, 
      ripio: 150, 
      tierra: 110 
    },
    { 
      year: 2012, 
      asfalto: 560, 
      hormigon: 370, 
      asfHorm: 270, 
      caminosBasicos: 180, 
      capaProteccion: 130, 
      granularEstabilizado: 230, 
      ripio: 160, 
      tierra: 120 
    },
    { 
      year: 2013, 
      asfalto: 580, 
      hormigon: 390, 
      asfHorm: 280, 
      caminosBasicos: 190, 
      capaProteccion: 140, 
      granularEstabilizado: 240, 
      ripio: 170, 
      tierra: 130 
    },
    { 
      year: 2014, 
      asfalto: 600, 
      hormigon: 410, 
      asfHorm: 290, 
      caminosBasicos: 200, 
      capaProteccion: 150, 
      granularEstabilizado: 250, 
      ripio: 180, 
      tierra: 140 
    },
    { 
      year: 2015, 
      asfalto: 620, 
      hormigon: 430, 
      asfHorm: 300, 
      caminosBasicos: 210, 
      capaProteccion: 160, 
      granularEstabilizado: 260, 
      ripio: 190, 
      tierra: 150 
    },
    { 
      year: 2016, 
      asfalto: 640, 
      hormigon: 450, 
      asfHorm: 310, 
      caminosBasicos: 220, 
      capaProteccion: 170, 
      granularEstabilizado: 270, 
      ripio: 200, 
      tierra: 160 
    },
    { 
      year: 2017, 
      asfalto: 660, 
      hormigon: 470, 
      asfHorm: 320, 
      caminosBasicos: 230, 
      capaProteccion: 180, 
      granularEstabilizado: 280, 
      ripio: 210, 
      tierra: 170 
    },
    { 
      year: 2018, 
      asfalto: 680, 
      hormigon: 490, 
      asfHorm: 330, 
      caminosBasicos: 240, 
      capaProteccion: 190, 
      granularEstabilizado: 290, 
      ripio: 220, 
      tierra: 180 
    },
    { 
      year: 2019, 
      asfalto: 700, 
      hormigon: 510, 
      asfHorm: 340, 
      caminosBasicos: 250, 
      capaProteccion: 200, 
      granularEstabilizado: 300, 
      ripio: 230, 
      tierra: 190 
    },
    { 
      year: 2020, 
      asfalto: 720, 
      hormigon: 530, 
      asfHorm: 350, 
      caminosBasicos: 260, 
      capaProteccion: 210, 
      granularEstabilizado: 310, 
      ripio: 240, 
      tierra: 200 
    },
    { 
      year: 2021, 
      asfalto: 740, 
      hormigon: 550, 
      asfHorm: 360, 
      caminosBasicos: 270, 
      capaProteccion: 220, 
      granularEstabilizado: 320, 
      ripio: 250, 
      tierra: 210 
    },
    { 
      year: 2022, 
      asfalto: 760, 
      hormigon: 570, 
      asfHorm: 370, 
      caminosBasicos: 280, 
      capaProteccion: 230, 
      granularEstabilizado: 330, 
      ripio: 260, 
      tierra: 220 
    },
    { 
      year: 2023, 
      asfalto: 780, 
      hormigon: 590, 
      asfHorm: 380, 
      caminosBasicos: 290, 
      capaProteccion: 240, 
      granularEstabilizado: 340, 
      ripio: 270, 
      tierra: 230 
    },
    { 
      year: 2024, 
      asfalto: 800, 
      hormigon: 610, 
      asfHorm: 390, 
      caminosBasicos: 300, 
      capaProteccion: 250, 
      granularEstabilizado: 350, 
      ripio: 280, 
      tierra: 240 
    },
    { 
      year: 2025, 
      asfalto: 820, 
      hormigon: 630, 
      asfHorm: 400, 
      caminosBasicos: 310, 
      capaProteccion: 260, 
      granularEstabilizado: 360, 
      ripio: 290, 
      tierra: 250 
    },
    { 
      year: 2026, 
      asfalto: 840, 
      hormigon: 650, 
      asfHorm: 410, 
      caminosBasicos: 320, 
      capaProteccion: 270, 
      granularEstabilizado: 370, 
      ripio: 300, 
      tierra: 260 
    },
    { 
      year: 2027, 
      asfalto: 860, 
      hormigon: 670, 
      asfHorm: 420, 
      caminosBasicos: 330, 
      capaProteccion: 280, 
      granularEstabilizado: 380, 
      ripio: 310, 
      tierra: 270 
    },
    { 
      year: 2028, 
      asfalto: 880, 
      hormigon: 690, 
      asfHorm: 430, 
      caminosBasicos: 340, 
      capaProteccion: 290, 
      granularEstabilizado: 390, 
      ripio: 320, 
      tierra: 280 
    }
  ];
  

  types: string[] = ['line', 'stackedline', 'fullstackedline'];

  // networks = [
  //   { value: "asfalto", name: 'Red Vial Pavimentada' },   
  //   { value: "capaProteccion", name: 'Soluciones Básicas' },
  //   { value: "ripio", name: 'Red Vial No Pavimentada' },   
  // ];
  

  // networks.forEach(item => {
  //   item.value = item.value.join(", "); // Combinar los valores en un solo string
  // });


  // chartInfo = [
  //   { year: 2009, network: 'Red Vial Pavimentada', value: 20788.81, asfalto: 500, hormigon: 300, asfHorm: 250, caminosBasicos: 150, capaProteccion: 100, granularEstabilizado: 200, ripio: 120, tierra: 90 },
  //   { year: 2009, network: 'Soluciones Básicas', value: 13330.08, asfalto: 400, hormigon: 200, asfHorm: 150, caminosBasicos: 100, capaProteccion: 80, granularEstabilizado: 150, ripio: 110, tierra: 60 },
  //   { year: 2009, network: 'Red Vial No Pavimentada', value: 46520.07, asfalto: 450, hormigon: 350, asfHorm: 270, caminosBasicos: 180, capaProteccion: 90, granularEstabilizado: 220, ripio: 130, tierra: 70 },
  //   { year: 2010, network: 'Red Vial Pavimentada', value: 22113.82, asfalto: 520, hormigon: 330, asfHorm: 240, caminosBasicos: 160, capaProteccion: 110, granularEstabilizado: 210, ripio: 140, tierra: 100 },
  //   { year: 2010, network: 'Soluciones Básicas', value: 13653.61, asfalto: 420, hormigon: 230, asfHorm: 170, caminosBasicos: 120, capaProteccion: 90, granularEstabilizado: 160, ripio: 115, tierra: 65 },
  //   { year: 2010, network: 'Red Vial No Pavimentada', value: 45888.11, asfalto: 470, hormigon: 370, asfHorm: 280, caminosBasicos: 190, capaProteccion: 95, granularEstabilizado: 230, ripio: 135, tierra: 75 },
  //   { year: 2011, network: 'Red Vial Pavimentada', value: 22883.13, asfalto: 540, hormigon: 340, asfHorm: 260, caminosBasicos: 170, capaProteccion: 120, granularEstabilizado: 220, ripio: 150, tierra: 110 },
  //   { year: 2011, network: 'Soluciones Básicas', value: 13943.57, asfalto: 440, hormigon: 240, asfHorm: 190, caminosBasicos: 130, capaProteccion: 100, granularEstabilizado: 170, ripio: 120, tierra: 70 },
  //   { year: 2011, network: 'Red Vial No Pavimentada', value: 45376.06, asfalto: 490, hormigon: 380, asfHorm: 290, caminosBasicos: 200, capaProteccion: 100, granularEstabilizado: 240, ripio: 140, tierra: 80 },
  //   { year: 2012, network: 'Red Vial Pavimentada', value: 25115.76, asfalto: 560, hormigon: 350, asfHorm: 280, caminosBasicos: 180, capaProteccion: 130, granularEstabilizado: 230, ripio: 160, tierra: 120 },
  //   { year: 2012, network: 'Soluciones Básicas', value: 14385.69, asfalto: 460, hormigon: 250, asfHorm: 210, caminosBasicos: 140, capaProteccion: 110, granularEstabilizado: 180, ripio: 125, tierra: 75 },
  //   { year: 2012, network: 'Red Vial No Pavimentada', value: 44530.65, asfalto: 510, hormigon: 390, asfHorm: 300, caminosBasicos: 210, capaProteccion: 105, granularEstabilizado: 250, ripio: 145, tierra: 85 },
  //   { year: 2013, network: 'Red Vial Pavimentada', value: 27175.52, asfalto: 580, hormigon: 360, asfHorm: 300, caminosBasicos: 190, capaProteccion: 140, granularEstabilizado: 240, ripio: 170, tierra: 130 },
  //   { year: 2013,  // chartInfo = [
  //   {
  //     "region": "Tarapacá",
  //     "asfalto": 1170256,
  //     "hormigon": 792,
  //     "asfHorm": 0,
  //     "caminosBasicos": 0,
  //     "capaProteccion": 544353,
  //     "granularEstabilizado": 458432,
  //     "ripio": 259289,
  //     "tierra": 1388628,
  //     "total": 3821757
  //   },
  //   {
  //     "region": "Antofagasta",
  //     "asfalto": 1881969,
  //     "hormigon": 4021,
  //     "asfHorm": 104,
  //     "caminosBasicos": 0,
  //     "capaProteccion": 536690,
  //     "granularEstabilizado": 698668,
  //     "ripio": 336861,
  //     "tierra": 2240545,
  //     "total": 5698858
  //   },
  //   {
  //     "region": "Atacama",
  //     "asfalto": 1157291,
  //     "hormigon": 2985,
  //     "asfHorm": 11094,
  //     "caminosBasicos": 5113,
  //     "capaProteccion": 1096435,
  //     "granularEstabilizado": 1048467,
  //     "ripio": 649423,
  //     "tierra": 2477770,
  //     "total": 9240578
  //   },
  //   {
  //     "region": "Coquimbo",
  //     "asfalto": 1387431,
  //     "hormigon": 27926,
  //     "asfHorm": 14350,
  //     "caminosBasicos": 110138,
  //     "capaProteccion": 776846,
  //     "granularEstabilizado": 712129,
  //     "ripio": 1428550,
  //     "tierra": 926730,
  //     "total": 5384100
  //   },
  //   {
  //     "region": "Valparaíso",
  //     "asfalto": 1225196,
  //     "hormigon": 196543,
  //     "asfHorm": 5541,
  //     "caminosBasicos": 5311,
  //     "capaProteccion": 959903,
  //     "granularEstabilizado": 360705,
  //     "ripio": 1428063,
  //     "tierra": 580092,
  //     "total": 4865354
  //   },
  //   {
  //     "region": "Libertador General Bernardo O'Higgins",
  //     "asfalto": 1246917,
  //     "hormigon": 54000,
  //     "asfHorm": 0,
  //     "caminosBasicos": 10189,
  //     "capaProteccion": 577152,
  //     "granularEstabilizado": 310356,
  //     "ripio": 1238317,
  //     "tierra": 1057531,
  //     "total": 4509462
  //   },
  //   {
  //     "region": "Maule",
  //     "asfalto": 1613662,
  //     "hormigon": 185753,
  //     "asfHorm": 56574,
  //     "caminosBasicos": 96704,
  //     "capaProteccion": 1043449,
  //     "granularEstabilizado": 212145,
  //     "ripio": 2261143,
  //     "tierra": 1532017,
  //     "total": 7052258
  //   },
  //   {
  //     "region": "Biobío",
  //     "asfalto": 1426545,
  //     "hormigon": 121945,
  //     "asfHorm": 40344,
  //     "caminosBasicos": 109552,
  //     "capaProteccion": 988150,
  //     "granularEstabilizado": 321095,
  //     "ripio": 2448712,
  //     "tierra": 1503360,
  //     "total": 7085203
  //   },
  //   {
  //     "region": "Araucanía",
  //     "asfalto": 1620247,
  //     "hormigon": 116108,
  //     "asfHorm": 101843,
  //     "caminosBasicos": 87255,
  //     "capaProteccion": 629192,
  //     "granularEstabilizado": 731091,
  //     "ripio": 6684742,
  //     "tierra": 2487347,
  //     "total": 11992825
  //   },
  //   {
  //     "region": "Los Lagos",
  //     "asfalto": 1670159,
  //     "hormigon": 230609,
  //     "asfHorm": 51280,
  //     "caminosBasicos": 5800,
  //     "capaProteccion": 1051709,
  //     "granularEstabilizado": 506459,
  //     "ripio": 5017903,
  //     "tierra": 2558978,
  //     "total": 9323841
  //   },
  //   {
  //     "region": "Aysén del General Carlos Ibáñez del Campo",
  //     "asfalto": 296638,
  //     "hormigon": 51108,
  //     "asfHorm": 260,
  //     "caminosBasicos": 0,
  //     "capaProteccion": 570440,
  //     "granularEstabilizado": 44987,
  //     "ripio": 585496,
  //     "tierra": 310737,
  //     "total": 1939466
  //   },
  //   {
  //     "region": "Magallanes y La Antártica Chilena",
  //     "asfalto": 10077,
  //     "hormigon": 756261,
  //     "asfHorm": 1302,
  //     "caminosBasicos": 0,
  //     "capaProteccion": 196484,
  //     "granularEstabilizado": 124319,
  //     "ripio": 35407,
  //     "tierra": 115344,
  //     "total": 1451194
  //   },
  //   {
  //     "region": "Metropolitana de Santiago",
  //     "asfalto": 1449408,
  //     "hormigon": 108900,
  //     "asfHorm": 98436,
  //     "caminosBasicos": 40455,
  //     "capaProteccion": 725535,
  //     "granularEstabilizado": 292459,
  //     "ripio": 2584444,
  //     "tierra": 1920241,
  //     "total": 8671827
  //   },
  //   {
  //     "region": "Los Ríos",
  //     "asfalto": 841528,
  //     "hormigon": 59736,
  //     "asfHorm": 10402,
  //     "caminosBasicos": 29954,
  //     "capaProteccion": 758889,
  //     "granularEstabilizado": 496429,
  //     "ripio": 2584484,
  //     "tierra": 964042,
  //     "total": 4702463
  //   },
  //   {
  //     "region": "Arica y Parinacota",
  //     "asfalto": 438882,
  //     "hormigon": 9228,
  //     "asfHorm": 244,
  //     "caminosBasicos": 0,
  //     "capaProteccion": 495449,
  //     "granularEstabilizado": 463162,
  //     "ripio": 2187463,
  //     "tierra": 341840,
  //     "total": 3987268
  //   },
  //   {
  //     "region": "Ñuble",
  //     "asfalto": 838959,
  //     "hormigon": 29484,
  //     "asfHorm": 6532,
  //     "caminosBasicos": 7420,
  //     "capaProteccion": 342923,
  //     "granularEstabilizado": 224236,
  //     "ripio": 2630473,
  //     "tierra": 1448846,
  //     "total": 5218486
  //   }
  // ] network: 'Soluciones Básicas', value: 14610.64, asfalto: 480, hormigon: 260, asfHorm: 230, caminosBasicos: 150, capaProteccion: 120, granularEstabilizado: 190, ripio: 130, tierra: 80 },
  //   { year: 2013, network: 'Red Vial No Pavimentada', value: 43807.79, asfalto: 530, hormigon: 400, asfHorm: 310, caminosBasicos: 220, capaProteccion: 110, granularEstabilizado: 260, ripio: 155, tierra: 90 },
  //   { year: 2014, network: 'Red Vial Pavimentada', value: 29761.54, asfalto: 600, hormigon: 370, asfHorm: 320, caminosBasicos: 200, capaProteccion: 150, granularEstabilizado: 250, ripio: 180, tierra: 140 },
  //   { year: 2014, network: 'Soluciones Básicas', value: 15225.57, asfalto: 500, hormigon: 270, asfHorm: 250, caminosBasicos: 160, capaProteccion: 130, granularEstabilizado: 200, ripio: 140, tierra: 90 },
  //   { year: 2014, network: 'Red Vial No Pavimentada', value: 43224.75, asfalto: 550, hormigon: 410, asfHorm: 320, caminosBasicos: 230, capaProteccion: 115, granularEstabilizado: 270, ripio: 165, tierra: 100 }
  // ]


  
  


  //  chartInfo = [
  //   { year: 2009, network: 'Red Vial Pavimentada', value: 20788.8101677557 },
  //   { year: 2009, network: 'Soluciones Básicas', value: 13330.0841152405 },
  //   { year: 2009, network: 'Red Vial No Pavimentada', value: 46520.0680211778 },
  //   { year: 2010, network: 'Red Vial Pavimentada', value: 22113.8228682331 },
  //   { year: 2010, network: 'Soluciones Básicas', value: 13653.6070305216 },
  //   { year: 2010, network: 'Red Vial No Pavimentada', value: 45888.1088402146 },
  //   { year: 2011, network: 'Red Vial Pavimentada', value: 22883.1264204694 },
  //   { year: 2011, network: 'Soluciones Básicas', value: 13943.5738766901 },
  //   { year: 2011, network: 'Red Vial No Pavimentada', value: 45376.0576316654 },
  //   { year: 2012, network: 'Red Vial Pavimentada', value: 25115.7591578772 },
  //   { year: 2012, network: 'Soluciones Básicas', value: 14385.6945325813 },
  //   { year: 2012, network: 'Red Vial No Pavimentada', value: 44530.6547474026 },
  //   { year: 2013, network: 'Red Vial Pavimentada', value: 27175.518285587 },
  //   { year: 2013, network: 'Soluciones Básicas', value: 14610.6431920162 },
  //   { year: 2013, network: 'Red Vial No Pavimentada', value: 43807.789463024 },
  //   { year: 2014, network: 'Red Vial Pavimentada', value: 29761.5383045601 },
  //   { year: 2014, network: 'Soluciones Básicas', value: 15225.5741781568 },
  //   { year: 2014, network: 'Red Vial No Pavimentada', value: 43224.752458329 },
  //   { year: 2015, network: 'Red Vial Pavimentada', value: 32487.284147909 },
  //   { year: 2015, network: 'Soluciones Básicas', value: 15423.2329741534 },
  //   { year: 2015, network: 'Red Vial No Pavimentada', value: 42765.031994168 },
  //   { year: 2016, network: 'Red Vial Pavimentada', value: 34690.9615511603 },
  //   { year: 2016, network: 'Soluciones Básicas', value: 16186.3047895885 },
  //   { year: 2016, network: 'Red Vial No Pavimentada', value: 42204.3899848484 },
  //   { year: 2017, network: 'Red Vial Pavimentada', value: 37943.2370735589 },
  //   { year: 2017, network: 'Soluciones Básicas', value: 16848.1594058044 },
  //   { year: 2017, network: 'Red Vial No Pavimentada', value: 41645.104447606 },
  //   { year: 2018, network: 'Red Vial Pavimentada', value: 38970.7171737971 },
  //   { year: 2018, network: 'Soluciones Básicas', value: 17150.5607390193 },
  //   { year: 2018, network: 'Red Vial No Pavimentada', value: 40924.8081481049 },
  //   { year: 2019, network: 'Red Vial Pavimentada', value: 40361.1389334529 },
  //   { year: 2019, network: 'Soluciones Básicas', value: 17325.8546426149 },
  //   { year: 2019, network: 'Red Vial No Pavimentada', value: 40254.6408946378 },
  //   { year: 2020, network: 'Red Vial Pavimentada', value: 41314.3957034261 },
  //   { year: 2020, network: 'Soluciones Básicas', value: 18064.2558360838 },
  //   { year: 2020, network: 'Red Vial No Pavimentada', value: 39494.9501821959 },
  //   { year: 2021, network: 'Red Vial Pavimentada', value: 43215.949699053 },
  //   { year: 2021, network: 'Soluciones Básicas', value: 18755.6524703997 },
  //   { year: 2021, network: 'Red Vial No Pavimentada', value: 38913.4996309283 },
  //   { year: 2022, network: 'Red Vial Pavimentada', value: 45424.0333490648 },
  //   { year: 2022, network: 'Soluciones Básicas', value: 19490.129198792 },
  //   { year: 2022, network: 'Red Vial No Pavimentada', value: 38477.8263281672 },
  //   { year: 2023, network: 'Red Vial Pavimentada', value: 47318.5754135289 },
  //   { year: 2023, network: 'Soluciones Básicas', value: 20286.3168389442 },
  //   { year: 2023, network: 'Red Vial No Pavimentada', value: 37818.6069743632 },
  //   { year: 2024, network: 'Red Vial Pavimentada', value: 51402.1211877855 },
  //   { year: 2024, network: 'Soluciones Básicas', value: 20549.2637379459 },
  //   { year: 2024, network: 'Red Vial No Pavimentada', value: 37152.7025971634 },
  // ];


  constructor(service: LinearService) {
    // this.countriesInfo = service.getCountriesInfo();
    // this.energySources = service.getEnergySources();
  }
}


