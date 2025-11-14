body {
	background: #fff;
	font-family: "Comfortaa", sans-serif;
	position: relative;
}

footer {
	text-align: center;
	padding: 1em;
	max-width: 80px;
	position: fixed;
	top: 0;
	right: 25px;
	a {
		text-decoration: none;
		display: inline-block;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: transparent;
		border: 1px dashed #fff;
		color: #fff;
		margin: 5px;
		&:hover {
			background: rgba(255, 255, 255, 0.1);
		}
		.icons {
			margin-top: 12px;
			display: inline-block;
			font-size: 20px;
		}
	}
}

* {
	box-sizing: border-box;
}

.main-content {
	text-align: center;
	text-transform: uppercase;
	scroll-snap-type: y mandatory;
	position: relative;
	height: 100vh;
	overflow-y: scroll;
}

.hover,
.word,
h1 {
	cursor: pointer;
}

h1 {
	position: relative;
	color: #fff;
	font: 900 60px Montserrat;
	text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.concept {
	position: relative;
	padding: 5em;
	height: 100vh;
	overflow: hidden;
	scroll-snap-align: center;
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: radial-gradient(rgba(0, 0, 0, 0.3), transparent);
		opacity: 0;
		transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
	}
	&:hover:before {
		opacity: 0.5;
	}
}

.concept-one {
	display: grid;
	grid: repeat(3, 1fr)/ repeat(3, 1fr);
	background: yellow;
	padding: 8em;
	background: url("https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/desert.jpg")
		no-repeat center center / cover;
	h1 {
		position: absolute;
		margin: auto;
		left: 0;
		right: 0;
		top: 50%;
		margin-top: -30px;
		transition: 0.5s ease;
		z-index: 0;
		letter-spacing: 25px;
	}
	.hover {
		z-index: 1;
	}
	.hover-1:hover ~ h1 {
		left: 30px;
		margin-top: -10px;
	}
	.hover-2:hover ~ h1 {
		margin-top: -10px;
	}
	.hover-3:hover ~ h1 {
		right: 30px;
		margin-top: -10px;
	}
	.hover-4:hover ~ h1 {
		left: 30px;
	}
	.hover-6:hover ~ h1 {
		right: 30px;
	}
	.hover-7:hover ~ h1 {
		left: 30px;
		margin-top: -50px;
	}
	.hover-8:hover ~ h1 {
		margin-top: -50px;
	}
	.hover-9:hover ~ h1 {
		right: 30px;
		margin-top: -50px;
	}
}

.concept-two {
	display: grid;
	grid: 100% / repeat(6, 1fr);
	padding: 5em 15em;
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/forest.jpg)
		center center / cover;
	.hover {
		position: relative;
		display: grid;
		place-items: center;
	}
	h1 {
		color: transparent;
		text-align: 0 1px 1px;
		-webkit-text-stroke: 2px #fff;
		text-shadow: none;
		transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.hover:hover h1 {
		transform: scale(1.5);
		color: #fff;
		-webkit-text-stroke: 2px transparent;
		text-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}
}

.concept-three {
	padding: 5em;
	.word {
		display: flex;
		align-items: center;
		max-width: 500px;
		margin: auto;
	}
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/canyon.jpg)
		center center / cover;
	.hover {
		flex: 1;
		display: grid;
		height: calc(100vh - 10em);
		grid: repeat(2, 2fr) / 100%;
		position: relative;
		div {
			position: relative;
			z-index: 5;
		}
		div:nth-child(1):hover ~ h1 {
			margin-top: -10px;
		}
		div:nth-child(2):hover ~ h1 {
			margin-top: -50px;
		}
	}
	h1 {
		position: absolute;
		margin: auto;
		left: 0;
		right: 0;
		top: 50%;
		margin-top: -30px;
		transition: 0.3s cubic-bezier(0.23, 1, 0.32, 1);
		z-index: 0;
	}
}

.concept-four {
	height: 100vh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 2em;
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/glacier.jpg)
		no-repeat center center / cover;
	h1 {
		display: inline-block;
	}
	&:hover h1 {
		letter-spacing: 25px;
		transform: scale(1.3);
		transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
}

