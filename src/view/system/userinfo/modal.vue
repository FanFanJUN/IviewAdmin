<!--  -->
<template>
            <Modal
                v-model="modalVisible"
                :title="!flag? '用户新增': '用户修改'"
                :closable="false"
            >
                <Form :model="formItem" ref="formItem" :label-width="50" :rules="ruleValidate">
                  <section v-if="flag">
                    <FormItem label="ID" prop="name">
                        <Input v-model="formItem.id" :disabled="flag"/>
                    </FormItem>
                  </section>
                  <FormItem label="姓名" prop="name">
                    <Input v-model="formItem.name" placeholder="请输入姓名" :disabled="flag"/>
                 </FormItem>
                 <FormItem label="性别" prop="sex">
                    <Select v-model="formItem.sex" placeholder="请选择性别">
                        <Option v-for="item in sexList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                    </Select>
                 </FormItem>
                 <FormItem label="编号" prop="idnumber">
                    <Input v-model="formItem.idnumber" placeholder="请输入编号" :disabled="flag"/>
                 </FormItem>
                 <FormItem label="描述" prop="description">
                    <Input v-model="formItem.description" placeholder="请输入描述" :disabled="flag"/>
                 </FormItem>
                 <FormItem label="生日" prop="birthdate">
                    <DatePicker v-model="formItem.birthdate" type="date" placeholder="请选择日期" style="width: 100%" :disabled="flag"></DatePicker>
                 </FormItem>
                </Form>
                <div slot="footer">
                    <Button type="text" @click="cancel('formItem')">取消</Button>
                    <Button type="primary" @click="ok('formItem')">确定</Button>
                </div>
            </Modal>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import moment from 'moment';
export default {
// import引入的组件需要注入到对象中才能使用
 name: 'CommonModal',
 components: {},
 props: {
  modalVisible: {
   type: Boolean,
   default: false
  },
  flag: {
   type: Boolean,
   default: false
  },
  data: {
   type: Object,
   default: () => ({})
  }
 },
 data () {
  // const validatePhone = (rule, value, callback) => {
  //   if (!value) {
  //     callback(new Error('手机号不能为空'));
  //   } else if (!/^1[34578]\d{9}$/.test(value)) {
  //     callback('手机号格式不正确');
  //   } else {
  //     callback();
  //   }
  // };
  // 注意：在return外面
  // 这里存放数据
  return {
   formItem: {
    id: '',
    name: '',
    sex: '',
    description: '',
    idnumber: '',
    birthdate: ''
   },
   sexList: [
    {
     value: '1',
     label: '男'
    },
    {
     value: '2',
     label: '女'
    }
   ],
   ruleValidate: {
    birthdate: [
     { required: true, type: 'date', message: '生日不能为空', trigger: 'change' }
    ],
    id: [
     { required: true, message: '编号不能为空', trigger: 'change' }
     //   { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式不正确', trigger: 'change' }

     //   { validator: validatePhone, trigger: 'blur'}
    ],
    name: [
     { required: true, message: '姓名不能为空', trigger: 'change' }
    ],
    sex: [
     { required: true, message: '性别不能为空', trigger: 'change' }
    ]
   }
  };
 },
 // 监听属性 类似于data概念
 computed: {},
 // 监控data中的数据变化
 watch: {
  modalVisible (val) {
   if (val && this.flag) {
    this.formItem = this.data;
   }
  }
 },
 // 方法集合
 methods: {
  ok (name) {
   this.$refs[name].validate((valid) => {
    if (valid) {
     const formData = {
      ...this.formItem,
      birthdate: moment(this.formItem.birthdate).format('YYYYMMDD')
     };
     this.$emit('handleOk', formData);
     this.$refs[name].resetFields();
     //   this.formItem = {};
    }
   });
  },
  cancel (name) {
   this.$refs[name].resetFields(); // 清空表单
   //   this.formItem = {};
   this.$emit('handleCancel');
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
