<template>
<div class="ui fixed inverted borderless menu">
    <div class="header item">
        <span class="name">
            <i class="file text icon"></i>
            <span style="color:rgb(255,221,13)">Harshul Shukla</span>
        </span>
    </div>
    <router-link to="/education">
        <a class="brown item navItem">{{itemOne}}</a>
    </router-link>
    <router-link to="/experience">
        <a class="item navItem">{{itemTwo}}</a>
    </router-link>
    <router-link to="/projects">
        <a class="item navItem">{{itemThree}}</a>
    </router-link>
    <router-link to="/contact">
        <a class="item navItem">{{itemFour}}</a>
    </router-link>
    <div class="right ui inverted menu">
        <a class="item" href="https://github.com/HarshulShuk">
            <i class="large github icon"></i>
        </a>
    </div>
</div>
</template>

<style scoped>
.menu{
	background-color:black; 
	height:60px;
	border-radius: 0px;
}

.name{
	margin-left: 10px;
	margin-right:25px;
	font-size: 15px;
	font-weight: bolder;
	font-family: Verdana;
}

.navItem{
	margin-top: 11px;
}

.info{
	margin-top: 60px;
}
</style>

<script>
export default {
  data () {
    return {
      itemOne: 'Education',
      itemTwo: 'Experience',
      itemThree: 'Projects',
      itemFour: 'Contact'
    }
  }
}
</script>