.concept-five {
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/mountains.jpg)
		center center / cover;
	display: flex;
	align-items: center;
	.word {
		width: 600px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80%;
		&:hover {
			.char:nth-child(even) {
				top: 20px;
			}
			.char:nth-child(odd) {
				top: -20px;
			}
		}
	}
	.char {
		flex: 1;
		position: relative;
		display: inline-block;
		top: 0;
		transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
	}
}

.concept-six {
	display: flex;
	align-items: center;
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/beach.jpg) top
		right / cover;
	.word {
		width: 550px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80%;
		&:hover {
			.char:nth-child(1) {
				margin-top: -30px;
				transform: rotate(-20deg);
			}
			.char:nth-child(2) {
				margin: -40px 0px 0 10px;
				transform: rotate(5deg);
			}
			.char:nth-child(3) {
				margin: 15px 0 0 10px;
				transform: rotate(12deg);
			}
			.char:nth-child(4) {
				margin: -25px 0 0;
				transform: rotate(5deg);
			}
			.char:nth-child(5) {
				margin: -40px 5px 0;
				transform: rotate(-10deg);
			}
		}
	}
	.char {
		flex: 1;
		transition: 0.3s ease-in-out;
		position: relative;
	}
}

.concept-seven {
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/fries.jpg)
		top center / cover;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		letter-spacing: 35px;
		position: relative;
		&:before {
			content: "fries";
			position: absolute;
			margin: auto;
			left: 0;
			right: 0;
			max-width: 400px;
			color: transparent;
			letter-spacing: 10px;
			text-shadow: none;
		}
	}
	&:hover h1:before {
		transition: 0.6s ease;
		color: rgba(255, 255, 255, 0.8);
		animation: jump-out 0.6s ease forwards;
	}
}

@keyframes jump-out {
	0% {
		opacity: 0;
		transform: scale(1);
	}
	20% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: scale(2);
	}
}

.concept-eight {
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/falls.jpg)
		center center / cover;
	display: flex;
	align-items: center;
	justify-content: center;
	.word {
		display: flex;
		align-items: center;
		justify-items: center;
		width: 450px;
		height: 80%;
		&:hover .char:before {
			transition: 0.6s ease;
			color: rgba(255, 255, 255, 0.8);
			animation: falls 1s ease forwards;
		}
		&:hover .char:nth-child(1):before {
			animation: falls 0.9s ease 0.2s forwards;
		}
		&:hover .char:nth-child(2n + 3):before {
			animation: falls 1s ease 0.3s forwards;
		}
	}
	.char {
		flex: 1;
		position: relative;
		&:before {
			content: attr(data-content);
			position: absolute;
			top: 0;
			color: transparent;
			text-shadow: none;
		}
	}
}

@keyframes falls {
	0% {
		opacity: 0;
		top: 0;
	}
	20% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		top: 100px;
	}
}
body {
	background: #fff;
	font-family: "Comfortaa", sans-serif;
	position: relative;
}

footer {
	text-align: center;
	padding: 1em;
	max-width: 80px;
	position: fixed;
	top: 0;
	right: 25px;
	a {
		text-decoration: none;
		display: inline-block;
		width: 45px;
		height: 45px;
		border-radius: 50%;
		background: transparent;
		border: 1px dashed #fff;
		color: #fff;
		margin: 5px;
		&:hover {
			background: rgba(255, 255, 255, 0.1);
		}
		.icons {
			margin-top: 12px;
			display: inline-block;
			font-size: 20px;
		}
	}
}

* {
	box-sizing: border-box;
}

.main-content {
	text-align: center;
	text-transform: uppercase;
	scroll-snap-type: y mandatory;
	position: relative;
	height: 100vh;
	overflow-y: scroll;
}

.hover,
.word,
h1 {
	cursor: pointer;
}

h1 {
	position: relative;
	color: #fff;
	font: 900 60px Montserrat;
	text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.concept {
	position: relative;
	padding: 5em;
	height: 100vh;
	overflow: hidden;
	scroll-snap-align: center;
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: radial-gradient(rgba(0, 0, 0, 0.3), transparent);
		opacity: 0;
		transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
	}
	&:hover:before {
		opacity: 0.5;
	}
}

