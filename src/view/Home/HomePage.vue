<template>
  <div>
    <LayoutArea :tileText="'当前任务'">
      <TaskCard
        :titleName="'今日任务'"
        :timeGap="'1小时25分钟'"
        :choice="'code'"
        :statuImg="'open'"
      />
    </LayoutArea>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style></style>
