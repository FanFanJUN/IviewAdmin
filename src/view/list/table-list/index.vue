<!--  -->
<template>
  <Card style="height: 100%" title="查询列表">
    <Form :test="xx" @showData="showData"></Form>
    <!-- <p slot="title">查询列表</p> -->
    <div style="margin-bottom: 20px">
      <!-- {{this.test}} -->
      <Button type="primary" @click="showData">新增</Button>
    </div>
    <Table :columns="columns" :data="data"></Table>
    <div style="float: right; margin-top: 20px">
      <!-- <Page :total="getTotal()" /> -->
      <Page :total="pagination.total" />
    </div>
  </Card>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import Form from './form';
import { getTableData } from '../../../api/data';
export default {
  // import引入的组件需要注入到对象中才能使用
  components: {
    Form
  },
  data () {
    // 这里存放数据
    return {
      xx: '测试',
      total: 12,
      pagination: {
        pageNum: 1,
        total: 0
      },
      columns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
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
    showData (data) {
      alert(data);
    },
    getTotal () {
      return 200;
    },
    getData () {
      const param = {
        pageNum: this.pagination.pageNum
      };
      getTableData(param).then((res) => {
        // this.pagination.total = res.data.total;
        // this.data = res.data.users;
        console.log(res);
        this.data = res.data;
      });
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