.concept-one {
	display: grid;
	grid: repeat(3, 1fr)/ repeat(3, 1fr);
	background: yellow;
	padding: 8em;
	background: url("https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/desert.jpg")
		no-repeat center center / cover;
	h1 {
		position: absolute;
		margin: auto;
		left: 0;
		right: 0;
		top: 50%;
		margin-top: -30px;
		transition: 0.5s ease;
		z-index: 0;
		letter-spacing: 25px;
	}
	.hover {
		z-index: 1;
	}
	.hover-1:hover ~ h1 {
		left: 30px;
		margin-top: -10px;
	}
	.hover-2:hover ~ h1 {
		margin-top: -10px;
	}
	.hover-3:hover ~ h1 {
		right: 30px;
		margin-top: -10px;
	}
	.hover-4:hover ~ h1 {
		left: 30px;
	}
	.hover-6:hover ~ h1 {
		right: 30px;
	}
	.hover-7:hover ~ h1 {
		left: 30px;
		margin-top: -50px;
	}
	.hover-8:hover ~ h1 {
		margin-top: -50px;
	}
	.hover-9:hover ~ h1 {
		right: 30px;
		margin-top: -50px;
	}
}

.concept-two {
	display: grid;
	grid: 100% / repeat(6, 1fr);
	padding: 5em 15em;
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/forest.jpg)
		center center / cover;
	.hover {
		position: relative;
		display: grid;
		place-items: center;
	}
	h1 {
		color: transparent;
		text-align: 0 1px 1px;
		-webkit-text-stroke: 2px #fff;
		text-shadow: none;
		transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
	.hover:hover h1 {
		transform: scale(1.5);
		color: #fff;
		-webkit-text-stroke: 2px transparent;
		text-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}
}

.concept-three {
	padding: 5em;
	.word {
		display: flex;
		align-items: center;
		max-width: 500px;
		margin: auto;
	}
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/canyon.jpg)
		center center / cover;
	.hover {
		flex: 1;
		display: grid;
		height: calc(100vh - 10em);
		grid: repeat(2, 2fr) / 100%;
		position: relative;
		div {
			position: relative;
			z-index: 5;
		}
		div:nth-child(1):hover ~ h1 {
			margin-top: -10px;
		}
		div:nth-child(2):hover ~ h1 {
			margin-top: -50px;
		}
	}
	h1 {
		position: absolute;
		margin: auto;
		left: 0;
		right: 0;
		top: 50%;
		margin-top: -30px;
		transition: 0.3s cubic-bezier(0.23, 1, 0.32, 1);
		z-index: 0;
	}
}

.concept-four {
	height: 100vh;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	letter-spacing: 2em;
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/glacier.jpg)
		no-repeat center center / cover;
	h1 {
		display: inline-block;
	}
	&:hover h1 {
		letter-spacing: 25px;
		transform: scale(1.3);
		transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}
}

.concept-five {
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/mountains.jpg)
		center center / cover;
	display: flex;
	align-items: center;
	.word {
		width: 600px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80%;
		&:hover {
			.char:nth-child(even) {
				top: 20px;
			}
			.char:nth-child(odd) {
				top: -20px;
			}
		}
	}
	.char {
		flex: 1;
		position: relative;
		display: inline-block;
		top: 0;
		transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
	}
}

.concept-six {
	display: flex;
	align-items: center;
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/beach.jpg) top
		right / cover;
	.word {
		width: 550px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80%;
		&:hover {
			.char:nth-child(1) {
				margin-top: -30px;
				transform: rotate(-20deg);
			}
			.char:nth-child(2) {
				margin: -40px 0px 0 10px;
				transform: rotate(5deg);
			}
			.char:nth-child(3) {
				margin: 15px 0 0 10px;
				transform: rotate(12deg);
			}
			.char:nth-child(4) {
				margin: -25px 0 0;
				transform: rotate(5deg);
			}
			.char:nth-child(5) {
				margin: -40px 5px 0;
				transform: rotate(-10deg);
			}
		}
	}
	.char {
		flex: 1;
		transition: 0.3s ease-in-out;
		position: relative;
	}
}

