import {World, Actor, Circle} from "https://gymburgdorf.github.io/simhelpers/simhelpers.js?2"

let world1 = new World({
	element: document.querySelector(".app"),
  h: 64,
  w: 64,
  color: 0x006020
})

let world2 = new World({
	element: document.querySelector(".app2"),
  h: 64,
  w: 64,
  color: 0x006020
})

const screenX = world1.w / 2
const screenY = world1.h / 8

//track
let trackimg = "img/track.svg"
let imgW = 5000
let imgH = 3000
let trackpoints = flip([
  [4568, 1974], [4522, 1973], [4482, 1974], [4434, 1976], [4388, 1977], [4348, 1978], [4306, 1978], [4257, 1975], [4208, 1978], [4154, 1976], [4110, 1976], [4067, 1974], [4030, 1976], [3989, 1978], [3939, 1974], [3902, 1974], [3869, 1974], [3830, 1974], [3796, 1978], [3752, 1978], [3713, 1978], [3678, 1978], [3644, 1978], [3613, 1978], [3579, 1978], [3535, 1978], [3505, 1978], [3474, 1978], [3427, 1974], [3390, 1974], [3353, 1974], [3327, 1974], [3286, 1974], [3253, 1974], [3205, 1974], [3162, 1974], [3132, 1974], [3090, 1974], [3039, 1974], [2978, 1974], [2926, 1974], [2881, 1974], [2833, 1974], [2788, 1974], [2745, 1974], [2697, 1974], [2653, 1972], [2603, 1972], [2567, 1974], [2527, 1971], [2483, 1969], [2439, 1969], [2397, 1969], [2349, 1969], [2308, 1969], [2261, 1969], [2208, 1969], [2168, 1966], [2126, 1969], [2080, 1968], [2037, 1966], [1998, 1965], [1954, 1966], [1904, 1965], [1857, 1965], [1825, 1965], [1786, 1965], [1756, 1965], [1725, 1965], [1699, 1965], [1664, 1965], [1634, 1965], [1608, 1965], [1578, 1960], [1530, 1960], [1493, 1965], [1445, 1960], [1408, 1960], [1376, 1960], [1335, 1960], [1281, 1960], [1235, 1960], [1183, 1960], [1138, 1960], [1096, 1959], [1039, 1960], [993, 1958], [944, 1957], [895, 1948], [867, 1914], [853, 1873], [845, 1821], [838, 1769], [828, 1721], [813, 1679], [787, 1641], [755, 1618], [717, 1601], [673, 1581], [639, 1559], [596, 1534], [563, 1506], [519, 1475], [477, 1447], [436, 1420], [396, 1386], [359, 1359], [319, 1325], [275, 1289], [236, 1250], [210, 1212], [194, 1169], [186, 1122], [178, 1075], [171, 1019], [174, 970], [189, 917], [212, 870], [231, 827], [263, 793], [297, 766], [322, 731], [357, 700], [401, 678], [442, 653], [479, 638], [528, 626], [573, 612], [618, 598], [667, 590], [713, 579], [762, 575], [817, 577], [871, 576], [915, 576], [961, 577], [1010, 578], [1056, 584], [1101, 588], [1143, 590], [1196, 591], [1244, 592], [1288, 588], [1337, 586], [1381, 589], [1427, 592], [1471, 591], [1514, 593], [1556, 593], [1604, 595], [1651, 604], [1696, 611], [1737, 639], [1766, 683], [1786, 721], [1784, 776], [1760, 826], [1739, 865], [1724, 907], [1705, 949], [1672, 986], [1639, 1017], [1594, 1040], [1553, 1052], [1507, 1067], [1457, 1075], [1399, 1080], [1356, 1087], [1309, 1088], [1260, 1087], [1213, 1085], [1162, 1086], [1117, 1086], [1070, 1084], [1023, 1087], [974, 1090], [935, 1093], [888, 1100], [838, 1117], [800, 1138], [769, 1175], [759, 1218], [759, 1264], [771, 1311], [795, 1357], [818, 1383], [866, 1410], [898, 1429], [927, 1448], [959, 1468], [1001, 1492], [1041, 1518], [1081, 1539], [1124, 1557], [1163, 1575], [1205, 1591], [1250, 1616], [1292, 1640], [1338, 1664], [1388, 1685], [1435, 1694], [1477, 1702], [1523, 1707], [1569, 1713], [1612, 1717], [1658, 1720], [1708, 1726], [1764, 1723], [1803, 1715], [1849, 1717], [1896, 1714], [1943, 1698], [1970, 1658], [1992, 1613], [2000, 1565], [2009, 1522], [2012, 1474], [2013, 1426], [2017, 1375], [2028, 1328], [2050, 1289], [2076, 1251], [2105, 1208], [2130, 1175], [2162, 1139], [2189, 1104], [2219, 1063], [2243, 1028], [2272, 990], [2305, 951], [2325, 917], [2349, 883], [2375, 853], [2409, 819], [2438, 782], [2465, 744], [2502, 710], [2541, 686], [2584, 668], [2629, 671], [2674, 683], [2716, 702], [2762, 730], [2803, 753], [2850, 785], [2898, 809], [2951, 843], [3002, 868], [3043, 888], [3083, 911], [3122, 936], [3164, 961], [3209, 987], [3249, 1016], [3299, 1047], [3346, 1072], [3388, 1096], [3432, 1127], [3477, 1149], [3517, 1175], [3555, 1201], [3592, 1221], [3632, 1250], [3668, 1275], [3718, 1301], [3765, 1326], [3797, 1346], [3838, 1372], [3876, 1399], [3919, 1424], [3964, 1446], [3999, 1467], [4035, 1490], [4071, 1513], [4115, 1541], [4152, 1565], [4200, 1594], [4234, 1618], [4278, 1645], [4327, 1667], [4369, 1667], [4413, 1638], [4430, 1592], [4431, 1543], [4424, 1498], [4411, 1455], [4395, 1417], [4380, 1373], [4367, 1326], [4350, 1285], [4330, 1242], [4308, 1208], [4280, 1171], [4250, 1129], [4221, 1104], [4177, 1090], [4134, 1082], [4085, 1071], [4042, 1061], [4006, 1040], [3971, 1008], [3936, 972], [3902, 937], [3881, 900], [3870, 858], [3869, 810], [3887, 764], [3926, 739], [3974, 721], [4014, 711], [4060, 713], [4100, 711], [4151, 710], [4200, 717], [4244, 731], [4294, 745], [4339, 767], [4388, 790], [4434, 807], [4474, 830], [4506, 851], [4552, 870], [4592, 898], [4618, 928], [4632, 980], [4636, 1031], [4641, 1084], [4645, 1131], [4650, 1172], [4654, 1218], [4657, 1271], [4661, 1319], [4670, 1368], [4693, 1405], [4730, 1423], [4778, 1433], [4817, 1446], [4839, 1484], [4845, 1534], [4847, 1586], [4851, 1629], [4848, 1673], [4840, 1722], [4833, 1770], [4815, 1818], [4795, 1864], [4760, 1905], [4720, 1930], [4676, 1948], [4632, 1957]
])
let scale = 0.16
let realw = scale * imgW
let realh = scale * imgH
let startx = trackpoints[0][0] * scale
let starty = trackpoints[0][1] * scale
let startdirection = Math.PI
let rot0 = Math.PI / 2
let vOffTheTrack = 20
let trackborders = 38

