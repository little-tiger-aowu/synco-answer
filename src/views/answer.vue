<template>
    <div class="answer1-box">
        <div class="answer-item">
            <div class="options-item">
                <div>{{answerList[index].answerName}}</div>
                <div class="options">
                    <el-checkbox-group v-model="checkboxGroup1">
                        <el-checkbox-button v-for="(value,key1) in answerList[index].optiones" :label="key1" :key="key1">{{key1}}、{{value}}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
            </div>
        </div>
        <div class="right-box" v-if="isSumit">
            <div>正确答案：{{answerList[index].correct}}</div>
            <span>解析：{{answerList[index].parsing}}</span><br>
            <span v-if="answerList[index].coupe">小知识科普：{{answerList[index].coupe}}</span>
            <img v-if="answerList[index].coupe" style="width: 100%" src="../assets/images/aaa.png" alt="">
        </div>
<!--        <div @click="sumbit()" class="btn-box">-->
<!--            <span>提交</span>-->
<!--        </div>-->
        <el-button @click="sumbit()" class="btn-box" v-show="showSumit" type="primary">提交</el-button>
        <el-button type="primary" class="btn-box" v-show="isload" :loading="true">加载中</el-button>
        <el-button type="success" class="btn-box" @click="nextAnswer()" v-show="nextanswer">下一题</el-button>
    </div>
</template>

<script>
    export default {
        name: "answer1",
        data(){
            return{
               index:0,
               isSumit:false,
               isload:false,
               nextanswer:false,
               showSumit:true,
               checkboxGroup1:[],
               answerList:[
                   {
                       answerName:"1. 全新Thermo Scientific ™ 1500系列生物安全柜的外观升级包含以下哪些（不定项选择）",
                       optiones:{
                           A:"外部涂层",
                           B:"动画显示及触摸操作界面",
                           C:"可选配的密封背板",
                           D:"可选配的脚轮支架",
                       },
                       correct:"BCD",
                       parsing:"全系列赛默飞生物安全柜均采用喷粉涂层，可耐受污染，刮擦及消毒。全新上市的Thermo Scientific ™ 1500系列生物安全柜延用高端2030i系列设计，" +
                           "搭载GUI动画显示触摸屏。该系列支持选配密封背板，旨在满足企业对于防污染和易清洁的要求；支持选配脚轮支架，帮助满足部分客户对安全柜移动便捷性的要求。"
                   },
                   {
                       answerName:"2. 全新Thermo Scientific ™ 1500系列生物安全柜的安全性能升级包含以下哪些选项（不定项选择）：",
                       optiones:{
                           A:"硅胶条密封，防止紫外泄",
                           B:"升级的玻璃窗限位设计",
                           C:"升级的紫外灯，保证安全照射强度",
                           D:"升级过滤器，采用U15等级HEPA过滤膜",
                       },
                       correct:"ABC",
                       parsing:"全新上市的 Thermo Scientific ™  1500系列生物安全柜在前窗玻璃和柜体间增加了硅胶密封条，防止紫外照射光外泄对操作者，PVC地板等造成伤害。" +
                           "1500系列新升级了玻璃窗限位器，推拉到位时的“咔嗒”确认提示音，让您对实验安全更有信心。不止于此，该系列升级的紫外线灯，在确保杀菌效果的同时，" +
                           "可以保证安全照射强度。1500系列采用的是过滤效率99.995%@MPPS符合EN1822 的H14等级的HEPA滤膜\n",
                       coupe:'HEPA过滤作为目前最有效的去除气溶胶的方法。其过滤效率99.995%@MPPS符合EN1822 的H14等级滤膜已经具有几十年的使用历史，有效性通过了验证。下图为不同等级的HEPA过滤膜的过滤效果及等级区分说明：'
                   },
                   {
                       answerName:"3. 全新Thermo Scientific ™ 1500系列生物安全柜的性能升级包含以下几项（不定项选择）：",
                       optiones:{
                           A:"定时紫外灯开闭",
                           B:"升级为LED照明",
                           C:"升级的SmartPort",
                           D:"升级的SmartClean",
                       },
                       correct:"ABC",
                       parsing:"全新的Thermo Scientific ™ 1500系列生物安全柜具备紫外灯的定时开关功能，更智能、更便捷。该系列升级为LED照明，极大延长了使用寿命，在提升安全保护和便捷性的同时，帮助客户持续降低运行成本。\n" +
                           "Thermo Scientific ™ SmartPort™为用户提供标准接入口用于接入废液收集管，探头等。该接口在1300系列，MSC系列等型号产品上也有配置，并非1500系列特有配置。\n" +
                           "Thermo Scientific ™ SmartClean™ 作为赛默飞安全柜的专利技术，可以在安全保护状态下清洁前窗内表面。该技术现已在多款型号产品中均已采用，并非1500系列特有配置。\n"
                   }
               ],
            }
        },
        methods:{
            sumbit(){
                if(this.checkboxGroup1.length){
                   this.$dialog.confirm({
                       title:"提交",
                       message:"确认提交？"
                   }).then(()=>{
                       let rightString =  this.checkboxGroup1.toString().replace(/,/g,'')
                       this.showSumit = false
                       this.isload = true
                       setTimeout(()=>{
                           this.isload = false
                           this.nextanswer = true
                           this.isSumit = true
                       },1000)
                       // if (rightString == this.answerList[this.index].correct){
                       //     this.isSumit = true
                       // }else{
                       //     console.log('错误')
                       // }
                   }).catch(()=>{
                       console.log('取消')
                   })
                }else {
                    console.log(123)
                }

            },
            nextAnswer(){
                console.log(this.answerList.length - 1,this.index)
                if (this.index != this.answerList.length - 1){
                    this.index += 1
                    this.checkboxGroup1 = []
                    this.isSumit= false,
                    this.isload= false,
                    this.nextanswer= false,
                    this.showSumit= true
                }else{
                    this.$router.push('/userForm')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .answer1-box{
        width: 100%;
        min-height: 80vh;
        background-color: #bebdbd;
        padding: 10vh 0;
        .answer-item{
            margin: 0 auto;
            width: 80%;
            background-image: url("../../src/assets/images/answer-item.png");
            background-size: 100% 100%;
            .options-item{
                padding: 30px 30px 10px 30px;
                .options{
                    margin: 15px 0;
                }
            }
        }
        .right-box{
            width: 90%;
            margin: 20px auto;
            font-size: 0.7em;
            line-height: 20px;
        }
        .btn-box{
            margin: 0 auto;
            width: 30%;
            border: 1px solid;
            display: flex;
            justify-content: center;
            text-align: center;
        }
    }
    /deep/ .el-checkbox-group{
        display: flex;
        flex-direction: column;
    }
    /deep/ .el-checkbox-button{
        margin: 1px 0;
    }
    /deep/ .el-checkbox-button__inner{
        width: 100%;
        text-align: start;
        white-space: unset;
        border-radius: 4px !important;
        padding: 10px;
    }
</style>