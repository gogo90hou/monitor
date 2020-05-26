<template>
  <div class="bar-container">
    <div class="bar" :style="{height:score+'%'}">{{ score }}分</div>
    <div class="score">{{ score }}分</div>
    <div class="wave" :style="{bottom:`calc(${score}% - 25px)`}">
      <div class="wave1"></div>
      <div class="wave2"></div>
    </div>
    <div class="bubble">
      <div
        v-for="(item,index) in bubbleList"
        :key="index"
        v-animation="item"
        class="dot"
        :style="{top:`calc(100% - ${score}%)`,width:item.size + 'px',height:item.size + 'px',left:item.positionX + '%',transitionDuration:`${item.speed}s`}"
      >{{ item.id }}</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bar-container {
  border: 1px solid #47c8f4;
  width: 50px;
  height: 60%;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  margin: auto;
}
.bar {
  width: 50px;
  position: absolute;
  bottom: 0;
  z-index: 2;
  background: linear-gradient(
    180deg,
    rgba(107, 233, 254, 1) 0%,
    rgba(84, 102, 224, 1) 100%
  );
}
.score {
  width: 50px;
  position: absolute;
  bottom: 1%;
  z-index: 3;
  font-size: 14px;
  color: #fff;
}
.bubble {
  .dot {
    position: absolute;
    border-radius: 100%;
    background-color: rgba(107, 233, 254, 1);
    // transition: all 1s;
    transition-property: all;
    transition-timing-function: linear;
  }
}
.wave {
  position: absolute;
  width: 100%;
  height: 50px;
  line-height: 50px;
  z-index: 1;
  margin: 0 auto;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  animation: water-wave linear infinite;
}
.wave1 {
  position: absolute;
  top: 40%;
  left: -25%;
  background: rgba(107, 233, 254, 1);
  opacity: 0.7;
  width: 150%;
  height: 150%;
  border-radius: 60%;
  animation: inherit;
  animation-duration: 5s;
}
.wave2 {
  position: absolute;
  top: 40%;
  left: -35%;
  background: rgba(107, 233, 254, 0.8);
  opacity: 0.7;
  width: 200%;
  height: 200%;
  border-radius: 35%;
  animation: inherit;
  animation-duration: 7s;
}
@keyframes water-wave {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<script>
export default {
  directives: {
    animation: {
      inserted: function (el, bingind, vnode) {
        setTimeout(() => {
          el.style.top = '-10px';
        })
      }
    }
  },
  props: {
    score: {
      default: 0,
      type: Number
    }
  },
  data () {
    return {
      bubbleList: []
    }
  },
  created () {
    // this.init();
  },
  methods: {
    init () {
      for (let i = 0; i < 4; i++) { this.creatDot(); }
    },
    creatDot () {
      const obj = {
        size: this.randomNum(4, 6),
        positionX: this.randomNum(2, 98),
        speed: this.randomNum(3, 5)
      }
      this.bubbleList.push(obj);
      setTimeout(() => {
        if (this.bubbleList.length > 100) {
          this.bubbleList = [];
          this.init();
        } else {
          this.creatDot();
        }
      }, obj.speed * 1000)
    },
    randomNum (minNum, maxNum) {
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
    }
  }
}
</script>
