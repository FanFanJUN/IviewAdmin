import iView from 'iview';
/**
 * @description 对返回数据的处理
 * @author LC@1981824361
 * @date 2020-02-12
 * @export
 * @param {*} response
 * @returns {boolean}
 */

export function isRespSucc (response) {
 console.log(iView);
 if (!response || response.code !== 200) {
  return false;
 }
 return true;
}
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
