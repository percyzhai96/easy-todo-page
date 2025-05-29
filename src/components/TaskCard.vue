<template>
  <div class="card_box">
    <div class="left_img">
      <img
        v-if="choice === 'code'"
        src="../assets/taskImg/codeTask.svg"
        alt=""
      />
      <img
        v-if="choice === 'computer'"
        src="../assets/taskImg/computer.svg"
        alt=""
      />
      <img
        v-if="choice === 'meditation'"
        src="../assets/taskImg/meditation.svg"
        alt=""
      />
      <img v-if="choice === 'music'" src="../assets/taskImg/music.svg" alt="" />
      <img
        v-if="choice === 'read'"
        src="../assets/taskImg/readTask.svg"
        alt=""
      />
      <div v-if="choice === 'practice'" class="imgStyle">
        <img src="../assets/taskImg/practiceTask.svg" alt="" />
      </div>
    </div>
    <div class="right_content">
      <div class="right_inner_left">
        <div>{{ titleName }}</div>
        <div>{{ timeGap }}</div>
      </div>
      <div class="right_inner_right">
        <img
          v-if="statuImg === 'open'"
          src="../assets/taskImg/open.svg"
          alt=""
        />
        <img v-else src="../assets/taskImg/close.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskCard',
  props: {
    titleName: {
      type: String,
      default: '',
    },
    timeGap: {
      type: String,
      default: '',
    },
    choice: {
      type: String,
      default: 'code',
    },
    statuImg: {
      type: String,
      default: 'close',
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.card_box {
  width: 100%;
  height: 80px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 16px 20px;
}
.imgStyle {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background: linear-gradient(180deg, #ffa556 -3%, #f3913b 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.left_img {
  width: 48px;
  height: 48px;
}
.right_content {
  flex-basis: calc(100% - 48px);
  height: 48px;
  margin-left: 16px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right_inner_left {
  height: 48px;
  flex-basis: 79px;
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: column;
  flex-grow: 1;
}
.right_inner_left > div:nth-child(1) {
  width: 100%;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: normal;
  color: #4c4c4c;
  text-align: left;
}
.right_inner_left > div:nth-child(2) {
  width: 100%;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #8a8a8a;
  text-align: left;
}
.right_inner_right {
  width: 36px;
  height: 36px;
}
</style>