var isDriving = false

let realtrackpoints = []
let oldpoint = 0;
for(let i = 0; i < trackpoints.length; i++) {
  oldpoint = trackpoints[i]
  realtrackpoints.push([oldpoint[0]*scale, oldpoint[1]*scale])
}

function createTrack(whichWorld) {
  return new Actor({
    world: whichWorld,
    img: trackimg,
    x: screenX,
    y: screenY,
    wUnits: realw,
    autorotate: false
  })
}

let track = createTrack(world1)
let track2 = createTrack(world2)

//auswahl
const checkboxes1 = document.querySelectorAll('#car1');
const num1 = checkboxes1.length;
let checkitem1 = 0

const checkboxes2 = document.querySelectorAll('#car2');
const num2 = checkboxes2.length;
let checkitem2 = 0


//cars
let nameofcar1 = "img/AstonMartin.png"
let nameofcar2 = "img/Ferrari.png"
let m = 800
let k = 0.5 * 1.2 * 1.2 * 1.33
let froll = 0.03 * 8000
let vmax = 111// * (realw/1400)
let nmax = k * vmax**2 + froll 
let a = nmax / m
let abrake = -10 * 9.81 * (realw/1400)

//aston
let aston = new Actor({
  world: world1,
	img: nameofcar1,
  x: screenX,
  y: screenY,
  wUnits: 3.4,
  rotation: rot0,
  autorotate: false
})

aston.v = 0
aston.a1 = 0
aston.px = 3763 * scale
aston.py = 1010 * scale
aston.turn = 0
aston.rot = startdirection
aston.omega = 0
aston.turnable = false
aston.offTheTrack = false
aston.divider = 1

//astonGhost
let astonGhost = new Actor({
  world: world2,
	img: nameofcar1,
  x: screenX,
  y: screenY,
  wUnits: 3.4,
  rotation: rot0,
  autorotate: false
})

//ferrari
let ferrari = new Actor({
  world: world2,
	img: nameofcar2,
  x: screenX,
  y: screenY,
  wUnits: 3.4,
  rotation: rot0,
  autorotate: false
})

ferrari.v = 0
ferrari.a1 = 0
ferrari.px = 3763 * scale
ferrari.py = 1035 * scale
ferrari.turn = 0
ferrari.rot = startdirection
ferrari.omega = 0
ferrari.offTheTrack = false
ferrari.divider = 1

//ferrariGhost
let ferrariGhost = new Actor({
  world: world1,
	img: nameofcar2,
  x: screenX,
  y: screenY,
  wUnits: 3.4,
  rotation: rot0,
  autorotate: false
})