.concept-seven {
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/fries.jpg)
		top center / cover;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		letter-spacing: 35px;
		position: relative;
		&:before {
			content: "fries";
			position: absolute;
			margin: auto;
			left: 0;
			right: 0;
			max-width: 400px;
			color: transparent;
			letter-spacing: 10px;
			text-shadow: none;
		}
	}
	&:hover h1:before {
		transition: 0.6s ease;
		color: rgba(255, 255, 255, 0.8);
		animation: jump-out 0.6s ease forwards;
	}
}

@keyframes jump-out {
	0% {
		opacity: 0;
		transform: scale(1);
	}
	20% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		transform: scale(2);
	}
}

.concept-eight {
	background: url(https://meowlivia.s3.us-east-2.amazonaws.com/codepen/background/falls.jpg)
		center center / cover;
	display: flex;
	align-items: center;
	justify-content: center;
	.word {
		display: flex;
		align-items: center;
		justify-items: center;
		width: 450px;
		height: 80%;
		&:hover .char:before {
			transition: 0.6s ease;
			color: rgba(255, 255, 255, 0.8);
			animation: falls 1s ease forwards;
		}
		&:hover .char:nth-child(1):before {
			animation: falls 0.9s ease 0.2s forwards;
		}
		&:hover .char:nth-child(2n + 3):before {
			animation: falls 1s ease 0.3s forwards;
		}
	}
	.char {
		flex: 1;
		position: relative;
		&:before {
			content: attr(data-content);
			position: absolute;
			top: 0;
			color: transparent;
			text-shadow: none;
		}
	}
}

@keyframes falls {
	0% {
		opacity: 0;
		top: 0;
	}
	20% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		top: 100px;
	}
}
<div class="letter-image">
	<div class="animated-mail">
		<div class="back-fold"></div>
		<div class="letter">
			<div class="letter-border"></div>
			<div class="letter-title"></div>
			<div class="letter-context"></div>
			<div class="letter-stamp">
				<div class="letter-stamp-inner"></div>
			</div>
		</div>
		<div class="top-fold"></div>
		<div class="body"></div>
		<div class="left-fold"></div>
	</div>
	<div class="shadow"></div>
