<template>
    <div class="lf-button-box" 
    @mousedown="changeBack('active')"
    @mouseup="changeBack('normal')"
    @mouseleave="changeBack('normal')"
    @click="activeEvent"
    :class="className"
    :style="{
            'color':color, 
            'background-color':backColor, 
            'border-color':backColor
    }">
        <span>
            <slot></slot>
        </span>
    </div>
</template>
<script>
export default {
   name:'LButton',
   props:{
       backColor:{
           type: String,
           default: '#fff'
       },
       color:{
           type:String,
           default:'#fff'
       }
   },
   data(){
       return{
           className:'normal'
       }
   },
   methods: {
       changeBack(style){
           this.className = style
       },
       activeEvent(val){
           this.$emit('active',val)
       }
   }
}
</script>
<style scoped lang="less">
    .lf-button-box{
      padding: 8px 16px;
      border: 1px solid #dcdfe6;
      border-radius: 3px;
      cursor: pointer;
      span :active{
          color: black
      }
    }
    .active {
        filter:brightness(1.3)
    }
    .normal {
        filter:brightness(1)
    }
</style>



