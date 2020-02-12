<template>
    <section style="background:#eee">
        <Card :bordered="false" title="客户管理">
            <!-- <p slot="title"></p> -->
            <section style="margin-bottom: 10px">
                <Button type="primary" style="margin-right: 20px" @click="handleAdd">新增</Button>
                <Button type="primary" style="margin-right: 20px" @click="handleUpdate">修改</Button>
                <Button type="error"  @click="handleDelete">删除</Button>
            </section>
            <Table :columns="columns1" :data="data1" highlight-row @on-current-change="handleSelect" ref="currentRowTable"></Table>
            <section style="text-align: center; margin-top: 10px ">
              <!-- 共计{{pagination.total}}记录,第{{pagination.current}}页 -->
              <Page :total="pagination.total" :page-size="pagination.pageSize" @on-change="handleTableChange" :current="pagination.current" show-total />
            </section>
            <CommonModal :modalVisible="modal1" @handleOk="handleOk" @handleCancel="handleCancel" :flag="flag" :data="currentRow" />
        </Card>
    </section>
</template>
<script>
import { getUserInfo, OptUser } from '../../../api/api';
import moment from 'moment';
import { isRespSucc, showErrorMsg } from '../../../utils/util';
import CommonModal from './modal.vue';
export default {
 components: {
  CommonModal
 },
 data () {
  return {
   modal1: false,
   modal2: false,
   flag: false,
   selectedRow: '',
   currentRow: {},
   formItem: {
    name: '',
    age: '',
    address: ''
   },
   pagination: {
    total: 0,
    pageSize: 10,
    current: 1
   },
   formInline: {
    user: '',
    password: ''
   },
   ruleInline: {
    user: [
     { required: true, message: 'Please fill in the user name', trigger: 'blur' }
    ],
    password: [
     { required: true, message: 'Please fill in the password.', trigger: 'blur' },
     { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
    ]
   },
   columns1: [
    {
     title: 'ID',
     key: 'id'
    },
    {
     title: '姓名',
     key: 'name'
    },
    {
     title: '性别',
     key: 'sex',
     render: (h, params) => {
      const sexData = params.row.sex;
      if (sexData === '1') {
       return h('span', '男');
      } else {
       return h('span', '女');
      }
     }
    },
    {
     title: '编号',
     key: 'idnumber'
    },
    {
     title: '描述',
     key: 'description'
    },
    {
     title: '生日',
     key: 'birthdate',
     render: (h, params) => {
      return h('span', params.row.birthdate && moment(params.row.birthdate).format('YYYY-MM-DD'));
     }
    },
    {
     title: '链接',
     key: 'opreate',
     render: (h, params) => {
      return h('a', {
       // attrs: {
       //   href: 'xx'
       // },
       on: {
        click: () => {
         this.turnToPage(params.row.id);
        }
       },
       class: {
        siteUrl: true
       }
      }, '详情');
     }
    }
   ],
   data1: []
  };
 },
 methods: {
  handleSubmit (name) {
   this.$refs[name].validate((valid) => {
    if (valid) {
     this.$Message.success('Success!');
    } else {
     this.$Message.error('Fail!');
    }
   });
  },
  handleOk (data) {
   const formData = data;
   const apimesFlag = this.flag
    ? { apiFlag: 'update', mes: '数据更新成功' }
    : { apiFlag: 'add', mes: '数据新增成功' };
   OptUser({ ...formData, flag: apimesFlag.apiFlag }).then((res) => {
    console.log(res);
    const ds = res.data;
    if (!isRespSucc(ds)) {
     showErrorMsg(ds);
    } else {
     this.$Message.info(apimesFlag.mes);
     this.modal1 = false;
     this.init({
      pageSize: 10,
      pageNum: 1
     });
    }
   });
  },
  handleCancel () {
   this.modal1 = false;
   if (this.currentRow) {
    this.handleClearCurrentRow();
   }
   if (this.flag) {
    this.flag = false;
   }
  },
  handleAdd () {
   this.modal1 = true;
   this.flag = false;
  },
  handleDelete () {
   if (this.selectedRow === '') {
    this.$Message.warning('请选择一条有效数据');
   } else {
    this.$Modal.confirm({
     title: `确定删除用户名为【${this.currentRow.name}】这条数据吗`,
     onOk: () => {
      this.sureDelete();
     },
     onCancel: () => {
      this.$Message.info('取消删除');
      this.handleClearCurrentRow();
     }
    });
   }
  },
  sureDelete () {
   OptUser({ id: this.selectedRow, flag: 'delete' }).then((res) => {
    const ds = res.data;
    if (ds.code === 200) {
     this.$Message.info('数据删除成功');
     this.modal1 = false;
     this.init({
      pageNum: 1,
      pageSize: 10
     });
    }
   });
  },
  handleUpdate () {
   if (this.selectedRow === '') {
    this.$Message.warning('请选择一条有效数据');
   } else {
    this.modal1 = true;
    this.flag = true;
   }
  },
  handleSelect (currentRow, oldCurrentRow) {
   if (currentRow) {
    this.selectedRow = currentRow.id;
    this.currentRow = currentRow;
    this.formItem = currentRow;
   }
  },
  geTableData () {
   const paras = {
    pageNum: 1,
    pageSize: 10
   };
   // getUserInfo(paras).then((res) => {
   //   console.log(res);
   //   const ds = res.data;
   //   this.data1 = ds.data.dataSource;
   //   this.pagination = ds.data.pagination;
   // });
   this.init(paras);
  },
  handleTableChange (data) {
   console.log(data);
   const paras = {
    pageNum: data,
    pageSize: 10
   };
   this.init(paras);
   if (this.selectedRow) {
    this.selectedRow = '';
   }
  },
  init (paras) {
   // this.$Loading.start();
   // this.$Spin.show();
   getUserInfo(paras).then((res) => {
    // this.$Loading.finish();
    // this.$Spin.hide();
    if (!isRespSucc(res.data)) {
     showErrorMsg(res.data);
    }
    const ds = res.data;
    this.data1 = ds.data.dataSource;
    this.pagination = ds.data.pagination;
   });
  },
  turnToPage (id) {
   // alert(id);
   this.$router.push({ name: 'managedetail', params: { id } });
  },
  handleClearCurrentRow () {
   if (this.selectedRow) {
    this.selectedRow = '';
    this.currentRow = {};
   }
   this.$refs.currentRowTable.clearCurrentRow(); // 调用 clearCurrentRow 方法可以手动清除选中项。
  }
 },
 mounted () {
  this.geTableData();
 }
};
</script>