function 	getExactOffset(x, y) {
  let	dSqrMin = Infinity
  const points = realtrackpoints
  for(let i = 0; i < points.length; i++) {
    let [x1, y1] = points[i]
    let [x2, y2] = points[(i+1) % points.length]
    let dSqr = getDistSqr(x, y, x1, y1, x2, y2)
    if(dSqr < dSqrMin) {dSqrMin = dSqr}
  }
  return dSqrMin ** 0.5
}

function getDistSqr(x, y, x1, y1, x2, y2) {
	let param = getParam(x, y, x1, y1, x2, y2)

	if(param < 0) param = 0
	if(param > 1) param = 1

	const px = x1 + param * (x2 - x1)
	const py = y1 + param * (y2 - y1)

	const dx = x - px
	const dy = y - py
	return dx * dx + dy * dy
}

function getParam(x, y, x1, y1, x2, y2) {
	const Ax = x - x1
	const Ay = y - y1
	const Bx = x2 - x1
	const By = y2 - y1

	const dotProduct = Ax * Bx + Ay * By
	const lenSquare = Bx ** 2 + By ** 2
	return lenSquare > 0 ? dotProduct / lenSquare : 0
}

function flip(tracklist) {
  return tracklist.map(([x,y])=>[x, imgH - y])
}

//Taste
window.addEventListener("keydown", taste);
window.addEventListener("keyup", tasteweg);

function taste(e) {
  if(e.key == "w" && ready) {aston.a1 = a;}
  if(e.key == "s") {aston.a1 = abrake;}
  if(e.key == "a") {if (aston.turn<1) {aston.turn += 1;}}
  if(e.key == "d") {if (aston.turn>-1) {aston.turn += -1;}}

  if(e.key == "ArrowUp" && ready) {ferrari.a1 = a;}
  if(e.key == "ArrowDown") {ferrari.a1 = abrake;}
  if(e.key == "ArrowLeft") {if (ferrari.turn<1) {ferrari.turn += 1;}}
  if(e.key == "ArrowRight") {if (ferrari.turn>-1) {ferrari.turn += -1;}}

  if(e.key == "w" && !ready) {showWasted("Aston")}
  if(e.key == "ArrowUp" && !ready) {showWasted("Ferrari")}
}

function tasteweg(e) {
  if(e.key == "w") {aston.a1 = 0;}
  if(e.key == "s") {aston.a1 = 0;}
  if(e.key == "a") {if (aston.turn>0) {aston.turn = 0;}}
  if(e.key == "d") {if (aston.turn<0) {aston.turn = 0;}}

  if(e.key == "ArrowUp") {ferrari.a1 = 0;}
  if(e.key == "ArrowDown") {ferrari.a1 = 0;}
  if(e.key == "ArrowLeft") {if (ferrari.turn>0) {ferrari.turn = 0;}}
  if(e.key == "ArrowRight") {if (ferrari.turn<0) {ferrari.turn = 0;}}
}

function movement(car, track, dt) {
  let fres = m * car.a1 - (k * car.v**2 + froll)
  car.aReal = fres / m
  car.v += car.aReal * dt
  if (car.v < 0) {car.v = 0}
  if (car.v !=0 ) {isDriving = true}
  if(car.offTheTrack){
    if(car.v > vOffTheTrack)
      car.v = vOffTheTrack
    }
  car.vx = car.v * Math.cos(car.rot)
  car.vy = car.v * Math.sin(car.rot)
  car.px += car.vx * dt
  car.py += car.vy * dt

  car.omega = 0.6 * (car.omega + 0.7*car.turn) //progressive Lenkung
  if (car.v != 0) {car.rot += car.omega * dt}
  
  let offset = getExactOffset(car.px, car.py)
  if(offset > (trackborders * scale)) {
    car.offTheTrack = true
  }
  else {car.offTheTrack = false}

  let t = track
  t.setAnchor({x: car.px / realw, y: car.py / realh})
  t.rotation = +rot0 - car.rot

  /*for (let i=0; i<num1; i++) {
    if (checkboxes1[i].checked === true) {
    checkitem1 = checkboxes1[i].value;
    }
  }	

  for (let i=0; i<num2; i++) {
    if (checkboxes2[i].checked === true) {
    checkitem2 = checkboxes2[i].value;
    }
  }	
  */
}

function moveGhost(ghost, car, otherCar) {
  const dx = car.px - otherCar.px
  const dy = car.py - otherCar.py
  const r = (dx**2 + dy**2)**0.5
  const phi = Math.atan2(dy, dx)
  const dphi = rot0 - otherCar.rot + phi
  ghost.x = screenX + r * Math.cos(dphi)
  ghost.y = screenY + r * Math.sin(dphi)
  ghost.rotation = +rot0 + car.rot - otherCar.rot
}

function loopAston(dt) {
  movement(aston, track, dt)
  moveGhost(ferrariGhost, ferrari, aston)
}

function loopFerrari(dt) {
  movement(ferrari, track2, dt)
  moveGhost(astonGhost, aston, ferrari)
}

world1.addTicker(loopAston)
world2.addTicker(loopFerrari)