</div>
@import url(https://fonts.googleapis.com/css?family=Fira+Sans:400,300,700,500,400italic,500italic,700italic,300italic);

body{
    background: #2C3940;
    overflow:hidden;
    font-family: 'Fira Sans', sans-serif;
    a{
        color:white;
        padding-top:20px;
        font-size:10px;
        opacity:0.6;
        position:relative;
        top:10px;
        transition:all .3s;
        font-weight:100;
        text-decoration:none;
        &:hover{
            opacity:1;

        }
        i.l{
            margin-right:3px;
        }
    }
}
input{
    display:none;
}

input:checked + label{
    .button_inner{
        background:transparent;
        transform:rotate(90deg);
        width:100px;
        border-radius:100px;
        box-shadow:0px 0px 0px 440px rgba(0,0,0,0);
        animation: finalbox .4s 4.42s cubic-bezier(0.39, 2.01, 0.27, 0.75) forwards;
        span.t{
            opacity:0;
            top:20px;
        }
    }
    i.l{
        left:14px;
        opacity:1;
        top:11px;
        animation:down 1s .25s infinite,final .2s 4s forwards;
    }
    .tick{
        position: absolute;
        left: 2px;
        right: 0;
        transform:scale(0) rotate(-90deg);
        color: #00C1FC;
        top: 11px;
        margin: auto;
        font-size: 22px;
        animation: tick .3s 4.7s forwards;
    }
    .button_spots{
        opacity:1;
        @for $i from 0 through 60{
            &:nth-of-type(#{$i}){
                top:(16px - random(10)) - 0 !important;
                left:-34px  !important;
                opacity:0;
                padding:random(20)/4 + 2 + px !important;
                animation:spew 1s .3s forwards,rotate 4s + random(4)/10 .25s + random(12)/10 linear infinite ,final .2s 4s forwards,spot-#{$i} .7s .4/random(10) + random(10)/10 + 10s linear infinite !important;
            }
        }

    }
}
.tick{
    position:absolute;
    left:-40;
    right:0;
    transform:scale(0);
    margin:auto;
    font-size:22px;
}
.button{
    position:absolute;
    top:50%;
    left:0;
    right:0;
    margin:auto;
    text-align:Center;
    height:360px;
    width:200px;
    transform:translateY(-50%);
    h1{
        font-weight:100;
        color:White;
        font-size:24px;
        margin:0;
        text-transform:uppercase;
    }
    h2{
        font-weight:100;
        color:#00C4FF;
        opacity:1;
        font-size:14px;
        margin:4px 0px 0px 0px;
    }
    .b_l_quad .button_spots{
        @for $i from 1 through 20{
            &:nth-child(#{$i}){
                padding:random(3) + 2 + px;
                left: -25 + ($i * 12) + px;
                top: 50 + px;
            }
        }
        @for $i from 20 through 40{
            &:nth-child(#{$i}){
                padding:random(3) + 2 + px;
                left: -255 + ($i * 12) + px;
                top: -12 + px;
            }
        }
        @for $i from 40 through 46{
            &:nth-child(#{$i}){
                padding:random(3) + 2 + px;
                left: 204px;
                top: -488 + ($i * 12) + px;
            }
        }

        @for $i from 46 through 52{
            &:nth-child(#{$i}){
                padding:random(3) + 2 + px;
                left: -10px;
                top: -568 + ($i * 12) + px;
            }
        }
    }
    .button_spots{
        position:absolute;
        border-radius:100px;
        background:green;
        opacity:0;
        animation:opacity 1s;
        @for $i from 1 through 52{
            &:nth-of-type(#{$i}){
                transform-origin:90px - random(10) 20px - random(10);
                background:hsla(350 + random(399) ,57% - random(10) ,65%,1);
                box-shadow:0px 0px 10px rgba(255,255,255,0.12);
                transition:all 1s + random(10)/10;
            }
        }
    }
    &_inner{
        //overflow:hidden;
        border-radius:2px;
        position:absolute;
        width:200px;
        height:50px;
        left:0;
        right:0;
        top:50%;
        margin:auto;
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.04);
        font-weight: 100;
        font-size: 12px;
        cursor:pointer;
        border: 2px solid #FFFFFF;
        color: white;
        text-align: Center;
        transition:all .3s,box-shadow .2s,transform .2s .2s;
        span.t{
            position:relative;
            top:6px;
            opacity:1;
            left:-10px;
            transition:left .4s .1s;


        }
        i.l{
            position: relative;
            left: -19px;
            top: 20px;
            color: #00C4FF;
            font-size: 25px;
            opacity: 0;
            transition: left .3s 0s,top .3s 0s,opacity .3s 0s;
        }
        &:hover{
            color:#2C3940;
            background: white;
            box-shadow: 0px 17px 18px -14px rgba(0, 0, 0, 0.08);
            span.t{
                left:16px;
                transition:left .4s;
            }
            i.l{
                top:12px;
                opacity:1;
                transition: left .3s 0s,top .3s .1s,opacity .3s .1s;
            }
        }
        &:hover .button_spots{
            @for $i from 1 through 19{
                &:nth-of-type(#{$i}){
                    animation: spot-#{$i} .7s .4/random(10) + random(10)/10 + s linear infinite;
                }
            }
            @for $i from 20 through 40{
                &:nth-of-type(#{$i}){
                    animation: spot-#{$i} .7s .4/random(10) + random(10)/10 + s linear infinite;
                }
            }
            @for $i from 40 through 46{
                &:nth-of-type(#{$i}){
                    animation: spot-#{$i} .7s .4/random(10) + random(10)/10 + s linear infinite;
                }
            }
            @for $i from 46 through 54{
                &:nth-of-type(#{$i}){
                    animation: spot-#{$i} .7s .4/random(10) + random(10)/10 + s linear infinite;
                }
            }
        }
    }
}

@for $i from 1 through 20{
    @keyframes spot-#{$i}{
        from{opacity:0;}
        to{transform:translateY(30px) translatex(-20px + $i*2);opacity:.6;}
    }
}
@for $i from 20 through 40{
    @keyframes spot-#{$i}{
        from{opacity:0;}
        to{transform:translateY(-30px) translatex(-50px + $i*2);opacity:.6;}
    }
}
@for $i from 40 through 45{
    @keyframes spot-#{$i}{
        from{opacity:0;}
        to{transform:translateY(-86px + $i*2) translatex(40px);opacity:.6;}
    }
}
@for $i from 46 through 54{
    @keyframes spot-#{$i}{
        from{opacity:0;}
        to{transform:translateY(-99px + $i*2) translatex(-40px);opacity:.6;}
    }
}

