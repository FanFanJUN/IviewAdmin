# Vue爬坑之路
#### [Vue学习看这篇就够](https://juejin.im/entry/5a54b747518825734216c3df)
- 先在data中声明数据，再使用数据
- {{}} 数据绑定
- v-bind 属性值绑定   v-on 事件绑定 v-model 双向数据绑定
- 实例生命周期
#### [Vue代码片段  快速创建Vue模板](https://www.jianshu.com/p/8e186a2a31a1)

```
{
    "Print to console": {
        "prefix": "vue",
        "body": [
            "<!-- $1 -->",
            "<template>",
            "<div class='$2'>$5</div>",
            "</template>",
            "",
            "<script>",
            "//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）",
            "//例如：import 《组件名称》 from '《组件路径》';",
            "",
            "export default {",
            "//import引入的组件需要注入到对象中才能使用",
            "components: {},",
            "data() {",
            "//这里存放数据",
            "return {",
            "",
            "};",
            "},",
            "//监听属性 类似于data概念",
            "computed: {},",
            "//监控data中的数据变化",
            "watch: {},",
            "//方法集合",
            "methods: {",
            "",
            "},",
            "//生命周期 - 创建完成（可以访问当前this实例）",
            "created() {",
            "",
            "},",
            "//生命周期 - 挂载完成（可以访问DOM元素）",
            "mounted() {",
            "",
            "},",
            "beforeCreate() {}, //生命周期 - 创建之前",
            "beforeMount() {}, //生命周期 - 挂载之前",
            "beforeUpdate() {}, //生命周期 - 更新之前",
            "updated() {}, //生命周期 - 更新之后",
            "beforeDestroy() {}, //生命周期 - 销毁之前",
            "destroyed() {}, //生命周期 - 销毁完成",
            "activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发",
            "}",
            "</script>",
            "<style lang='scss' scoped>",
            "//@import url($3); 引入公共css类",
            "$4",
            "</style>"
        ],
        "description": "Log output to console"
    }
}
```
#### [iview render函数(或者slot-scope 写法。在 columns 的某列声明 slot 后，就可以在 Table 的 slot 中使用 slot-scope。)](https://juejin.im/post/5ae3ec90f265da0b7d0b20c2)

```
columns: [
    {
      type: 'selection',
      width: 60,
      align: 'center'
    },
    {
      title: '排序值',
      key: 'sortOrder',
      align: 'center'
    },
    {
      title: '品牌链接',
      key: 'siteUrl',
      align: 'center',
      render: (h, params) => {
        return h('a', {
          attrs: {
            href: params.row.siteUrl,
          },
          class:{
            siteUrl: true,
          }
        }, params.row.siteUrl);
      }
    },
    {
      title: '操作',
      align: 'center',
      render: (h, params) => {
        let row = params.row;
        return h('div', [
          h('Button', {
            props: {
              type: 'ghost',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
                this.toCheckDetails(row.id);
              }
            }
          }, '查看'),
          h('Button', {
            props: {
              type: 'ghost',
              size: 'small'
            },
            style: {
              marginRight: '5px'
            },
            on: {
              click: () => {
                this.toEdit(row.id);
              }
            }
          }, '编辑')
        ]);
      }
    }
  ]

```
#### [使用 vue-router跳转页面](https://www.cnblogs.com/wisewrong/p/6277262.html)

```
// 字符串
this.$router.push('/home/first')

// 对象
this.$router.push({ path: '/home/first' })

// 命名的路由 在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push
this.$router.push({ name: 'home', params: { id: wise }})

// 路由定义 这种路由上加上参数会暴露参数（可以不加）
{ 
    path: '/home/:id',
    component: Home
}
// 取值
$route.params.id
```
#### 自定义组件
[iview 如何在非组件js文件中使用组件,例如Spin
](https://blog.csdn.net/zshsats/article/details/80842312)
```
/**
   * @description 错误信息||错误码 自定义iview组件
   * @author LC@1981824361
   * @date 2020-02-12
   * @export
   * @param {*} response
   * @returns
   */
export function showErrorMsg (response) {
  if (response == null) {
    return;
  }
  iView.Modal.error({
    render: (h) => {
      return h('div', {
        style: {
          // padding: '32px 32px 24px',
          lineHeight: '1.5'
        }
      }, [
        h('icon', {
          props: {
            type: 'md-close-circle',
            color: '#f5222d',
            size: '20'
          },
          style: {
            float: 'left',
            marginRight: '10px',
            marginTop: '2px'
          }
        }),
        h('span', {
          style: {
            fontSize: '16px',
            fontWeight: '500'
          }
        }, '错误提示'),
        h('div', {
          style: {
            marginTop: '16px',
            marginLeft: '31px',
            overflowWrap: 'break-word'
          }
        }, [
          h('span', '错误码:'),
          h('span', {
            style: {
              color: 'red'
            }
          }, response.code),
          h('br'),
          h('span', '错误信息:'),
          h('span', {
            style: {
              color: 'red'
            }
          }, response.message)
        ])
      ]);
    }
  });
}

```
#### [vue中cross-env的使用(React中同理)](https://juejin.im/post/5d78a11ee51d4561af16dd9f)
- cross-env

```
cross-env是跨平台设置和使用环境变量的脚本。
在大多数Windows命令行中在使用NODE_ENV = production设置环境变量时会报错。同样，Windows和Linux命令如何设置环境变量也有所不同。
使用cross-env可以设置在不同的平台上有相同的NODE_ENV参数。
```
- 安装

```
npm install cross-env --save-dev
```
- package.json

```
"scripts": {
	"serve": "cross-env NODE_ENV=development vue-cli-service serve --open",
	"build": "cross-env NODE_ENV=production vue-cli-service build"
}
复制代码
设置本地NODE_ENV值为development
设置线上NODE_ENV值为production

process为node的全局变量
适用场景
适用于本地线上环境有差异的场景，例如本地线上使用不用的开发域名则可以通过NODE_ENV来判断
if(process.env.NODE_ENV!='development'){
	//线上环境
}
```

