<!--  -->
<template>
    <Modal
        v-model="modalVisible"
        title="新增"
        @on-ok="handleOk"
        @on-cancel="handlecancel"
    >
    <Form :model="formItem" :label-width="80">
        <FormItem label="姓名">
            <Input v-model="formItem.name" placeholder="请输入姓名"/>
        </FormItem>
        <FormItem label="年龄">
            <Input v-model="formItem.age" placeholder="请输入年龄"/>
        </FormItem>
        <FormItem label="地址">
            <Select v-model="formItem.address">
                <Option value="NewYork">New York</Option>
                <Option value="London">London</Option>
                <Option value="Sydney">Sydney</Option>
            </Select>
        </FormItem>
        <!-- <FormItem label="DatePicker">
            <Row>
                <Col span="11">
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                </Col>
                <Col span="2" style="text-align: center">-</Col>
                <Col span="11">
                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem label="Radio">
            <RadioGroup v-model="formItem.radio">
                <Radio label="male">Male</Radio>
                <Radio label="female">Female</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Checkbox">
            <CheckboxGroup v-model="formItem.checkbox">
                <Checkbox label="Eat"></Checkbox>
                <Checkbox label="Sleep"></Checkbox>
                <Checkbox label="Run"></Checkbox>
                <Checkbox label="Movie"></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="Switch">
            <i-switch v-model="formItem.switch" size="large">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </i-switch>
        </FormItem>
        <FormItem label="Slider">
            <Slider v-model="formItem.slider" range></Slider>
        </FormItem>
        <FormItem label="Text">
            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
        </FormItem>
        <FormItem>
            <Button type="primary">Submit</Button>
            <Button style="margin-left: 8px">Cancel</Button>
        </FormItem> -->
    </Form>
    </Modal>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
// import引入的组件需要注入到对象中才能使用
 components: {},
 props: {
  modalVisible: {
   type: Boolean,
   default: false
  }
 },
 data () {
  // 这里存放数据
  return {
   formItem: {
    address: '',
    name: '',
    age: ''
    // select: '',
    // radio: 'male',
    // checkbox: [],
    // switch: true,
    // date: '',
    // time: '',
    // slider: [20, 50],
    // textarea: ''
   }
  };
 },
 // 监听属性 类似于data概念
 computed: {
 },
 // 监控data中的数据变化
 watch: {},
 // 方法集合
 methods: {
  handleOk () {
   this.$emit('handleOk', this.formItem);
  },
  handlecancel () {
   this.$emit('handleCancel', false);
  }
 },
 // 生命周期 - 创建完成（可以访问当前this实例）
 created () {

 },
 // 生命周期 - 挂载完成（可以访问DOM元素）
 mounted () {

 },
 beforeCreate () {}, // 生命周期 - 创建之前
 beforeMount () {}, // 生命周期 - 挂载之前
 beforeUpdate () {}, // 生命周期 - 更新之前
 updated () {}, // 生命周期 - 更新之后
 beforeDestroy () {}, // 生命周期 - 销毁之前
 destroyed () {}, // 生命周期 - 销毁完成
 activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