@keyframes opacity{
    from{}
    to{opacity:0;}
}

@keyframes rotate{
    from{opacity:.8}
    to{transform:rotate(360deg);opacity:.8}
}

@keyframes down{
    from{left:10px;}
    to{left:57px;}
}

@keyframes spew{
    from{opacity:0;}
    to{opacity:0.8;}
}

@keyframes final{
    from{opacity:1;}
    to{opacity:0;}
}
@keyframes finalbox{
    from{}
    to{width:50px;}
}
@keyframes tick{
    from{}
    to{transform:scale(1) rotate(-90deg)}
}
<!-- https://twitter.com/avstorm/status/1620087443927228417 -->
<div class="voltage-button">
  
  <button>Button</button>
  
  <!-- SVG Party -->
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 234.6 61.3" preserveAspectRatio="none" xml:space="preserve">
    <filter id="glow">
      <fegaussianblur class="blur" result="coloredBlur" stddeviation="2"></fegaussianblur>
      <feTurbulence type="fractalNoise" baseFrequency="0.075" numOctaves="0.3" result="turbulence"></feTurbulence>
  <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="G" result="displace"></feDisplacementMap>
      <femerge>
        <femergenode in="coloredBlur"></femergenode>
        <femergenode in="coloredBlur"></femergenode>
        <femergenode in="coloredBlur"></femergenode>
        <femergenode in="displace"></femergenode>
        <femergenode in="SourceGraphic"></femergenode>
      </femerge>
    </filter>
    <path class="voltage line-1" d="m216.3 51.2c-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 6.8-7.3 6.8-3.7 0-3.7-4.6-7.3-4.6-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-0.9-7.3-0.9-3.7 0-3.7-2.7-7.3-2.7-3.7 0-3.7 7.8-7.3 7.8-3.7 0-3.7-4.9-7.3-4.9-3.7 0-3.7-7.8-7.3-7.8-3.7 0-3.7-1.1-7.3-1.1-3.7 0-3.7 3.1-7.3 3.1-3.7 0-3.7 10.9-7.3 10.9-3.7 0-3.7-12.5-7.3-12.5-3.7 0-3.7 4.6-7.3 4.6-3.7 0-3.7 4.5-7.3 4.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-10-7.3-10-3.7 0-3.7-0.4-7.3-0.4-3.7 0-3.7 2.3-7.3 2.3-3.7 0-3.7 7.1-7.3 7.1-3.7 0-3.7-11.2-7.3-11.2-3.7 0-3.7 3.5-7.3 3.5-3.7 0-3.7 3.6-7.3 3.6-3.7 0-3.7-2.9-7.3-2.9-3.7 0-3.7 8.4-7.3 8.4-3.7 0-3.7-14.6-7.3-14.6-3.7 0-3.7 5.8-7.3 5.8-2.2 0-3.8-0.4-5.5-1.5-1.8-1.1-1.8-2.9-2.9-4.8-1-1.8 1.9-2.7 1.9-4.8 0-3.4-2.1-3.4-2.1-6.8s-9.9-3.4-9.9-6.8 8-3.4 8-6.8c0-2.2 2.1-2.4 3.1-4.2 1.1-1.8 0.2-3.9 2-5 1.8-1 3.1-7.9 5.3-7.9 3.7 0 3.7 0.9 7.3 0.9 3.7 0 3.7 6.7 7.3 6.7 3.7 0 3.7-1.8 7.3-1.8 3.7 0 3.7-0.6 7.3-0.6 3.7 0 3.7-7.8 7.3-7.8h7.3c3.7 0 3.7 4.7 7.3 4.7 3.7 0 3.7-1.1 7.3-1.1 3.7 0 3.7 11.6 7.3 11.6 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-12.9 7.3-12.9 3.7 0 3.7 10.9 7.3 10.9 3.7 0 3.7 1.3 7.3 1.3 3.7 0 3.7-8.7 7.3-8.7 3.7 0 3.7 11.5 7.3 11.5 3.7 0 3.7-1.4 7.3-1.4 3.7 0 3.7-2.6 7.3-2.6 3.7 0 3.7-5.8 7.3-5.8 3.7 0 3.7-1.3 7.3-1.3 3.7 0 3.7 6.6 7.3 6.6s3.7-9.3 7.3-9.3c3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7 8.5 7.3 8.5 3.7 0 3.7 0.2 7.3 0.2 3.7 0 3.7-1.5 7.3-1.5 3.7 0 3.7 1.6 7.3 1.6s3.7-5.1 7.3-5.1c2.2 0 0.6 9.6 2.4 10.7s4.1-2 5.1-0.1c1 1.8 10.3 2.2 10.3 4.3 0 3.4-10.7 3.4-10.7 6.8s1.2 3.4 1.2 6.8 1.9 3.4 1.9 6.8c0 2.2 7.2 7.7 6.2 9.5-1.1 1.8-12.3-6.5-14.1-5.5-1.7 0.9-0.1 6.2-2.2 6.2z" fill="transparent" stroke="#fff"/>
    <path class="voltage line-2" d="m216.3 52.1c-3 0-3-0.5-6-0.5s-3 3-6 3-3-2-6-2-3 1.6-6 1.6-3-0.4-6-0.4-3-1.2-6-1.2-3 3.4-6 3.4-3-2.2-6-2.2-3-3.4-6-3.4-3-0.5-6-0.5-3 1.4-6 1.4-3 4.8-6 4.8-3-5.5-6-5.5-3 2-6 2-3 2-6 2-3 1.6-6 1.6-3-4.4-6-4.4-3-0.2-6-0.2-3 1-6 1-3 3.1-6 3.1-3-4.9-6-4.9-3 1.5-6 1.5-3 1.6-6 1.6-3-1.3-6-1.3-3 3.7-6 3.7-3-6.4-6-6.4-3 2.5-6 2.5h-6c-3 0-3-0.6-6-0.6s-3-1.4-6-1.4-3 0.9-6 0.9-3 4.3-6 4.3-3-3.5-6-3.5c-2.2 0-3.4-1.3-5.2-2.3-1.8-1.1-3.6-1.5-4.6-3.3s-4.4-3.5-4.4-5.7c0-3.4 0.4-3.4 0.4-6.8s2.9-3.4 2.9-6.8-0.8-3.4-0.8-6.8c0-2.2 0.3-4.2 1.3-5.9 1.1-1.8 0.8-6.2 2.6-7.3 1.8-1 5.5-2 7.7-2 3 0 3 2 6 2s3-0.5 6-0.5 3 5.1 6 5.1 3-1.1 6-1.1 3-5.6 6-5.6 3 4.8 6 4.8 3 0.6 6 0.6 3-3.8 6-3.8 3 5.1 6 5.1 3-0.6 6-0.6 3-1.2 6-1.2 3-2.6 6-2.6 3-0.6 6-0.6 3 2.9 6 2.9 3-4.1 6-4.1 3 0.1 6 0.1 3 3.7 6 3.7 3 0.1 6 0.1 3-0.6 6-0.6 3 0.7 6 0.7 3-2.2 6-2.2 3 4.4 6 4.4 3-1.7 6-1.7 3-4 6-4 3 4.7 6 4.7 3-0.5 6-0.5 3-0.8 6-0.8 3-3.8 6-3.8 3 6.3 6 6.3 3-4.8 6-4.8 3 1.9 6 1.9 3-1.9 6-1.9 3 1.3 6 1.3c2.2 0 5-0.5 6.7 0.5 1.8 1.1 2.4 4 3.5 5.8 1 1.8 0.3 3.7 0.3 5.9 0 3.4 3.4 3.4 3.4 6.8s-3.3 3.4-3.3 6.8 4 3.4 4 6.8c0 2.2-6 2.7-7 4.4-1.1 1.8 1.1 6.7-0.7 7.7-1.6 0.8-4.7-1.1-6.8-1.1z" fill="transparent" stroke="#fff"/>
  </svg>
  <div class="dots">
    <div class="dot dot-1"></div>
    <div class="dot dot-2"></div>
    <div class="dot dot-3"></div>
    <div class="dot dot-4"></div>
    <div class="dot dot-5"></div>
  </div>
</div>