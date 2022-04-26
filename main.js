let timer =  0
function adjustColumnWidth(table) {
  // console.log(this.$refs['table'].$el) // table数据
  // table = this.$refs['table'].$el
  const colgroup = table.querySelector('colgroup')
  // console.log(colgroup) // 表头
  const colDefs = [...colgroup.querySelectorAll('col')] // 查找的是标签 每个表头为一个col标签
  // 每一个表头forEach
  colDefs.forEach((col) => {
    // col是每一个col标签(表头)
    const clsName = col.getAttribute('name') // Element.getAttribute() 返回元素上一个指定的属性值。如果指定的属性不存在，则返回  null 或 ""（空字符串）
    // console.log(clsName) // el-table_1_column_x 和 gutter  : col标签的name属性的值 不知道为什么我只有gutter:因为其他的还没渲染。加了定时器ok

    // 根据（每个）col上的name属性 查找table中的td和th 把它们放到数组里
    const cells = [
      ...table.querySelectorAll(`td.${clsName}`),
      ...table.querySelectorAll(`th.${clsName}`)
    ]

    // 忽略加了"no-fix"类的列
    // 如果class-name有no-fix 则跳出本次循环.
    // 这里我不知道no-fix是： 不被自适应列宽的元素
    if (cells[0]?.classList?.contains?.('no-fix')) {
      return
    }
    // console.log(cells.length);
    if (cells instanceof Array && cells.length > 1) {
      // 清空方法， (取消递归)
      /* eslint-disable-next-line no-func-assign */
      adjustColumnWidth = function (){
          // console.log('ok')
      };
      const widthList = cells.map((el) => {
        // 这里的el指的是根据col中的name 查找到的此项的所有具有同样name的td，th
        // console.log(el.querySelector('.cell')) // 根据同样name的td，th拿到的元素， 再往下查找.cell类
        // console.log(el.querySelector('.cell')?.scrollWidth); // 获取到宽 然后return出去
        el.querySelectorAll('.cell').forEach(v => {
          // console.log(v);
          // TODO 继续研究
          // v.setAttribute('style', 'white-space:nowrap !important')
          v.style.cssText += 'white-space:nowrap !important'
          v.style.cssText += 'width: auto !important'
          v.style.cssText += 'display: inline-block !important'
          // console.log(v.style.cssText);
        })
        return el.querySelector('.cell')?.scrollWidth || 0
      })

      // console.log(widthList); // [2335, 476, 476, 476, 476]
      const max = Math.max(...widthList)
      // console.log(max) // 查找最大值

      const padding = 32
      // console.log(clsName)
      // console.log(table.querySelectorAll(`col[name=${clsName}]`)); // 这是设置整个table的宽
      table.querySelectorAll(`col[name=${clsName}]`).forEach((el) => {
        // console.log(el)
        // console.log(max)
        el.setAttribute('width', max + padding) // 给这个元素设置宽
        el.style.cssText += `width: ${max + padding}px !important`
      })
    } else {
      // console.log(timer);
      timer = setTimeout(() => {
        adjustColumnWidth(table)
      }, 100);
    }

  })
}

const ssColumns = {
    inserted(el) {
      adjustColumnWidth(el)
    },
    componentUpdated(el) {
      adjustColumnWidth(el)
    }
}

const install = (Vue) => {
  Vue.directive('ssColumns', ssColumns)
}

export default {
  install
}
