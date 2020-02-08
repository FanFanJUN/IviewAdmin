<!--  -->
<template>
  <Card style="height: 100%" title="查询列表">
    <!-- <Form :test="xx" @showData="showData"></Form> -->
    <!-- <p slot="title">查询列表</p> -->
    <div style="margin-bottom: 20px">
      <!-- {{this.test}} -->
      <Button type="primary" @click="showData" style="margin-right: 10px"><Icon type="ios-add" />新增</Button>
      <Button type="error" @click="delData">删除</Button>
    </div>
    <Table :columns="columns" :data="data"></Table>
    <div style="float: right; margin-top: 20px">
      <!-- <Page :total="getTotal()" /> -->
      总共{{getTotal()}}
      <Page :total="pagination.total" :page-size="pagination.pageSize" @on-change="handleTableChange" />
    </div>
    <Modal :modalVisible="modalVisible" @handleCancel="handleCancel" @handleOk="handleOk" />
  </Card>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import Form from './form';
import Modal from './modal';
import { getTableData } from '../../../api/data';
export default {
 // import引入的组件需要注入到对象中才能使用
 components: {
  Form,
  Modal
 },
 data () {
  // 这里存放数据
  return {
   xx: '测试',
   total: 12,
   pagination: {
    current: 1,
    total: 0,
    pageSize: 10
   },
   modalVisible: false,
   columns: [
    {
     title: '字典码',
     key: 'dictionaryNo'
    },
    {
     title: '字典类型',
     key: 'dictionaryCategoryNo'
    },
    {
     title: '字典名字',
     key: 'dictionaryNm'
    },
    {
     title: '字典类型名称',
     key: 'dictionaryCategoryNm'
    },
    {
     title: '操作',
     key: 'oprate',
     align: 'center',
     // 传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引
     render: (h, params) => {
      return h('div', [
       h('Button', {
        style: {
         marginRight: '5px',
         'margin-left': '5px',
         'background': '#f56c6c',
         color: '#fff',
         'padding': '2px 8px'
        },
        on: {
         click: () => {
          this.$Modal.confirm({
           title: '确认删除',
           content: '<p>是否确认删除？</p>',
           onOk: () => {
            this.remove(params.index);
           },
           onCancel: () => {
            this.$Message.info('取消删除');
           }
          });
         }
        }
       }, '删除')
      ]);
     }
    }
   ],
   data: [
    // {
    //   name: 'John Brown',
    //   age: 18,
    //   address: 'New York No. 1 Lake Park',
    //   date: '2016-10-03'
    // },
    // {
    //   name: 'Jim Green',
    //   age: 24,
    //   address: 'London No. 1 Lake Park',
    //   date: '2016-10-01'
    // },
    // {
    //   name: 'Joe Black',
    //   age: 30,
    //   address: 'Sydney No. 1 Lake Park',
    //   date: '2016-10-02'
    // },
    // {
    //   name: 'Jon Snow',
    //   age: 26,
    //   address: 'Ottawa No. 2 Lake Park',
    //   date: '2016-10-04'
    // }
   ]
  };
 },
 // 监听属性 类似于data概念
 computed: {},
 // 监控data中的数据变化
 watch: {},
 // 方法集合
 methods: {
  showData () {
   console.log(this.modalVisible);
   this.modalVisible = true;
  },
  getTotal () {
   return this.pagination.total;
  },
  getData () {
   const param = this.pagination;
   //  getTableData(param).then((res) => {
   //   // this.pagination.total = res.data.total;
   //   // this.data = res.data.users;
   //   const ds = res.data;
   //   this.data = ds.data.dataSource;
   //   this.pagination = ds.data.pagination;
   //  });
   this.init(param);
  },
  handleTableChange (data) {
   console.log(data);
   const paras = {
    pageNum: data,
    pageSize: 10
   };
   this.init(paras);
  },
  init (param) {
   getTableData(param).then((res) => {
    // this.pagination.total = res.data.total;
    // this.data = res.data.users;
    const ds = res.data;
    this.data = ds.data.dataSource;
    this.pagination = ds.data.pagination;
   });
  },
  handleCancel (data) {
   console.log(data);
   this.modalVisible = data;
  },
  handleOk (data) {
   this.data.push(data);
   if (data) {
    this.$Message['success']({
     background: true,
     content: '新增成功'
    });
    this.modalVisible = false;
   }
  }
 },
 // 生命周期 - 创建完成（可以访问当前this实例）
 created () {},
 // 生命周期 - 挂载完成（可以访问DOM元素）
 mounted () {
  this.getData();
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
